/**
 * LUKE AI — Client-Side Multi-Threaded RAG Search Web Worker
 * Performs high-performance document parsing, semantic chunking, 
 * TF-IDF indexing, and Vector-Space Cosine-Similarity calculations in the background.
 */

// Global state for document indexing
let chunks = [];
let vocabulary = new Set();
let chunkTFs = []; // Term frequencies per chunk: array of maps { term: count }
let documentIDFs = {}; // Inverse document frequencies for terms: map { term: idf_score }

// Tokenize and clean text into stems
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove punctuation
    .split(/\s+/)
    .filter(word => word.length > 2); // filter out short stop-words
}

// Build TF-IDF indexing structures for the chunks
function indexDocument(rawText) {
  // Split into paragraphs with clean boundaries
  const paragraphs = rawText.split(/\n\s*\n|\n(?=[A-Z])/);
  chunks = [];
  
  let currentChunk = '';
  for (let p of paragraphs) {
    p = p.trim();
    if (!p) continue;
    // Build chunks of ~1000-1200 characters
    if ((currentChunk + ' ' + p).length < 1200) {
      currentChunk += (currentChunk ? ' ' : '') + p;
    } else {
      if (currentChunk) chunks.push(currentChunk);
      currentChunk = p;
    }
  }
  if (currentChunk) chunks.push(currentChunk);

  // Reset indices
  vocabulary = new Set();
  chunkTFs = [];
  documentIDFs = {};

  const docCount = chunks.length;
  if (docCount === 0) return;

  // Step 1: Calculate Term Frequency (TF) for each chunk
  chunks.forEach((chunk, index) => {
    const tokens = tokenize(chunk);
    const tfMap = {};
    
    tokens.forEach(token => {
      tfMap[token] = (tfMap[token] || 0) + 1;
      vocabulary.add(token);
    });

    chunkTFs.push({
      index: index,
      tf: tfMap,
      tokenCount: tokens.length
    });
  });

  // Step 2: Calculate Document Frequency (DF) and Inverse Document Frequency (IDF)
  vocabulary.forEach(term => {
    let docWithTermCount = 0;
    chunkTFs.forEach(c => {
      if (c.tf[term]) docWithTermCount++;
    });

    // Compute IDF (standard log formula with smoothing)
    documentIDFs[term] = Math.log(1 + (docCount / (1 + docWithTermCount)));
  });
}

// Compute Cosine Similarity between two vectors
// A vector is represented as a Map { term: weight }
function calculateCosineSimilarity(vec1, vec2) {
  let dotProduct = 0;
  let magnitude1 = 0;
  let magnitude2 = 0;

  // Combine unique terms of both vectors
  const allTerms = new Set([...vec1.keys(), ...vec2.keys()]);

  allTerms.forEach(term => {
    const val1 = vec1.get(term) || 0;
    const val2 = vec2.get(term) || 0;

    dotProduct += val1 * val2;
    magnitude1 += val1 * val1;
    magnitude2 += val2 * val2;
  });

  magnitude1 = Math.sqrt(magnitude1);
  magnitude2 = Math.sqrt(magnitude2);

  if (magnitude1 === 0 || magnitude2 === 0) return 0;
  return parseFloat((dotProduct / (magnitude1 * magnitude2)).toFixed(4));
}

// Query the index and rank chunks by Vector Cosine Similarity
function searchSimilarity(query, topK = 3) {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0 || chunks.length === 0) {
    // Return first chunks as baseline if query is empty
    return chunks.slice(0, topK).map((c, i) => ({
      chunk: c,
      score: 0.0,
      index: i,
      termsMatched: []
    }));
  }

  // Step 1: Build Query TF-IDF Vector
  const queryTF = {};
  queryTokens.forEach(token => {
    queryTF[token] = (queryTF[token] || 0) + 1;
  });

  const queryVector = new Map();
  queryTokens.forEach(token => {
    const tf = queryTF[token] / queryTokens.length;
    const idf = documentIDFs[token] || 0.1; // fallback low weight for out-of-vocabulary words
    queryVector.set(token, tf * idf);
  });

  // Step 2: Build Chunk TF-IDF Vectors & Compute Cosine Similarity
  const scoredChunks = chunkTFs.map(c => {
    const chunkVector = new Map();
    const termsMatched = [];

    // Only populate matching or relevant terms to save memory
    vocabulary.forEach(term => {
      if (c.tf[term]) {
        const tf = c.tf[term] / c.tokenCount;
        const idf = documentIDFs[term] || 0;
        const weight = tf * idf;
        chunkVector.set(term, weight);

        if (queryTF[term]) {
          termsMatched.push(term);
        }
      }
    });

    const similarity = calculateCosineSimilarity(queryVector, chunkVector);

    return {
      chunk: chunks[c.index],
      score: similarity,
      index: c.index,
      termsMatched: termsMatched
    };
  });

  // Step 3: Sort by Cosine Similarity score descending
  scoredChunks.sort((a, b) => b.score - a.score);

  return scoredChunks.slice(0, topK);
}

// Web Worker message dispatcher
self.onmessage = function(e) {
  const { action, payload } = e.data;

  try {
    if (action === 'index') {
      indexDocument(payload.text);
      self.postMessage({
        action: 'index_success',
        payload: {
          chunkCount: chunks.length,
          vocabSize: vocabulary.size
        }
      });
    } else if (action === 'search') {
      const topMatches = searchSimilarity(payload.query, payload.topK || 3);
      self.postMessage({
        action: 'search_success',
        payload: {
          query: payload.query,
          results: topMatches
        }
      });
    }
  } catch (err) {
    self.postMessage({
      action: 'error',
      payload: { message: err.message }
    });
  }
};

<div align="center">

# 🧠 LUKE AI — Active Intelligence

**A production-grade, zero-backend AI assistant with real-time streaming inference, agentic tool calling, client-side RAG, and voice I/O — built entirely with Vanilla JavaScript.**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-luke--ai-6C63FF?style=for-the-badge)](https://janstevedaniel.github.io/luke-ai)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/JANSTEVEDANIEL/luke-ai)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](./LICENSE)

---

![JavaScript](https://img.shields.io/badge/JavaScript-ES2024_Modules-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-Semantic_Markup-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom_Properties_+_Glassmorphism-1572B6?style=flat-square&logo=css3&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-LPU_Cloud_Inference-F55036?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+)
![Firebase](https://img.shields.io/badge/Firebase-Auth_+_Analytics-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![PDF.js](https://img.shields.io/badge/PDF.js-Mozilla-FF6600?style=flat-square&logo=mozilla&logoColor=white)
![Web Speech API](https://img.shields.io/badge/Web_Speech_API-STT_/_TTS-4285F4?style=flat-square&logo=google&logoColor=white)
![Wikipedia](https://img.shields.io/badge/Wikipedia-REST_API-000000?style=flat-square&logo=wikipedia&logoColor=white)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Why This Project Stands Out](#-why-this-project-stands-out)
- [Features](#-features)
- [System Architecture](#-system-architecture)
- [Available Models](#-available-models)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Security Notes](#-security-notes)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Author](#-author)

---

## 🎯 Overview

**LUKE AI** is a feature-rich, client-side AI assistant that delivers **sub-second streaming responses** powered by Groq's LPU (Language Processing Unit) inference engine. It combines agentic tool calling, a client-side RAG pipeline, full voice I/O, Firebase authentication, and a glassmorphism-based design system — all in a zero-dependency, zero-backend architecture that deploys to GitHub Pages.

> **No servers. No frameworks. No npm. Just pure, optimized Vanilla JavaScript.**

| Challenge | LUKE AI's Approach |
|---|---|
| Slow GPU inference (2–10s latency) | **Sub-second responses** via Groq LPU hardware with SSE streaming |
| Complex deployment (Docker, servers, DBs) | **Zero backend** — pure client-side, deploys instantly to GitHub Pages |
| Privacy concerns with file uploads | **Client-side PDF parsing** — files never leave the browser |
| No voice interaction in most AI UIs | **Full bidirectional voice pipeline** — STT input + TTS output |
| Expensive API costs | **Free tier** — 14,400 requests/day on Groq, zero hosting cost |

---

## 🏆 Why This Project Stands Out

This is not a wrapper around an API. It's a **deliberate engineering exercise** demonstrating production-grade frontend architecture decisions:

### 🔬 Engineering Decisions

| Decision | Rationale |
|---|---|
| **Vanilla JS over React/Vue** | Zero bundle size, instant cold starts, no hydration penalty. The entire app loads in <50KB. Demonstrates mastery of the platform itself. |
| **Client-Side RAG over Server-Side** | Privacy-first architecture. PDF text extraction via PDF.js + TF-based semantic chunking + top-K retrieval — all in the browser. No data ever leaves the client. |
| **SSE Streaming over WebSockets** | Server-Sent Events provide token-by-token rendering with native browser support, auto-reconnect, and simpler error handling — ideal for unidirectional LLM streams. |
| **Agentic Tool Calling over Hardcoded Chains** | JSON-based function calling with automatic execution and result synthesis. The LLM autonomously decides when to invoke tools — a true agentic pattern. |
| **localStorage over IndexedDB** | Synchronous access for thread persistence, telemetry history, and user preferences. Keeps the architecture simple while supporting full session continuity. |
| **Glassmorphism over Flat Design** | Layered `backdrop-filter` effects with CSS custom properties create a premium, depth-rich UI without any CSS framework dependency. |
| **Firebase Auth over Custom Auth** | Enterprise-grade Google OAuth 2.0 with `onAuthStateChanged` state management — zero backend auth code, seamless popup sign-in. |

---

## ✨ Features

### 🧠 Core AI Engine

| Feature | Description |
|---|---|
| **Streaming Inference** | Real-time Server-Sent Events (SSE) streaming from Groq LPU with token-by-token rendering. Watch responses materialize in real-time. |
| **Multi-Model Selection** | Hot-swap between **Llama 3.3 70B**, **Llama 3.1 8B**, **Mixtral 8x7B**, and **Gemma 2 9B** — each optimized for different speed/quality trade-offs. |
| **Agentic Tool Calling** | JSON-based function calling with automatic tool execution and result synthesis. The model decides autonomously when to search the web or check the time. |
| **Context Window Management** | Sliding window of the last 12 messages for optimal context utilization without exceeding token limits. |

### 🔐 Authentication & Access Control

| Feature | Description |
|---|---|
| **Firebase Google OAuth 2.0** | Seamless popup sign-in with personalized experience — profile photo, display name, unlimited access. |
| **Guest Mode with Metered Access** | 2 free conversations for unauthenticated users with a soft paywall prompting sign-in. |
| **Persistent Auth State** | Session management via Firebase `onAuthStateChanged` — no re-login required across page reloads. |
| **Personalized Welcome** | Time-of-day greeting (*Good morning, Good afternoon...*) with user's first name and Google profile photo. |

### 📄 Document Intelligence (RAG Pipeline)

| Feature | Description |
|---|---|
| **Multi-Threaded Indexing** | Document parsing and chunk indexing run in a background **Web Worker thread** (`rag-worker.js`) to guarantee the main thread stays at a buttery-smooth 60fps. |
| **Vector Space Cosine Similarity** | Implemented a custom client-side TF-IDF vectorizer and **Cosine Similarity search** to mathematically score and rank document chunks relative to user queries. |
| **Cosine & RAG Inspector Panel** | A dedicated visual overlay mapping all chunks, unique vocabulary, and real-time TF-IDF similarity vectors, with an **interactive sandbox query simulator**. |
| **Client-Side PDF Ingestion** | Local document parsing (`PDF.js`) where text extraction happens **locally inside the browser**—absolute privacy, files never touch a server. |
| **Semantic Chunking & Top-K** | Auto-segments text into optimized ~1200 character paragraph-level semantic blocks with overlap, injecting the Top-3 highest scoring chunks into system context. |

### 🎙️ Voice I/O Pipeline

| Feature | Description |
|---|---|
| **Speech-to-Text (STT)** | Web Speech API real-time transcription — click the mic or press `Ctrl+Shift+V` to speak your query. |
| **Text-to-Speech (TTS)** | Natural voice output with configurable speed slider (0.5x – 2.0x). |
| **Voice Selection** | Automatic preferred voice detection with Google UK English Male priority for natural narration. |
| **Auto-Speak Mode** | Toggle automatic response narration — every AI response is spoken aloud when enabled. |

### 🔍 Real-Time Web Search & Observability (Agentic)

| Feature | Description |
|---|---|
| **Chain-of-Thought Observability Trace** | Built a gorgeous, live-animated **observability terminal** inside assistant messages logging the exact multi-turn thoughts, tool parameter dispatches, API responses, and RAG vector calculations. |
| **Wikipedia Integration** | Live search with extract retrieval and related page suggestions — the model calls this tool autonomously when it needs current information. |
| **DateTime Tool** | Real-time local datetime awareness — the model knows what time and date it is for contextual responses. |
| **Tool Execution Pipeline** | Multi-turn tool calling with result synthesis: the model invokes tools, receives results, and generates a final grounded response. |

### 📊 Performance Engineering

| Feature | Description |
|---|---|
| **Live Telemetry Dashboard** | Real-time latency, TTFT (Time to First Token), and tokens/sec metrics displayed in the header after every response. |
| **Interactive SVG Charts** | Click the metrics badge to open a full analytics dashboard with latency and speed trend visualization (last 30 requests). |
| **Session Analytics** | Computed averages for latency, TTFT, and throughput across your session — track inference performance over time. |
| **Performance History** | localStorage-persisted telemetry data survives page reloads for continuous monitoring. |

### 💬 Message Actions

| Feature | Description |
|---|---|
| **One-Click Copy** | Copy any AI response to clipboard with a toast notification. |
| **Response Regeneration** | Re-run any prompt with fresh inference — get a different take on the same question. |
| **Quality Feedback** | Thumbs up/down on each response for RLHF-style feedback tracking. |
| **Response Pinning** | Bookmark important responses for quick reference within a conversation. |

### 💡 Smart Auto-Suggestions

| Feature | Description |
|---|---|
| **Context-Aware Follow-ups** | AI generates 3 relevant follow-up questions after each response, displayed as clickable chips. |
| **One-Click Prompting** | Click any suggestion chip to instantly send it as the next query — zero friction exploration. |

### 🔎 Conversation Search

| Feature | Description |
|---|---|
| **Full-Text Search** | Search across all conversations in the sidebar to find past discussions instantly. |
| **Real-Time Filtering** | Results update as you type — no submit button needed. |

### 🌐 Network Resilience

| Feature | Description |
|---|---|
| **Offline Detection** | Auto-detect network loss with a visual banner notification. |
| **Auto-Reconnect** | Seamless recovery when connection is restored — no manual refresh required. |

### 🎨 UI/UX Excellence

| Feature | Description |
|---|---|
| **Adaptive Dark/Light Theme** | CSS custom properties with smooth transitions — persisted via localStorage. |
| **Glassmorphism Design System** | Premium `backdrop-filter` UI with layered depth, gradients, and the Geist + JetBrains Mono typeface stack. |
| **Responsive Layout** | Mobile-first design with a collapsible sidebar that auto-closes on small screens. |
| **Keyboard Shortcuts** | Full hotkey support — `Ctrl+K`, `Ctrl+B`, `Ctrl+Shift+N`, and more ([see table below](#-keyboard-shortcuts)). |
| **Smooth Animations** | Landing page animated orbs, fade transitions, typing indicators, and pulse effects. |
| **Sandboxed Code Preview** | Run HTML/CSS/JS code blocks in an isolated `<iframe sandbox="allow-scripts">` — safe execution. |
| **Multi-Thread Management** | Create, switch, delete, and rename conversation threads with full localStorage persistence. |
| **Export to Markdown** | Download any conversation as a formatted `.md` file with metadata and role labels. |

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        USER INPUT LAYER                            │
│  ┌──────────┐    ┌──────────────┐    ┌─────────────────────────┐   │
│  │ 🎙️ Voice  │    │ ⌨️  Text/Chat │    │ 📄 PDF / TXT / MD / CSV │   │
│  │   (STT)   │    │   Textarea   │    │     File Upload         │   │
│  └─────┬─────┘    └──────┬───────┘    └────────────┬────────────┘   │
│        │                 │                         │                │
│        └────────────┬────┴─────────────────────────┘                │
│                     ▼                                               │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │              🖥️  FRONTEND ENGINE (Vanilla JS ES2024)         │   │
│  │  ┌────────────┐  ┌──────────────┐  ┌──────────────────────┐ │   │
│  │  │ SSE Stream │  │  Semantic    │  │  Thread Manager      │ │   │
│  │  │ Parser     │  │  Chunker     │  │  (localStorage)      │ │   │
│  │  └────────────┘  │  (TF/Top-K)  │  └──────────────────────┘ │   │
│  │                  └──────────────┘                            │   │
│  └────────────────────────┬─────────────────────────────────────┘   │
│                           │                                         │
└───────────────────────────┼─────────────────────────────────────────┘
                            │
              ┌─────────────▼──────────────┐
              │   🧠 GROQ LPU INFERENCE    │
              │   (Cloud API — SSE Stream)  │
              │                            │
              │  • Llama 3.3 70B Versatile │
              │  • Llama 3.1 8B Instant    │
              │  • Mixtral 8x7B 32K        │
              │  • Gemma 2 9B Instruct     │
              └──────┬──────────┬──────────┘
                     │          │
          ┌──────────▼──┐  ┌───▼───────────┐
          │ 📡 TOOL      │  │ 📊 TELEMETRY  │
          │ CALLING      │  │ ENGINE        │
          │              │  │               │
          │ • Wikipedia  │  │ • Latency     │
          │   Search API │  │ • TTFT        │
          │ • DateTime   │  │ • Tokens/sec  │
          │   Tool       │  │ • SVG Charts  │
          └──────────────┘  └───────────────┘
                     │
              ┌──────▼──────────────────────┐
              │   📤 RESPONSE RENDERING     │
              │                             │
              │  • Markdown → HTML          │
              │  • Code Syntax Highlighting │
              │  • Copy / Regenerate / Pin  │
              │  • Auto-Suggestions (×3)    │
              └──────────┬──────────────────┘
                         │
              ┌──────────▼──────────────────┐
              │   🔊 SPEECH OUTPUT (TTS)    │
              │   Web Speech API            │
              │   Configurable 0.5x – 2.0x  │
              └─────────────────────────────┘

  ╔═══════════════════════════════════════════════════════════════╗
  ║  SIDE SYSTEMS                                                ║
  ║                                                              ║
  ║  🔐 Firebase Auth ──── Google OAuth 2.0 Popup Sign-In       ║
  ║  📈 Firebase Analytics ── Session & Event Tracking           ║
  ║  💾 localStorage ──── Threads, Telemetry, Preferences       ║
  ║  📄 PDF.js ──── Client-Side Text Extraction (Privacy-First) ║
  ╚═══════════════════════════════════════════════════════════════╝
```

---

## 🤖 Available Models

| Model | ID | Speed | Quality | Context | Best For |
|---|---|---|---|---|---|
| **Llama 3.3 70B** | `llama-3.3-70b-versatile` | ⚡⚡ Fast | ⭐⭐⭐ Best | 128K | Complex reasoning, code generation |
| **Llama 3.1 8B** | `llama-3.1-8b-instant` | ⚡⚡⚡ Fastest | ⭐⭐ Good | 128K | Quick answers, low latency |
| **Mixtral 8x7B** | `mixtral-8x7b-32768` | ⚡⚡ Fast | ⭐⭐⭐ Great | 32K | Deep context, analysis |
| **Gemma 2 9B** | `gemma2-9b-it` | ⚡⚡ Fast | ⭐⭐ Good | 8K | Instruction following |

> All models run on Groq's free tier — **14,400 requests/day**, no credit card required.

---

## 📁 Project Structure

```
luke-ai/
├── index.html          # Semantic HTML5 markup — app shell, modals, landing page
│                       # Includes Firebase Auth UI, bento welcome grid,
│                       # architecture diagram modal, telemetry dashboard,
│                       # sandboxed code preview, and keyboard shortcuts modal
│
├── script.js           # Core application logic (~1,567 lines)
│                       # Firebase Auth + Analytics initialization
│                       # Groq SSE streaming engine with tool calling
│                       # Client-side RAG: PDF.js parsing + semantic chunking
│                       # Voice I/O pipeline (STT/TTS)
│                       # Thread management with localStorage persistence
│                       # Telemetry engine with SVG chart rendering
│                       # Message actions (copy, regenerate, pin, feedback)
│                       # Auto-suggestion generation
│                       # Network resilience (offline detection)
│
├── styles.css          # Design system (~46KB)
│                       # CSS custom properties for theming
│                       # Glassmorphism backdrop-filter effects
│                       # Responsive breakpoints (mobile-first)
│                       # Landing page orb animations
│                       # Bento grid layout system
│
├── LICENSE             # MIT License
└── README.md           # This file
```

> **Total codebase: 3 files.** No `node_modules`. No `package.json`. No build step. Pure web platform.

---

## 🚀 Getting Started

### Option 1: Use the Live Demo

Visit **[janstevedaniel.github.io/luke-ai](https://janstevedaniel.github.io/luke-ai)** — it works instantly with a pre-configured API key.

### Option 2: Run Locally

```bash
# Clone the repository
git clone https://github.com/JANSTEVEDANIEL/luke-ai.git
cd luke-ai

# Serve with any static file server (no build step needed)
npx serve .

# Or simply open directly in your browser
open index.html
```

### Option 3: Deploy Your Own

```bash
# 1. Fork this repository
# 2. Go to Settings → Pages
# 3. Source: Deploy from branch → main → / (root)
# 4. Your instance will be live at https://<username>.github.io/luke-ai
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Enter` | Send message to the active LLM |
| `Shift + Enter` | Insert a newline (multi-line input) |
| `Ctrl + K` | Toggle keyboard shortcuts panel |
| `Ctrl + B` | Toggle sidebar visibility |
| `Ctrl + Shift + N` | Create a new conversation thread |
| `Ctrl + Shift + V` | Activate voice input (STT) |
| `Ctrl + Shift + E` | Export current chat as Markdown |
| `Ctrl + Shift + L` | Clear current conversation |
| `Escape` | Dismiss any open modal or settings panel |

---

## 🔒 Security Notes

| Concern | Approach |
|---|---|
| **API Key Exposure** | The bundled Groq key is a **demo-only, rate-limited key** for the live demo. Users can configure their own key in settings. |
| **User Authentication** | Handled entirely by **Firebase Authentication** with Google OAuth 2.0 — no custom auth code, no password storage. |
| **Document Privacy** | PDF and file processing is **100% client-side** via PDF.js `FileReader`. No file data is ever uploaded to any server. |
| **Code Execution** | User-generated code previews run in a **sandboxed `<iframe>`** with `sandbox="allow-scripts"` — no DOM access to the parent. |
| **Data Persistence** | All conversation data, preferences, and telemetry are stored in **browser `localStorage`** — no external database, no server-side storage. |

---

## 🗺 Roadmap

- [x] Real-time SSE streaming responses
- [x] Multi-model selection (Llama, Mixtral, Gemma)
- [x] Agentic tool calling (Wikipedia, DateTime)
- [x] Client-side PDF/document RAG pipeline
- [x] Voice I/O (Speech-to-Text + Text-to-Speech)
- [x] Firebase Google OAuth 2.0 authentication
- [x] Guest mode with metered access
- [x] Performance telemetry dashboard with SVG charts
- [x] Message actions (copy, regenerate, pin, feedback)
- [x] Smart auto-suggestions
- [x] Conversation search
- [x] Network resilience (offline detection + auto-reconnect)
- [x] Multi-thread conversation management
- [x] Markdown export
- [x] Sandboxed code preview
- [x] Keyboard shortcuts
- [ ] Image input support (multimodal models)
- [ ] PWA support (install as native app)
- [ ] Plugin system for custom tool extensions

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

See [LICENSE](./LICENSE) for details.

---

## 👤 Author

<div align="center">

**R Jan Steve Daniel**

*AI Engineer & Full-Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-JANSTEVEDANIEL-181717?style=for-the-badge&logo=github)](https://github.com/JANSTEVEDANIEL)

---

<sub>Built with precision and purpose. Powered by Groq LPU inference. Hosted on GitHub Pages.</sub>

</div>

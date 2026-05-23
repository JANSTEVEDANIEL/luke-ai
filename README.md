# 🧠 LUKE AI — Intelligent Assistant

> **A blazing-fast, voice-enabled AI assistant powered by Groq LPU inference.**
> Developed by **R Jan Steve Daniel**.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-LUKE_AI-6C63FF?style=for-the-badge)](https://janstevedaniel.github.io/luke-ai/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Groq](https://img.shields.io/badge/Powered_by-Groq_LPU-F55036?style=for-the-badge)](https://groq.com)

---

![LUKE AI Banner](https://img.shields.io/badge/LUKE_AI-Intelligent_Assistant-6C63FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn6COPC90ZXh0Pjwvc3ZnPg==)

## 🎯 What is LUKE AI?

**LUKE AI** is a modern, open-source AI chatbot that delivers **instant responses** using Groq's ultra-fast LPU (Language Processing Unit) inference engine. Unlike traditional AI chatbots that rely on slow GPU inference, LUKE AI leverages Groq's hardware to provide **sub-second response times** — making conversations feel truly real-time.

It features a polished, professional UI inspired by leading AI products (Claude, ChatGPT), complete with **voice input**, **text-to-speech output**, **dark/light themes**, and a **fully mobile-responsive** design.

---

## 💡 The Problem It Solves

| Problem | LUKE AI Solution |
|---------|-----------------|
| Most AI chatbots are slow (2-10s response time) | **Sub-second responses** via Groq LPU hardware |
| Complex setup (servers, databases, Docker) | **Zero backend** — pure client-side, deploys to GitHub Pages |
| No voice interaction | **Built-in voice input (STT) + voice output (TTS)** |
| Expensive API costs | **Free tier** — 14,400 requests/day on Groq |
| Not mobile-friendly | **Fully responsive** design works on all devices |
| Privacy concerns with hosted solutions | **Your API key stays in your browser** — never sent to any server except Groq |

---

## 🚀 Features

- ⚡ **Blazing Fast** — Powered by Groq LPU, responses arrive in <500ms
- 🎙️ **Voice Input** — Click the mic button and speak naturally
- 🔊 **Voice Output** — AI speaks its responses aloud (toggle on/off)
- 🌗 **Dark / Light Theme** — Beautiful UI in both modes
- 📱 **Mobile Responsive** — Works perfectly on phones and tablets
- 🔐 **Privacy First** — API key stored only in your browser's localStorage
- 💬 **Smart Context** — Maintains conversation history for contextual replies
- 🎛️ **Configurable** — Choose models, voice speed, auto-speak settings
- 🪶 **Token Efficient** — Minimal system prompt + smart token budgeting
- 🆓 **100% Free** — No backend, no hosting costs, no API fees on free tier

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic structure with SEO optimization |
| **CSS3** | Custom design system, animations, responsive layout |
| **Vanilla JavaScript** | Zero dependencies, fast loading |
| **Groq API** | LLM inference (Llama 3.3 70B, Llama 3.1 8B, Mixtral, Gemma) |
| **Web Speech API** | Voice input (SpeechRecognition) + Voice output (SpeechSynthesis) |
| **GitHub Pages** | Free static hosting |

---

## 📦 Available Models & Limits (Groq Free Tier)

| Model | Speed | Quality | Tokens/min | Requests/min |
|-------|-------|---------|-----------|-------------|
| **Llama 3.1 8B Instant** | ⚡⚡⚡ Fastest | Good | ~6,000 | 30 |
| **Llama 3.3 70B Versatile** | ⚡⚡ Fast | Best | ~6,000 | 30 |
| **Mixtral 8x7B** | ⚡⚡ Fast | Great | ~5,000 | 30 |
| **Gemma 2 9B** | ⚡⚡ Fast | Good | ~15,000 | 30 |

### Daily Limits (Free Tier)
- **14,400 requests per day**
- **No credit card required**
- Rate limits reset every minute/day

> 💡 For most users, the free tier is more than enough for daily use. If you need higher limits, Groq offers paid plans.

---

## 🏁 Quick Start

### Option 1: Use the Live Demo
1. Visit the [live demo](https://janstevedaniel.github.io/luke-ai/)
2. Get a free API key from [console.groq.com](https://console.groq.com)
3. Paste your key in settings → Click **Connect**
4. Start chatting!

### Option 2: Run Locally
```bash
# Clone the repository
git clone https://github.com/JANSTEVEDANIEL/luke-ai.git
cd luke-ai

# Open in browser (no build step needed!)
open index.html
# or use any local server:
npx serve .
```

### Option 3: Deploy Your Own
```bash
# Fork this repo, then enable GitHub Pages:
# Settings → Pages → Source: Deploy from branch → main → / (root)
```

---

## 🎨 Design Philosophy

LUKE AI's interface is designed with these principles:

1. **Minimal Friction** — No sign-up, no accounts, just paste a key and go
2. **Premium Feel** — Smooth animations, gradient accents, clean typography (Inter font)
3. **Accessibility** — Proper ARIA labels, keyboard navigation, high contrast
4. **Responsive First** — Designed mobile-first, scales up to desktop
5. **Fast Loading** — Zero npm dependencies, <50KB total, instant load

---

## 🧑‍💻 Developer

**R Jan Steve Daniel**

I built LUKE AI to demonstrate that a powerful, production-quality AI assistant can be created using only client-side web technologies — no servers, no frameworks, no complexity. The goal was to make AI accessible to everyone, instantly, for free.

### How I Built It

1. **Identified the gap**: Most AI chatbots require backend servers, complex deployment, or paid subscriptions
2. **Chose Groq**: Their free API tier with LPU hardware provides the fastest inference available — perfect for real-time conversations
3. **Designed the UI**: Drew inspiration from Claude and ChatGPT's clean interfaces, then added voice capabilities and theme support
4. **Optimized for tokens**: Crafted a minimal system prompt and capped response tokens to maximize free-tier usage
5. **Deployed to GitHub Pages**: Zero-cost hosting, instant global availability

### Main Purpose

To create a **free, fast, beautiful AI assistant** that anyone can use or fork — proving that powerful AI tools don't need to be expensive or complicated.

---

## ⚠️ Limitations

- **Browser-dependent voice**: Speech recognition works best in Chrome/Edge. Safari has limited support.
- **No persistent memory**: Conversation history resets on page refresh (stored in-memory only for privacy)
- **Rate limits**: Free Groq tier has 30 req/min and 14,400 req/day caps
- **No file upload**: Currently text and voice input only
- **No image generation**: Text-only responses
- **API key required**: Users must bring their own Groq API key (free to obtain)

---

## 🗺️ Roadmap

- [ ] Streaming responses (word-by-word display)
- [ ] Conversation export (JSON/Markdown)
- [ ] Multiple conversation threads
- [ ] Code syntax highlighting
- [ ] Image input support (multimodal models)
- [ ] PWA support (install as app)

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">
  <strong>Built with 💜 by R Jan Steve Daniel</strong><br>
  <sub>Powered by Groq LPU · Hosted on GitHub Pages</sub>
</p>

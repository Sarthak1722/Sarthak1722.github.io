<div align="center">

# 🌌 Sarthak Fulzele — 3D Portfolio & Engineering Showcase

<p align="center">
  <b>A production-grade, immersive 3D developer portfolio & interactive memory journal.</b><br />
  Engineered with React, Three.js, React Three Fiber, Tailwind CSS, and Framer Motion — featuring real-time blog auto-sync with <a href="https://chronicle-aiso.onrender.com/">Chronicle Engine</a>.
</p>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Portfolio-Sarthak.dev-8B5CF6?style=for-the-badge&logoColor=white)](https://sarthak1722.github.io)
[![Repository](https://img.shields.io/badge/GitHub-Sarthak1722.github.io-181717?style=for-the-badge&logo=github)](https://github.com/Sarthak1722/Sarthak1722.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue.style=for-the-badge)](LICENSE)

<br />

<!-- Technology Badges -->
p>
  <img src="https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white" alt="Go" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white" alt="Kubernetes" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" alt="Redis" />
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white" alt="AWS" />
</p>

</div>

---

## 📸 Portfolio Preview & UI Gallery

<div align="center">

| 3D Interactive Hero Experience | Featured Distributed Systems Projects |
| :---: | :---: |
| ![Hero 3D Showcase](public/assets/spotlight1.png) <br /> *3D Floating Canvas with GLTF Models & Audio Soundscapes* | ![Featured Projects](public/assets/spotlight2.png) <br /> *Interactive 3D Laptop Preview & Video Spotlights* |

| Beyond Code Memory Journal | Auto-Synced Chronicle Blog Engine |
| :---: | :---: |
| ![Memory Scrapbook](public/assets/spotlight3.png) <br /> *IIT Kharagpur Academic & Neoclassical Piano Studio* | ![Chronicle Blog Sync](public/assets/spotlight4.png) <br /> *Live Auto-Synced Articles from Chronicle API* |

</div>

---

## ✨ Key Features & Architectural Highlights

- **🛸 3D Interactive Hero Canvas**: Powered by `@react-three/fiber` and `@react-three/drei`, rendering dynamic GLTF developer models, ambient lighting, and interactive camera controls.
- **💻 Interactive 3D Project Showcase**: Real-time project previews rendered inside 3D laptop screens with synchronized MP4 video recordings and direct GitHub/Live links.
- **✍️ Real-Time Chronicle Blog Auto-Sync**: Custom React hook (`useChronicleBlogs`) that fetches live articles directly from the [Chronicle Monolith API](https://chronicle-aiso.onrender.com/api/posts) with automatic cover image resolution and fallback handling.
- **🎹 Neoclassical Piano & Harmonies Studio**: Embedded video player featuring 9 Neoclassical & Acoustic piano improvisations recorded by Sarthak.
- **🎓 Academia & Research Journal**: Highlights IIT Kharagpur Dual Degree (B.Tech + M.Tech), Youngest Presenter Title at the N0ET-2024 International Conference (IIT Dhanbad), and Deakin University Medical VQA research.
- **⚡ Glassmorphic Dark UI & Fluid Animations**: Styled with Tailwind CSS, custom backdrop filters, and Framer Motion page transitions.
- **📩 Contact Form Integration**: Integrated with EmailJS for direct inbox messaging with status notifications and responsive touch target optimization.

---

## 🛠️ Technology Stack

### Frontend & 3D Graphics
- **Framework**: React 18, Vite
- **3D Graphics & Canvas**: Three.js, `@react-three/fiber`, `@react-three/drei`, GLTF JSX
- **Styling & Motion**: Tailwind CSS, Framer Motion, Vanilla CSS Design System
- **Icons & Assets**: Lucide React, Custom SVG Icons

### Backend & Cloud Ecosystem (Projects Featured)
- **Languages**: Go, Python, JavaScript / Node.js
- **Databases & Cache**: PostgreSQL, MongoDB, Redis, Elasticsearch
- **Messaging & Async Queues**: RabbitMQ, Socket.io
- **Cloud & DevOps**: AWS S3, Docker, Kubernetes, Render, Vercel

---

## 🚀 Getting Started Locally

Follow these steps to set up and run the portfolio website on your local machine:

### Prerequisites
- **Node.js** (`>= 18.0.0`)
- **npm** (`>= 9.0.0`)

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Sarthak1722/Sarthak1722.github.io.git
   cd Sarthak1722.github.io
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory and configure your EmailJS credentials:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Launch Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📂 Repository Structure

```
Sarthak1722.github.io/
├── public/
│   ├── assets/               # SVG icons, company logos & spotlights
│   ├── images/memories/      # Scrapbook photos, piano covers & fallbacks
│   ├── models/               # Transformed 3D GLTF models
│   └── textures/project/     # Project MP4 demo videos
├── src/
│   ├── assets/               # Component visual assets
│   ├── components/           # Reusable UI (MemoryAlbum, PianoPlayer, HeroCamera, etc.)
│   ├── constants/            # Projects, work experience, & memory chapter datasets
│   ├── hooks/                # Custom React hooks (useChronicleBlogs)
│   ├── sections/             # Core page sections (Hero, Projects, BeyondCode, Contact)
│   ├── App.jsx               # Application root
│   ├── index.css             # Design tokens & glassmorphic utilities
│   └── main.jsx              # DOM entrypoint
├── index.html                # Main HTML document & meta tags
├── package.json              # Project dependencies & scripts
└── vite.config.js            # Vite build configuration
```

---

## 👨‍💻 About Sarthak Fulzele

- 🎓 **Dual Degree (B.Tech + M.Tech)** in Mechanical Engineering with AI/ML Focus from **IIT Kharagpur** (2021 – 2026).
- 🏆 **Youngest Presenter Award** at Net-Zero Emissions Technology (**N0ET-2024**) International Conference, IIT Dhanbad.
- 🔬 **AI Research & Engineering**: Medical VQA multimodal LLaVA pipelines at Deakin University & voice chatbot architecture at Qurve-AI.
- 🎹 **Harmonium & Piano**: NCA Level 6 Distinction in Harmonium & Neoclassical Piano Improvisation.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for details.

<div align="center">
  <sub>Built with care & precision by <a href="https://github.com/Sarthak1722">Sarthak Fulzele</a> © 2026</sub>
</div>

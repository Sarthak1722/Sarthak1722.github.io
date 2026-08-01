export const navLinks = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

export const myProjects = [
  {
    title: 'PrepWise - AI Mock Interview Platform',
    desc: 'PrepWise is an AI-powered mock interview platform that allows candidates to practice role-specific technical interviews. It captures transcripts, conducts real-time speech-to-text, and delivers structured performance feedback.',
    subdesc:
      'Built as a complete interview practice portal with Next.js, React, TypeScript, Google Gemini AI, Vapi Voice APIs, and Firestore to enable lifelike speech interactions and immediate evaluation reports.',
    href: 'https://github.com/Sarthak',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/images/next.webp',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Google Gemini',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Jamify - Real-Time Music & Chat Platform',
    desc: 'Jamify is a real-time collaborative music platform featuring shared listening rooms with synchronized audio playback. It handles secure user accounts, chat rooms, typing indicators, and room activity state.',
    subdesc:
      'Developed with React, Redux Toolkit, Node.js, Express.js, MongoDB, and Socket.io to manage synchronized controls (play, pause, seek) and live web socket events with low latency.',
    href: 'https://github.com/Sarthak',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Express.js',
        path: '/images/express.webp',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/images/mongo.webp',
      },
      {
        id: 4,
        name: 'Socket.io',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Distributed Ingestion Blogging Service',
    desc: 'Blogging Service is a high-throughput microservices blog engine designed for asynchronous content publishing, real-time search indexing, and low-latency discovery across thousands of posts.',
    subdesc:
      'Engineered in Go, Kafka, and Elasticsearch, containerized with Docker, and deployed on Kubernetes. Uses an async queue to decouple blog writes from search indexing, keeping the API responsive under load.',
    href: 'https://github.com/Sarthak',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Go',
        path: '/images/node.webp',
      },
      {
        id: 2,
        name: 'Docker',
        path: '/assets/company/meta.png',
      },
      {
        id: 3,
        name: 'Git',
        path: '/images/logos/git.svg',
      },
      {
        id: 4,
        name: 'Kubernetes',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Open-Soft AI Movie Platform',
    desc: 'An AI-powered movie discovery and recommendation platform featuring semantic search query recommendations and administrative moderation dashboards.',
    subdesc:
      'Built with the MERN stack (MongoDB, Express, React, Node.js) and integrated Hugging Face All MiniLM L6 NLP models to enable high-efficiency vector semantic search suggestions.',
    href: 'https://github.com/Sarthak',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/images/node.webp',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/images/mongo.webp',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
];

export const experiences = [
  {
    title: "AI-Engineer Intern",
    company_name: "Qurve-AI",
    icon: "/assets/company/meta.png",
    iconBg: "#383E56",
    date: "Jan 2025 – Apr 2025",
    points: [
      "Built a real-time voice chatbot by integrating AssemblyAI, GPT-4o-mini, and ElevenLabs for natural, human-like dialogue.",
      "Developed and containerized Flask backend APIs, deployed them on AWS EC2, and optimized async I/O with multiprocessing.",
      "Implemented interruption handling and Google Calendar automation to support fluid turn-taking and scheduling.",
      "Collaborated on system architecture improvements to enhance reliability, scalability, and low-latency system performance.",
    ],
  },
  {
    title: "Research Internship",
    company_name: "Deakin University",
    icon: "/assets/company/starbucks.png",
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Dec 2025",
    points: [
      "Researched multimodal LLMs for disease diagnosis, clinical decision support, and scalable real-world clinical deployment.",
      "Preprocessed 150k MedTrinity image-text pairs with Python, OpenCV, Pandas, NumPy, and NLTK for LLaVA fine-tuning pipelines.",
      "Implemented LoRA and projector tuning on LLaVA, improving accuracy and F1-score on medical VQA benchmarks.",
      "Built evaluation and Streamlit chatbot pipelines with clinician feedback, automated metrics, and clinical outputs.",
    ],
  },
  {
    title: "Core Organising Team Member",
    company_name: "Spring Fest IIT Kharagpur",
    icon: "/assets/company/shopify.png",
    iconBg: "#383E56",
    date: "Aug 2022 - Jun 2023",
    points: [
      "Led sponsorship campaigns across Mumbai and Pune, securing strong funding growth and surpassing the previous fest edition.",
      "Expanded the fest through International and Indie Carnivals, attracting artists and performers from over fifteen countries.",
      "Co-led a team of 46 team members, extending the outreach to 850+ colleges & co-managing publicity campaigns.",
      "Conducted regional prelims, registering 900+ participants & recording 150% registration growth.",
    ],
  },
  {
    title: "Social & Cultural Secretary",
    company_name: "MMM Hall of Residence, IIT Kharagpur",
    icon: "/assets/company/tesla.png",
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Apr 2023",
    points: [
      "Organized and managed large-scale cultural events that boosted community engagement and resident participation.",
      "Planned Talent Hunt, cultural shows, and inter-hall contests, ensuring smooth execution and memorable experiences.",
      "Coordinated with student bodies and external vendors to manage event logistics, budgeting, and marketing.",
    ],
  },
];

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

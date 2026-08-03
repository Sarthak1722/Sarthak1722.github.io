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
    name: "Beyond Code",
    link: "#beyond-code",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

export const myProjects = [
  {
    title: 'Jamify - Real-Time Music & Chat Platform',
    desc: 'Jamify is a real-time collaborative music platform featuring shared listening rooms with synchronized audio playback. It handles secure user accounts, chat rooms, typing indicators, and room activity state.',
    subdesc:
      'Developed with React, Redux Toolkit, Node.js, Express.js, MongoDB, and Socket.io to manage synchronized controls (play, pause, seek) and live web socket events with low latency.',
    href: 'https://jamify-nly7.onrender.com',
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

export const memoryChapters = [
  {
    id: "academia",
    title: "Academia & Foundations",
    icon: "🏛️",
    badge: "IIT Kharagpur",
    memories: [
      {
        id: "iit-kgp",
        title: "Bachelors & Masters of Technology, IIT Kharagpur",
        period: "2021 – 2026",
        location: "IIT Kharagpur, India",
        badge: "Tier-1 Premier Institution",
        image: "/images/memories/iitkgp.jpg",
        imageCaption: "IIT KGP Memories",
        narrative:
          "My time at IIT Kharagpur has been a transformative 5-year journey combining rigorous engineering with cutting-edge AI research. From mastering Mechanical Engineering fundamentals to building neural network pipelines for flexible manufacturing and medical VQA models, IIT Kharagpur shaped my problem-solving mindset and technical discipline.",
        highlights: [
          "Dual Degree (B.Tech + M.Tech) in Mechanical Engineering with AI/ML Focus.",
          "Bachelor's & Master's Thesis research under Prof. V Mahendra Reddy & Prof. Sankha Deb.",
          "Active involvement in hall activities, technical clubs, and campus leadership.",
        ],
      },
      {
        // High School & Schooling
        id: "high-school",
        title: "Vidya Vihar Convent & BJM Carmel Academy",
        period: "2009 – 2021",
        location: "Chandrapur, Maharashtra",
        badge: "District Rank 5 & Top 1% National",
        image: "/images/memories/school.jpeg",
        imageCaption: "School Days & Academic Honors",
        narrative:
          "My academic roots were formed in Chandrapur. Securing District Rank 5 and Maharashtra Rank 123 in the ICAD Junior Science Exam laid the foundation for my passion for mathematics and physical sciences. Scoring in the top 1% nationally in entrance exams paved the way to IIT Kharagpur.",
        highlights: [
          "XII Science at Vidya Vihar Convent High School (2019 - 2021).",
          "X Board Education at BJM Carmel Academy (2009 - 2019).",
          "Secured District Rank 5 in ICAD General Science Exam.",
        ],
      },
    ],
  },
  {
    id: "conference",
    title: "Research & Conference Spotlight",
    icon: "🎤",
    badge: "N0ET-2024 Award",
    memories: [
      {
        id: "noet-2024",
        title: "Youngest Presenter at N0ET-2024 Conference",
        period: "Dec 2024",
        location: "IIT (ISM) Dhanbad, India",
        badge: "Youngest Presenter Title 🏆",
        image: "/images/memories/conference.jpg",
        imageCaption: "Presenting Chemical Kinetic Research at IIT (ISM) Dhanbad",
        narrative:
          "Honored with the 'Youngest Presenter' title at the Net-Zero Emissions Technology (N0ET-2024) International Conference at IIT (ISM) Dhanbad. I presented my research under Prof. V Mahendra Reddy on chemical kinetic modeling of Ammonia ($NH_3$) and Hydrogen Peroxide ($H_2O_2$) micro-mixes, analyzing 30,000+ Ansys Chemkin simulations with Artificial Neural Networks (ANN).",
        highlights: [
          "Simulated 30,000+ flame stability & emission conditions for zero-emission fuels.",
          "Trained ReLU/Adam ANN models for accurate NOx emission predictions.",
          "Awarded Youngest Presenter at N0ET-2024 Conference, IIT Dhanbad.",
        ],
        hasAbstractModal: true,
        abstract:
          "Investigated ammonia combustion stability using Ansys Chemkin simulations & ANN modeling for emission analysis. Generated a large dataset of 30,000+ Ansys Chemkin simulations on NH3-H2O2 mixtures for flame stability & emission analysis. Applied regression analysis and heatmap visualizations to map effects of preheat temperature, equivalence ratio, and NOx outputs. Trained an ANN using ReLU and Adam to deliver accurate predictions with strong generalization across unseen test datasets.",
        documents: [
          { label: "Research Report", icon: "📄", href: "/docs/BTP1 Report Sarthak_F.pdf" },
          { label: "Certificate",     icon: "🏆", href: "/docs/certificate.jpeg" },
          { label: "Letter of Recommendation", icon: "📜", href: "/docs/Sarthak LOR.pdf" },
        ],
      },
    ],
  },
  {
    id: "music",
    title: "Harmonies & Piano",
    icon: "🎹",
    badge: "NCA Level 6 Distinction",
    memories: [
      {
        id: "harmonium-cert",
        title: "Level 6 Harmonium & Piano Certification",
        period: "NCA, IIT Kharagpur",
        location: "IIT Kharagpur",
        badge: "Excellent Grade Distinction 🏅",
        image: "/images/memories/harmonium.webp",
        imageCaption: "Practicing Melodies & Acoustic Performances",
        narrative:
          "Music has always been my creative sanctuary. I earned a Level 6 Certification in Harmonium & Keyboards with an 'Excellent Grade' from the National Centre of Excellence in Arts (NCA), IIT Kharagpur. I love composing neoclassical piano improvisations and playing acoustic covers of classical & modern pieces.",
        highlights: [
          "Level 6 Certification in Harmonium proficiency at NCA, IIT Kharagpur.",
          "Achieved 'Excellent Grade' in musical theory and performance.",
          "Passionate about neoclassical piano improvisations and sound synthesis.",
        ],
        hasAudioPlayer: true,
      },
    ],
  },
  {
    id: "cultural",
    title: "Stage, Cultural & Leadership",
    icon: "🎭",
    badge: "Gold Medal Winner",
    memories: [
      {
        id: "nukkad-gold",
        title: "Nukkad Naatak Gold & Illumination Silver",
        period: "2022 – 2023",
        location: "MMM Hall of Residence, IIT Kharagpur",
        badge: "Gold Among 23 Halls 🥇",
        image: "/images/memories/nukkad.jpg",
        imageCaption: "Inter-Hall Championship Dramatic Performance",
        narrative:
          "Represented Pandit Madan Mohan Malaviya Hall of Residence in the Inter-Hall General Championship. Achieved Gold Medal in Nukkad Naatak (Street Play) among 23 halls for powerful theatrical performances, and Silver Medal in Illumination 2022. Served as Social & Cultural Secretary organizing hall-wide talent hunts and festival showcases.",
        highlights: [
          "Gold Medalist in Inter-Hall General Championship Nukkad Naatak.",
          "Silver Medalist in Illumination 2022 among 23 halls.",
          "Elected Social & Cultural Secretary managing hall cultural events.",
        ],
      },
      {
        id: "spring-fest",
        title: "Core Organising Team Member - Spring Fest",
        period: "Aug 2022 – Jun 2023",
        location: "IIT Kharagpur",
        badge: "Led 46 Team Members",
        image: "/images/memories/springfest.webp",
        imageCaption: "Spring Fest International Carnival & Prelims",
        narrative:
          "Core organizing leader for Spring Fest, IIT Kharagpur's annual international cultural festival. Co-led a team of 46 members, extended outreach across 850+ colleges nationwide, conducted regional preliminary rounds with 900+ participants, and introduced International Carnivals featuring performers from 15+ countries.",
        highlights: [
          "Led sponsorship campaigns across Mumbai and Pune surpassing previous records.",
          "Expanded outreach to 850+ colleges with 250+ published articles.",
          "Organized prelims recording 150% registration growth.",
        ],
      },
    ],
  },
  {
    id: "chronicles",
    title: "Developer Chronicles & Project Blogs",
    icon: "📝",
    badge: "Build Stories",
    memories: [
      {
        id: "jamify-blog",
        title: "Jamify: Architecting Real-Time Audio Sync & Socket.io",
        period: "May 2025 – Jul 2025",
        location: "Full-Stack Project",
        badge: "React, Socket.io, Node.js",
        image: "/images/memories/jamify.webp",
        imageCaption: "Collaborative Music Platform & Room Sync",
        narrative:
          "Jamify is a real-time collaborative music platform featuring shared listening rooms with synchronized audio playback. I engineered NTP-inspired ping-pong clock alignment and state drift correction algorithms so room members stay synced within sub-100ms playhead tolerance.",
        highlights: [
          "Synchronized play/pause/seek controls with Socket.io web sockets.",
          "Built JWT authentication, typing indicators, and room queues.",
          "State drift correction keeping clients in lock-step playback.",
        ],
      },
      {
        id: "prepwise-blog",
        title: "PrepWise: AI Mock Interviewer with Gemini & Vapi",
        period: "Jan 2026 – Mar 2026",
        location: "AI Platform",
        badge: "Next.js, Google Gemini, Vapi",
        image: "/images/memories/prepwise.webp",
        imageCaption: "Conversational AI Technical Interview Dashboard",
        narrative:
          "PrepWise delivers realistic technical mock interviews with instant speech-to-text feedback. Built with Next.js, Google Gemini AI, Vapi Voice APIs, and Firestore to enable lifelike turn-taking, automated score breakdown, and custom candidate evaluation reports.",
        highlights: [
          "Integrated Vapi Voice & Gemini AI for turn-taking under 400ms.",
          "Designed dynamic performance feedback dashboards & score cards.",
          "Firestore data models for candidate history & drill-down analytics.",
        ],
      },
    ],
  },
];

export const pianoTracks = [
  {
    id: 1,
    title: "River Flows in You",
    composer: "Yiruma (Covered by Sarthak)",
    duration: "Piano Video",
    genre: "Neoclassical",
    videoSrc: "/images/memories/river_flows_in_you.mp4",
  },
  {
    id: 2,
    title: "Raabta",
    composer: "Pritam (Covered by Sarthak)",
    duration: "Piano Video",
    genre: "Romance Solo",
    videoSrc: "/images/memories/raabta.mp4",
  },
  {
    id: 3,
    title: "Blue (Piano Cover)",
    composer: "Yung Kai (Covered by Sarthak)",
    duration: "Piano Video",
    genre: "Modern Solo",
    videoSrc: "/images/memories/blue.mp4",
  },
  {
    id: 4,
    title: "Student of the Year Wedding Theme",
    composer: "Vishal-Shekhar (Covered by Sarthak)",
    duration: "Piano Video",
    genre: "Festive Piano",
    videoSrc: "/images/memories/soty_wedding.mp4",
  },
  {
    id: 5,
    title: "Saudebaazi",
    composer: "Pritam (Covered by Sarthak)",
    duration: "Piano Video",
    genre: "Melodic Acoustic",
    videoSrc: "/images/memories/saudebaazi.mp4",
  },
  {
    id: 6,
    title: "Kho Gaye Hum Kahan",
    composer: "Jasleen Royal (Covered by Sarthak)",
    duration: "Piano Video",
    genre: "Acoustic Melody",
    videoSrc: "/images/memories/kho_gaye_hum_kahan.mp4",
  },
  {
    id: 7,
    title: "Phir Kabhi (MS Dhoni BGM)",
    composer: "Amaal Mallik (Covered by Sarthak)",
    duration: "Piano Video",
    genre: "Bollywood Piano",
    videoSrc: "/images/memories/phir_kabhi.mp4",
  },
  {
    id: 8,
    title: "Interstellar Main Theme",
    composer: "Hans Zimmer (Covered by Sarthak)",
    duration: "Piano Video",
    genre: "Cinematic Solo",
    videoSrc: "/images/memories/intersteller.mp4",
  },
  {
    id: 9,
    title: "Shinchan Nostalgic BGM",
    composer: "Shuntaro Sengoku (Covered by Sarthak)",
    duration: "Piano Video",
    genre: "Anime BGM",
    videoSrc: "/images/memories/shinchan_bgm.mp4",
  },

];

export const beyondCodeStats = [
  { label: "IIT Kharagpur Degree", value: "B.Tech + M.Tech" },
  { label: "N0ET-2024 Conference Title", value: "Youngest Presenter 🏆" },
  { label: "Harmonium Proficiency", value: "Level 6 (NCA)" },
  { label: "Inter-Hall Drama", value: "Gold Medal 🥇" },
];




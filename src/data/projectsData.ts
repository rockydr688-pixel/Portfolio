export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Backend Architecture" | "Systems & Algorithms" | "Full-Stack Application" | "Academic Engineering";
  problem: string;
  solution: string;
  overview: string;
  keyFeatures: string[];
  technologies: string[];
  myContribution: string;
  architectureDetails?: string;
  challengesAndLessons?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  image: string;
  isVerified: boolean;
}

export const projectsData: Project[] = [
  {
    id: "skillswap-peer-exchange",
    title: "SkillSwap — Peer-to-Peer Skill Exchange Platform",
    tagline: "Collaborative learning platform with WebRTC real-time peer communications and intelligent skill matching.",
    category: "Full-Stack Application",
    problem:
      "Conventional e-learning platforms are typically one-directional, monetized, and lack direct, interactive reciprocal peer knowledge exchange where learners can barter skills directly.",
    solution:
      "Engineered a web-based decentralized skill exchange portal that connects learners based on mutual learning goals and enables real-time peer-to-peer communication via WebRTC data and media channels.",
    overview:
      "SkillSwap empowers users to share knowledge in a barter format. Built with modern JavaScript, CSS, HTML, and RESTful APIs, the platform incorporates WebRTC for ultra-low latency real-time video and text collaboration directly in the browser.",
    keyFeatures: [
      "Integrated WebRTC protocols enabling direct browser-to-browser peer communication without third-party plugins",
      "Dynamic user skill matching algorithm pairing complementary learning interests",
      "Interactive, responsive user interface ensuring smooth navigation across desktop and mobile devices",
      "RESTful API endpoints managing user profiles, session matchmaking, and skill categorization"
    ],
    technologies: ["JavaScript", "WebRTC", "REST APIs", "HTML5", "CSS3", "Git"],
    myContribution:
      "Architected the frontend interaction layer, established the WebRTC signaling and peer connection lifecycle, and engineered the API contracts for user matchmaking.",
    architectureDetails:
      "Peer-to-peer WebRTC mesh topology supplemented by REST API signaling server for connection initiation, STUN/ICE negotiation, and session metadata storage.",
    challengesAndLessons:
      "Mastering ICE candidate gathering, NAT traversal challenges with WebRTC, and maintaining predictable state across asynchronous peer connections.",
    githubUrl: "https://github.com/rockydr688-pixel",
    liveDemoUrl: undefined,
    image: "/images/projects/project-backend.jpg",
    isVerified: true
  },
  {
    id: "wardrobe-ai-management",
    title: "Wardrobe AI — Smart Wardrobe Management System",
    tagline: "Intelligent digital closet catalog with AI-driven outfit recommendation algorithms and clothing reuse tracking.",
    category: "Full-Stack Application",
    problem:
      "Managing personal clothing inventories leads to decision fatigue, underutilized garments, and inefficient outfit planning without an organized digital catalog.",
    solution:
      "Developed a responsive digital wardrobe platform that catalogs clothing items, categorizes apparel by attributes, and utilizes AI recommendation logic to generate optimized outfit combinations.",
    overview:
      "Wardrobe AI is a smart lifestyle web application engineered to digitize clothing inventories. Users upload and tag apparel items, while recommendation heuristics match tops, bottoms, and accessories according to occasion and user preference.",
    keyFeatures: [
      "Digital wardrobe cataloging with category filters (formal, casual, seasonal, color palettes)",
      "AI-powered recommendation engine calculating complementary outfit combinations based on available wardrobe items",
      "Streamlined outfit planning reducing daily decision fatigue and encouraging sustainable clothing reuse",
      "Accessible, highly responsive user interface crafted with semantic HTML, CSS, and modular JavaScript"
    ],
    technologies: ["JavaScript", "AI Integration", "HTML5", "CSS3", "REST APIs", "Git"],
    myContribution:
      "Designed and coded the responsive UI layout, structured the clothing item data schemas, and integrated outfit recommendation algorithms based on wardrobe properties.",
    architectureDetails:
      "Client-side state management handling inventory filtering, paired with backend API services handling recommendation scoring and metadata persistence.",
    challengesAndLessons:
      "Structuring multi-attribute filtering algorithms for complex garment types, optimizing image thumbnail rendering, and designing intuitive user interactions.",
    githubUrl: "https://github.com/rockydr688-pixel",
    liveDemoUrl: undefined,
    image: "/images/projects/project-systems.jpg",
    isVerified: true
  }
];

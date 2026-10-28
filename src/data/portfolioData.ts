export interface PersonalInfo {
  name: string;
  fullName: string;
  role: string;
  location: string;
  phone: string;
  shortBio: string;
  aboutBio: string[];
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    cgpa: string;
    status: string;
    note?: string;
    history: {
      institution: string;
      level: string;
      score: string;
      year: string;
      location: string;
    }[];
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
  resume: {
    available: boolean;
    filePath: string;
    lastUpdated?: string;
  };
  assets: {
    profilePhoto: string;
    heroBackground?: string;
  };
  spokenLanguages: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    badge?: string;
    description?: string;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuerOrEvent: string;
  date?: string;
  description?: string;
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillGroup[];
  achievements: {
    academic: AchievementItem[];
    certifications: AchievementItem[];
    hackathons: AchievementItem[];
    technicalAccomplishments: AchievementItem[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "RAKESH D.R",
    fullName: "RAKESH D.R",
    role: "Software Developer",
    location: "Tumakuru, Karnataka, India",
    phone: "+91 6360998067",
    shortBio:
      "Information Science Engineering student at Siddaganga Institute of Technology. Motivated software developer with a strong foundation in C, C++, Java, Spring Boot, databases, and problem-solving.",
    aboutBio: [
      "I am an Information Science Engineering undergraduate at Siddaganga Institute of Technology, Tumakuru. My engineering philosophy is built around a rigorous foundation in programming, core databases, and algorithmic problem-solving.",
      "With deep working proficiency in C, C++, and Java, I focus on memory efficiency, deterministic logic, and solid object-oriented software engineering.",
      "On the application layer, I design and build full-stack and backend architectures using Spring Boot, REST APIs, WebRTC for real-time peer communications, and relational database systems such as MySQL and Oracle.",
      "Passionate about engineering reliable, scalable software solutions, I am driven to continually expand my technical capabilities across distributed systems and modern software architecture."
    ],
    education: {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Information Science and Engineering",
      institution: "Siddaganga Institute of Technology",
      location: "Tumakuru, Karnataka, India",
      cgpa: "7.5 CGPA",
      status: "Undergraduate Student",
      note: "Rigorous coursework in Data Structures & Algorithms (DSA), DBMS, Operating Systems, Computer Networks, and OOPs with Java.",
      history: [
        {
          institution: "Varin Pre University College",
          level: "PUC (PCMB)",
          score: "89.6%",
          year: "2024",
          location: "Tumakuru, Karnataka"
        },
        {
          institution: "Bishop Sargant School",
          level: "Class X (ICSE)",
          score: "72%",
          year: "2022",
          location: "Tumakuru, Karnataka"
        }
      ]
    },
    socialLinks: {
      github: "https://github.com/rockydr688-pixel",
      linkedin: "https://www.linkedin.com/in/rakesh-d-r-ab2566393",
      email: "mailto:rakeshdr.1si24is075@gmail.com",
      phone: "tel:+916360998067"
    },
    resume: {
      available: true,
      filePath: "/resume.pdf",
      lastUpdated: "Verified from Resume PDF"
    },
    assets: {
      profilePhoto: "/images/profile.jpg",
      heroBackground: "/images/hero-bg.jpg"
    },
    spokenLanguages: ["English", "Kannada", "Hindi", "Telugu", "Tamil"]
  },

  skills: [
    {
      category: "Programming Languages",
      description: "Core languages for systems, algorithms, and object-oriented application design.",
      skills: [
        { name: "C", badge: "Systems / Low-level", description: "Structured programming, pointers & memory management" },
        { name: "C++", badge: "Algorithms / OOP", description: "Standard Template Library (STL), memory models, competitive logic" },
        { name: "Java", badge: "Core & Enterprise", description: "OOPs with Java, multi-threading, JVM execution model" }
      ]
    },
    {
      category: "Backend Development",
      description: "Server-side services, API engineering, and real-time communication protocols.",
      skills: [
        { name: "Spring Boot", badge: "Primary Framework", description: "Enterprise REST APIs, Spring MVC, dependency injection" },
        { name: "REST APIs", badge: "Architecture", description: "Standardized HTTP contracts, JSON serialization, status semantics" },
        { name: "WebRTC", badge: "Real-Time Comms", description: "Peer-to-peer data channels, low-latency audio/video streaming" }
      ]
    },
    {
      category: "Web Technologies",
      description: "Interactive user interfaces and responsive web applications.",
      skills: [
        { name: "JavaScript", badge: "Frontend Logic", description: "Asynchronous programming, DOM manipulation, ES6+" },
        { name: "HTML5", badge: "Markup", description: "Semantic web structure, accessibility, standards compliance" },
        { name: "CSS3", badge: "Styling", description: "Responsive layouts, flexbox, grid, and animations" }
      ]
    },
    {
      category: "Databases & Storage",
      description: "Relational data modeling, schema normalization, and querying.",
      skills: [
        { name: "MySQL", badge: "RDBMS", description: "Relational modeling, indexing, joins, and ACID transactions" },
        { name: "Oracle Database", badge: "Enterprise RDBMS", description: "Enterprise database architecture and SQL query optimization" },
        { name: "DBMS Fundamentals", badge: "Core CS", description: "ER diagrams, normal forms (1NF-BCNF), concurrency control" }
      ]
    },
    {
      category: "Computer Science Fundamentals",
      description: "Theoretical grounding enabling performant, fault-tolerant software engineering.",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", badge: "Core", description: "Graphs, trees, heaps, dynamic programming, time complexity" },
        { name: "Operating Systems", badge: "Core", description: "Process scheduling, thread concurrency, memory paging, deadlocks" },
        { name: "OOPs Concepts", badge: "Core", description: "Encapsulation, inheritance, polymorphism, design patterns in Java" }
      ]
    },
    {
      category: "Developer Tools & Visualization",
      description: "Essential toolchain for version control, development, and data insights.",
      skills: [
        { name: "Git", badge: "VCS", description: "Branching strategies, atomic commits, repository workflows" },
        { name: "GitHub", badge: "Collaboration", description: "Open-source collaboration, pull requests, issue tracking" },
        { name: "VS Code", badge: "Editor", description: "Modern IDE debugging, extensions, and workspace setup" },
        { name: "Tableau", badge: "Data Visualization", description: "Visual analytics, interactive dashboards, metric reporting" }
      ]
    }
  ],

  achievements: {
    academic: [
      {
        id: "puc-academic-merit",
        title: "PUC (PCMB) Academic Distinction — 89.6%",
        issuerOrEvent: "Varin Pre University College, Tumakuru",
        date: "2024",
        description: "Achieved 89.6% in Pre-University examination with Physics, Chemistry, Mathematics, and Biology focus."
      },
      {
        id: "icse-academic-merit",
        title: "Class X (ICSE) Board Examination",
        issuerOrEvent: "Bishop Sargant School, Tumakuru",
        date: "2022",
        description: "Successfully cleared the ICSE Class X board examination with 72% aggregate."
      }
    ],
    certifications: [
      /* Awaiting further certificate uploads */
    ],
    hackathons: [
      /* Awaiting hackathon details */
    ],
    technicalAccomplishments: [
      {
        id: "github-developer-profile",
        title: "Active Open-Source Profile",
        issuerOrEvent: "GitHub",
        date: "Active",
        description: "Building peer-to-peer web applications and smart AI utility tools under github.com/rockydr688-pixel",
        credentialUrl: "https://github.com/rockydr688-pixel"
      }
    ]
  }
};

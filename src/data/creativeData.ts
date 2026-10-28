export interface PhotoItem {
  id: string;
  title: string;
  category?: string;
  location?: string;
  date?: string;
  src: string;
  description?: string;
  aspectRatio: "portrait" | "landscape" | "square";
  isVerified: boolean;
}

export interface HobbyProject {
  id: string;
  title: string;
  tagline: string;
  category: "Creative Coding" | "CLI Utility" | "Experimental Script" | "Personal Tool";
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: "Experimental" | "Active" | "Prototype";
}

export interface SpotifyTrack {
  id: string;
  title: string;
  trackUrl: string;
  embedUrl: string;
}

export interface SpotifyConfig {
  introText: string;
  playlistTitle: string;
  playlistDescription: string;
  tracks: SpotifyTrack[];
  playlistUrl?: string;
  embedUrl?: string;
  isUserProvided: boolean;
}

export interface CreativeData {
  photography: {
    statement: string;
    items: PhotoItem[];
  };
  hobbyProjects: HobbyProject[];
  spotify: SpotifyConfig;
}

export const creativeData: CreativeData = {
  photography: {
    statement:
      "Beyond terminal buffers and algorithm complexity, photography is my medium for observing light, structural geometry, cultural heritage, and fleeting moments. From ancient monolithic stone sanctuaries and soaring cathedral arches to vibrant processions and quiet street companions.",
    items: [
      {
        id: "window-kittens",
        title: "Inquisitive Gazes",
        category: "Wildlife & Candid",
        location: "Tumakuru, Karnataka",
        date: "2024",
        src: "/images/photography/window-kittens.jpg",
        description: "Two kittens peering through an iron-grilled window, bathed in the soft glow of morning sunlight.",
        aspectRatio: "portrait",
        isVerified: true
      },
      {
        id: "saffron-flag-procession",
        title: "Flames in the Wind",
        category: "Cultural & Heritage",
        location: "Karnataka, India",
        date: "2024",
        src: "/images/photography/saffron-flag-procession.jpg",
        description: "A vibrant saffron flag bearing Chhatrapati Shivaji Maharaj fluttering proudly above a grand festive gathering.",
        aspectRatio: "portrait",
        isVerified: true
      },
      {
        id: "gothic-cathedral-arches",
        title: "Spires & Ribbed Vaults",
        category: "Architectural Symmetry",
        location: "St. Philomena's Cathedral",
        date: "2024",
        src: "/images/photography/gothic-cathedral-arches.jpg",
        description: "Gothic ribbed vaults, red-trimmed arches, and chandeliers converging toward the altar.",
        aspectRatio: "portrait",
        isVerified: true
      },
      {
        id: "hampi-monolith-palms",
        title: "Serenity in Stone",
        category: "Heritage & Landscape",
        location: "Hampi, Karnataka",
        date: "2024",
        src: "/images/photography/hampi-monolith-palms.jpg",
        description: "An ancient monolithic sanctum standing proud amidst lush emerald grass and towering coconut palms.",
        aspectRatio: "landscape",
        isVerified: true
      },
      {
        id: "vittala-stone-chariot-framing",
        title: "Window to the Past",
        category: "Heritage & Candid",
        location: "Vijaya Vittala Temple, Hampi",
        date: "2024",
        src: "/images/photography/vittala-stone-chariot-framing.jpg",
        description: "A joyful smile framed within centuries-old sculpted monolithic pillars overlooking the iconic stone chariot courtyard.",
        aspectRatio: "landscape",
        isVerified: true
      },
      {
        id: "misty-lake-boats",
        title: "Silent Ripples in the Mist",
        category: "Atmosphere & Landscape",
        location: "Ooty Lake, Tamil Nadu",
        date: "2024",
        src: "/images/photography/misty-lake-boats.jpg",
        description: "Paddle boats drifting across tranquil waters enveloped in cool morning mountain fog and pine silhouettes.",
        aspectRatio: "landscape",
        isVerified: true
      },
      {
        id: "temple-stone-corridor",
        title: "Pillars of Antiquity",
        category: "Heritage & Architecture",
        location: "Virupaksha Temple, Hampi",
        date: "2024",
        src: "/images/photography/temple-stone-corridor.jpg",
        description: "Intricately carved stone colonnades creating dramatic architectural perspective toward the soaring temple gopuram.",
        aspectRatio: "landscape",
        isVerified: true
      }
    ]
  },

  hobbyProjects: [
    {
      id: "cli-system-monitor",
      title: "Terminal Hardware & Process Monitor",
      tagline: "Lightweight command-line interface for inspecting CPU thread utilization and memory consumption.",
      category: "CLI Utility",
      description:
        "A personal hobby tool written to experiment with low-level POSIX process metrics and ANSI terminal escape codes. Built purely for exploration and custom workstation monitoring.",
      technologies: ["C++", "Linux APIs", "ANSI Escape Codes"],
      githubUrl: "https://github.com/rockydr688-pixel",
      status: "Prototype"
    },
    {
      id: "raymarching-glsl-shader",
      title: "Monochrome Raymarching Sandbox",
      tagline: "Fragment shader experiments manipulating signed distance fields and volumetric lighting.",
      category: "Creative Coding",
      description:
        "Weekend creative coding project exploring 3D mathematical surfaces, boolean geometry, and raymarching algorithms rendered directly within the fragment shader.",
      technologies: ["GLSL", "WebGL", "Math / Linear Algebra"],
      githubUrl: "https://github.com/rockydr688-pixel",
      status: "Experimental"
    }
  ],

  spotify: {
    introText:
      "Deep coding sessions and technical focus require deterministic auditory rhythm. Music provides the acoustic architecture for sustained deep work, problem-solving, and creative balance.",
    playlistTitle: "Personal Soundtrack // Favorite Rotation",
    playlistDescription:
      "Curated rotation on repeat during technical engineering, problem-solving, and deep coding sessions.",
    tracks: [
      {
        id: "track-1",
        title: "Track 01",
        trackUrl: "https://open.spotify.com/track/51yF2iq3A79Kv4JKtA7YHb?si=2b00f4b10b39494e",
        embedUrl: "https://open.spotify.com/embed/track/51yF2iq3A79Kv4JKtA7YHb"
      },
      {
        id: "track-2",
        title: "Track 02",
        trackUrl: "https://open.spotify.com/track/5Rx8kd4qr03O0nN0ZPbml1?si=78e55d62d9a6412a",
        embedUrl: "https://open.spotify.com/embed/track/5Rx8kd4qr03O0nN0ZPbml1"
      }
    ],
    playlistUrl: "https://open.spotify.com/track/51yF2iq3A79Kv4JKtA7YHb?si=2b00f4b10b39494e",
    embedUrl: "https://open.spotify.com/embed/track/51yF2iq3A79Kv4JKtA7YHb",
    isUserProvided: true
  }
};

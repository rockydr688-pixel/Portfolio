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
      "Beyond terminal buffers and algorithm complexity, photography is my medium for observing light, structural geometry, and fleeting urban stillness. Every frame explores monochrome contrast, scale, and balance.",
    items: [
      /*
       * Awaiting Rocky's personal photograph uploads.
       * Place original files into /public/images/photography/
       * Do not overwrite original photos.
       */
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
      githubUrl: "https://github.com/",
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
      githubUrl: "https://github.com/",
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

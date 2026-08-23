// Featured project data.
// To add a project, append an object below — the grid picks it up automatically.
// Leave `liveUrl` undefined if there is no live demo yet.

export type Project = {
  name: string;
  description: string;
  focus: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  // Path to a project image in /public/images. Falls back to a generated
  // technical placeholder when omitted.
  image?: string;
};

export const projects: Project[] = [
  {
    name: "MailMate",
    description:
      "A full-featured email client built on direct IMAP and SMTP communication, with efficient inbox loading and secure HTML rendering.",
    focus:
      "Direct email protocol integration with efficient inbox loading and secure HTML email rendering.",
    stack: ["Spring Boot", "React", "IMAP", "SMTP", "TinyMCE", "DOMPurify"],
    githubUrl: "https://github.com/anasqadri-dev/mailmate",
    featured: true,
  },
  {
    name: "Streamly",
    description:
      "A video streaming platform with adaptive bitrate delivery across multiple quality renditions.",
    focus: "Adaptive video streaming with multiple quality renditions.",
    stack: ["Spring Boot", "React", "FFmpeg", "HLS"],
    githubUrl: "https://github.com/anasqadri-dev/streamly",
    featured: true,
  },
  {
    name: "Wavelength",
    description:
      "A real-time chat application with persistent history and bidirectional messaging over WebSockets.",
    focus:
      "Real-time messaging with persistent chat history and bidirectional communication.",
    stack: ["Spring Boot", "React", "MongoDB", "WebSockets", "STOMP", "SockJS"],
    githubUrl: "https://github.com/anasqadri-dev/wavelength",
    featured: true,
  },
  {
    name: "Heritage Blog",
    description:
      "A full-stack blog application with post authoring, categories, and a clean reading experience.",
    focus: "Server-rendered blog architecture with structured content management.",
    stack: ["Spring Boot", "React", "MySQL"],
    githubUrl: "https://github.com/anasqadri-dev/heritage-blog",
    featured: true,
  },
  {
  name: "Zikr-ul-Quran",
  description:
    "A full-stack Quran playlist management system where a custom Doubly Linked List powers playlist ordering, navigation, insertion, deletion, and traversal.",
  focus:
    "Applying core DSA concepts in a real-world full-stack application through custom Doubly Linked List-based playlist management.",
  stack: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "Doubly Linked List"],
  githubUrl: "https://github.com/anasqadri-dev/zikr-ul-quran",
  featured: true,
},
  {
    name: "File Organizer CLI",
    description:
      "A Node.js command-line tool that automatically organizes files by type, date, or custom rule sets.",
    focus: "Automating file organization through a simple command-line interface.",
    stack: ["Node.js", "CLI"],
    githubUrl: "https://github.com/anasqadri-dev/file-organizer-cli",
    featured: true,
  },
];

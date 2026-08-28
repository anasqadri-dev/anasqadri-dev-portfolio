export type Certification = {
  name: string;
  issuer: string;
  issuerIcon?: string;
  platform?: string;
  credentialUrl?: string;
  date?: string;
};

export const certifications: Certification[] = [
  {
    name: "Introduction to Networking",
    issuer: "NVIDIA",
    issuerIcon: "nvidia",
    platform: "Coursera",
    credentialUrl: "https://coursera.org/share/eae2b79f40825f8861497a15d291d98d",
    date: "July 2026",
  },
  {
    name: "Gen AI: Beyond the Chatbot",
    issuer: "Google Cloud",
    issuerIcon: "googlecloud",
    platform: "Coursera",
    credentialUrl: "https://coursera.org/share/e7f4cbcb24d53e79e2983d12782448e6",
    date: "July 2026",
  },
  {
    name: "Foundations of Elasticsearch",
    issuer: "Packt",
    issuerIcon: "packt",
    platform: "Coursera",
    credentialUrl: "https://coursera.org/share/9a8490961a4736ebddffb4828fb26384",
    date: "July 2026",
  },
  {
    name: "Google AI",
    issuer: "Google",
    issuerIcon: "google",
    platform: "Coursera",
    credentialUrl: "https://coursera.org/share/f13a554d92da1fffb68658e2776b1f2a",
    date: "July 2026",
  },
  {
    name: "AI For Everyone",
    issuer: "DeepLearning.AI",
    issuerIcon: "deeplearningai",
    platform: "Coursera",
    credentialUrl: "https://coursera.org/share/5ebb29da518af77d39abeac127981f78",
    date: "January 2025",
  },
  {
    name: "Programming with JavaScript",
    issuer: "Meta",
    issuerIcon: "meta",
    platform: "Coursera",
    credentialUrl: "https://coursera.org/share/54c2f05acacd539844503fdb02e41822",
    date: "July 2026",
  },
];
import {
  siOpenjdk,
  siSpring,
  siSpringsecurity,
  siApachemaven,
  siHibernate,
  siThymeleaf,
  siJsonwebtokens,
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss3,
  siTailwindcss,
  siGreensock,
  siThreedotjs,
  siMysql,
  siPostgresql,
  siMongodb,
  siRedis,
  siApachekafka,
  siElasticsearch,
  siDocker,
  siKubernetes,
  siAmazonwebservices,
  siLinux,
  siGithubactions,
  siGit,
  siGithub,
  siPostman,
  siIntellijidea,
  siNodedotjs,
  siExpress,
  siPython,
  siGo,
  siInstagram,
  siThreads,
  siGravatar,
  siLinktree,
  siX,
  siHashnode,
  siDevdotto,
  siMedium,
  siLinkedin,
  siYoutube,
  siWhatsapp,
  siDiscord,
  type SimpleIcon,
} from "simple-icons";
import {
  Network,
  Database,
  ShieldCheck,
  TerminalSquare,
  Boxes,
  Cloud,
  Code2,
  type LucideIcon,
} from "lucide-react";

// Explicit map (not string-indexed) so the bundler can tree-shake every
// simple-icons entry that isn't actually used on the site.
const brandIcons: Record<string, SimpleIcon> = {
  openjdk: siOpenjdk,
  spring: siSpring,
  springsecurity: siSpringsecurity,
  apachemaven: siApachemaven,
  hibernate: siHibernate,
  thymeleaf: siThymeleaf,
  jsonwebtokens: siJsonwebtokens,
  react: siReact,
  nextdotjs: siNextdotjs,
  typescript: siTypescript,
  javascript: siJavascript,
  html5: siHtml5,
  css3: siCss3,
  tailwindcss: siTailwindcss,
  greensock: siGreensock,
  threedotjs: siThreedotjs,
  mysql: siMysql,
  postgresql: siPostgresql,
  mongodb: siMongodb,
  redis: siRedis,
  apachekafka: siApachekafka,
  elasticsearch: siElasticsearch,
  docker: siDocker,
  kubernetes: siKubernetes,
  amazonwebservices: siAmazonwebservices,
  linux: siLinux,
  githubactions: siGithubactions,
  git: siGit,
  github: siGithub,
  postman: siPostman,
  intellijidea: siIntellijidea,
  nodedotjs: siNodedotjs,
  express: siExpress,
  python: siPython,
  go: siGo,
  instagram: siInstagram,
  threads: siThreads,
  gravatar: siGravatar,
  linktree: siLinktree,
  x: siX,
  hashnode: siHashnode,
  devdotto: siDevdotto,
  medium: siMedium,
  linkedin: siLinkedin,
  youtube: siYoutube,
  whatsapp: siWhatsapp,
  discord: siDiscord,
};

const fallbackIcons: Record<string, LucideIcon> = {
  network: Network,
  database: Database,
  shield: ShieldCheck,
  terminal: TerminalSquare,
  boxes: Boxes,
  cloud: Cloud,
  code: Code2,
};

type TechIconProps = {
  simpleIcon?: string;
  fallbackIcon?: keyof typeof fallbackIcons;
  className?: string;
};

export function TechIcon({
  simpleIcon,
  fallbackIcon,
  className,
}: TechIconProps) {
  const brand = simpleIcon ? brandIcons[simpleIcon] : undefined;

  if (brand) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Fallback = fallbackIcon ? fallbackIcons[fallbackIcon] : Boxes;
  return (
    <Fallback className={className} strokeWidth={1.5} aria-hidden="true" />
  );
}

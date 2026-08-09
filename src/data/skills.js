import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const skills = [
  {
    name: "HTML",
    level: 90,
    icon: FaHtml5,
    color: "text-orange-500",
    description: "Semantic markup, accessibility, and modern HTML5 features.",
  },
  {
    name: "CSS",
    level: 86,
    icon: FaCss3Alt,
    color: "text-blue-500",
    description: "Responsive layouts, animations, Flexbox, and Grid.",
  },
  {
    name: "JavaScript (ES6+)",
    level: 88,
    icon: FaJs,
    color: "text-yellow-400",
    description: "Modern JS, async patterns, DOM manipulation, and APIs.",
  },
  {
    name: "Tailwind CSS",
    level: 92,
    icon: SiTailwindcss,
    color: "text-cyan-400",
    description: "Utility-first styling, custom themes, and responsive design.",
  },
  {
    name: "React",
    level: 83,
    icon: FaReact,
    color: "text-sky-400",
    description: "Components, hooks, state management, and React Router.",
  },
  {
    name: "Git",
    level: 91,
    icon: FaGitAlt,
    color: "text-red-500",
    description: "Version control, branching, merging, and collaboration.",
  },
  {
    name: "GitHub",
    level: 89,
    icon: FaGithub,
    color: "text-slate-300",
    description:
      "Repositories, pull requests, issues, and open-source workflow.",
  },
];

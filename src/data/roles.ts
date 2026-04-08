import { Role } from "@/types/database";

export const roles: Role[] = [
  {
    id: "sde",
    name: "Software Development Engineer",
    icon: "Code",
    description:
      "Design, develop, and maintain software applications and systems.",
  },
  {
    id: "frontend",
    name: "Frontend Developer",
    icon: "Layout",
    description:
      "Build user interfaces and client-side applications using modern frameworks.",
  },
  {
    id: "backend",
    name: "Backend Developer",
    icon: "Server",
    description:
      "Develop server-side logic, APIs, and database interactions.",
  },
  {
    id: "fullstack",
    name: "Full Stack Developer",
    icon: "Layers",
    description:
      "Work across the entire stack from frontend to backend and infrastructure.",
  },
  {
    id: "devops",
    name: "DevOps Engineer",
    icon: "GitBranch",
    description:
      "Manage CI/CD pipelines, cloud infrastructure, and deployment automation.",
  },
  {
    id: "data-engineer",
    name: "Data Engineer",
    icon: "Database",
    description:
      "Build and maintain data pipelines, warehouses, and ETL processes.",
  },
  {
    id: "ml-engineer",
    name: "ML Engineer",
    icon: "Brain",
    description:
      "Design and deploy machine learning models and AI-powered systems.",
  },
  {
    id: "network-engineer",
    name: "Network Engineer",
    icon: "Wifi",
    description:
      "Design, implement, and maintain computer networks and infrastructure.",
  },
  {
    id: "db-admin",
    name: "Database Administrator",
    icon: "HardDrive",
    description:
      "Manage, optimize, and secure databases across the organization.",
  },
  {
    id: "qa-engineer",
    name: "QA Engineer",
    icon: "CheckCircle",
    description:
      "Ensure software quality through testing strategies, automation, and analysis.",
  },
  {
    id: "cloud-architect",
    name: "Cloud Architect",
    icon: "Cloud",
    description:
      "Design and oversee cloud computing strategy and infrastructure.",
  },
  {
    id: "security-engineer",
    name: "Security Engineer",
    icon: "Shield",
    description:
      "Protect systems from cyber threats, conduct security audits, and design secure architectures.",
  },
  {
    id: "ai-engineer",
    name: "AI Engineer",
    icon: "Sparkles",
    description:
      "Build and deploy AI/ML models, LLM applications, and intelligent systems at scale.",
  },
];

export function getRoleById(id: string): Role | undefined {
  return roles.find((r) => r.id === id);
}

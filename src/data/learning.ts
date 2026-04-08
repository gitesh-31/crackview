import { LearningTopic, LearningResource } from "@/types/database";

export const learningTopics: LearningTopic[] = [
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    icon: "Binary",
    description:
      "Master arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming.",
    category: "Core CS",
  },
  {
    id: "system-design",
    name: "System Design",
    icon: "Network",
    description:
      "Learn to design scalable distributed systems, load balancers, caches, and databases.",
    category: "Core CS",
  },
  {
    id: "oops",
    name: "Object-Oriented Programming",
    icon: "Boxes",
    description:
      "Understand classes, inheritance, polymorphism, encapsulation, and SOLID principles.",
    category: "Core CS",
  },
  {
    id: "os",
    name: "Operating Systems",
    icon: "Monitor",
    description:
      "Process management, memory management, file systems, and concurrency.",
    category: "Core CS",
  },
  {
    id: "dbms",
    name: "Database Management Systems",
    icon: "Database",
    description:
      "SQL, normalization, indexing, transactions, and NoSQL databases.",
    category: "Core CS",
  },
  {
    id: "networking",
    name: "Computer Networks",
    icon: "Globe",
    description:
      "OSI model, TCP/IP, HTTP, DNS, routing, and network security fundamentals.",
    category: "Core CS",
  },
  {
    id: "web-dev",
    name: "Web Development",
    icon: "Code",
    description:
      "HTML, CSS, JavaScript, React, Node.js, REST APIs, and modern web frameworks.",
    category: "Development",
  },
  {
    id: "devops-learn",
    name: "DevOps & Cloud",
    icon: "Cloud",
    description:
      "Docker, Kubernetes, CI/CD, AWS, Azure, GCP, and infrastructure as code.",
    category: "Development",
  },
  {
    id: "aptitude",
    name: "Aptitude & Reasoning",
    icon: "Calculator",
    description:
      "Quantitative aptitude, logical reasoning, and verbal ability for placement tests.",
    category: "Aptitude",
  },
  {
    id: "behavioral",
    name: "Behavioral & HR",
    icon: "Users",
    description:
      "Tell me about yourself, strengths, weaknesses, leadership, and situational questions.",
    category: "Soft Skills",
  },
];

export const learningResources: LearningResource[] = [
  // DSA Resources
  {
    id: "dsa-1",
    topicId: "dsa",
    title: "DSA Self-Paced Course",
    url: "https://www.geeksforgeeks.org/data-structures/",
    platform: "GeeksforGeeks",
    type: "Course",
    difficulty: "Beginner",
  },
  {
    id: "dsa-2",
    topicId: "dsa",
    title: "LeetCode Problem Set",
    url: "https://leetcode.com/problemset/",
    platform: "LeetCode",
    type: "Practice",
    difficulty: "Intermediate",
  },
  {
    id: "dsa-3",
    topicId: "dsa",
    title: "Striver's A2Z DSA Sheet",
    url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
    platform: "takeUforward",
    type: "Practice",
    difficulty: "Intermediate",
  },
  {
    id: "dsa-4",
    topicId: "dsa",
    title: "Abdul Bari - Algorithms Playlist",
    url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
    platform: "YouTube",
    type: "Video",
    difficulty: "Beginner",
  },
  {
    id: "dsa-5",
    topicId: "dsa",
    title: "NeetCode 150",
    url: "https://neetcode.io/practice",
    platform: "NeetCode",
    type: "Practice",
    difficulty: "Intermediate",
  },
  {
    id: "dsa-6",
    topicId: "dsa",
    title: "Competitive Programming Handbook (CSES)",
    url: "https://cses.fi/book/book.pdf",
    platform: "CSES",
    type: "Documentation",
    difficulty: "Advanced",
  },

  // System Design Resources
  {
    id: "sd-1",
    topicId: "system-design",
    title: "System Design Primer",
    url: "https://github.com/donnemartin/system-design-primer",
    platform: "GitHub",
    type: "Article",
    difficulty: "Intermediate",
  },
  {
    id: "sd-2",
    topicId: "system-design",
    title: "Gaurav Sen - System Design",
    url: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX",
    platform: "YouTube",
    type: "Video",
    difficulty: "Intermediate",
  },
  {
    id: "sd-3",
    topicId: "system-design",
    title: "Designing Data-Intensive Applications (book summary)",
    url: "https://www.geeksforgeeks.org/system-design-tutorial/",
    platform: "GeeksforGeeks",
    type: "Article",
    difficulty: "Advanced",
  },
  {
    id: "sd-4",
    topicId: "system-design",
    title: "ByteByteGo Newsletter",
    url: "https://blog.bytebytego.com/",
    platform: "ByteByteGo",
    type: "Article",
    difficulty: "Intermediate",
  },

  // OOP Resources
  {
    id: "oops-1",
    topicId: "oops",
    title: "OOP Concepts in Java",
    url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
    platform: "GeeksforGeeks",
    type: "Article",
    difficulty: "Beginner",
  },
  {
    id: "oops-2",
    topicId: "oops",
    title: "SOLID Principles Explained",
    url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",
    platform: "DigitalOcean",
    type: "Article",
    difficulty: "Intermediate",
  },
  {
    id: "oops-3",
    topicId: "oops",
    title: "Design Patterns - Refactoring Guru",
    url: "https://refactoring.guru/design-patterns",
    platform: "Refactoring Guru",
    type: "Documentation",
    difficulty: "Advanced",
  },

  // OS Resources
  {
    id: "os-1",
    topicId: "os",
    title: "Operating Systems - Gate Smashers",
    url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
    platform: "YouTube",
    type: "Video",
    difficulty: "Beginner",
  },
  {
    id: "os-2",
    topicId: "os",
    title: "OS Concepts - GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/operating-systems/",
    platform: "GeeksforGeeks",
    type: "Article",
    difficulty: "Intermediate",
  },

  // DBMS Resources
  {
    id: "dbms-1",
    topicId: "dbms",
    title: "DBMS Tutorial",
    url: "https://www.geeksforgeeks.org/dbms/",
    platform: "GeeksforGeeks",
    type: "Article",
    difficulty: "Beginner",
  },
  {
    id: "dbms-2",
    topicId: "dbms",
    title: "SQL Practice - HackerRank",
    url: "https://www.hackerrank.com/domains/sql",
    platform: "HackerRank",
    type: "Practice",
    difficulty: "Intermediate",
  },
  {
    id: "dbms-3",
    topicId: "dbms",
    title: "MongoDB University",
    url: "https://university.mongodb.com/",
    platform: "MongoDB",
    type: "Course",
    difficulty: "Intermediate",
  },

  // Networking Resources
  {
    id: "net-1",
    topicId: "networking",
    title: "Computer Networks - Gate Smashers",
    url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
    platform: "YouTube",
    type: "Video",
    difficulty: "Beginner",
  },
  {
    id: "net-2",
    topicId: "networking",
    title: "Networking Fundamentals",
    url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
    platform: "GeeksforGeeks",
    type: "Article",
    difficulty: "Beginner",
  },

  // Web Dev Resources
  {
    id: "web-1",
    topicId: "web-dev",
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org/en-US/docs/Learn",
    platform: "MDN",
    type: "Documentation",
    difficulty: "Beginner",
  },
  {
    id: "web-2",
    topicId: "web-dev",
    title: "The Odin Project",
    url: "https://www.theodinproject.com/",
    platform: "The Odin Project",
    type: "Course",
    difficulty: "Beginner",
  },
  {
    id: "web-3",
    topicId: "web-dev",
    title: "Full Stack Open",
    url: "https://fullstackopen.com/en/",
    platform: "University of Helsinki",
    type: "Course",
    difficulty: "Intermediate",
  },

  // DevOps Resources
  {
    id: "devops-1",
    topicId: "devops-learn",
    title: "DevOps Roadmap",
    url: "https://roadmap.sh/devops",
    platform: "roadmap.sh",
    type: "Article",
    difficulty: "Beginner",
  },
  {
    id: "devops-2",
    topicId: "devops-learn",
    title: "Docker Official Tutorial",
    url: "https://docs.docker.com/get-started/",
    platform: "Docker",
    type: "Documentation",
    difficulty: "Beginner",
  },
  {
    id: "devops-3",
    topicId: "devops-learn",
    title: "Kubernetes Basics",
    url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
    platform: "Kubernetes",
    type: "Documentation",
    difficulty: "Intermediate",
  },

  // Aptitude Resources
  {
    id: "apt-1",
    topicId: "aptitude",
    title: "Aptitude Questions",
    url: "https://www.indiabix.com/",
    platform: "IndiaBix",
    type: "Practice",
    difficulty: "Beginner",
  },
  {
    id: "apt-2",
    topicId: "aptitude",
    title: "Quantitative Aptitude by RS Aggarwal (Practice)",
    url: "https://www.geeksforgeeks.org/aptitude-gq/",
    platform: "GeeksforGeeks",
    type: "Practice",
    difficulty: "Intermediate",
  },

  // Behavioral Resources
  {
    id: "beh-1",
    topicId: "behavioral",
    title: "Top 50 HR Interview Questions",
    url: "https://www.geeksforgeeks.org/hr-interview-questions/",
    platform: "GeeksforGeeks",
    type: "Article",
    difficulty: "Beginner",
  },
  {
    id: "beh-2",
    topicId: "behavioral",
    title: "STAR Method for Behavioral Interviews",
    url: "https://www.themuse.com/advice/star-interview-method",
    platform: "The Muse",
    type: "Article",
    difficulty: "Beginner",
  },
];

export function getTopicById(id: string): LearningTopic | undefined {
  return learningTopics.find((t) => t.id === id);
}

export function getResourcesByTopic(topicId: string): LearningResource[] {
  return learningResources.filter((r) => r.topicId === topicId);
}

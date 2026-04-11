// Quick MCQ pool for the "Challenge a Friend" QuizUp-style feature.
// Categories: System Design, DSA, Basic Computer Science.

export interface QuizQuestion {
  id: string;
  category: "System Design" | "DSA" | "Basic CS";
  text: string;
  options: string[];
  correctIndex: number;
}

export const quizCategories = ["System Design", "DSA", "Basic CS"] as const;
export type QuizCategory = (typeof quizCategories)[number];

export const quizQuestions: QuizQuestion[] = [
  // ===== DSA =====
  {
    id: "dsa-1",
    category: "DSA",
    text: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctIndex: 1,
  },
  {
    id: "dsa-2",
    category: "DSA",
    text: "Which data structure follows LIFO order?",
    options: ["Queue", "Stack", "Heap", "Tree"],
    correctIndex: 1,
  },
  {
    id: "dsa-3",
    category: "DSA",
    text: "What is the worst-case time complexity of QuickSort?",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
    correctIndex: 2,
  },
  {
    id: "dsa-4",
    category: "DSA",
    text: "Which traversal of a BST gives nodes in sorted order?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    correctIndex: 1,
  },
  {
    id: "dsa-5",
    category: "DSA",
    text: "Hash table average insertion time is:",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    correctIndex: 2,
  },
  {
    id: "dsa-6",
    category: "DSA",
    text: "Which algorithm finds shortest paths from a single source on a non-negative weighted graph?",
    options: ["BFS", "Dijkstra", "Bellman-Ford", "Floyd-Warshall"],
    correctIndex: 1,
  },
  {
    id: "dsa-7",
    category: "DSA",
    text: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctIndex: 2,
  },
  {
    id: "dsa-8",
    category: "DSA",
    text: "A balanced BST has height roughly:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctIndex: 1,
  },
  {
    id: "dsa-9",
    category: "DSA",
    text: "Which technique is used in dynamic programming?",
    options: ["Greedy choice", "Memoization", "Backtracking", "Divide-only"],
    correctIndex: 1,
  },
  {
    id: "dsa-10",
    category: "DSA",
    text: "Which data structure is best to implement BFS?",
    options: ["Stack", "Queue", "Priority queue", "Set"],
    correctIndex: 1,
  },
  {
    id: "dsa-11",
    category: "DSA",
    text: "Which sorting algorithm is stable by default?",
    options: ["Heap sort", "Quick sort", "Merge sort", "Selection sort"],
    correctIndex: 2,
  },
  {
    id: "dsa-12",
    category: "DSA",
    text: "Big-O of inserting at the end of a dynamic array (amortized)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctIndex: 0,
  },
  {
    id: "dsa-13",
    category: "DSA",
    text: "A min-heap supports extract-min in:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctIndex: 1,
  },
  {
    id: "dsa-14",
    category: "DSA",
    text: "Two pointer technique is most useful for:",
    options: [
      "Tree traversal",
      "Sorted array problems",
      "Hashing",
      "Recursion",
    ],
    correctIndex: 1,
  },
  {
    id: "dsa-15",
    category: "DSA",
    text: "Which of the following is NOT a tree traversal?",
    options: ["Inorder", "Preorder", "Crossorder", "Postorder"],
    correctIndex: 2,
  },
  {
    id: "dsa-16",
    category: "DSA",
    text: "What does a topological sort require?",
    options: [
      "Undirected graph",
      "Directed acyclic graph",
      "Weighted graph",
      "Tree only",
    ],
    correctIndex: 1,
  },
  {
    id: "dsa-17",
    category: "DSA",
    text: "Trie is most useful for:",
    options: [
      "Range queries",
      "Prefix lookup",
      "Sorting numbers",
      "Graph cycles",
    ],
    correctIndex: 1,
  },
  {
    id: "dsa-18",
    category: "DSA",
    text: "Union-Find / DSU is commonly used to detect:",
    options: [
      "Cycles in undirected graph",
      "Sorted arrays",
      "Median values",
      "Hash collisions",
    ],
    correctIndex: 0,
  },
  {
    id: "dsa-19",
    category: "DSA",
    text: "Time complexity of accessing the kth element in a singly linked list?",
    options: ["O(1)", "O(log n)", "O(k)", "O(n)"],
    correctIndex: 2,
  },
  {
    id: "dsa-20",
    category: "DSA",
    text: "Which DP problem has overlapping subproblems?",
    options: [
      "Binary search",
      "Fibonacci",
      "Bubble sort",
      "Linked list reversal",
    ],
    correctIndex: 1,
  },

  // ===== System Design =====
  {
    id: "sd-1",
    category: "System Design",
    text: "What does CAP theorem stand for?",
    options: [
      "Consistency, Availability, Partition tolerance",
      "Cache, API, Performance",
      "Concurrency, Atomicity, Persistence",
      "Cost, Agility, Performance",
    ],
    correctIndex: 0,
  },
  {
    id: "sd-2",
    category: "System Design",
    text: "Which is best for caching frequently read data?",
    options: ["MySQL", "Redis", "Kafka", "S3"],
    correctIndex: 1,
  },
  {
    id: "sd-3",
    category: "System Design",
    text: "Which load balancing algorithm distributes requests evenly regardless of server load?",
    options: [
      "Least connections",
      "Round robin",
      "Weighted random",
      "Resource based",
    ],
    correctIndex: 1,
  },
  {
    id: "sd-4",
    category: "System Design",
    text: "A CDN primarily helps with:",
    options: [
      "Database sharding",
      "Edge caching of static assets",
      "Authentication",
      "Logging",
    ],
    correctIndex: 1,
  },
  {
    id: "sd-5",
    category: "System Design",
    text: "Which is a NoSQL document database?",
    options: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    correctIndex: 1,
  },
  {
    id: "sd-6",
    category: "System Design",
    text: "Eventual consistency means:",
    options: [
      "Reads are always strongly consistent",
      "Writes are immediately visible",
      "Replicas converge over time",
      "Data is encrypted",
    ],
    correctIndex: 2,
  },
  {
    id: "sd-7",
    category: "System Design",
    text: "Which pattern is used for failure isolation in microservices?",
    options: ["Singleton", "Circuit Breaker", "Observer", "Adapter"],
    correctIndex: 1,
  },
  {
    id: "sd-8",
    category: "System Design",
    text: "A message queue like Kafka primarily decouples:",
    options: [
      "Frontend and CSS",
      "Producers and consumers",
      "Routes and controllers",
      "Files and folders",
    ],
    correctIndex: 1,
  },
  {
    id: "sd-9",
    category: "System Design",
    text: "Sharding is a strategy to:",
    options: [
      "Encrypt data",
      "Split data across multiple databases",
      "Cache results",
      "Compress files",
    ],
    correctIndex: 1,
  },
  {
    id: "sd-10",
    category: "System Design",
    text: "Which HTTP status code means 'Too Many Requests'?",
    options: ["401", "403", "429", "503"],
    correctIndex: 2,
  },
  {
    id: "sd-11",
    category: "System Design",
    text: "Idempotent HTTP method?",
    options: ["POST", "PUT", "PATCH", "CONNECT"],
    correctIndex: 1,
  },
  {
    id: "sd-12",
    category: "System Design",
    text: "Which is a write-through cache property?",
    options: [
      "Writes update only the cache",
      "Writes update both cache and storage",
      "Writes are batched daily",
      "Writes ignore cache",
    ],
    correctIndex: 1,
  },
  {
    id: "sd-13",
    category: "System Design",
    text: "Master-slave replication is mainly used for:",
    options: [
      "Read scalability",
      "Write scalability",
      "Encryption",
      "Indexing",
    ],
    correctIndex: 0,
  },
  {
    id: "sd-14",
    category: "System Design",
    text: "Rate limiting can be implemented with which algorithm?",
    options: [
      "Token bucket",
      "Bubble sort",
      "Two-pointer",
      "Greedy graph",
    ],
    correctIndex: 0,
  },
  {
    id: "sd-15",
    category: "System Design",
    text: "Which database is column-oriented?",
    options: ["MySQL", "Cassandra", "MongoDB", "SQLite"],
    correctIndex: 1,
  },
  {
    id: "sd-16",
    category: "System Design",
    text: "Service mesh tools include:",
    options: ["Helm and Argo", "Istio and Linkerd", "Kafka and Spark", "Hadoop and Hive"],
    correctIndex: 1,
  },
  {
    id: "sd-17",
    category: "System Design",
    text: "What does API gateway primarily provide?",
    options: [
      "Database queries",
      "Single entry point with routing & auth",
      "File storage",
      "Image processing",
    ],
    correctIndex: 1,
  },
  {
    id: "sd-18",
    category: "System Design",
    text: "Consistent hashing is used to:",
    options: [
      "Encrypt passwords",
      "Reduce remapping when nodes change",
      "Compress data",
      "Sort keys",
    ],
    correctIndex: 1,
  },
  {
    id: "sd-19",
    category: "System Design",
    text: "Which is a stream processing framework?",
    options: ["Apache Flink", "MySQL", "Redis", "Memcached"],
    correctIndex: 0,
  },
  {
    id: "sd-20",
    category: "System Design",
    text: "Blue-green deployment provides:",
    options: [
      "Better encryption",
      "Zero-downtime release with rollback",
      "Lower CPU usage",
      "Cheaper hosting",
    ],
    correctIndex: 1,
  },

  // ===== Basic CS =====
  {
    id: "cs-1",
    category: "Basic CS",
    text: "Which OSI layer handles routing of packets?",
    options: ["Transport", "Network", "Data link", "Session"],
    correctIndex: 1,
  },
  {
    id: "cs-2",
    category: "Basic CS",
    text: "TCP is which type of protocol?",
    options: ["Connectionless", "Connection-oriented", "Stateless", "Broadcast"],
    correctIndex: 1,
  },
  {
    id: "cs-3",
    category: "Basic CS",
    text: "Which is volatile memory?",
    options: ["HDD", "SSD", "RAM", "ROM"],
    correctIndex: 2,
  },
  {
    id: "cs-4",
    category: "Basic CS",
    text: "Which scheduling algorithm can cause starvation?",
    options: ["FCFS", "Round robin", "Priority scheduling", "SJF (preemptive)"],
    correctIndex: 2,
  },
  {
    id: "cs-5",
    category: "Basic CS",
    text: "Deadlock requires which of these conditions?",
    options: ["Preemption", "Hold and wait", "Independence", "Symmetry"],
    correctIndex: 1,
  },
  {
    id: "cs-6",
    category: "Basic CS",
    text: "ACID stands for:",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Caching, Integrity, Data",
      "Async, Concurrent, Indexed, Distributed",
      "All Compute Is Distributed",
    ],
    correctIndex: 0,
  },
  {
    id: "cs-7",
    category: "Basic CS",
    text: "Which is NOT a property of a process?",
    options: ["PID", "Stack", "Heap", "Schema"],
    correctIndex: 3,
  },
  {
    id: "cs-8",
    category: "Basic CS",
    text: "Which protocol resolves IP from a domain?",
    options: ["DHCP", "DNS", "ARP", "NAT"],
    correctIndex: 1,
  },
  {
    id: "cs-9",
    category: "Basic CS",
    text: "Page table is part of which memory management technique?",
    options: ["Segmentation", "Paging", "Swapping only", "Caching"],
    correctIndex: 1,
  },
  {
    id: "cs-10",
    category: "Basic CS",
    text: "HTTP runs over which transport protocol by default?",
    options: ["UDP", "TCP", "ICMP", "SCTP"],
    correctIndex: 1,
  },
  {
    id: "cs-11",
    category: "Basic CS",
    text: "Which SQL clause filters groups?",
    options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
    correctIndex: 2,
  },
  {
    id: "cs-12",
    category: "Basic CS",
    text: "A foreign key in SQL enforces:",
    options: [
      "Uniqueness only",
      "Referential integrity",
      "Index ordering",
      "Atomic writes",
    ],
    correctIndex: 1,
  },
  {
    id: "cs-13",
    category: "Basic CS",
    text: "Big endian stores:",
    options: [
      "Most significant byte first",
      "Least significant byte first",
      "Random byte order",
      "Compressed bytes",
    ],
    correctIndex: 0,
  },
  {
    id: "cs-14",
    category: "Basic CS",
    text: "Which is a primitive synchronization mechanism?",
    options: ["Mutex", "Class", "Module", "Loop"],
    correctIndex: 0,
  },
  {
    id: "cs-15",
    category: "Basic CS",
    text: "Compiler converts source code to:",
    options: ["Pseudocode", "Machine code", "JSON", "Hex string"],
    correctIndex: 1,
  },
  {
    id: "cs-16",
    category: "Basic CS",
    text: "Polymorphism in OOP enables:",
    options: [
      "Multiple inheritance only",
      "Same interface, different behavior",
      "Static-only methods",
      "No method overriding",
    ],
    correctIndex: 1,
  },
  {
    id: "cs-17",
    category: "Basic CS",
    text: "Which port does HTTPS use by default?",
    options: ["21", "22", "80", "443"],
    correctIndex: 3,
  },
  {
    id: "cs-18",
    category: "Basic CS",
    text: "Inheritance is an OOP concept that supports:",
    options: ["Code reuse", "Concurrency", "Encryption", "Serialization"],
    correctIndex: 0,
  },
  {
    id: "cs-19",
    category: "Basic CS",
    text: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctIndex: 1,
  },
  {
    id: "cs-20",
    category: "Basic CS",
    text: "Virtual memory uses what to extend RAM?",
    options: ["L1 cache", "Disk swap space", "Registers", "BIOS"],
    correctIndex: 1,
  },
];

export function getQuizQuestionsByCategory(
  category: QuizCategory | "Mixed",
  count: number,
  seed: number
): QuizQuestion[] {
  const pool =
    category === "Mixed"
      ? quizQuestions
      : quizQuestions.filter((q) => q.category === category);
  // Simple seeded shuffle (mulberry32)
  const rng = mulberry32(seed);
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(count, arr.length));
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

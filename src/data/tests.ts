import { Test } from "@/types/database";

export const tests: Test[] = [
  {
    id: "test-google-sde",
    companyId: "google",
    roleId: "sde",
    title: "Google SDE Assessment",
    duration: 30,
    questions: [
      {
        id: "tq-1",
        text: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctIndex: 1,
        explanation: "Binary search halves the search space each step, giving O(log n).",
      },
      {
        id: "tq-2",
        text: "Which data structure uses FIFO ordering?",
        options: ["Stack", "Queue", "Heap", "Tree"],
        correctIndex: 1,
        explanation: "Queue follows First-In-First-Out (FIFO) ordering.",
      },
      {
        id: "tq-3",
        text: "What is the worst-case time complexity of QuickSort?",
        options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
        correctIndex: 2,
        explanation: "QuickSort degrades to O(n^2) when pivot selection is poor (already sorted array).",
      },
      {
        id: "tq-4",
        text: "Which of the following is NOT a valid traversal for a binary tree?",
        options: ["Inorder", "Preorder", "Postorder", "Linearorder"],
        correctIndex: 3,
        explanation: "Linearorder is not a standard binary tree traversal method.",
      },
      {
        id: "tq-5",
        text: "What does the 'P' in CAP theorem stand for?",
        options: ["Performance", "Partition Tolerance", "Parallelism", "Persistence"],
        correctIndex: 1,
        explanation: "CAP stands for Consistency, Availability, and Partition Tolerance.",
      },
      {
        id: "tq-6",
        text: "In a hash table, what is the average time complexity for insertion?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctIndex: 0,
        explanation: "Hash tables provide O(1) average case for insertion using hash functions.",
      },
      {
        id: "tq-7",
        text: "Which algorithm is used to find the shortest path in an unweighted graph?",
        options: ["DFS", "BFS", "Dijkstra", "Bellman-Ford"],
        correctIndex: 1,
        explanation: "BFS finds shortest path in unweighted graphs as it explores level by level.",
      },
      {
        id: "tq-8",
        text: "What is a deadlock in operating systems?",
        options: [
          "A process that runs indefinitely",
          "Two or more processes waiting for each other to release resources",
          "A process with highest priority",
          "A memory leak"
        ],
        correctIndex: 1,
        explanation: "Deadlock occurs when processes are waiting in a circular chain for resources held by each other.",
      },
      {
        id: "tq-9",
        text: "Which design pattern ensures only one instance of a class exists?",
        options: ["Factory", "Observer", "Singleton", "Strategy"],
        correctIndex: 2,
        explanation: "Singleton pattern restricts instantiation of a class to a single instance.",
      },
      {
        id: "tq-10",
        text: "What is the space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 2,
        explanation: "Merge sort requires O(n) additional space for the temporary arrays during merging.",
      },
    ],
  },
  {
    id: "test-amazon-sde",
    companyId: "amazon",
    roleId: "sde",
    title: "Amazon SDE Assessment",
    duration: 30,
    questions: [
      {
        id: "atq-1",
        text: "Which Amazon Leadership Principle is about starting with the customer and working backwards?",
        options: ["Ownership", "Customer Obsession", "Bias for Action", "Deliver Results"],
        correctIndex: 1,
        explanation: "Customer Obsession is Amazon's first and most important Leadership Principle.",
      },
      {
        id: "atq-2",
        text: "What is DynamoDB's primary data model?",
        options: ["Relational", "Key-Value and Document", "Graph", "Column-family"],
        correctIndex: 1,
        explanation: "DynamoDB is a key-value and document database service by AWS.",
      },
      {
        id: "atq-3",
        text: "Which data structure is best for implementing an undo feature?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctIndex: 1,
        explanation: "Stack's LIFO property makes it ideal for undo operations.",
      },
      {
        id: "atq-4",
        text: "What is the time complexity of inserting at the beginning of an ArrayList?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 2,
        explanation: "Inserting at the beginning requires shifting all existing elements, giving O(n).",
      },
      {
        id: "atq-5",
        text: "In microservices architecture, what pattern is used for service communication via events?",
        options: ["Monolith", "Event-Driven", "Layered", "Singleton"],
        correctIndex: 1,
        explanation: "Event-driven architecture allows services to communicate asynchronously via events.",
      },
      {
        id: "atq-6",
        text: "What is the purpose of a load balancer?",
        options: [
          "Encrypt data",
          "Distribute traffic across multiple servers",
          "Store session data",
          "Compile code"
        ],
        correctIndex: 1,
        explanation: "Load balancers distribute incoming traffic across multiple servers to ensure availability.",
      },
      {
        id: "atq-7",
        text: "Which sorting algorithm has the best worst-case time complexity?",
        options: ["Quick Sort", "Bubble Sort", "Merge Sort", "Selection Sort"],
        correctIndex: 2,
        explanation: "Merge Sort guarantees O(n log n) in the worst case.",
      },
      {
        id: "atq-8",
        text: "What is the difference between TCP and UDP?",
        options: [
          "TCP is connectionless, UDP is connection-oriented",
          "TCP is connection-oriented and reliable, UDP is connectionless and unreliable",
          "They are the same",
          "UDP is slower than TCP"
        ],
        correctIndex: 1,
        explanation: "TCP provides reliable, ordered delivery with connection setup. UDP is faster but unreliable.",
      },
      {
        id: "atq-9",
        text: "What is an API Gateway in microservices?",
        options: [
          "A database",
          "A single entry point for all client requests",
          "A testing tool",
          "A monitoring service"
        ],
        correctIndex: 1,
        explanation: "API Gateway acts as a single entry point, handling routing, auth, and rate limiting.",
      },
      {
        id: "atq-10",
        text: "What is eventual consistency?",
        options: [
          "Data is always consistent",
          "Data will become consistent over time after updates propagate",
          "Data is never consistent",
          "Only reads are consistent"
        ],
        correctIndex: 1,
        explanation: "Eventual consistency guarantees that all replicas will converge to the same state over time.",
      },
    ],
  },
  {
    id: "test-tcs-sde",
    companyId: "tcs",
    roleId: "sde",
    title: "TCS Digital Assessment",
    duration: 25,
    questions: [
      {
        id: "ttq-1",
        text: "What does OOP stand for?",
        options: [
          "Object-Oriented Programming",
          "Object-Ordered Processing",
          "Open-Oriented Programming",
          "Object-Operated Protocol"
        ],
        correctIndex: 0,
        explanation: "OOP stands for Object-Oriented Programming.",
      },
      {
        id: "ttq-2",
        text: "Which keyword is used to inherit a class in Java?",
        options: ["implements", "extends", "inherits", "super"],
        correctIndex: 1,
        explanation: "The 'extends' keyword is used for class inheritance in Java.",
      },
      {
        id: "ttq-3",
        text: "What is the size of an int in Java?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on platform"],
        correctIndex: 1,
        explanation: "In Java, int is always 4 bytes (32 bits) regardless of platform.",
      },
      {
        id: "ttq-4",
        text: "Which SQL command is used to remove a table?",
        options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
        correctIndex: 2,
        explanation: "DROP TABLE removes the entire table structure and data from the database.",
      },
      {
        id: "ttq-5",
        text: "What is the output of: System.out.println(10 + 20 + \"Hello\")?",
        options: ["1020Hello", "30Hello", "Hello1020", "Error"],
        correctIndex: 1,
        explanation: "10 + 20 is evaluated first (30), then concatenated with 'Hello' giving '30Hello'.",
      },
      {
        id: "ttq-6",
        text: "Which collection in Java does not allow duplicate elements?",
        options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
        correctIndex: 2,
        explanation: "HashSet implements the Set interface which does not allow duplicate elements.",
      },
      {
        id: "ttq-7",
        text: "What is normalization in DBMS?",
        options: [
          "Adding redundancy",
          "Reducing redundancy and dependency",
          "Increasing table size",
          "Deleting data"
        ],
        correctIndex: 1,
        explanation: "Normalization organizes data to reduce redundancy and improve data integrity.",
      },
      {
        id: "ttq-8",
        text: "What is the purpose of the 'finally' block in Java?",
        options: [
          "To handle exceptions",
          "To execute code regardless of exception occurrence",
          "To throw exceptions",
          "To declare variables"
        ],
        correctIndex: 1,
        explanation: "The finally block always executes whether an exception occurs or not, used for cleanup.",
      },
    ],
  },
  {
    id: "test-microsoft-sde",
    companyId: "microsoft",
    roleId: "sde",
    title: "Microsoft SDE Assessment",
    duration: 30,
    questions: [
      {
        id: "mtq-1",
        text: "What is polymorphism in OOP?",
        options: [
          "Hiding data",
          "One interface, multiple implementations",
          "Inheriting from multiple classes",
          "Creating objects"
        ],
        correctIndex: 1,
        explanation: "Polymorphism allows objects of different classes to be treated through a common interface.",
      },
      {
        id: "mtq-2",
        text: "What is the time complexity of accessing an element in a hash map?",
        options: ["O(1) average", "O(n)", "O(log n)", "O(n^2)"],
        correctIndex: 0,
        explanation: "Hash maps provide O(1) average case access time using hash functions.",
      },
      {
        id: "mtq-3",
        text: "Which protocol does HTTPS use for encryption?",
        options: ["SSH", "TLS/SSL", "FTP", "SMTP"],
        correctIndex: 1,
        explanation: "HTTPS uses TLS (Transport Layer Security) / SSL for encrypted communication.",
      },
      {
        id: "mtq-4",
        text: "What is a race condition?",
        options: [
          "A fast algorithm",
          "When two threads access shared data simultaneously leading to unexpected results",
          "A type of sorting",
          "A network protocol"
        ],
        correctIndex: 1,
        explanation: "Race conditions occur when multiple threads access shared resources without proper synchronization.",
      },
      {
        id: "mtq-5",
        text: "What is dependency injection?",
        options: [
          "Injecting code at runtime",
          "Providing dependencies to a class from outside rather than creating them internally",
          "A security vulnerability",
          "A database technique"
        ],
        correctIndex: 1,
        explanation: "DI is a design pattern where dependencies are provided externally, improving testability and modularity.",
      },
      {
        id: "mtq-6",
        text: "In Git, what does 'rebase' do?",
        options: [
          "Deletes a branch",
          "Moves commits to a new base commit",
          "Creates a new repository",
          "Reverts changes"
        ],
        correctIndex: 1,
        explanation: "Rebase re-applies commits on top of another base tip, creating a linear history.",
      },
      {
        id: "mtq-7",
        text: "What is the Observer design pattern?",
        options: [
          "Creating objects from a template",
          "A one-to-many dependency where changes notify all dependents",
          "Restricting access to methods",
          "Wrapping objects with extra functionality"
        ],
        correctIndex: 1,
        explanation: "Observer pattern defines a subscription mechanism to notify multiple objects about state changes.",
      },
      {
        id: "mtq-8",
        text: "What is the purpose of an index in a database?",
        options: [
          "To store data",
          "To speed up data retrieval operations",
          "To encrypt data",
          "To delete duplicate rows"
        ],
        correctIndex: 1,
        explanation: "Database indexes improve query performance by providing quick lookup paths to data.",
      },
    ],
  },
  {
    id: "test-meta-sde",
    companyId: "meta",
    roleId: "sde",
    title: "Meta SDE Assessment",
    duration: 30,
    questions: [
      {
        id: "ftq-1",
        text: "What is a closure in JavaScript?",
        options: [
          "A way to close a window",
          "A function that remembers its outer scope even after the outer function has returned",
          "A type of loop",
          "A database connection"
        ],
        correctIndex: 1,
        explanation: "Closures allow inner functions to access outer function variables even after the outer function exits.",
      },
      {
        id: "ftq-2",
        text: "What data structure would you use to implement a social network's friend graph?",
        options: ["Array", "Stack", "Graph (Adjacency List)", "Queue"],
        correctIndex: 2,
        explanation: "A graph with adjacency lists efficiently represents friend connections in social networks.",
      },
      {
        id: "ftq-3",
        text: "What is sharding in databases?",
        options: [
          "Replicating data",
          "Splitting data across multiple databases",
          "Encrypting data",
          "Compressing data"
        ],
        correctIndex: 1,
        explanation: "Sharding distributes data across multiple database instances for horizontal scaling.",
      },
      {
        id: "ftq-4",
        text: "What is the difference between == and === in JavaScript?",
        options: [
          "No difference",
          "== checks value only, === checks value and type",
          "=== checks value only",
          "== is for strings, === is for numbers"
        ],
        correctIndex: 1,
        explanation: "== performs type coercion before comparison, while === checks both value and type strictly.",
      },
      {
        id: "ftq-5",
        text: "What is React's reconciliation algorithm?",
        options: [
          "A sorting algorithm",
          "The process of comparing Virtual DOM trees to determine minimal DOM updates",
          "A routing mechanism",
          "A state management pattern"
        ],
        correctIndex: 1,
        explanation: "React's reconciliation efficiently diffs Virtual DOM trees to minimize actual DOM mutations.",
      },
      {
        id: "ftq-6",
        text: "What is the purpose of a CDN?",
        options: [
          "To compile code",
          "To deliver content from servers geographically closest to users",
          "To write databases",
          "To create APIs"
        ],
        correctIndex: 1,
        explanation: "CDNs cache and serve content from edge locations near users to reduce latency.",
      },
      {
        id: "ftq-7",
        text: "What is a memory leak?",
        options: [
          "RAM that is physically damaged",
          "Memory that is allocated but never freed, leading to increasing memory usage",
          "Data that is lost during transfer",
          "A security breach"
        ],
        correctIndex: 1,
        explanation: "Memory leaks occur when programs allocate memory but fail to release it when no longer needed.",
      },
      {
        id: "ftq-8",
        text: "In distributed systems, what is a consensus algorithm?",
        options: [
          "A sorting algorithm",
          "An algorithm that ensures all nodes agree on a single value",
          "A compression algorithm",
          "A routing algorithm"
        ],
        correctIndex: 1,
        explanation: "Consensus algorithms (like Raft, Paxos) ensure agreement across distributed nodes.",
      },
    ],
  },
  {
    id: "test-flipkart-sde",
    companyId: "flipkart",
    roleId: "sde",
    title: "Flipkart SDE Assessment",
    duration: 30,
    questions: [
      {
        id: "fktq-1",
        text: "What is the sliding window technique? When would you use it?",
        options: [
          "A sorting technique",
          "A technique to reduce nested loops on contiguous subarrays/substrings to O(n)",
          "A database query method",
          "A UI design pattern"
        ],
        correctIndex: 1,
        explanation: "Sliding window converts O(n^2) brute force on contiguous elements to O(n) by maintaining a window.",
      },
      {
        id: "fktq-2",
        text: "What is the time complexity of finding an element in a balanced BST?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctIndex: 1,
        explanation: "A balanced BST halves the search space at each level, giving O(log n).",
      },
      {
        id: "fktq-3",
        text: "Which data structure is most efficient for implementing Trapping Rain Water?",
        options: ["Queue", "Two Pointers / Stack", "Linked List", "Trie"],
        correctIndex: 1,
        explanation: "Two pointers or a monotonic stack solve trapping rain water in O(n) time and O(1)/O(n) space.",
      },
      {
        id: "fktq-4",
        text: "What is memoization in dynamic programming?",
        options: [
          "Storing results in a database",
          "Caching results of expensive function calls to avoid recomputation",
          "A type of recursion",
          "Sorting before processing"
        ],
        correctIndex: 1,
        explanation: "Memoization stores computed results so overlapping subproblems are solved only once.",
      },
      {
        id: "fktq-5",
        text: "In a monotonic stack, elements are maintained in which order?",
        options: [
          "Random order",
          "Either strictly increasing or strictly decreasing order",
          "Alphabetical order",
          "FIFO order"
        ],
        correctIndex: 1,
        explanation: "A monotonic stack maintains elements in increasing or decreasing order, useful for next greater/smaller element problems.",
      },
      {
        id: "fktq-6",
        text: "What is the time complexity of Coin Change using DP (bottom-up)?",
        options: ["O(n)", "O(n * amount)", "O(2^n)", "O(n^2)"],
        correctIndex: 1,
        explanation: "Coin Change DP iterates over each coin for each amount value, giving O(n * amount).",
      },
      {
        id: "fktq-7",
        text: "What is the best data structure for finding the Kth largest element efficiently?",
        options: ["Array", "Min-Heap of size K", "Stack", "Queue"],
        correctIndex: 1,
        explanation: "A min-heap of size K gives O(n log k) time — better than sorting the entire array.",
      },
      {
        id: "fktq-8",
        text: "In Low Level Design, what SOLID principle states that a class should have only one reason to change?",
        options: [
          "Open/Closed Principle",
          "Single Responsibility Principle",
          "Liskov Substitution",
          "Dependency Inversion"
        ],
        correctIndex: 1,
        explanation: "SRP states each class should have one responsibility and one reason to change.",
      },
    ],
  },
  {
    id: "test-adobe-sde",
    companyId: "adobe",
    roleId: "sde",
    title: "Adobe SDE Assessment",
    duration: 30,
    questions: [
      {
        id: "adtq-1",
        text: "What is the Jump Game II problem asking?",
        options: [
          "Find if you can reach the end",
          "Find the minimum number of jumps to reach the last index",
          "Find the maximum jump length",
          "Sort the array of jumps"
        ],
        correctIndex: 1,
        explanation: "Jump Game II asks for the minimum number of jumps to reach the end, solved greedily in O(n).",
      },
      {
        id: "adtq-2",
        text: "Which traversal gives nodes sorted in ascending order for a BST?",
        options: ["Preorder", "Postorder", "Inorder", "Level order"],
        correctIndex: 2,
        explanation: "Inorder traversal of a BST visits nodes in ascending sorted order (left, root, right).",
      },
      {
        id: "adtq-3",
        text: "What algorithm finds the shortest path in an unweighted graph?",
        options: ["Dijkstra's", "BFS", "DFS", "Floyd-Warshall"],
        correctIndex: 1,
        explanation: "BFS explores level by level, naturally finding the shortest path in unweighted graphs.",
      },
      {
        id: "adtq-4",
        text: "What is the Word Ladder problem's optimal approach?",
        options: [
          "Dynamic programming",
          "BFS from beginWord to endWord, changing one letter at a time",
          "Binary search",
          "Greedy selection"
        ],
        correctIndex: 1,
        explanation: "Word Ladder uses BFS where each state is a word, and edges connect words differing by one letter.",
      },
      {
        id: "adtq-5",
        text: "How do you detect a cycle in an undirected graph using DFS?",
        options: [
          "Check if any node is visited twice",
          "If a visited neighbor is found that is not the parent of the current node",
          "Count the number of edges",
          "Use topological sort"
        ],
        correctIndex: 1,
        explanation: "In DFS for undirected graphs, a cycle exists if we visit a node that's already visited and isn't the parent.",
      },
      {
        id: "adtq-6",
        text: "What is Dijkstra's algorithm used for?",
        options: [
          "Finding minimum spanning tree",
          "Finding shortest path in a weighted graph with non-negative weights",
          "Topological sorting",
          "Finding strongly connected components"
        ],
        correctIndex: 1,
        explanation: "Dijkstra's finds shortest paths from a source to all vertices in a graph with non-negative edge weights.",
      },
      {
        id: "adtq-7",
        text: "What data structure combination is used to implement LRU Cache in O(1)?",
        options: [
          "Array + Stack",
          "HashMap + Doubly Linked List",
          "Queue + Tree",
          "Heap + Array"
        ],
        correctIndex: 1,
        explanation: "HashMap gives O(1) lookup; doubly linked list gives O(1) insert/delete for maintaining access order.",
      },
      {
        id: "adtq-8",
        text: "To construct a binary tree uniquely, which two traversals are needed?",
        options: [
          "Preorder + Postorder",
          "Inorder + Preorder (or Inorder + Postorder)",
          "Level order + Preorder",
          "Any single traversal is enough"
        ],
        correctIndex: 1,
        explanation: "Inorder combined with either preorder or postorder uniquely determines a binary tree structure.",
      },
    ],
  },
  {
    id: "test-uber-sde",
    companyId: "uber",
    roleId: "sde",
    title: "Uber SDE Assessment",
    duration: 30,
    questions: [
      {
        id: "ubtq-1",
        text: "What is the Cheapest Flights Within K Stops problem's optimal approach?",
        options: [
          "Simple DFS",
          "Modified Bellman-Ford or BFS with pruning",
          "Binary search",
          "Greedy algorithm"
        ],
        correctIndex: 1,
        explanation: "Modified Bellman-Ford running K+1 iterations or BFS with distance pruning solves this efficiently.",
      },
      {
        id: "ubtq-2",
        text: "What is geohashing used for in ride-sharing platforms?",
        options: [
          "Encrypting user data",
          "Encoding geographic locations into short strings for efficient spatial indexing",
          "Hashing user passwords",
          "Compressing map images"
        ],
        correctIndex: 1,
        explanation: "Geohashing converts lat/lng into a string, enabling efficient proximity queries for nearby drivers.",
      },
      {
        id: "ubtq-3",
        text: "What is topological sort used for?",
        options: [
          "Sorting numbers",
          "Ordering tasks/nodes in a DAG respecting dependencies",
          "Finding shortest path",
          "Balancing a tree"
        ],
        correctIndex: 1,
        explanation: "Topological sort orders vertices in a DAG such that for every edge u→v, u comes before v.",
      },
      {
        id: "ubtq-4",
        text: "What is an idempotent API operation?",
        options: [
          "An operation that runs faster each time",
          "An operation that produces the same result no matter how many times it is called",
          "An operation that deletes data",
          "An operation that requires authentication"
        ],
        correctIndex: 1,
        explanation: "Idempotent operations yield the same result for repeated calls — critical for payment systems to avoid double-charging.",
      },
      {
        id: "ubtq-5",
        text: "What is the token bucket algorithm used for?",
        options: [
          "Authentication",
          "Rate limiting API requests",
          "Sorting tokens",
          "Database indexing"
        ],
        correctIndex: 1,
        explanation: "Token bucket allows a burst of requests up to bucket capacity, then limits to a steady rate.",
      },
      {
        id: "ubtq-6",
        text: "How does Uber match riders to drivers in real-time?",
        options: [
          "Random assignment",
          "Geospatial indexing + matching algorithm considering distance, ETA, and driver rating",
          "First-come-first-served queue",
          "Round robin"
        ],
        correctIndex: 1,
        explanation: "Uber uses geospatial indexes to find nearby drivers and a matching algorithm optimizing for ETA and other factors.",
      },
      {
        id: "ubtq-7",
        text: "What is the merge intervals problem's time complexity after sorting?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        correctIndex: 1,
        explanation: "Sorting takes O(n log n), then merging is a single O(n) pass, so overall O(n log n).",
      },
      {
        id: "ubtq-8",
        text: "What is surge pricing based on?",
        options: [
          "Random multipliers",
          "Real-time supply (available drivers) and demand (ride requests) in a geographic area",
          "Time of day only",
          "Distance only"
        ],
        correctIndex: 1,
        explanation: "Surge pricing dynamically adjusts based on the ratio of ride requests to available drivers in an area.",
      },
    ],
  },
  {
    id: "test-salesforce-sde",
    companyId: "salesforce",
    roleId: "sde",
    title: "Salesforce SDE Assessment",
    duration: 25,
    questions: [
      {
        id: "sftq-1",
        text: "What is multi-tenancy in cloud architecture?",
        options: [
          "Multiple servers for one user",
          "A single instance of software serving multiple customers with isolated data",
          "Multiple databases",
          "A backup strategy"
        ],
        correctIndex: 1,
        explanation: "Multi-tenancy lets one software instance serve many customers, isolating their data — core to Salesforce's architecture.",
      },
      {
        id: "sftq-2",
        text: "What is the GROUP BY clause used for in SQL?",
        options: [
          "Sorting results",
          "Grouping rows sharing a property to apply aggregate functions",
          "Joining tables",
          "Filtering rows"
        ],
        correctIndex: 1,
        explanation: "GROUP BY groups rows with the same values, enabling aggregate functions like COUNT, SUM, AVG on each group.",
      },
      {
        id: "sftq-3",
        text: "What is the purpose of dependency injection?",
        options: [
          "Injecting SQL queries",
          "Providing external dependencies to a class to improve testability and loose coupling",
          "Injecting CSS styles",
          "A security measure"
        ],
        correctIndex: 1,
        explanation: "DI decouples class creation from dependency creation, making code testable and modular.",
      },
      {
        id: "sftq-4",
        text: "What are anagrams? How would you check if two strings are anagrams?",
        options: [
          "Strings with the same length",
          "Strings that contain the same characters in any order with equal frequency",
          "Strings that are palindromes",
          "Strings that are reversed"
        ],
        correctIndex: 1,
        explanation: "Anagrams have identical character frequencies. Check by sorting both strings or using a frequency map.",
      },
      {
        id: "sftq-5",
        text: "What are governor limits in Salesforce?",
        options: [
          "Limits on UI components",
          "Runtime limits on SOQL queries, DML operations, and CPU time to ensure fair resource sharing",
          "Limits on user accounts",
          "File size limits"
        ],
        correctIndex: 1,
        explanation: "Governor limits prevent any single tenant from monopolizing shared resources in Salesforce's multi-tenant environment.",
      },
      {
        id: "sftq-6",
        text: "What is the best approach to find the longest palindromic substring?",
        options: [
          "Check all substrings — O(n^3)",
          "Expand around center — O(n^2) or Manacher's algorithm — O(n)",
          "Use a stack",
          "Sort the string first"
        ],
        correctIndex: 1,
        explanation: "Expanding around each center checks palindromes in O(n^2). Manacher's algorithm achieves O(n).",
      },
      {
        id: "sftq-7",
        text: "In REST APIs, what HTTP method should be used for updating a resource?",
        options: ["GET", "POST", "PUT/PATCH", "DELETE"],
        correctIndex: 2,
        explanation: "PUT replaces the entire resource; PATCH partially updates it. Both are used for updates.",
      },
      {
        id: "sftq-8",
        text: "What is the difference between unit testing and integration testing?",
        options: [
          "No difference",
          "Unit tests test individual components in isolation; integration tests test components working together",
          "Unit tests are manual; integration tests are automated",
          "Integration tests are faster"
        ],
        correctIndex: 1,
        explanation: "Unit tests verify isolated units (functions/classes); integration tests verify interactions between components.",
      },
    ],
  },
  {
    id: "test-netflix-sde",
    companyId: "netflix",
    roleId: "sde",
    title: "Netflix SDE Assessment",
    duration: 30,
    questions: [
      {
        id: "nftq-1",
        text: "What is the circuit breaker pattern in microservices?",
        options: [
          "A hardware component",
          "A pattern that prevents cascading failures by stopping calls to a failing service",
          "A network switch",
          "A load balancing technique"
        ],
        correctIndex: 1,
        explanation: "Circuit breakers detect failures and prevent cascading issues by temporarily halting calls to failing services.",
      },
      {
        id: "nftq-2",
        text: "What is adaptive bitrate streaming?",
        options: [
          "Streaming at a fixed quality",
          "Dynamically adjusting video quality based on network bandwidth and device capabilities",
          "Compressing all videos to the lowest quality",
          "A type of audio streaming"
        ],
        correctIndex: 1,
        explanation: "ABR streaming adjusts quality in real-time based on network conditions for smooth playback.",
      },
      {
        id: "nftq-3",
        text: "What is Chaos Monkey?",
        options: [
          "A testing framework",
          "A Netflix tool that randomly terminates production instances to test system resilience",
          "A code review tool",
          "A deployment pipeline"
        ],
        correctIndex: 1,
        explanation: "Chaos Monkey randomly kills instances in production to ensure Netflix's infrastructure handles failures gracefully.",
      },
      {
        id: "nftq-4",
        text: "What is the time complexity of merging overlapping intervals after sorting?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        correctIndex: 1,
        explanation: "Sorting takes O(n log n) and the merge pass is O(n), so overall O(n log n).",
      },
      {
        id: "nftq-5",
        text: "What is collaborative filtering in recommendation systems?",
        options: [
          "Filtering inappropriate content",
          "Making predictions based on the behavior of similar users or items",
          "Filtering network traffic",
          "A type of data compression"
        ],
        correctIndex: 1,
        explanation: "Collaborative filtering recommends items based on preferences of similar users (user-based) or similar items (item-based).",
      },
      {
        id: "nftq-6",
        text: "What is the CAP theorem?",
        options: [
          "A sorting theorem",
          "In a distributed system, you can only guarantee 2 of 3: Consistency, Availability, Partition Tolerance",
          "A database optimization rule",
          "A network routing protocol"
        ],
        correctIndex: 1,
        explanation: "CAP theorem states distributed systems must trade off between consistency, availability, and partition tolerance.",
      },
      {
        id: "nftq-7",
        text: "What is the greedy approach for the Activity Selection problem?",
        options: [
          "Select activities with the earliest start time",
          "Select activities with the earliest finish time, skipping conflicts",
          "Select the longest activities",
          "Select randomly"
        ],
        correctIndex: 1,
        explanation: "Sorting by finish time and greedily picking non-overlapping activities maximizes the number of selections.",
      },
      {
        id: "nftq-8",
        text: "What is A/B testing?",
        options: [
          "Testing two databases",
          "Comparing two versions of a feature by splitting users into groups to measure impact",
          "Testing APIs",
          "A type of load testing"
        ],
        correctIndex: 1,
        explanation: "A/B testing randomly assigns users to variants and measures which performs better on key metrics.",
      },
    ],
  },

  // ===== AI ENGINEER TEST - GOOGLE =====
  {
    id: "test-google-ai",
    companyId: "google",
    roleId: "ai-engineer",
    title: "Google AI Engineer Assessment",
    duration: 30,
    questions: [
      {
        id: "gaitq-1",
        text: "What does RAG stand for in the context of LLM applications?",
        options: ["Random Access Generation", "Retrieval Augmented Generation", "Reinforcement And Grounding", "Recursive Attention Gate"],
        correctIndex: 1,
        explanation: "RAG (Retrieval Augmented Generation) enhances LLM responses by retrieving relevant documents from an external knowledge base before generating answers.",
      },
      {
        id: "gaitq-2",
        text: "Which vector similarity metric is most commonly used for semantic search with normalized embeddings?",
        options: ["Euclidean distance", "Manhattan distance", "Cosine similarity", "Jaccard index"],
        correctIndex: 2,
        explanation: "Cosine similarity measures the angle between vectors and is the standard choice for semantic search with normalized embedding vectors.",
      },
      {
        id: "gaitq-3",
        text: "What is prompt injection?",
        options: ["Adding more tokens to increase speed", "An attack where malicious instructions are embedded in user input to override LLM system prompts", "A technique for compressing prompts", "Injecting prompts into the training data"],
        correctIndex: 1,
        explanation: "Prompt injection is a security vulnerability where attackers craft inputs that manipulate the LLM into ignoring its system instructions.",
      },
      {
        id: "gaitq-4",
        text: "What is LoRA (Low-Rank Adaptation) used for?",
        options: ["Faster inference on GPUs", "Parameter-efficient fine-tuning of large models by training small rank decomposition matrices", "Data augmentation for training", "Reducing model size for deployment"],
        correctIndex: 1,
        explanation: "LoRA adds small trainable matrices to frozen model weights, enabling fine-tuning with far fewer parameters than full fine-tuning.",
      },
      {
        id: "gaitq-5",
        text: "In a RAG pipeline, what is 'chunking'?",
        options: ["Compressing the model", "Splitting documents into smaller pieces for embedding and retrieval", "Batching API requests", "Dividing GPU memory"],
        correctIndex: 1,
        explanation: "Chunking divides large documents into smaller segments that can be individually embedded and retrieved, affecting retrieval quality significantly.",
      },
      {
        id: "gaitq-6",
        text: "What is the purpose of a 'system prompt' in LLM applications?",
        options: ["To train the model", "To set the AI assistant's behavior, role, and constraints before user interaction", "To optimize token usage", "To compress previous messages"],
        correctIndex: 1,
        explanation: "System prompts define the AI's persona, instructions, and guardrails, shaping how it responds to all subsequent user messages.",
      },
      {
        id: "gaitq-7",
        text: "What is 'hallucination' in the context of LLMs?",
        options: ["GPU memory corruption", "When the model generates plausible-sounding but factually incorrect information", "A training data error", "A type of model architecture"],
        correctIndex: 1,
        explanation: "LLM hallucination occurs when the model confidently generates information that is factually wrong, made up, or not grounded in the provided context.",
      },
      {
        id: "gaitq-8",
        text: "What is chain-of-thought (CoT) prompting?",
        options: ["Connecting multiple LLMs in a pipeline", "Asking the model to show its reasoning step-by-step before giving a final answer", "Training on sequential data", "A memory management technique"],
        correctIndex: 1,
        explanation: "Chain-of-thought prompting improves reasoning by instructing the model to break down problems step-by-step, leading to more accurate answers on complex tasks.",
      },
      {
        id: "gaitq-9",
        text: "What is the 'temperature' parameter in LLM generation?",
        options: ["GPU thermal throttling setting", "Controls randomness in token selection — lower is more deterministic, higher is more creative", "The learning rate for fine-tuning", "The rate limit for API calls"],
        correctIndex: 1,
        explanation: "Temperature scales the logits before softmax: 0 makes output deterministic (greedy), while higher values increase randomness and diversity in responses.",
      },
      {
        id: "gaitq-10",
        text: "What is function calling / tool use in LLMs?",
        options: ["Calling Python functions during training", "The ability for an LLM to output structured calls to external tools (APIs, databases, code) as part of its response", "A debugging technique", "Using functions to pre-process training data"],
        correctIndex: 1,
        explanation: "Function calling allows LLMs to interact with external systems by generating structured tool invocations, enabling AI agents to take actions in the real world.",
      },
    ],
  },

  // ===== STRIPE - SDE =====
  {
    id: "test-stripe-sde",
    companyId: "stripe",
    roleId: "sde",
    title: "Stripe SDE Assessment",
    duration: 25,
    questions: [
      {
        id: "strtq-1",
        text: "What is idempotency in the context of payment APIs?",
        options: ["Making requests faster", "Ensuring that making the same request multiple times produces the same result without side effects", "A type of encryption", "Load balancing technique"],
        correctIndex: 1,
        explanation: "Idempotency ensures that retrying a payment request (e.g., due to network timeout) doesn't result in duplicate charges — critical for financial systems.",
      },
      {
        id: "strtq-2",
        text: "What is PCI-DSS?",
        options: ["A programming language", "Payment Card Industry Data Security Standard — security requirements for handling card data", "A database type", "A networking protocol"],
        correctIndex: 1,
        explanation: "PCI-DSS is a set of security standards that any organization handling credit card data must comply with to protect cardholders.",
      },
      {
        id: "strtq-3",
        text: "In a webhook delivery system, what is a dead letter queue?",
        options: ["A queue for deleted messages", "A separate queue where messages that fail delivery after maximum retries are stored for investigation", "A priority queue", "A temporary cache"],
        correctIndex: 1,
        explanation: "Dead letter queues capture messages that couldn't be delivered after all retry attempts, allowing operators to investigate and reprocess them.",
      },
      {
        id: "strtq-4",
        text: "What is the best approach for a payment state machine?",
        options: ["Store only the latest state", "Use event sourcing to record all state transitions as an immutable log", "Delete failed transactions", "Use a single boolean flag"],
        correctIndex: 1,
        explanation: "Event sourcing records every state transition (created → processing → succeeded), providing a complete audit trail essential for financial systems.",
      },
      {
        id: "strtq-5",
        text: "What is double-entry bookkeeping in software systems?",
        options: ["Backing up data twice", "Every transaction creates two entries (debit and credit) that must balance to zero", "Using two databases", "Duplicate validation"],
        correctIndex: 1,
        explanation: "Double-entry bookkeeping ensures financial integrity by recording every transaction as matching debit and credit entries that always balance.",
      },
      {
        id: "strtq-6",
        text: "What is exponential backoff in retry logic?",
        options: ["Retrying faster each time", "Increasing the wait time exponentially between retries (1s, 2s, 4s, 8s...)", "Limiting the number of retries", "A load balancing strategy"],
        correctIndex: 1,
        explanation: "Exponential backoff prevents overwhelming a failing service by progressively increasing wait time between retry attempts, often with jitter.",
      },
      {
        id: "strtq-7",
        text: "What is tokenization in payment processing?",
        options: ["Breaking text into tokens", "Replacing sensitive card data with a non-sensitive placeholder (token) for secure storage", "A cryptocurrency concept", "API key generation"],
        correctIndex: 1,
        explanation: "Tokenization replaces credit card numbers with unique tokens, so the actual card data never needs to be stored in the merchant's system.",
      },
      {
        id: "strtq-8",
        text: "How does Stripe handle currency conversion for international payments?",
        options: ["It doesn't support multiple currencies", "Uses real-time exchange rates with transparent fees, settling in the merchant's preferred currency", "Requires manual conversion", "Uses a fixed exchange rate"],
        correctIndex: 1,
        explanation: "Stripe automatically converts currencies using current exchange rates and charges a transparent conversion fee, simplifying international payments.",
      },
    ],
  },

  // ===== LINKEDIN - SDE =====
  {
    id: "test-linkedin-sde",
    companyId: "linkedin",
    roleId: "sde",
    title: "LinkedIn SDE Assessment",
    duration: 25,
    questions: [
      {
        id: "litq-1",
        text: "What algorithm is best for finding 'degrees of separation' between two people in a social network?",
        options: ["DFS", "BFS (Bidirectional)", "Dijkstra's", "Bellman-Ford"],
        correctIndex: 1,
        explanation: "Bidirectional BFS is optimal for finding shortest paths in unweighted social graphs — it searches from both ends simultaneously, drastically reducing search space.",
      },
      {
        id: "litq-2",
        text: "What is the 'People You May Know' feature based on?",
        options: ["Random suggestions", "Mutual connections, shared companies, shared schools, and interaction patterns", "Alphabetical order", "Sign-up date"],
        correctIndex: 1,
        explanation: "LinkedIn uses graph-based algorithms considering mutual connections, shared affiliations, profile similarities, and behavioral signals.",
      },
      {
        id: "litq-3",
        text: "What data structure is ideal for implementing an LRU Cache?",
        options: ["Array + Binary Search", "HashMap + Doubly Linked List", "Stack + Queue", "Trie + Heap"],
        correctIndex: 1,
        explanation: "HashMap provides O(1) lookup while the doubly linked list maintains access order, enabling O(1) eviction of the least recently used item.",
      },
      {
        id: "litq-4",
        text: "For LinkedIn's feed ranking, which approach combines multiple ranking signals?",
        options: ["Random shuffle", "Learning to Rank (LTR) models that combine relevance, engagement prediction, and creator quality", "Chronological order only", "Popularity count"],
        correctIndex: 1,
        explanation: "Learning to Rank models take multiple features (content quality, user engagement history, connection strength) and optimize for engagement metrics.",
      },
      {
        id: "litq-5",
        text: "What is the Maximal Rectangle problem useful for?",
        options: ["Image compression", "Finding the largest rectangular area containing all 1s in a binary matrix using a stack-based histogram approach", "Database indexing", "CSS layout"],
        correctIndex: 1,
        explanation: "The Maximal Rectangle problem extends the largest histogram approach row by row, commonly asked at LinkedIn for its stack-based O(m*n) solution.",
      },
      {
        id: "litq-6",
        text: "How does LinkedIn handle 2 billion+ API calls daily?",
        options: ["Single monolithic server", "Microservices architecture with service mesh, load balancing, and caching layers", "Serverless functions only", "Manual scaling"],
        correctIndex: 1,
        explanation: "LinkedIn uses a microservices architecture with Rest.li framework, Apache Kafka for async messaging, and extensive caching with Espresso/Voldemort.",
      },
      {
        id: "litq-7",
        text: "What type of database is best for storing a social graph (connections)?",
        options: ["Relational only", "Graph database or adjacency list representation optimized for traversal queries", "Key-value store", "Document database"],
        correctIndex: 1,
        explanation: "Social graphs benefit from graph databases or specialized adjacency representations that optimize for traversal queries (finding connections of connections).",
      },
      {
        id: "litq-8",
        text: "What is topological sort used for?",
        options: ["Sorting arrays", "Finding a valid ordering of nodes in a DAG where all dependencies come before dependents", "Sorting strings", "Database query optimization"],
        correctIndex: 1,
        explanation: "Topological sort orders nodes in a directed acyclic graph such that for every edge u→v, u comes before v — used for task scheduling and dependency resolution.",
      },
    ],
  },

  // ===== RAZORPAY - SDE =====
  {
    id: "test-razorpay-sde",
    companyId: "razorpay",
    roleId: "sde",
    title: "Razorpay SDE Assessment",
    duration: 25,
    questions: [
      {
        id: "rztq-1",
        text: "What is UPI in the Indian payment ecosystem?",
        options: ["Universal Payment Interface", "Unified Payments Interface — a real-time inter-bank payment system built by NPCI", "User Payment Integration", "Unified Processing Interface"],
        correctIndex: 1,
        explanation: "UPI (Unified Payments Interface) is India's real-time payment system by NPCI that enables instant money transfers between bank accounts via mobile.",
      },
      {
        id: "rztq-2",
        text: "What is T+2 settlement in payment processing?",
        options: ["Transaction takes 2 seconds", "Funds are settled to the merchant's bank account 2 business days after the transaction", "Two-factor authentication", "Two-phase commit"],
        correctIndex: 1,
        explanation: "T+2 means the merchant receives the funds in their bank account two business days after the customer's payment is captured.",
      },
      {
        id: "rztq-3",
        text: "What is the Saga pattern in distributed transactions?",
        options: ["A database backup strategy", "A pattern where a distributed transaction is broken into local transactions with compensating actions for rollback", "A testing methodology", "A deployment pattern"],
        correctIndex: 1,
        explanation: "The Saga pattern manages distributed transactions by executing a sequence of local transactions, each with a compensating transaction for rollback if any step fails.",
      },
      {
        id: "rztq-4",
        text: "What is the subset sum problem relevant to in payment systems?",
        options: ["Encrypting payments", "Reconciliation — finding which combination of transactions matches a settlement amount", "Load balancing", "Rate limiting"],
        correctIndex: 1,
        explanation: "Subset sum is used in payment reconciliation to match which combination of individual transactions add up to a specific settlement or bank transfer amount.",
      },
      {
        id: "rztq-5",
        text: "How do you prevent double-spending in concurrent transactions?",
        options: ["Use a bigger database", "Implement optimistic or pessimistic locking with unique transaction IDs and idempotency keys", "Add more servers", "Use eventual consistency"],
        correctIndex: 1,
        explanation: "Preventing double-spending requires locking mechanisms (optimistic/pessimistic), unique transaction identifiers, and idempotency to handle retries safely.",
      },
      {
        id: "rztq-6",
        text: "What is event sourcing?",
        options: ["Using events for UI", "Storing all changes as an immutable sequence of events rather than just the current state", "Event-driven CSS", "A testing technique"],
        correctIndex: 1,
        explanation: "Event sourcing persists every state change as an immutable event, providing a complete audit trail and the ability to reconstruct any past state — ideal for financial systems.",
      },
      {
        id: "rztq-7",
        text: "What is a payment gateway vs a payment processor?",
        options: ["They are the same thing", "Gateway authorizes and routes the transaction; Processor actually moves money between banks", "Gateway is frontend, Processor is backend code", "Gateway is for online, Processor is for offline"],
        correctIndex: 1,
        explanation: "The payment gateway securely captures and routes payment info, while the processor handles the actual fund transfer between issuing and acquiring banks.",
      },
      {
        id: "rztq-8",
        text: "What is dunning in subscription billing?",
        options: ["Canceling subscriptions", "The process of automatically retrying failed recurring payments and communicating with the customer", "Upgrading plans", "Processing refunds"],
        correctIndex: 1,
        explanation: "Dunning is the automated process of retrying failed recurring charges, sending payment failure notifications, and managing subscription status based on payment outcomes.",
      },
    ],
  },

  // ===== ZOMATO - SDE =====
  {
    id: "test-zomato-sde",
    companyId: "zomato",
    roleId: "sde",
    title: "Zomato SDE Assessment",
    duration: 25,
    questions: [
      {
        id: "zmtq-1",
        text: "What data structure is best for finding the nearest restaurants to a user's location?",
        options: ["Array", "K-D Tree or Geohash-based spatial index", "Linked List", "Stack"],
        correctIndex: 1,
        explanation: "Spatial data structures like K-D Trees, R-Trees, or Geohash indexes efficiently support 'find nearest' queries on geographic coordinates.",
      },
      {
        id: "zmtq-2",
        text: "How would you design surge pricing for food delivery?",
        options: ["Fixed prices always", "Dynamic pricing based on demand/supply ratio, weather, time of day, and area-level order density", "Random markup", "User-based pricing"],
        correctIndex: 1,
        explanation: "Surge pricing uses real-time signals (order volume, available riders, weather conditions) to adjust delivery fees and balance supply with demand.",
      },
      {
        id: "zmtq-3",
        text: "What algorithm is best for assigning delivery orders to riders?",
        options: ["Random assignment", "Hungarian algorithm or greedy matching considering distance, current load, and estimated delivery time", "Round-robin", "FIFO queue"],
        correctIndex: 1,
        explanation: "Order-rider matching uses optimization algorithms that minimize total delivery time by considering rider location, restaurant location, and current order load.",
      },
      {
        id: "zmtq-4",
        text: "What is BFS useful for in a food delivery context?",
        options: ["Sorting restaurants", "Finding the shortest delivery path in a city grid avoiding blocked roads", "Calculating ratings", "Processing payments"],
        correctIndex: 1,
        explanation: "BFS finds the shortest path in an unweighted grid graph, applicable to finding optimal delivery routes in a city grid with obstacles.",
      },
      {
        id: "zmtq-5",
        text: "How would you prevent fake reviews on a restaurant platform?",
        options: ["Allow all reviews", "ML-based detection using patterns (review velocity, device fingerprinting, NLP analysis) combined with verification", "Manual review of all posts", "Disable reviews"],
        correctIndex: 1,
        explanation: "Fake review detection combines ML models (analyzing text patterns, posting behavior, device data) with verification mechanisms like order-verified reviews.",
      },
      {
        id: "zmtq-6",
        text: "What is a priority queue useful for in delivery systems?",
        options: ["Sorting menu items", "Managing order priority based on urgency, delivery time, and customer tier (Gold/Pro)", "Storing restaurant data", "Authentication"],
        correctIndex: 1,
        explanation: "Priority queues help manage order dispatching where premium customers, time-sensitive orders, or nearby riders get higher priority in assignment.",
      },
      {
        id: "zmtq-7",
        text: "What is geohashing?",
        options: ["Encrypting GPS data", "Encoding geographic coordinates into a short string where nearby locations share a common prefix", "A routing algorithm", "A database type"],
        correctIndex: 1,
        explanation: "Geohashing converts lat/lng into a hierarchical string where nearby points share prefixes, enabling efficient proximity queries using simple string comparisons.",
      },
      {
        id: "zmtq-8",
        text: "How would you estimate delivery time for an order?",
        options: ["Fixed 30 minutes for all", "ML model using restaurant prep time, rider distance, traffic conditions, time of day, and historical data", "Random estimate", "Ask the restaurant"],
        correctIndex: 1,
        explanation: "ETA prediction uses ML models trained on historical delivery data, real-time traffic, restaurant preparation patterns, and rider availability.",
      },
    ],
  },
];

export function getTestsByCompanyAndRole(companyId: string, roleId: string): Test[] {
  return tests.filter((t) => t.companyId === companyId && t.roleId === roleId);
}

export function getTestById(id: string): Test | undefined {
  return tests.find((t) => t.id === id);
}

import { Question } from "@/types/database";

export const questions: Question[] = [
  // ===== GOOGLE - SDE =====
  { id: "g-sde-1", companyId: "google", roleId: "sde", text: "Given an array of integers, find two numbers such that they add up to a specific target (Two Sum).", category: "Arrays", difficulty: "Easy" },
  { id: "g-sde-2", companyId: "google", roleId: "sde", text: "Implement an LRU Cache with O(1) get and put operations.", category: "Design", difficulty: "Medium" },
  { id: "g-sde-3", companyId: "google", roleId: "sde", text: "Given a string, find the length of the longest substring without repeating characters.", category: "Strings", difficulty: "Medium" },
  { id: "g-sde-4", companyId: "google", roleId: "sde", text: "Serialize and deserialize a binary tree.", category: "Trees", difficulty: "Hard" },
  { id: "g-sde-5", companyId: "google", roleId: "sde", text: "Design a system to find the median from a data stream.", category: "Heap", difficulty: "Hard" },
  { id: "g-sde-6", companyId: "google", roleId: "sde", text: "Implement a Trie (Prefix Tree) with insert, search, and startsWith methods.", category: "Trie", difficulty: "Medium" },
  { id: "g-sde-7", companyId: "google", roleId: "sde", text: "Given a 2D board and a word, find if the word exists in the grid (Word Search).", category: "Backtracking", difficulty: "Medium" },
  { id: "g-sde-8", companyId: "google", roleId: "sde", text: "Find the kth largest element in an unsorted array.", category: "Sorting", difficulty: "Medium" },
  { id: "g-sde-9", companyId: "google", roleId: "sde", text: "Explain how Google Search ranking works at a high level. How would you design a simplified version?", category: "System Design", difficulty: "Hard" },
  { id: "g-sde-10", companyId: "google", roleId: "sde", text: "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.", category: "Arrays", difficulty: "Hard" },
  { id: "g-sde-11", companyId: "google", roleId: "sde", text: "Implement wildcard pattern matching with support for '?' and '*'.", category: "Dynamic Programming", difficulty: "Hard" },
  { id: "g-sde-12", companyId: "google", roleId: "sde", text: "Design a URL shortening service like bit.ly.", category: "System Design", difficulty: "Medium" },

  // ===== GOOGLE - DEVOPS =====
  { id: "g-devops-1", companyId: "google", roleId: "devops", text: "What is Kubernetes and how does Google use it internally (Borg)?", category: "Containers", difficulty: "Medium" },
  { id: "g-devops-2", companyId: "google", roleId: "devops", text: "Explain the concept of Site Reliability Engineering (SRE) and how it differs from traditional DevOps.", category: "SRE", difficulty: "Medium" },
  { id: "g-devops-3", companyId: "google", roleId: "devops", text: "How would you design a CI/CD pipeline for a microservices architecture?", category: "CI/CD", difficulty: "Hard" },
  { id: "g-devops-4", companyId: "google", roleId: "devops", text: "What are SLIs, SLOs, and SLAs? Give examples for a web application.", category: "SRE", difficulty: "Medium" },
  { id: "g-devops-5", companyId: "google", roleId: "devops", text: "Explain how you would troubleshoot a production outage affecting 10% of users.", category: "Incident Management", difficulty: "Hard" },

  // ===== AMAZON - SDE =====
  { id: "a-sde-1", companyId: "amazon", roleId: "sde", text: "Design an online marketplace system like Amazon. Discuss the high-level architecture.", category: "System Design", difficulty: "Hard" },
  { id: "a-sde-2", companyId: "amazon", roleId: "sde", text: "Given a list of reviews, implement a function to detect fake reviews using simple heuristics.", category: "Strings", difficulty: "Medium" },
  { id: "a-sde-3", companyId: "amazon", roleId: "sde", text: "Implement a min-stack that supports push, pop, top, and retrieving the minimum element in O(1).", category: "Stack", difficulty: "Easy" },
  { id: "a-sde-4", companyId: "amazon", roleId: "sde", text: "Given a warehouse with shelves in a grid, find the shortest path for a robot to collect all items (BFS/DFS).", category: "Graphs", difficulty: "Hard" },
  { id: "a-sde-5", companyId: "amazon", roleId: "sde", text: "Describe Amazon's Leadership Principles. Which one resonates with you and why?", category: "Behavioral", difficulty: "Easy" },
  { id: "a-sde-6", companyId: "amazon", roleId: "sde", text: "Merge k sorted linked lists and return it as one sorted list.", category: "Linked List", difficulty: "Hard" },
  { id: "a-sde-7", companyId: "amazon", roleId: "sde", text: "Design an order tracking system that can handle millions of concurrent orders.", category: "System Design", difficulty: "Hard" },
  { id: "a-sde-8", companyId: "amazon", roleId: "sde", text: "Given a matrix of 0s and 1s, find the number of islands (connected components of 1s).", category: "Graphs", difficulty: "Medium" },
  { id: "a-sde-9", companyId: "amazon", roleId: "sde", text: "Implement an autocomplete/typeahead suggestion system.", category: "Trie", difficulty: "Medium" },
  { id: "a-sde-10", companyId: "amazon", roleId: "sde", text: "What is the difference between SQL and NoSQL? When would you use DynamoDB vs RDS?", category: "Databases", difficulty: "Medium" },

  // ===== MICROSOFT - SDE =====
  { id: "ms-sde-1", companyId: "microsoft", roleId: "sde", text: "Reverse a linked list both iteratively and recursively.", category: "Linked List", difficulty: "Easy" },
  { id: "ms-sde-2", companyId: "microsoft", roleId: "sde", text: "Design a chat application like Microsoft Teams. Discuss real-time messaging architecture.", category: "System Design", difficulty: "Hard" },
  { id: "ms-sde-3", companyId: "microsoft", roleId: "sde", text: "Implement a function to check if a binary tree is a valid Binary Search Tree.", category: "Trees", difficulty: "Medium" },
  { id: "ms-sde-4", companyId: "microsoft", roleId: "sde", text: "Given a string of parentheses, determine if it is valid (properly opened and closed).", category: "Stack", difficulty: "Easy" },
  { id: "ms-sde-5", companyId: "microsoft", roleId: "sde", text: "Design a file synchronization system like OneDrive.", category: "System Design", difficulty: "Hard" },
  { id: "ms-sde-6", companyId: "microsoft", roleId: "sde", text: "Find the longest palindromic substring in a given string.", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "ms-sde-7", companyId: "microsoft", roleId: "sde", text: "Implement a producer-consumer pattern using threads/locks.", category: "Concurrency", difficulty: "Medium" },
  { id: "ms-sde-8", companyId: "microsoft", roleId: "sde", text: "Explain SOLID principles with real-world examples.", category: "OOP", difficulty: "Medium" },

  // ===== META - SDE =====
  { id: "meta-sde-1", companyId: "meta", roleId: "sde", text: "Design a News Feed system (like Facebook). How would you rank and display posts?", category: "System Design", difficulty: "Hard" },
  { id: "meta-sde-2", companyId: "meta", roleId: "sde", text: "Given a binary tree, return the vertical order traversal of its nodes.", category: "Trees", difficulty: "Medium" },
  { id: "meta-sde-3", companyId: "meta", roleId: "sde", text: "Implement a function to find all permutations of a given string.", category: "Backtracking", difficulty: "Medium" },
  { id: "meta-sde-4", companyId: "meta", roleId: "sde", text: "Design Instagram's photo storage and delivery system.", category: "System Design", difficulty: "Hard" },
  { id: "meta-sde-5", companyId: "meta", roleId: "sde", text: "Clone a graph (deep copy of an undirected graph).", category: "Graphs", difficulty: "Medium" },
  { id: "meta-sde-6", companyId: "meta", roleId: "sde", text: "Given an array of meeting time intervals, find the minimum number of conference rooms required.", category: "Intervals", difficulty: "Medium" },
  { id: "meta-sde-7", companyId: "meta", roleId: "sde", text: "How would you design a real-time messaging system like WhatsApp?", category: "System Design", difficulty: "Hard" },
  { id: "meta-sde-8", companyId: "meta", roleId: "sde", text: "Implement a function that converts a Roman numeral string to an integer.", category: "Strings", difficulty: "Easy" },

  // ===== APPLE - SDE =====
  { id: "apple-sde-1", companyId: "apple", roleId: "sde", text: "What are the key differences between processes and threads?", category: "OS Concepts", difficulty: "Medium" },
  { id: "apple-sde-2", companyId: "apple", roleId: "sde", text: "Design an API rate limiter.", category: "System Design", difficulty: "Medium" },
  { id: "apple-sde-3", companyId: "apple", roleId: "sde", text: "Implement a thread-safe singleton pattern.", category: "Design Patterns", difficulty: "Medium" },
  { id: "apple-sde-4", companyId: "apple", roleId: "sde", text: "Given a sorted rotated array, search for a target value in O(log n).", category: "Binary Search", difficulty: "Medium" },
  { id: "apple-sde-5", companyId: "apple", roleId: "sde", text: "Design the architecture of Apple Music's streaming service.", category: "System Design", difficulty: "Hard" },
  { id: "apple-sde-6", companyId: "apple", roleId: "sde", text: "Explain memory management in iOS (ARC) vs garbage collection.", category: "Memory", difficulty: "Medium" },

  // ===== NETFLIX - SDE =====
  { id: "nf-sde-1", companyId: "netflix", roleId: "sde", text: "Design a video streaming service. How would you handle adaptive bitrate streaming?", category: "System Design", difficulty: "Hard" },
  { id: "nf-sde-2", companyId: "netflix", roleId: "sde", text: "Implement a recommendation engine using collaborative filtering basics.", category: "Algorithms", difficulty: "Hard" },
  { id: "nf-sde-3", companyId: "netflix", roleId: "sde", text: "What is the CAP theorem? How does Netflix handle distributed data consistency?", category: "Distributed Systems", difficulty: "Medium" },
  { id: "nf-sde-4", companyId: "netflix", roleId: "sde", text: "Implement circuit breaker pattern for microservices resilience.", category: "Design Patterns", difficulty: "Medium" },
  { id: "nf-sde-5", companyId: "netflix", roleId: "sde", text: "Design a content delivery network (CDN) for global video distribution.", category: "System Design", difficulty: "Hard" },

  // ===== TCS - SDE =====
  { id: "tcs-sde-1", companyId: "tcs", roleId: "sde", text: "What is the difference between abstract class and interface in Java?", category: "OOP", difficulty: "Easy" },
  { id: "tcs-sde-2", companyId: "tcs", roleId: "sde", text: "Write a program to check if a given string is a palindrome.", category: "Strings", difficulty: "Easy" },
  { id: "tcs-sde-3", companyId: "tcs", roleId: "sde", text: "Explain the concept of normalization in databases (1NF, 2NF, 3NF, BCNF).", category: "DBMS", difficulty: "Medium" },
  { id: "tcs-sde-4", companyId: "tcs", roleId: "sde", text: "What is the difference between HashMap and HashTable in Java?", category: "Collections", difficulty: "Easy" },
  { id: "tcs-sde-5", companyId: "tcs", roleId: "sde", text: "Write a SQL query to find the second highest salary from an Employee table.", category: "SQL", difficulty: "Easy" },
  { id: "tcs-sde-6", companyId: "tcs", roleId: "sde", text: "Explain the SDLC phases and Agile methodology.", category: "Software Engineering", difficulty: "Easy" },
  { id: "tcs-sde-7", companyId: "tcs", roleId: "sde", text: "What are the four pillars of Object-Oriented Programming?", category: "OOP", difficulty: "Easy" },
  { id: "tcs-sde-8", companyId: "tcs", roleId: "sde", text: "Explain the difference between stack and queue with real-world examples.", category: "Data Structures", difficulty: "Easy" },

  // ===== INFOSYS - SDE =====
  { id: "inf-sde-1", companyId: "infosys", roleId: "sde", text: "What is the difference between overloading and overriding?", category: "OOP", difficulty: "Easy" },
  { id: "inf-sde-2", companyId: "infosys", roleId: "sde", text: "Write a program to find the factorial of a number using recursion.", category: "Recursion", difficulty: "Easy" },
  { id: "inf-sde-3", companyId: "infosys", roleId: "sde", text: "Explain the MVC architecture pattern.", category: "Architecture", difficulty: "Medium" },
  { id: "inf-sde-4", companyId: "infosys", roleId: "sde", text: "What are joins in SQL? Explain with examples (INNER, LEFT, RIGHT, FULL).", category: "SQL", difficulty: "Medium" },
  { id: "inf-sde-5", companyId: "infosys", roleId: "sde", text: "Implement a bubble sort algorithm and explain its time complexity.", category: "Sorting", difficulty: "Easy" },
  { id: "inf-sde-6", companyId: "infosys", roleId: "sde", text: "What is multithreading? How does Java handle thread synchronization?", category: "Concurrency", difficulty: "Medium" },

  // ===== WIPRO - SDE =====
  { id: "wip-sde-1", companyId: "wipro", roleId: "sde", text: "Explain the difference between GET and POST HTTP methods.", category: "Web", difficulty: "Easy" },
  { id: "wip-sde-2", companyId: "wipro", roleId: "sde", text: "What is the difference between primary key and foreign key?", category: "DBMS", difficulty: "Easy" },
  { id: "wip-sde-3", companyId: "wipro", roleId: "sde", text: "Write a program to reverse an array without using extra space.", category: "Arrays", difficulty: "Easy" },
  { id: "wip-sde-4", companyId: "wipro", roleId: "sde", text: "Explain exception handling in Java with try-catch-finally.", category: "Java", difficulty: "Easy" },
  { id: "wip-sde-5", companyId: "wipro", roleId: "sde", text: "What is REST API? What are the key principles of RESTful services?", category: "Web", difficulty: "Medium" },

  // ===== GENERIC FRONTEND QUESTIONS =====
  { id: "gen-fe-1", companyId: "google", roleId: "frontend", text: "Explain the Virtual DOM in React and how it improves performance.", category: "React", difficulty: "Medium" },
  { id: "gen-fe-2", companyId: "google", roleId: "frontend", text: "What is the difference between CSS Grid and Flexbox? When would you use each?", category: "CSS", difficulty: "Easy" },
  { id: "gen-fe-3", companyId: "amazon", roleId: "frontend", text: "Implement a debounce function in JavaScript.", category: "JavaScript", difficulty: "Medium" },
  { id: "gen-fe-4", companyId: "amazon", roleId: "frontend", text: "What are Web Vitals (LCP, FID, CLS)? How do you optimize them?", category: "Performance", difficulty: "Medium" },
  { id: "gen-fe-5", companyId: "meta", roleId: "frontend", text: "Implement infinite scrolling for a social media feed.", category: "JavaScript", difficulty: "Medium" },
  { id: "gen-fe-6", companyId: "meta", roleId: "frontend", text: "Explain event delegation and event bubbling in JavaScript.", category: "JavaScript", difficulty: "Easy" },
  { id: "gen-fe-7", companyId: "microsoft", roleId: "frontend", text: "What is server-side rendering (SSR) vs client-side rendering (CSR)? Trade-offs?", category: "Architecture", difficulty: "Medium" },
  { id: "gen-fe-8", companyId: "microsoft", roleId: "frontend", text: "Implement a custom hook for managing form state in React.", category: "React", difficulty: "Medium" },

  // ===== GENERIC BACKEND QUESTIONS =====
  { id: "gen-be-1", companyId: "google", roleId: "backend", text: "Design a RESTful API for a blog platform with authentication.", category: "API Design", difficulty: "Medium" },
  { id: "gen-be-2", companyId: "amazon", roleId: "backend", text: "Explain database indexing. When should you use composite indexes?", category: "Databases", difficulty: "Medium" },
  { id: "gen-be-3", companyId: "amazon", roleId: "backend", text: "What is the difference between horizontal and vertical scaling?", category: "System Design", difficulty: "Easy" },
  { id: "gen-be-4", companyId: "microsoft", roleId: "backend", text: "Explain message queues (Kafka, RabbitMQ). When would you use one?", category: "Architecture", difficulty: "Medium" },
  { id: "gen-be-5", companyId: "meta", roleId: "backend", text: "How does database sharding work? What are the common strategies?", category: "Databases", difficulty: "Hard" },

  // ===== DATA ENGINEER =====
  { id: "de-1", companyId: "google", roleId: "data-engineer", text: "Explain the difference between batch processing and stream processing.", category: "Data Processing", difficulty: "Medium" },
  { id: "de-2", companyId: "amazon", roleId: "data-engineer", text: "What is a data warehouse? How does it differ from a data lake?", category: "Architecture", difficulty: "Easy" },
  { id: "de-3", companyId: "microsoft", roleId: "data-engineer", text: "Design an ETL pipeline for processing 1TB of daily log data.", category: "ETL", difficulty: "Hard" },
  { id: "de-4", companyId: "meta", roleId: "data-engineer", text: "What is Apache Spark? How does it differ from MapReduce?", category: "Big Data", difficulty: "Medium" },

  // ===== ML ENGINEER =====
  { id: "ml-1", companyId: "google", roleId: "ml-engineer", text: "Explain the bias-variance tradeoff in machine learning.", category: "ML Theory", difficulty: "Medium" },
  { id: "ml-2", companyId: "amazon", roleId: "ml-engineer", text: "How would you build a product recommendation system?", category: "Applied ML", difficulty: "Hard" },
  { id: "ml-3", companyId: "meta", roleId: "ml-engineer", text: "Explain how gradient descent works. What are its variants (SGD, Adam)?", category: "Optimization", difficulty: "Medium" },
  { id: "ml-4", companyId: "microsoft", roleId: "ml-engineer", text: "What is transfer learning? Give examples of when you would use it.", category: "Deep Learning", difficulty: "Medium" },

  // ===== QA ENGINEER =====
  { id: "qa-1", companyId: "google", roleId: "qa-engineer", text: "What is the difference between unit testing, integration testing, and E2E testing?", category: "Testing", difficulty: "Easy" },
  { id: "qa-2", companyId: "amazon", roleId: "qa-engineer", text: "How would you test an e-commerce checkout flow? List all test cases.", category: "Test Planning", difficulty: "Medium" },
  { id: "qa-3", companyId: "microsoft", roleId: "qa-engineer", text: "Explain test-driven development (TDD) and its benefits.", category: "Methodology", difficulty: "Medium" },
  { id: "qa-4", companyId: "tcs", roleId: "qa-engineer", text: "What is regression testing? When and how should it be performed?", category: "Testing", difficulty: "Easy" },

  // ===== FLIPKART - SDE =====
  { id: "fk-sde-1", companyId: "flipkart", roleId: "sde", text: "Given a string, find the minimum window substring that contains all characters of another string (Minimum Window Substring).", category: "Sliding Window", difficulty: "Hard" },
  { id: "fk-sde-2", companyId: "flipkart", roleId: "sde", text: "Given an array of daily temperatures, return an array where each element says how many days you have to wait for a warmer temperature.", category: "Stack", difficulty: "Medium" },
  { id: "fk-sde-3", companyId: "flipkart", roleId: "sde", text: "Find the longest substring without repeating characters. Optimize from O(2N) to O(N).", category: "Sliding Window", difficulty: "Medium" },
  { id: "fk-sde-4", companyId: "flipkart", roleId: "sde", text: "Given coins of different denominations and a total amount, find the fewest number of coins needed to make up that amount (Coin Change).", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "fk-sde-5", companyId: "flipkart", roleId: "sde", text: "Find the sum of minimum elements of all subarrays of a given array. Optimize to O(n) using a monotonic stack.", category: "Stack", difficulty: "Hard" },
  { id: "fk-sde-6", companyId: "flipkart", roleId: "sde", text: "There are N petrol pumps on a circular route. Given the petrol and distance to next pump, find the starting point from which a truck can complete the circular tour.", category: "Greedy", difficulty: "Medium" },
  { id: "fk-sde-7", companyId: "flipkart", roleId: "sde", text: "Given a sorted array of integers, return an array of the squares of each number sorted in non-decreasing order (Squares of a Sorted Array).", category: "Two Pointers", difficulty: "Easy" },
  { id: "fk-sde-8", companyId: "flipkart", roleId: "sde", text: "Given a sorted array, find the first and last position of a given target value. Your solution must run in O(log n) time.", category: "Binary Search", difficulty: "Medium" },
  { id: "fk-sde-9", companyId: "flipkart", roleId: "sde", text: "Given a grid with obstacles, count all unique paths from top-left to bottom-right moving only down or right.", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "fk-sde-10", companyId: "flipkart", roleId: "sde", text: "Given an array and a target sum, find all subsets that sum to the given target.", category: "Backtracking", difficulty: "Medium" },
  { id: "fk-sde-11", companyId: "flipkart", roleId: "sde", text: "Find the kth distinct maximum element in an unsorted array.", category: "Heap", difficulty: "Medium" },
  { id: "fk-sde-12", companyId: "flipkart", roleId: "sde", text: "Design a Parking Lot system. Define classes, relationships, and handle different vehicle types and floor levels (Low Level Design).", category: "LLD", difficulty: "Hard" },
  { id: "fk-sde-13", companyId: "flipkart", roleId: "sde", text: "Design a School Bus Navigation System that tracks buses in real-time and notifies parents of ETA (High Level Design).", category: "System Design", difficulty: "Hard" },
  { id: "fk-sde-14", companyId: "flipkart", roleId: "sde", text: "Design the search and recommendation system for an e-commerce platform like Flipkart.", category: "System Design", difficulty: "Hard" },
  { id: "fk-sde-15", companyId: "flipkart", roleId: "sde", text: "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining (Trapping Rain Water).", category: "Arrays", difficulty: "Hard" },

  // ===== FLIPKART - FRONTEND =====
  { id: "fk-fe-1", companyId: "flipkart", roleId: "frontend", text: "Implement an infinite scroll product listing page that loads items as the user scrolls down.", category: "JavaScript", difficulty: "Medium" },
  { id: "fk-fe-2", companyId: "flipkart", roleId: "frontend", text: "How would you optimize the performance of an e-commerce product listing page with thousands of items?", category: "Performance", difficulty: "Medium" },
  { id: "fk-fe-3", companyId: "flipkart", roleId: "frontend", text: "Implement a debounce function for a search-as-you-type feature on the Flipkart search bar.", category: "JavaScript", difficulty: "Easy" },
  { id: "fk-fe-4", companyId: "flipkart", roleId: "frontend", text: "Explain how the Virtual DOM works in React. What are the key benefits over direct DOM manipulation?", category: "React", difficulty: "Medium" },
  { id: "fk-fe-5", companyId: "flipkart", roleId: "frontend", text: "Build a star rating component in React that supports half-star ratings and hover preview.", category: "React", difficulty: "Easy" },

  // ===== FLIPKART - BACKEND =====
  { id: "fk-be-1", companyId: "flipkart", roleId: "backend", text: "Design the inventory management system for Flipkart. How do you handle concurrent purchases of the same item?", category: "System Design", difficulty: "Hard" },
  { id: "fk-be-2", companyId: "flipkart", roleId: "backend", text: "Explain database sharding strategies. How would you shard the orders table for Flipkart's scale?", category: "Databases", difficulty: "Hard" },
  { id: "fk-be-3", companyId: "flipkart", roleId: "backend", text: "What is the difference between optimistic and pessimistic locking? When would you use each?", category: "Concurrency", difficulty: "Medium" },
  { id: "fk-be-4", companyId: "flipkart", roleId: "backend", text: "Design a coupon/discount system that handles percentage off, flat off, BOGO, and stacking rules.", category: "System Design", difficulty: "Medium" },

  // ===== ADOBE - SDE =====
  { id: "ad-sde-1", companyId: "adobe", roleId: "sde", text: "Given an array, determine the minimum number of jumps to reach the last index (Jump Game II).", category: "Greedy", difficulty: "Hard" },
  { id: "ad-sde-2", companyId: "adobe", roleId: "sde", text: "Validate whether a given binary tree is a valid Binary Search Tree.", category: "Trees", difficulty: "Medium" },
  { id: "ad-sde-3", companyId: "adobe", roleId: "sde", text: "Given house painting costs from different ISPs in a matrix, find the minimum cost such that no two adjacent houses use the same ISP (Paint House variant).", category: "Dynamic Programming", difficulty: "Hard" },
  { id: "ad-sde-4", companyId: "adobe", roleId: "sde", text: "Print the top view of a binary tree.", category: "Trees", difficulty: "Medium" },
  { id: "ad-sde-5", companyId: "adobe", roleId: "sde", text: "Given two words (beginWord and endWord), find the length of the shortest transformation sequence from beginWord to endWord (Word Ladder).", category: "Graphs", difficulty: "Hard" },
  { id: "ad-sde-6", companyId: "adobe", roleId: "sde", text: "Design a Min Stack that supports push, pop, top, and retrieving the minimum element in O(1) time.", category: "Stack", difficulty: "Easy" },
  { id: "ad-sde-7", companyId: "adobe", roleId: "sde", text: "Implement an LRU Cache with O(1) get and put operations using a HashMap and Doubly Linked List.", category: "Design", difficulty: "Medium" },
  { id: "ad-sde-8", companyId: "adobe", roleId: "sde", text: "Detect a cycle in an undirected graph using BFS or DFS.", category: "Graphs", difficulty: "Medium" },
  { id: "ad-sde-9", companyId: "adobe", roleId: "sde", text: "Given a matrix of 0s and 1s, find the shortest path between two cells. You can move in 4 directions.", category: "Graphs", difficulty: "Medium" },
  { id: "ad-sde-10", companyId: "adobe", roleId: "sde", text: "Implement Dijkstra's shortest path algorithm for a weighted graph.", category: "Graphs", difficulty: "Hard" },
  { id: "ad-sde-11", companyId: "adobe", roleId: "sde", text: "Two players take turns picking coins from either end of an array. Find the maximum value the first player can guarantee (Optimal Strategy for a Game).", category: "Dynamic Programming", difficulty: "Hard" },
  { id: "ad-sde-12", companyId: "adobe", roleId: "sde", text: "Construct a binary tree from given inorder and preorder traversal arrays.", category: "Trees", difficulty: "Medium" },
  { id: "ad-sde-13", companyId: "adobe", roleId: "sde", text: "Given a string containing digits from 2-9, return all possible letter combinations that the number could represent (Letter Combinations of a Phone Number).", category: "Backtracking", difficulty: "Medium" },
  { id: "ad-sde-14", companyId: "adobe", roleId: "sde", text: "Find the longest increasing subsequence in a given array. Can you solve it in O(n log n)?", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "ad-sde-15", companyId: "adobe", roleId: "sde", text: "Explain the difference between process and thread. How does context switching work?", category: "OS Concepts", difficulty: "Medium" },

  // ===== ADOBE - FRONTEND =====
  { id: "ad-fe-1", companyId: "adobe", roleId: "frontend", text: "How would you build a real-time collaborative text editor like Adobe Acrobat's commenting system?", category: "System Design", difficulty: "Hard" },
  { id: "ad-fe-2", companyId: "adobe", roleId: "frontend", text: "Implement a custom drag-and-drop interface for reordering layers (like Photoshop's layer panel).", category: "JavaScript", difficulty: "Hard" },
  { id: "ad-fe-3", companyId: "adobe", roleId: "frontend", text: "What is the critical rendering path in a browser? How do you optimize it?", category: "Performance", difficulty: "Medium" },
  { id: "ad-fe-4", companyId: "adobe", roleId: "frontend", text: "Explain the difference between useEffect, useLayoutEffect, and useMemo in React.", category: "React", difficulty: "Medium" },
  { id: "ad-fe-5", companyId: "adobe", roleId: "frontend", text: "Implement a color picker component from scratch using canvas API.", category: "JavaScript", difficulty: "Hard" },

  // ===== ADOBE - BACKEND =====
  { id: "ad-be-1", companyId: "adobe", roleId: "backend", text: "Design a document storage and versioning system like Adobe Document Cloud.", category: "System Design", difficulty: "Hard" },
  { id: "ad-be-2", companyId: "adobe", roleId: "backend", text: "Explain ACID properties in databases. How do they apply to a collaborative editing system?", category: "Databases", difficulty: "Medium" },
  { id: "ad-be-3", companyId: "adobe", roleId: "backend", text: "What are the differences between REST and GraphQL APIs? When would you choose one over the other?", category: "API Design", difficulty: "Medium" },

  // ===== UBER - SDE =====
  { id: "ub-sde-1", companyId: "uber", roleId: "sde", text: "Given a flight route graph with costs, find the cheapest flight from source to destination with at most K stops (Cheapest Flights Within K Stops).", category: "Graphs", difficulty: "Hard" },
  { id: "ub-sde-2", companyId: "uber", roleId: "sde", text: "Given an array of cards with point values, find the maximum score you can obtain by taking exactly k cards from the beginning or end (Maximum Points from Cards).", category: "Sliding Window", difficulty: "Medium" },
  { id: "ub-sde-3", companyId: "uber", roleId: "sde", text: "Given a linked list, reverse the nodes of the list k at a time and return the modified list.", category: "Linked List", difficulty: "Hard" },
  { id: "ub-sde-4", companyId: "uber", roleId: "sde", text: "Given a string s, find the minimum number of times s must be appended to itself for string t to be a subsequence of the resulting string.", category: "Dynamic Programming", difficulty: "Hard" },
  { id: "ub-sde-5", companyId: "uber", roleId: "sde", text: "Given a 2D board and a word, find if the word exists in the grid. You can move in 8 directions (modified Word Search).", category: "Backtracking", difficulty: "Medium" },
  { id: "ub-sde-6", companyId: "uber", roleId: "sde", text: "Given an array of meeting time intervals, merge all overlapping intervals.", category: "Intervals", difficulty: "Medium" },
  { id: "ub-sde-7", companyId: "uber", roleId: "sde", text: "Find the kth largest element in an unsorted array. Solve using QuickSelect in O(n) average time.", category: "Sorting", difficulty: "Medium" },
  { id: "ub-sde-8", companyId: "uber", roleId: "sde", text: "There are N courses with prerequisites. Determine if you can finish all courses and return a valid order (Course Schedule - Topological Sort).", category: "Graphs", difficulty: "Medium" },
  { id: "ub-sde-9", companyId: "uber", roleId: "sde", text: "Design Uber's real-time ride matching system. How do you match riders to the nearest available drivers efficiently?", category: "System Design", difficulty: "Hard" },
  { id: "ub-sde-10", companyId: "uber", roleId: "sde", text: "Design a dynamic pricing (surge pricing) engine. What data signals would you use and how would you compute price multipliers in real-time?", category: "System Design", difficulty: "Hard" },
  { id: "ub-sde-11", companyId: "uber", roleId: "sde", text: "Design the search function for a large-scale food delivery platform like Uber Eats. Handle restaurant search, filters, and ranking.", category: "System Design", difficulty: "Hard" },
  { id: "ub-sde-12", companyId: "uber", roleId: "sde", text: "Design a real-time driver location tracking system that can handle millions of location updates per second.", category: "System Design", difficulty: "Hard" },
  { id: "ub-sde-13", companyId: "uber", roleId: "sde", text: "Given a directed graph, find the minimum number of edge reversals so that every node is reachable from node 0.", category: "Graphs", difficulty: "Hard" },
  { id: "ub-sde-14", companyId: "uber", roleId: "sde", text: "Implement a rate limiter using the token bucket or sliding window algorithm.", category: "Design", difficulty: "Medium" },

  // ===== UBER - DEVOPS =====
  { id: "ub-devops-1", companyId: "uber", roleId: "devops", text: "How would you design a CI/CD pipeline for 4000+ microservices at Uber's scale?", category: "CI/CD", difficulty: "Hard" },
  { id: "ub-devops-2", companyId: "uber", roleId: "devops", text: "Explain how Uber handles real-time data streaming. What role does Apache Kafka play?", category: "Data Streaming", difficulty: "Medium" },
  { id: "ub-devops-3", companyId: "uber", roleId: "devops", text: "What is container orchestration? Compare Kubernetes and Docker Swarm for a ride-sharing platform.", category: "Containers", difficulty: "Medium" },

  // ===== UBER - BACKEND =====
  { id: "ub-be-1", companyId: "uber", roleId: "backend", text: "Explain the CAP theorem. How does Uber make trade-offs between consistency and availability for trip data?", category: "Distributed Systems", difficulty: "Hard" },
  { id: "ub-be-2", companyId: "uber", roleId: "backend", text: "Design a geospatial indexing system to efficiently query nearby drivers using geohashing.", category: "System Design", difficulty: "Hard" },
  { id: "ub-be-3", companyId: "uber", roleId: "backend", text: "How would you design Uber's trip fare estimation service considering traffic, demand, and route data?", category: "System Design", difficulty: "Hard" },
  { id: "ub-be-4", companyId: "uber", roleId: "backend", text: "What are idempotent APIs? Why are they crucial in payment processing systems like Uber's?", category: "API Design", difficulty: "Medium" },

  // ===== SALESFORCE - SDE =====
  { id: "sf-sde-1", companyId: "salesforce", roleId: "sde", text: "Given a string, find the longest palindromic substring.", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "sf-sde-2", companyId: "salesforce", roleId: "sde", text: "Write a SQL query to find the Nth highest salary from an Employee table without using LIMIT/TOP.", category: "SQL", difficulty: "Medium" },
  { id: "sf-sde-3", companyId: "salesforce", roleId: "sde", text: "Design a multi-tenant CRM system. How do you ensure data isolation between different customer organizations?", category: "System Design", difficulty: "Hard" },
  { id: "sf-sde-4", companyId: "salesforce", roleId: "sde", text: "Implement a function to reduce the time complexity of a nested loop from O(n^2) to O(n) using a HashMap.", category: "Optimization", difficulty: "Medium" },
  { id: "sf-sde-5", companyId: "salesforce", roleId: "sde", text: "Explain microservices architecture. What are the benefits and challenges? How do you handle inter-service communication?", category: "Architecture", difficulty: "Medium" },
  { id: "sf-sde-6", companyId: "salesforce", roleId: "sde", text: "Design a RESTful API for a task management application. Include authentication, CRUD operations, and pagination.", category: "API Design", difficulty: "Medium" },
  { id: "sf-sde-7", companyId: "salesforce", roleId: "sde", text: "Explain Git branching strategies (GitFlow, trunk-based). How do you handle merge conflicts in a large team?", category: "Version Control", difficulty: "Easy" },
  { id: "sf-sde-8", companyId: "salesforce", roleId: "sde", text: "What is dependency injection? Explain with a Spring Boot example. Why does it improve testability?", category: "Design Patterns", difficulty: "Medium" },
  { id: "sf-sde-9", companyId: "salesforce", roleId: "sde", text: "Given an array of integers, group all anagrams together.", category: "Strings", difficulty: "Medium" },
  { id: "sf-sde-10", companyId: "salesforce", roleId: "sde", text: "Write unit tests for a user registration service. What edge cases would you cover?", category: "Testing", difficulty: "Medium" },
  { id: "sf-sde-11", companyId: "salesforce", roleId: "sde", text: "Explain SOQL vs SQL. What are the governor limits in Salesforce and why do they exist?", category: "Salesforce Platform", difficulty: "Medium" },
  { id: "sf-sde-12", companyId: "salesforce", roleId: "sde", text: "Implement a binary search tree with insert, delete, and search operations. Handle all edge cases for deletion.", category: "Trees", difficulty: "Medium" },

  // ===== SALESFORCE - FRONTEND =====
  { id: "sf-fe-1", companyId: "salesforce", roleId: "frontend", text: "What are Lightning Web Components (LWC)? How do they compare to React components?", category: "Salesforce Platform", difficulty: "Medium" },
  { id: "sf-fe-2", companyId: "salesforce", roleId: "frontend", text: "Implement a reusable data table component with sorting, filtering, and pagination.", category: "JavaScript", difficulty: "Medium" },
  { id: "sf-fe-3", companyId: "salesforce", roleId: "frontend", text: "Explain the concept of Web Components (Custom Elements, Shadow DOM, Templates). How are they used in Salesforce?", category: "Web Standards", difficulty: "Medium" },
  { id: "sf-fe-4", companyId: "salesforce", roleId: "frontend", text: "How would you optimize a dashboard that renders 50+ charts with real-time data updates?", category: "Performance", difficulty: "Hard" },

  // ===== SALESFORCE - BACKEND =====
  { id: "sf-be-1", companyId: "salesforce", roleId: "backend", text: "Design a notification system that supports email, SMS, push, and in-app notifications with user preferences.", category: "System Design", difficulty: "Hard" },
  { id: "sf-be-2", companyId: "salesforce", roleId: "backend", text: "Explain database indexing. When should you create composite indexes? What are the trade-offs?", category: "Databases", difficulty: "Medium" },
  { id: "sf-be-3", companyId: "salesforce", roleId: "backend", text: "What is the difference between horizontal and vertical scaling? How would you scale a CRM platform?", category: "Architecture", difficulty: "Medium" },

  // ===== NETFLIX - SDE (additional) =====
  { id: "nf-sde-6", companyId: "netflix", roleId: "sde", text: "Given a collection of intervals, merge all overlapping intervals.", category: "Intervals", difficulty: "Medium" },
  { id: "nf-sde-7", companyId: "netflix", roleId: "sde", text: "Reverse a linked list iteratively and recursively. Explain the time and space complexity of both.", category: "Linked List", difficulty: "Easy" },
  { id: "nf-sde-8", companyId: "netflix", roleId: "sde", text: "Design a Google Drive-like file storage system with sharing, permissions, and version history.", category: "System Design", difficulty: "Hard" },
  { id: "nf-sde-9", companyId: "netflix", roleId: "sde", text: "Design a web crawler that can efficiently crawl billions of web pages. Handle politeness, deduplication, and distributed crawling.", category: "System Design", difficulty: "Hard" },
  { id: "nf-sde-10", companyId: "netflix", roleId: "sde", text: "Design an API rate limiter that supports sliding window and token bucket algorithms. Handle distributed rate limiting.", category: "System Design", difficulty: "Hard" },
  { id: "nf-sde-11", companyId: "netflix", roleId: "sde", text: "Design a URL shortening service like bit.ly. Handle analytics, custom aliases, and expiry.", category: "System Design", difficulty: "Medium" },
  { id: "nf-sde-12", companyId: "netflix", roleId: "sde", text: "How would you build a real-time A/B testing framework that Netflix uses to test UI changes on millions of users?", category: "System Design", difficulty: "Hard" },
  { id: "nf-sde-13", companyId: "netflix", roleId: "sde", text: "Explain Netflix's microservices architecture. How does Netflix handle cascading failures across services?", category: "Architecture", difficulty: "Hard" },
  { id: "nf-sde-14", companyId: "netflix", roleId: "sde", text: "Implement a function to find the longest common subsequence of two strings.", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "nf-sde-15", companyId: "netflix", roleId: "sde", text: "Given a list of movies with start and end times, find the maximum number of non-overlapping movies a user can watch (Activity Selection).", category: "Greedy", difficulty: "Medium" },

  // ===== NETFLIX - FRONTEND =====
  { id: "nf-fe-1", companyId: "netflix", roleId: "frontend", text: "How would you implement Netflix's horizontal scrolling carousel with smooth animations and lazy loading of thumbnails?", category: "JavaScript", difficulty: "Medium" },
  { id: "nf-fe-2", companyId: "netflix", roleId: "frontend", text: "Design a video player component with adaptive bitrate switching, subtitles, and keyboard controls.", category: "JavaScript", difficulty: "Hard" },
  { id: "nf-fe-3", companyId: "netflix", roleId: "frontend", text: "Explain how you would implement client-side search with typeahead suggestions and fuzzy matching.", category: "JavaScript", difficulty: "Medium" },
  { id: "nf-fe-4", companyId: "netflix", roleId: "frontend", text: "What is server-side rendering? How does it improve performance and SEO for Netflix's landing pages?", category: "Architecture", difficulty: "Medium" },

  // ===== NETFLIX - BACKEND =====
  { id: "nf-be-1", companyId: "netflix", roleId: "backend", text: "How does Netflix's content delivery network (Open Connect) work? How is content cached at edge locations?", category: "Infrastructure", difficulty: "Hard" },
  { id: "nf-be-2", companyId: "netflix", roleId: "backend", text: "Explain the Chaos Engineering principles Netflix follows. What is Chaos Monkey and why is it useful?", category: "SRE", difficulty: "Medium" },
  { id: "nf-be-3", companyId: "netflix", roleId: "backend", text: "Design a personalized recommendation service. What ML signals and user data would you incorporate?", category: "System Design", difficulty: "Hard" },

  // ===== HCL - SDE =====
  { id: "hcl-sde-1", companyId: "hcl", roleId: "sde", text: "What are the main features of Java 8? Explain lambda expressions and the Stream API with examples.", category: "Java", difficulty: "Medium" },
  { id: "hcl-sde-2", companyId: "hcl", roleId: "sde", text: "What is the difference between ArrayList and LinkedList in Java? When would you use each?", category: "Collections", difficulty: "Easy" },
  { id: "hcl-sde-3", companyId: "hcl", roleId: "sde", text: "Explain the concept of dependency injection in Spring framework.", category: "Frameworks", difficulty: "Medium" },
  { id: "hcl-sde-4", companyId: "hcl", roleId: "sde", text: "Write a SQL query to find employees who earn more than their manager.", category: "SQL", difficulty: "Medium" },
  { id: "hcl-sde-5", companyId: "hcl", roleId: "sde", text: "What is the difference between WHERE and HAVING clause in SQL?", category: "SQL", difficulty: "Easy" },
  { id: "hcl-sde-6", companyId: "hcl", roleId: "sde", text: "Explain the difference between Comparable and Comparator interfaces in Java.", category: "Java", difficulty: "Easy" },

  // ===== COGNIZANT - SDE =====
  { id: "cog-sde-1", companyId: "cognizant", roleId: "sde", text: "What is the difference between String, StringBuilder, and StringBuffer in Java?", category: "Java", difficulty: "Easy" },
  { id: "cog-sde-2", companyId: "cognizant", roleId: "sde", text: "Explain the concept of collections framework in Java. What are the key interfaces?", category: "Collections", difficulty: "Easy" },
  { id: "cog-sde-3", companyId: "cognizant", roleId: "sde", text: "Write a program to check if two strings are anagrams of each other.", category: "Strings", difficulty: "Easy" },
  { id: "cog-sde-4", companyId: "cognizant", roleId: "sde", text: "What is the difference between INNER JOIN and OUTER JOIN? Explain with examples.", category: "SQL", difficulty: "Easy" },
  { id: "cog-sde-5", companyId: "cognizant", roleId: "sde", text: "Explain the lifecycle of a servlet in Java.", category: "Web", difficulty: "Medium" },
  { id: "cog-sde-6", companyId: "cognizant", roleId: "sde", text: "What is the difference between an abstract class and an interface in Java 8+?", category: "OOP", difficulty: "Easy" },

  // ===== ACCENTURE - SDE =====
  { id: "acc-sde-1", companyId: "accenture", roleId: "sde", text: "What is Object-Oriented Programming? Explain all four pillars with real-world examples.", category: "OOP", difficulty: "Easy" },
  { id: "acc-sde-2", companyId: "accenture", roleId: "sde", text: "Write a program to find the GCD of two numbers using the Euclidean algorithm.", category: "Math", difficulty: "Easy" },
  { id: "acc-sde-3", companyId: "accenture", roleId: "sde", text: "What is the difference between TCP and UDP? Give use cases for each.", category: "Networking", difficulty: "Easy" },
  { id: "acc-sde-4", companyId: "accenture", roleId: "sde", text: "Write a SQL query to find duplicate records in a table.", category: "SQL", difficulty: "Easy" },
  { id: "acc-sde-5", companyId: "accenture", roleId: "sde", text: "Explain the Agile methodology. What is the difference between Scrum and Kanban?", category: "Software Engineering", difficulty: "Easy" },
  { id: "acc-sde-6", companyId: "accenture", roleId: "sde", text: "What is cloud computing? Explain IaaS, PaaS, and SaaS with examples.", category: "Cloud", difficulty: "Easy" },

  // ===== CAPGEMINI - SDE =====
  { id: "cap-sde-1", companyId: "capgemini", roleId: "sde", text: "What are design patterns? Explain Singleton, Factory, and Observer patterns.", category: "Design Patterns", difficulty: "Medium" },
  { id: "cap-sde-2", companyId: "capgemini", roleId: "sde", text: "Write a program to reverse a string without using built-in reverse functions.", category: "Strings", difficulty: "Easy" },
  { id: "cap-sde-3", companyId: "capgemini", roleId: "sde", text: "What is normalization? Explain 1NF, 2NF, 3NF with examples.", category: "DBMS", difficulty: "Medium" },
  { id: "cap-sde-4", companyId: "capgemini", roleId: "sde", text: "Explain the differences between SQL and NoSQL databases. When would you choose MongoDB over MySQL?", category: "Databases", difficulty: "Medium" },
  { id: "cap-sde-5", companyId: "capgemini", roleId: "sde", text: "What is the difference between authentication and authorization? Explain OAuth 2.0.", category: "Security", difficulty: "Medium" },

  // ===== TECH MAHINDRA - SDE =====
  { id: "tm-sde-1", companyId: "techm", roleId: "sde", text: "What is multithreading in Java? Explain the lifecycle of a thread.", category: "Java", difficulty: "Medium" },
  { id: "tm-sde-2", companyId: "techm", roleId: "sde", text: "Write a program to implement a linked list with insert, delete, and search operations.", category: "Data Structures", difficulty: "Easy" },
  { id: "tm-sde-3", companyId: "techm", roleId: "sde", text: "What is the difference between method overloading and method overriding?", category: "OOP", difficulty: "Easy" },
  { id: "tm-sde-4", companyId: "techm", roleId: "sde", text: "Explain the OSI model and the function of each layer.", category: "Networking", difficulty: "Medium" },
  { id: "tm-sde-5", companyId: "techm", roleId: "sde", text: "Write a SQL query using GROUP BY and HAVING to find departments with more than 5 employees.", category: "SQL", difficulty: "Easy" },

  // ===== DELOITTE - SDE =====
  { id: "del-sde-1", companyId: "deloitte", roleId: "sde", text: "Explain REST API principles. What makes an API RESTful?", category: "Web", difficulty: "Easy" },
  { id: "del-sde-2", companyId: "deloitte", roleId: "sde", text: "What is the difference between monolithic and microservices architecture? Pros and cons of each.", category: "Architecture", difficulty: "Medium" },
  { id: "del-sde-3", companyId: "deloitte", roleId: "sde", text: "Write a program to check if a number is a prime number. Optimize for large numbers.", category: "Math", difficulty: "Easy" },
  { id: "del-sde-4", companyId: "deloitte", roleId: "sde", text: "What are stored procedures and triggers in SQL? When would you use them?", category: "SQL", difficulty: "Medium" },
  { id: "del-sde-5", companyId: "deloitte", roleId: "sde", text: "Explain DevOps and CI/CD pipeline concepts. What tools have you used?", category: "DevOps", difficulty: "Medium" },

  // ===== LTIMINDTREE - SDE =====
  { id: "lti-sde-1", companyId: "lti", roleId: "sde", text: "What are access modifiers in Java? Explain public, private, protected, and default.", category: "Java", difficulty: "Easy" },
  { id: "lti-sde-2", companyId: "lti", roleId: "sde", text: "Write a program to find the second largest element in an array without sorting.", category: "Arrays", difficulty: "Easy" },
  { id: "lti-sde-3", companyId: "lti", roleId: "sde", text: "What are indexes in SQL? Explain clustered and non-clustered indexes.", category: "SQL", difficulty: "Medium" },
  { id: "lti-sde-4", companyId: "lti", roleId: "sde", text: "Explain the concept of garbage collection in Java. What are the different types of GC?", category: "Java", difficulty: "Medium" },
  { id: "lti-sde-5", companyId: "lti", roleId: "sde", text: "What is the difference between HashMap, TreeMap, and LinkedHashMap?", category: "Collections", difficulty: "Medium" },

  // =============================================================
  // ===== AI/ML ENGINEER INTERVIEW QUESTIONS (REAL) =============
  // =============================================================

  // ===== GOOGLE - ML ENGINEER =====
  { id: "g-ml-1", companyId: "google", roleId: "ml-engineer", text: "Explain the transformer architecture in detail. Why did Google replace RNNs with self-attention in the original 'Attention Is All You Need' paper?", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "g-ml-2", companyId: "google", roleId: "ml-engineer", text: "How would you design a query-document ranking model for Google Search? Walk through feature engineering, model selection, and evaluation metrics.", category: "System Design for AI", difficulty: "Hard" },
  { id: "g-ml-3", companyId: "google", roleId: "ml-engineer", text: "Implement multi-head attention from scratch in Python. Explain the role of Q, K, V matrices and why we scale by sqrt(d_k).", category: "Coding", difficulty: "Hard" },
  { id: "g-ml-4", companyId: "google", roleId: "ml-engineer", text: "You have a classification model with 95% accuracy but the business team says it's failing. What could be wrong, and how do you diagnose it?", category: "Classical ML", difficulty: "Medium" },
  { id: "g-ml-5", companyId: "google", roleId: "ml-engineer", text: "How does BERT differ from GPT in terms of pretraining objectives? When would you choose one over the other for a downstream task?", category: "LLM/GenAI", difficulty: "Medium" },
  { id: "g-ml-6", companyId: "google", roleId: "ml-engineer", text: "Design a content moderation system for YouTube that can detect harmful content across text, images, and video at scale.", category: "System Design for AI", difficulty: "Hard" },
  { id: "g-ml-7", companyId: "google", roleId: "ml-engineer", text: "Derive the backpropagation equations for a two-layer neural network. What is the vanishing gradient problem and how do residual connections address it?", category: "Math/Stats", difficulty: "Hard" },
  { id: "g-ml-8", companyId: "google", roleId: "ml-engineer", text: "Explain the difference between beam search and greedy decoding in sequence-to-sequence models. When does beam search fail?", category: "Deep Learning", difficulty: "Medium" },
  { id: "g-ml-9", companyId: "google", roleId: "ml-engineer", text: "How would you set up an A/B test to evaluate a new ranking model for Google Ads? What metrics would you track and what are the pitfalls?", category: "MLOps", difficulty: "Medium" },
  { id: "g-ml-10", companyId: "google", roleId: "ml-engineer", text: "Implement k-means clustering from scratch. How do you choose k, and what are the failure modes of k-means?", category: "Coding", difficulty: "Medium" },
  { id: "g-ml-11", companyId: "google", roleId: "ml-engineer", text: "What is positional encoding in transformers? Compare sinusoidal vs learned positional embeddings and RoPE.", category: "LLM/GenAI", difficulty: "Medium" },
  { id: "g-ml-12", companyId: "google", roleId: "ml-engineer", text: "Given a sparse user-item interaction matrix with billions of entries, design a recommendation system. How do you handle cold-start users?", category: "System Design for AI", difficulty: "Hard" },

  // ===== META - ML ENGINEER =====
  { id: "meta-ml-1", companyId: "meta", roleId: "ml-engineer", text: "Design the ML pipeline behind Facebook's News Feed ranking. What signals would you use and how would you handle real-time personalization?", category: "System Design for AI", difficulty: "Hard" },
  { id: "meta-ml-2", companyId: "meta", roleId: "ml-engineer", text: "Explain how contrastive learning works (e.g., SimCLR, CLIP). How does Meta use it in multimodal understanding?", category: "Deep Learning", difficulty: "Hard" },
  { id: "meta-ml-3", companyId: "meta", roleId: "ml-engineer", text: "How would you fine-tune a large language model like LLaMA for a specific task? Compare full fine-tuning vs LoRA vs QLoRA.", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "meta-ml-4", companyId: "meta", roleId: "ml-engineer", text: "Implement logistic regression from scratch using only NumPy, including gradient computation and binary cross-entropy loss.", category: "Coding", difficulty: "Medium" },
  { id: "meta-ml-5", companyId: "meta", roleId: "ml-engineer", text: "You're building a hate speech classifier for Instagram. How do you handle class imbalance, multilingual content, and adversarial evasion?", category: "Classical ML", difficulty: "Hard" },
  { id: "meta-ml-6", companyId: "meta", roleId: "ml-engineer", text: "Explain the difference between L1 and L2 regularization geometrically. Why does L1 produce sparse weights?", category: "Math/Stats", difficulty: "Medium" },
  { id: "meta-ml-7", companyId: "meta", roleId: "ml-engineer", text: "How does Retrieval Augmented Generation (RAG) work? What are the failure modes and how would you evaluate a RAG pipeline?", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "meta-ml-8", companyId: "meta", roleId: "ml-engineer", text: "Design an ML system to detect fake accounts on Facebook at scale. What features and model architecture would you use?", category: "System Design for AI", difficulty: "Hard" },
  { id: "meta-ml-9", companyId: "meta", roleId: "ml-engineer", text: "Explain the reparameterization trick in VAEs. Why can't we backpropagate through a sampling operation directly?", category: "Deep Learning", difficulty: "Hard" },
  { id: "meta-ml-10", companyId: "meta", roleId: "ml-engineer", text: "How would you deploy a model that serves 1 billion predictions per day? Discuss latency, throughput, caching, and model distillation.", category: "MLOps", difficulty: "Hard" },
  { id: "meta-ml-11", companyId: "meta", roleId: "ml-engineer", text: "What is the difference between online learning and batch learning? When would you use each at Meta's scale?", category: "Classical ML", difficulty: "Medium" },
  { id: "meta-ml-12", companyId: "meta", roleId: "ml-engineer", text: "Implement a basic feedforward neural network from scratch with backpropagation. Train it on XOR.", category: "Coding", difficulty: "Medium" },

  // ===== AMAZON - ML ENGINEER =====
  { id: "a-ml-1", companyId: "amazon", roleId: "ml-engineer", text: "Design the recommendation engine behind 'Customers who bought this also bought'. How do you balance exploration vs exploitation?", category: "System Design for AI", difficulty: "Hard" },
  { id: "a-ml-2", companyId: "amazon", roleId: "ml-engineer", text: "You have a model in production whose accuracy is degrading over time. What could cause this and how would you set up monitoring to catch it?", category: "MLOps", difficulty: "Medium" },
  { id: "a-ml-3", companyId: "amazon", roleId: "ml-engineer", text: "Explain the difference between word2vec CBOW and Skip-gram. How do these embeddings capture semantic relationships?", category: "Deep Learning", difficulty: "Medium" },
  { id: "a-ml-4", companyId: "amazon", roleId: "ml-engineer", text: "Implement a decision tree classifier from scratch. How does it decide the best split at each node?", category: "Coding", difficulty: "Medium" },
  { id: "a-ml-5", companyId: "amazon", roleId: "ml-engineer", text: "How would you build a real-time fraud detection system for Amazon Pay? What features, model, and latency constraints would you consider?", category: "System Design for AI", difficulty: "Hard" },
  { id: "a-ml-6", companyId: "amazon", roleId: "ml-engineer", text: "Explain how XGBoost works internally. What makes it faster than vanilla gradient boosting? Discuss regularization in XGBoost.", category: "Classical ML", difficulty: "Hard" },
  { id: "a-ml-7", companyId: "amazon", roleId: "ml-engineer", text: "How does tokenization work in LLMs? Compare BPE, WordPiece, and SentencePiece. Why does subword tokenization matter?", category: "LLM/GenAI", difficulty: "Medium" },
  { id: "a-ml-8", companyId: "amazon", roleId: "ml-engineer", text: "Design an ML pipeline on AWS SageMaker for training, evaluating, and deploying a model with CI/CD. How do you handle model versioning?", category: "MLOps", difficulty: "Hard" },
  { id: "a-ml-9", companyId: "amazon", roleId: "ml-engineer", text: "What is the curse of dimensionality? How does it affect k-NN and what techniques can mitigate it?", category: "Math/Stats", difficulty: "Medium" },
  { id: "a-ml-10", companyId: "amazon", roleId: "ml-engineer", text: "Design a product search ranking system for Amazon. How would you combine text relevance, personalization, and business metrics?", category: "System Design for AI", difficulty: "Hard" },
  { id: "a-ml-11", companyId: "amazon", roleId: "ml-engineer", text: "Explain the difference between generative and discriminative models. Give examples and discuss when you'd prefer one over the other.", category: "Classical ML", difficulty: "Medium" },
  { id: "a-ml-12", companyId: "amazon", roleId: "ml-engineer", text: "How would you use prompt engineering techniques (few-shot, chain-of-thought, ReAct) to build a customer service chatbot on top of a foundation model?", category: "LLM/GenAI", difficulty: "Medium" },

  // ===== MICROSOFT - ML ENGINEER =====
  { id: "ms-ml-1", companyId: "microsoft", roleId: "ml-engineer", text: "How does the Copilot model architecture work? Explain how code completion models are trained and how context is managed.", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "ms-ml-2", companyId: "microsoft", roleId: "ml-engineer", text: "Design a semantic search system for Bing using dense retrieval. Compare it with traditional BM25-based sparse retrieval.", category: "System Design for AI", difficulty: "Hard" },
  { id: "ms-ml-3", companyId: "microsoft", roleId: "ml-engineer", text: "Implement gradient descent for linear regression from scratch. Then extend it to handle L2 regularization (Ridge).", category: "Coding", difficulty: "Medium" },
  { id: "ms-ml-4", companyId: "microsoft", roleId: "ml-engineer", text: "Explain RLHF (Reinforcement Learning from Human Feedback). How is it used to align LLMs, and what are its limitations?", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "ms-ml-5", companyId: "microsoft", roleId: "ml-engineer", text: "How would you build and evaluate a text summarization model for Microsoft Teams meeting transcripts?", category: "System Design for AI", difficulty: "Hard" },
  { id: "ms-ml-6", companyId: "microsoft", roleId: "ml-engineer", text: "Explain the difference between batch normalization, layer normalization, and group normalization. When would you use each?", category: "Deep Learning", difficulty: "Medium" },
  { id: "ms-ml-7", companyId: "microsoft", roleId: "ml-engineer", text: "What is model quantization? Explain INT8 vs FP16 vs FP32 trade-offs and how quantization affects inference latency and accuracy.", category: "MLOps", difficulty: "Hard" },
  { id: "ms-ml-8", companyId: "microsoft", roleId: "ml-engineer", text: "Design a spam and phishing detection system for Outlook at scale. How would you handle zero-day attacks and adversarial emails?", category: "System Design for AI", difficulty: "Hard" },
  { id: "ms-ml-9", companyId: "microsoft", roleId: "ml-engineer", text: "Explain the eigenvalue decomposition and its relevance to PCA. When would you use PCA vs t-SNE vs UMAP for dimensionality reduction?", category: "Math/Stats", difficulty: "Hard" },
  { id: "ms-ml-10", companyId: "microsoft", roleId: "ml-engineer", text: "Implement a convolutional neural network from scratch for image classification. Explain the role of pooling layers and stride.", category: "Coding", difficulty: "Hard" },
  { id: "ms-ml-11", companyId: "microsoft", roleId: "ml-engineer", text: "How do you handle concept drift in a production ML system? What monitoring metrics and retraining strategies would you use?", category: "MLOps", difficulty: "Medium" },
  { id: "ms-ml-12", companyId: "microsoft", roleId: "ml-engineer", text: "Explain the attention mechanism in detail. What are the computational complexity differences between self-attention, cross-attention, and flash attention?", category: "Deep Learning", difficulty: "Hard" },

  // ===== APPLE - ML ENGINEER =====
  { id: "apple-ml-1", companyId: "apple", roleId: "ml-engineer", text: "How would you design an on-device ML model for Siri that runs under strict latency and memory constraints on iPhone?", category: "System Design for AI", difficulty: "Hard" },
  { id: "apple-ml-2", companyId: "apple", roleId: "ml-engineer", text: "Explain federated learning. How does Apple use it to improve keyboard predictions without accessing user data?", category: "Deep Learning", difficulty: "Hard" },
  { id: "apple-ml-3", companyId: "apple", roleId: "ml-engineer", text: "Design a face recognition system for Face ID. How do you handle different lighting conditions, angles, and privacy concerns?", category: "System Design for AI", difficulty: "Hard" },
  { id: "apple-ml-4", companyId: "apple", roleId: "ml-engineer", text: "Implement a basic RNN cell from scratch. Then explain why LSTMs and GRUs were introduced and how gating mechanisms work.", category: "Coding", difficulty: "Hard" },
  { id: "apple-ml-5", companyId: "apple", roleId: "ml-engineer", text: "What is differential privacy? How would you apply it when training a model on user health data from Apple Watch?", category: "Math/Stats", difficulty: "Hard" },
  { id: "apple-ml-6", companyId: "apple", roleId: "ml-engineer", text: "How would you convert a PyTorch model to Core ML format for deployment on iOS? What are the optimization steps involved?", category: "MLOps", difficulty: "Medium" },
  { id: "apple-ml-7", companyId: "apple", roleId: "ml-engineer", text: "Design a photo search system for the Photos app that understands natural language queries like 'pictures of dogs at the beach'.", category: "System Design for AI", difficulty: "Hard" },
  { id: "apple-ml-8", companyId: "apple", roleId: "ml-engineer", text: "Explain how knowledge distillation works. How would you compress a large language model to run efficiently on Apple Silicon?", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "apple-ml-9", companyId: "apple", roleId: "ml-engineer", text: "What are GANs? Explain the training dynamics, mode collapse problem, and techniques to stabilize GAN training.", category: "Deep Learning", difficulty: "Hard" },
  { id: "apple-ml-10", companyId: "apple", roleId: "ml-engineer", text: "Implement a random forest classifier from scratch. Explain bagging, feature randomness, and out-of-bag error estimation.", category: "Coding", difficulty: "Medium" },
  { id: "apple-ml-11", companyId: "apple", roleId: "ml-engineer", text: "How does the Vision Transformer (ViT) work? Compare it with traditional CNNs for image classification tasks.", category: "Deep Learning", difficulty: "Hard" },
  { id: "apple-ml-12", companyId: "apple", roleId: "ml-engineer", text: "Explain the ROC curve and AUC metric. When is AUC-PR more appropriate than AUC-ROC?", category: "Classical ML", difficulty: "Medium" },

  // ===== OPENAI - ML ENGINEER =====
  { id: "oai-ml-1", companyId: "openai", roleId: "ml-engineer", text: "Explain the GPT architecture in detail. How does autoregressive language modeling work, and what is the role of causal masking?", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "oai-ml-2", companyId: "openai", roleId: "ml-engineer", text: "What are the key challenges in scaling transformer training to billions of parameters? Discuss model parallelism, data parallelism, and pipeline parallelism.", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "oai-ml-3", companyId: "openai", roleId: "ml-engineer", text: "Implement the self-attention mechanism from scratch in Python. Include the scaled dot-product attention and multi-head attention wrapper.", category: "Coding", difficulty: "Hard" },
  { id: "oai-ml-4", companyId: "openai", roleId: "ml-engineer", text: "Explain RLHF end-to-end: from collecting preference data, to training a reward model, to PPO optimization. What are the failure modes?", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "oai-ml-5", companyId: "openai", roleId: "ml-engineer", text: "How would you evaluate an LLM for factual correctness, safety, and helpfulness? Design a comprehensive evaluation framework.", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "oai-ml-6", companyId: "openai", roleId: "ml-engineer", text: "What are the differences between DPO (Direct Preference Optimization) and PPO for alignment? What are the trade-offs?", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "oai-ml-7", companyId: "openai", roleId: "ml-engineer", text: "Explain the concept of in-context learning. Why can LLMs perform tasks from few-shot examples without weight updates?", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "oai-ml-8", companyId: "openai", roleId: "ml-engineer", text: "Design a system for serving a 175B parameter model with low latency. Discuss KV caching, speculative decoding, and batching strategies.", category: "System Design for AI", difficulty: "Hard" },
  { id: "oai-ml-9", companyId: "openai", roleId: "ml-engineer", text: "Implement a basic tokenizer using Byte Pair Encoding (BPE) from scratch. Explain the merge rules and vocabulary construction.", category: "Coding", difficulty: "Hard" },
  { id: "oai-ml-10", companyId: "openai", roleId: "ml-engineer", text: "What is the 'alignment tax'? How do you ensure safety constraints don't significantly degrade model capability?", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "oai-ml-11", companyId: "openai", roleId: "ml-engineer", text: "Explain the chain-of-thought prompting technique. Why does it improve reasoning performance in LLMs?", category: "LLM/GenAI", difficulty: "Medium" },
  { id: "oai-ml-12", companyId: "openai", roleId: "ml-engineer", text: "How does the Mixture of Experts (MoE) architecture work? What are the routing mechanisms and load balancing challenges?", category: "Deep Learning", difficulty: "Hard" },
  { id: "oai-ml-13", companyId: "openai", roleId: "ml-engineer", text: "Explain the math behind the softmax function and temperature scaling. How does temperature affect token sampling in text generation?", category: "Math/Stats", difficulty: "Medium" },
  { id: "oai-ml-14", companyId: "openai", roleId: "ml-engineer", text: "What are hallucinations in LLMs? Explain the root causes and current mitigation strategies (RAG, constrained decoding, etc.).", category: "LLM/GenAI", difficulty: "Hard" },

  // ===== NVIDIA - ML ENGINEER =====
  { id: "nv-ml-1", companyId: "nvidia", roleId: "ml-engineer", text: "Explain how GPU parallelism accelerates deep learning training. What are CUDA cores, tensor cores, and how does mixed-precision training work?", category: "Deep Learning", difficulty: "Hard" },
  { id: "nv-ml-2", companyId: "nvidia", roleId: "ml-engineer", text: "How does TensorRT optimize a trained model for inference? Explain layer fusion, kernel auto-tuning, and dynamic tensor memory.", category: "MLOps", difficulty: "Hard" },
  { id: "nv-ml-3", companyId: "nvidia", roleId: "ml-engineer", text: "Implement matrix multiplication in CUDA-style pseudocode with tiling for shared memory optimization. Why is memory coalescing important?", category: "Coding", difficulty: "Hard" },
  { id: "nv-ml-4", companyId: "nvidia", roleId: "ml-engineer", text: "Explain the difference between model parallelism and data parallelism. When would you use tensor parallelism vs pipeline parallelism?", category: "Deep Learning", difficulty: "Hard" },
  { id: "nv-ml-5", companyId: "nvidia", roleId: "ml-engineer", text: "How does flash attention reduce memory usage from O(N^2) to O(N)? Explain the tiling and recomputation strategy.", category: "LLM/GenAI", difficulty: "Hard" },
  { id: "nv-ml-6", companyId: "nvidia", roleId: "ml-engineer", text: "Design an inference serving system that can handle thousands of concurrent requests for a large vision model. Discuss batching and GPU utilization.", category: "System Design for AI", difficulty: "Hard" },
  { id: "nv-ml-7", companyId: "nvidia", roleId: "ml-engineer", text: "Explain the convolution operation mathematically. How are convolutions implemented efficiently on GPUs using im2col and GEMM?", category: "Math/Stats", difficulty: "Hard" },
  { id: "nv-ml-8", companyId: "nvidia", roleId: "ml-engineer", text: "What is NVIDIA Triton Inference Server? How does it handle dynamic batching, model ensembling, and multi-GPU serving?", category: "MLOps", difficulty: "Hard" },
  { id: "nv-ml-9", companyId: "nvidia", roleId: "ml-engineer", text: "Explain diffusion models (DDPM, Stable Diffusion). How does the denoising process work, and what is classifier-free guidance?", category: "Deep Learning", difficulty: "Hard" },
  { id: "nv-ml-10", companyId: "nvidia", roleId: "ml-engineer", text: "How would you profile and optimize a PyTorch training loop that is GPU-underutilized? What tools and metrics would you look at?", category: "MLOps", difficulty: "Medium" },
  { id: "nv-ml-11", companyId: "nvidia", roleId: "ml-engineer", text: "Implement a basic autoencoder in Python and explain the difference between standard autoencoders, VAEs, and VQ-VAEs.", category: "Coding", difficulty: "Medium" },
  { id: "nv-ml-12", companyId: "nvidia", roleId: "ml-engineer", text: "Explain the FP16, BF16, and INT8 number formats. Why is BF16 preferred for training while INT8 is used for inference?", category: "Deep Learning", difficulty: "Medium" },
  { id: "nv-ml-13", companyId: "nvidia", roleId: "ml-engineer", text: "What is the roofline model? How do you use it to determine whether a deep learning workload is compute-bound or memory-bound?", category: "Math/Stats", difficulty: "Hard" },
  { id: "nv-ml-14", companyId: "nvidia", roleId: "ml-engineer", text: "Design a real-time object detection pipeline for autonomous vehicles using NVIDIA's hardware stack. Discuss latency, safety, and redundancy.", category: "System Design for AI", difficulty: "Hard" },

  // =============================================================
  // ===== AI ENGINEER ROLE (LLMs, GenAI, RAG, Agents) ==========
  // =============================================================

  // ===== GOOGLE - AI ENGINEER =====
  { id: "g-ai-1", companyId: "google", roleId: "ai-engineer", text: "Design a RAG pipeline for Google Workspace that answers questions from a user's Docs, Sheets, and Gmail. How do you handle multi-modal retrieval?", category: "RAG Systems", difficulty: "Hard" },
  { id: "g-ai-2", companyId: "google", roleId: "ai-engineer", text: "How would you build a conversational AI agent that can call external APIs (search, calculator, calendar) using function calling? Discuss the ReAct pattern.", category: "AI Agents", difficulty: "Hard" },
  { id: "g-ai-3", companyId: "google", roleId: "ai-engineer", text: "Explain vector databases (Pinecone, Weaviate, ChromaDB). How do approximate nearest neighbor algorithms like HNSW and IVF work?", category: "Vector Databases", difficulty: "Medium" },
  { id: "g-ai-4", companyId: "google", roleId: "ai-engineer", text: "You need to fine-tune Gemini for a specific enterprise use case. Compare full fine-tuning, LoRA, prefix tuning, and prompt tuning. When would you use each?", category: "Fine-tuning", difficulty: "Hard" },
  { id: "g-ai-5", companyId: "google", roleId: "ai-engineer", text: "Design a guardrails system for an LLM-powered chatbot that prevents jailbreaking, prompt injection, and harmful content generation.", category: "AI Safety", difficulty: "Hard" },
  { id: "g-ai-6", companyId: "google", roleId: "ai-engineer", text: "How would you evaluate the quality of an LLM's responses? Discuss automated metrics (BLEU, ROUGE, BERTScore) vs human evaluation vs LLM-as-judge.", category: "Evaluation", difficulty: "Medium" },
  { id: "g-ai-7", companyId: "google", roleId: "ai-engineer", text: "Explain chunking strategies for RAG: fixed-size, semantic, recursive, document-structure-aware. How does chunk size affect retrieval quality?", category: "RAG Systems", difficulty: "Medium" },
  { id: "g-ai-8", companyId: "google", roleId: "ai-engineer", text: "Design a multi-turn conversational AI system with memory. How do you handle context windows, conversation summarization, and long-term user memory?", category: "AI Agents", difficulty: "Hard" },
  { id: "g-ai-9", companyId: "google", roleId: "ai-engineer", text: "What is prompt engineering? Explain zero-shot, few-shot, chain-of-thought, tree-of-thought, and self-consistency prompting techniques with examples.", category: "Prompt Engineering", difficulty: "Medium" },
  { id: "g-ai-10", companyId: "google", roleId: "ai-engineer", text: "How would you build a code generation assistant like Gemini Code Assist? Discuss context gathering, retrieval, generation, and post-processing.", category: "LLM Applications", difficulty: "Hard" },

  // ===== META - AI ENGINEER =====
  { id: "meta-ai-1", companyId: "meta", roleId: "ai-engineer", text: "Design an AI-powered content moderation pipeline for Instagram that uses LLMs to understand context, sarcasm, and cultural nuance.", category: "LLM Applications", difficulty: "Hard" },
  { id: "meta-ai-2", companyId: "meta", roleId: "ai-engineer", text: "How would you build a RAG system over Meta's internal documentation (millions of docs)? Discuss indexing, retrieval, re-ranking, and answer generation.", category: "RAG Systems", difficulty: "Hard" },
  { id: "meta-ai-3", companyId: "meta", roleId: "ai-engineer", text: "Explain the LLaMA model family. How does Meta's open-source approach differ from OpenAI's closed approach? What are the implications for AI engineering?", category: "LLM Fundamentals", difficulty: "Medium" },
  { id: "meta-ai-4", companyId: "meta", roleId: "ai-engineer", text: "Design an AI agent that can browse the web, extract information, and synthesize answers. How do you handle hallucination and source attribution?", category: "AI Agents", difficulty: "Hard" },
  { id: "meta-ai-5", companyId: "meta", roleId: "ai-engineer", text: "How would you implement semantic search across WhatsApp messages while preserving end-to-end encryption? Discuss on-device embedding and privacy.", category: "Vector Databases", difficulty: "Hard" },
  { id: "meta-ai-6", companyId: "meta", roleId: "ai-engineer", text: "Explain prompt injection attacks. How would you defend an LLM application against direct injection, indirect injection, and data exfiltration?", category: "AI Safety", difficulty: "Hard" },
  { id: "meta-ai-7", companyId: "meta", roleId: "ai-engineer", text: "Design an AI-powered ad creative generator that produces text and image ad variants optimized for engagement. How do you evaluate quality?", category: "LLM Applications", difficulty: "Hard" },
  { id: "meta-ai-8", companyId: "meta", roleId: "ai-engineer", text: "How do embedding models (like sentence-transformers) work? Explain contrastive learning, triplet loss, and how to fine-tune embeddings for a custom domain.", category: "Embeddings", difficulty: "Medium" },

  // ===== AMAZON - AI ENGINEER =====
  { id: "a-ai-1", companyId: "amazon", roleId: "ai-engineer", text: "Design an AI-powered product Q&A system for Amazon that answers customer questions using product descriptions, reviews, and specifications.", category: "RAG Systems", difficulty: "Hard" },
  { id: "a-ai-2", companyId: "amazon", roleId: "ai-engineer", text: "How would you build a conversational shopping assistant using Bedrock that recommends products based on natural language queries?", category: "LLM Applications", difficulty: "Hard" },
  { id: "a-ai-3", companyId: "amazon", roleId: "ai-engineer", text: "Design an AI agent framework that can orchestrate multiple tools (search, database lookup, calculator, API calls) to complete complex tasks.", category: "AI Agents", difficulty: "Hard" },
  { id: "a-ai-4", companyId: "amazon", roleId: "ai-engineer", text: "Explain the trade-offs between using a hosted LLM API (Claude, GPT) vs self-hosting an open-source model (LLaMA, Mistral) for enterprise use cases.", category: "LLM Fundamentals", difficulty: "Medium" },
  { id: "a-ai-5", companyId: "amazon", roleId: "ai-engineer", text: "How would you build a document understanding system that extracts structured data from invoices, contracts, and receipts using LLMs?", category: "LLM Applications", difficulty: "Medium" },
  { id: "a-ai-6", companyId: "amazon", roleId: "ai-engineer", text: "Design a review summarization system that generates pros/cons from thousands of customer reviews. How do you handle contradicting opinions?", category: "LLM Applications", difficulty: "Medium" },
  { id: "a-ai-7", companyId: "amazon", roleId: "ai-engineer", text: "Explain the concept of AI observability. How would you monitor LLM applications in production for quality, latency, cost, and safety?", category: "AI Ops", difficulty: "Medium" },
  { id: "a-ai-8", companyId: "amazon", roleId: "ai-engineer", text: "How would you implement a hybrid search system that combines keyword (BM25) and semantic (vector) search for an e-commerce platform?", category: "RAG Systems", difficulty: "Medium" },

  // ===== MICROSOFT - AI ENGINEER =====
  { id: "ms-ai-1", companyId: "microsoft", roleId: "ai-engineer", text: "Design a Copilot for Excel that can understand natural language queries and generate formulas, charts, and pivot tables.", category: "LLM Applications", difficulty: "Hard" },
  { id: "ms-ai-2", companyId: "microsoft", roleId: "ai-engineer", text: "Explain Azure OpenAI Service architecture. How would you design a multi-tenant AI application with rate limiting, content filtering, and cost management?", category: "AI Ops", difficulty: "Hard" },
  { id: "ms-ai-3", companyId: "microsoft", roleId: "ai-engineer", text: "How would you build a RAG chatbot for enterprise knowledge bases using Azure AI Search and GPT-4? Discuss indexing, chunking, and grounding.", category: "RAG Systems", difficulty: "Hard" },
  { id: "ms-ai-4", companyId: "microsoft", roleId: "ai-engineer", text: "Design a meeting summarization AI for Teams that generates action items, decisions, and follow-ups from meeting transcripts.", category: "LLM Applications", difficulty: "Medium" },
  { id: "ms-ai-5", companyId: "microsoft", roleId: "ai-engineer", text: "Explain Semantic Kernel and LangChain frameworks. How do they enable building AI agents with planning, memory, and tool use?", category: "AI Agents", difficulty: "Medium" },
  { id: "ms-ai-6", companyId: "microsoft", roleId: "ai-engineer", text: "How would you implement responsible AI practices in an LLM application? Discuss content filtering, bias detection, and transparency.", category: "AI Safety", difficulty: "Medium" },
  { id: "ms-ai-7", companyId: "microsoft", roleId: "ai-engineer", text: "Design a code review AI assistant that can understand PRs, identify bugs, suggest improvements, and explain code changes.", category: "LLM Applications", difficulty: "Hard" },
  { id: "ms-ai-8", companyId: "microsoft", roleId: "ai-engineer", text: "How do you handle token limits when building LLM applications? Discuss context window management, prompt compression, and map-reduce patterns.", category: "Prompt Engineering", difficulty: "Medium" },

  // ===== OPENAI - AI ENGINEER =====
  { id: "oai-ai-1", companyId: "openai", roleId: "ai-engineer", text: "Design the function calling / tool use system in GPT. How do you define tool schemas, handle parallel tool calls, and manage error recovery?", category: "AI Agents", difficulty: "Hard" },
  { id: "oai-ai-2", companyId: "openai", roleId: "ai-engineer", text: "Explain the Assistants API architecture. How would you build a stateful AI assistant with threads, file search, and code interpreter?", category: "LLM Applications", difficulty: "Hard" },
  { id: "oai-ai-3", companyId: "openai", roleId: "ai-engineer", text: "Design an evaluation framework for measuring LLM capabilities across reasoning, coding, math, and safety. How do you prevent benchmark contamination?", category: "Evaluation", difficulty: "Hard" },
  { id: "oai-ai-4", companyId: "openai", roleId: "ai-engineer", text: "How would you build a fine-tuning pipeline that takes domain-specific data, creates training examples, fine-tunes GPT, and evaluates the result?", category: "Fine-tuning", difficulty: "Hard" },
  { id: "oai-ai-5", companyId: "openai", roleId: "ai-engineer", text: "Explain structured output generation from LLMs. How do you guarantee valid JSON output? Discuss constrained decoding and grammar-based sampling.", category: "LLM Applications", difficulty: "Medium" },
  { id: "oai-ai-6", companyId: "openai", roleId: "ai-engineer", text: "Design a multi-agent system where specialized agents (researcher, coder, reviewer) collaborate to solve complex problems. How do you manage agent communication?", category: "AI Agents", difficulty: "Hard" },
  { id: "oai-ai-7", companyId: "openai", roleId: "ai-engineer", text: "How would you build a real-time voice AI assistant? Discuss speech-to-text, LLM processing, text-to-speech, and end-to-end latency optimization.", category: "LLM Applications", difficulty: "Hard" },
  { id: "oai-ai-8", companyId: "openai", roleId: "ai-engineer", text: "Explain the concept of AI red-teaming. How would you systematically find vulnerabilities in an LLM before deployment?", category: "AI Safety", difficulty: "Hard" },

  // ===== NVIDIA - AI ENGINEER =====
  { id: "nv-ai-1", companyId: "nvidia", roleId: "ai-engineer", text: "How would you optimize LLM inference using NVIDIA TensorRT-LLM? Discuss KV caching, in-flight batching, and quantization.", category: "AI Ops", difficulty: "Hard" },
  { id: "nv-ai-2", companyId: "nvidia", roleId: "ai-engineer", text: "Design a GPU-accelerated RAG pipeline using NVIDIA NeMo Retriever. How do you optimize embedding generation and similarity search on GPUs?", category: "RAG Systems", difficulty: "Hard" },
  { id: "nv-ai-3", companyId: "nvidia", roleId: "ai-engineer", text: "Explain the trade-offs between running AI inference on cloud GPUs vs edge devices. When would you deploy on Jetson vs A100 vs H100?", category: "AI Ops", difficulty: "Medium" },
  { id: "nv-ai-4", companyId: "nvidia", roleId: "ai-engineer", text: "How would you build a digital human (avatar) that can conduct natural conversations using NVIDIA's ACE and Audio2Face technologies?", category: "LLM Applications", difficulty: "Hard" },
  { id: "nv-ai-5", companyId: "nvidia", roleId: "ai-engineer", text: "Design an AI-powered visual inspection system for manufacturing defect detection that runs in real-time on NVIDIA hardware.", category: "LLM Applications", difficulty: "Hard" },
  { id: "nv-ai-6", companyId: "nvidia", roleId: "ai-engineer", text: "Explain speculative decoding for LLM inference. How does using a small draft model speed up generation from a large model?", category: "LLM Fundamentals", difficulty: "Hard" },

  // ===== NETFLIX - AI ENGINEER =====
  { id: "nf-ai-1", companyId: "netflix", roleId: "ai-engineer", text: "Design an AI system that generates personalized movie/show descriptions and thumbnails based on a user's viewing history and preferences.", category: "LLM Applications", difficulty: "Hard" },
  { id: "nf-ai-2", companyId: "netflix", roleId: "ai-engineer", text: "How would you build a natural language search system for Netflix? 'Show me funny movies from the 90s with a twist ending'.", category: "RAG Systems", difficulty: "Hard" },
  { id: "nf-ai-3", companyId: "netflix", roleId: "ai-engineer", text: "Design an AI subtitle translation system that preserves cultural context, humor, and emotion across 30+ languages.", category: "LLM Applications", difficulty: "Hard" },
  { id: "nf-ai-4", companyId: "netflix", roleId: "ai-engineer", text: "How would you use LLMs to automatically generate show recaps ('Previously on...') from transcript and scene data?", category: "LLM Applications", difficulty: "Medium" },
  { id: "nf-ai-5", companyId: "netflix", roleId: "ai-engineer", text: "Explain how you would build an AI content tagging system that watches videos and generates metadata (genre, mood, themes, plot keywords).", category: "LLM Applications", difficulty: "Hard" },
  { id: "nf-ai-6", companyId: "netflix", roleId: "ai-engineer", text: "Design a conversational recommendation agent: 'I'm in the mood for something dark but not horror, like Breaking Bad'. How do you understand intent?", category: "AI Agents", difficulty: "Medium" },

  // =============================================================
  // ===== NEW PRODUCT COMPANIES - SDE & OTHER ROLES ============
  // =============================================================

  // ===== TWITTER/X - SDE =====
  { id: "tw-sde-1", companyId: "twitter", roleId: "sde", text: "Design Twitter's timeline generation system. How would you merge and rank tweets from followed users and algorithmic recommendations?", category: "System Design", difficulty: "Hard" },
  { id: "tw-sde-2", companyId: "twitter", roleId: "sde", text: "Given a stream of tweets, design a system to detect trending topics in real-time. What data structures and algorithms would you use?", category: "System Design", difficulty: "Hard" },
  { id: "tw-sde-3", companyId: "twitter", roleId: "sde", text: "Implement a rate limiter that allows N requests per user per minute using a sliding window approach.", category: "Design", difficulty: "Medium" },
  { id: "tw-sde-4", companyId: "twitter", roleId: "sde", text: "Design a URL shortening service like t.co. Handle collision, analytics, and expiry at Twitter's scale.", category: "System Design", difficulty: "Medium" },
  { id: "tw-sde-5", companyId: "twitter", roleId: "sde", text: "Given a graph of followers, find the shortest path between two users (degrees of separation).", category: "Graphs", difficulty: "Medium" },
  { id: "tw-sde-6", companyId: "twitter", roleId: "sde", text: "How would you design a real-time notification system that delivers push notifications to millions of users simultaneously?", category: "System Design", difficulty: "Hard" },
  { id: "tw-sde-7", companyId: "twitter", roleId: "sde", text: "Implement an autocomplete system for Twitter search that suggests users, hashtags, and topics as the user types.", category: "Trie", difficulty: "Medium" },
  { id: "tw-sde-8", companyId: "twitter", roleId: "sde", text: "Design a distributed cache system for storing user timelines. How do you handle cache invalidation when a user tweets?", category: "System Design", difficulty: "Hard" },
  { id: "tw-sde-9", companyId: "twitter", roleId: "sde", text: "Given a list of tweets with timestamps, find the maximum number of tweets posted in any 60-second window.", category: "Sliding Window", difficulty: "Medium" },
  { id: "tw-sde-10", companyId: "twitter", roleId: "sde", text: "How would you design a system to detect and prevent spam bots on the platform at scale?", category: "System Design", difficulty: "Hard" },

  // ===== TWITTER/X - BACKEND =====
  { id: "tw-be-1", companyId: "twitter", roleId: "backend", text: "Explain fan-out-on-write vs fan-out-on-read for timeline delivery. What are the trade-offs and when would you use a hybrid approach?", category: "Architecture", difficulty: "Hard" },
  { id: "tw-be-2", companyId: "twitter", roleId: "backend", text: "How does Twitter handle 500K+ tweets per second? Discuss partitioning, message queues, and eventual consistency.", category: "Distributed Systems", difficulty: "Hard" },
  { id: "tw-be-3", companyId: "twitter", roleId: "backend", text: "Design the data model for Twitter's social graph (followers, following, blocks, mutes). How would you efficiently query mutual followers?", category: "Databases", difficulty: "Medium" },
  { id: "tw-be-4", companyId: "twitter", roleId: "backend", text: "Explain how you would implement idempotent tweet creation to prevent duplicate tweets from retries.", category: "API Design", difficulty: "Medium" },

  // ===== STRIPE - SDE =====
  { id: "str-sde-1", companyId: "stripe", roleId: "sde", text: "Design a payment processing system that handles credit card transactions with exactly-once semantics. How do you prevent double charges?", category: "System Design", difficulty: "Hard" },
  { id: "str-sde-2", companyId: "stripe", roleId: "sde", text: "Implement a function to detect fraudulent transactions in real-time given a stream of payment events. What features would you extract?", category: "Algorithms", difficulty: "Hard" },
  { id: "str-sde-3", companyId: "stripe", roleId: "sde", text: "Given a ledger of transactions, write a function to verify that all accounts are balanced (double-entry bookkeeping validation).", category: "Arrays", difficulty: "Medium" },
  { id: "str-sde-4", companyId: "stripe", roleId: "sde", text: "Design an API rate limiting system per API key with tiered plans (free, pro, enterprise) and burst allowances.", category: "System Design", difficulty: "Medium" },
  { id: "str-sde-5", companyId: "stripe", roleId: "sde", text: "How would you design a webhook delivery system with guaranteed at-least-once delivery, retries with exponential backoff, and dead letter queues?", category: "System Design", difficulty: "Hard" },
  { id: "str-sde-6", companyId: "stripe", roleId: "sde", text: "Implement an algorithm to find all possible ways to make change for a given amount using given denominations. What is the optimal approach?", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "str-sde-7", companyId: "stripe", roleId: "sde", text: "Design a subscription billing system that handles upgrades, downgrades, prorations, and recurring charges.", category: "System Design", difficulty: "Hard" },
  { id: "str-sde-8", companyId: "stripe", roleId: "sde", text: "Given a large array of integers representing daily transaction amounts, find the maximum profit from a single buy-sell pair.", category: "Arrays", difficulty: "Easy" },
  { id: "str-sde-9", companyId: "stripe", roleId: "sde", text: "How would you design a multi-currency payment system? Handle exchange rates, settlement, and currency conversion at scale.", category: "System Design", difficulty: "Hard" },
  { id: "str-sde-10", companyId: "stripe", roleId: "sde", text: "Implement a simple key-value store with transactions support (begin, set, get, delete, rollback, commit).", category: "Design", difficulty: "Medium" },

  // ===== STRIPE - BACKEND =====
  { id: "str-be-1", companyId: "stripe", roleId: "backend", text: "Explain idempotency keys in payment APIs. How does Stripe ensure that retrying a payment request doesn't result in duplicate charges?", category: "API Design", difficulty: "Hard" },
  { id: "str-be-2", companyId: "stripe", roleId: "backend", text: "How would you design a distributed ledger system that maintains ACID properties across multiple databases and services?", category: "Distributed Systems", difficulty: "Hard" },
  { id: "str-be-3", companyId: "stripe", roleId: "backend", text: "Design the architecture for Stripe Connect — a platform that allows marketplaces to accept payments on behalf of sellers.", category: "System Design", difficulty: "Hard" },
  { id: "str-be-4", companyId: "stripe", roleId: "backend", text: "How do you implement a reliable event-driven architecture for payment state machines (pending → processing → succeeded/failed)?", category: "Architecture", difficulty: "Medium" },

  // ===== LINKEDIN - SDE =====
  { id: "li-sde-1", companyId: "linkedin", roleId: "sde", text: "Design LinkedIn's 'People You May Know' feature. What signals and algorithms would you use for connection recommendations?", category: "System Design", difficulty: "Hard" },
  { id: "li-sde-2", companyId: "linkedin", roleId: "sde", text: "Given a social network graph, find the shortest path between two people (connections of connections).", category: "Graphs", difficulty: "Medium" },
  { id: "li-sde-3", companyId: "linkedin", roleId: "sde", text: "Design a news feed system for LinkedIn that ranks professional content based on relevance, engagement, and recency.", category: "System Design", difficulty: "Hard" },
  { id: "li-sde-4", companyId: "linkedin", roleId: "sde", text: "Implement a function that finds all groups of connected components in a social network graph.", category: "Graphs", difficulty: "Medium" },
  { id: "li-sde-5", companyId: "linkedin", roleId: "sde", text: "Design a real-time messaging system like LinkedIn Chat with read receipts, typing indicators, and offline message queuing.", category: "System Design", difficulty: "Hard" },
  { id: "li-sde-6", companyId: "linkedin", roleId: "sde", text: "Given an array of job posting skills and a candidate's skills, find the best matching jobs using set operations and ranking.", category: "Strings", difficulty: "Medium" },
  { id: "li-sde-7", companyId: "linkedin", roleId: "sde", text: "Design LinkedIn's job search and recommendation engine. How do you match candidates to jobs using skills, experience, and preferences?", category: "System Design", difficulty: "Hard" },
  { id: "li-sde-8", companyId: "linkedin", roleId: "sde", text: "Implement LRU Cache that supports get() and put() operations in O(1) time.", category: "Design", difficulty: "Medium" },
  { id: "li-sde-9", companyId: "linkedin", roleId: "sde", text: "How would you design LinkedIn's notification system that handles millions of events (likes, comments, job alerts, connection requests)?", category: "System Design", difficulty: "Hard" },
  { id: "li-sde-10", companyId: "linkedin", roleId: "sde", text: "Given a matrix of 1s and 0s, find the largest rectangle containing only 1s (Maximal Rectangle).", category: "Stack", difficulty: "Hard" },

  // ===== LINKEDIN - BACKEND =====
  { id: "li-be-1", companyId: "linkedin", roleId: "backend", text: "Explain LinkedIn's technology stack. How does the platform handle 900M+ member profiles and 2B+ API calls per day?", category: "Architecture", difficulty: "Hard" },
  { id: "li-be-2", companyId: "linkedin", roleId: "backend", text: "Design a graph database schema for LinkedIn's social network. How would you efficiently query 2nd and 3rd degree connections?", category: "Databases", difficulty: "Hard" },
  { id: "li-be-3", companyId: "linkedin", roleId: "backend", text: "How would you implement a skills endorsement system that prevents gaming and spam endorsements?", category: "System Design", difficulty: "Medium" },

  // ===== SPOTIFY - SDE =====
  { id: "sp-sde-1", companyId: "spotify", roleId: "sde", text: "Design Spotify's music recommendation system (Discover Weekly). What signals and algorithms would you use?", category: "System Design", difficulty: "Hard" },
  { id: "sp-sde-2", companyId: "spotify", roleId: "sde", text: "Design a real-time audio streaming system that handles adaptive bitrate and seamless playback across devices.", category: "System Design", difficulty: "Hard" },
  { id: "sp-sde-3", companyId: "spotify", roleId: "sde", text: "Implement a playlist shuffle algorithm that feels truly random to users (avoiding clusters of same artist/genre).", category: "Algorithms", difficulty: "Medium" },
  { id: "sp-sde-4", companyId: "spotify", roleId: "sde", text: "Given a list of songs with features (tempo, energy, valence), cluster them into mood-based playlists.", category: "Algorithms", difficulty: "Medium" },
  { id: "sp-sde-5", companyId: "spotify", roleId: "sde", text: "Design a collaborative playlist feature where multiple users can add, remove, and reorder songs in real-time.", category: "System Design", difficulty: "Hard" },
  { id: "sp-sde-6", companyId: "spotify", roleId: "sde", text: "How would you design Spotify Wrapped — a year-end summary of each user's listening habits computed for 400M+ users?", category: "System Design", difficulty: "Hard" },
  { id: "sp-sde-7", companyId: "spotify", roleId: "sde", text: "Implement a function to find the longest consecutive sequence in an unsorted array in O(n) time.", category: "Arrays", difficulty: "Medium" },
  { id: "sp-sde-8", companyId: "spotify", roleId: "sde", text: "Design a lyrics synchronization system that displays lyrics in real-time matching the song playback.", category: "System Design", difficulty: "Medium" },
  { id: "sp-sde-9", companyId: "spotify", roleId: "sde", text: "Given a graph of artists and collaboration edges, find all connected artist clusters (communities).", category: "Graphs", difficulty: "Medium" },
  { id: "sp-sde-10", companyId: "spotify", roleId: "sde", text: "Design the ad insertion system for Spotify Free that dynamically inserts audio ads without buffering or latency.", category: "System Design", difficulty: "Hard" },

  // ===== SPOTIFY - BACKEND =====
  { id: "sp-be-1", companyId: "spotify", roleId: "backend", text: "Explain how Spotify uses microservices architecture. How do they handle service discovery, load balancing, and circuit breaking?", category: "Architecture", difficulty: "Hard" },
  { id: "sp-be-2", companyId: "spotify", roleId: "backend", text: "Design the backend for Spotify's 'Group Session' feature where friends can listen together remotely in sync.", category: "System Design", difficulty: "Hard" },
  { id: "sp-be-3", companyId: "spotify", roleId: "backend", text: "How would you design the royalty payment calculation system that tracks plays and distributes payments to millions of artists?", category: "System Design", difficulty: "Hard" },

  // ===== ORACLE - SDE =====
  { id: "or-sde-1", companyId: "oracle", roleId: "sde", text: "Explain the internal architecture of a relational database. How do query parsers, optimizers, and execution engines work?", category: "Databases", difficulty: "Hard" },
  { id: "or-sde-2", companyId: "oracle", roleId: "sde", text: "Implement a B-Tree insert and search operation. Explain why B-Trees are preferred for database indexing over binary search trees.", category: "Trees", difficulty: "Hard" },
  { id: "or-sde-3", companyId: "oracle", roleId: "sde", text: "Write a SQL query to find all employees who earn more than the average salary of their department.", category: "SQL", difficulty: "Medium" },
  { id: "or-sde-4", companyId: "oracle", roleId: "sde", text: "Explain MVCC (Multi-Version Concurrency Control). How does Oracle handle concurrent reads and writes without locking?", category: "Databases", difficulty: "Hard" },
  { id: "or-sde-5", companyId: "oracle", roleId: "sde", text: "Design a connection pooling library. How do you handle pool exhaustion, idle connection cleanup, and health checks?", category: "System Design", difficulty: "Medium" },
  { id: "or-sde-6", companyId: "oracle", roleId: "sde", text: "Implement a hash map from scratch with collision handling (separate chaining and open addressing). Analyze the amortized time complexity.", category: "Data Structures", difficulty: "Medium" },
  { id: "or-sde-7", companyId: "oracle", roleId: "sde", text: "What is the difference between clustered and non-clustered indexes? Explain covering indexes and index-only scans.", category: "Databases", difficulty: "Medium" },
  { id: "or-sde-8", companyId: "oracle", roleId: "sde", text: "Design a distributed SQL query execution engine that can join data across multiple database shards.", category: "System Design", difficulty: "Hard" },
  { id: "or-sde-9", companyId: "oracle", roleId: "sde", text: "Implement a thread pool with a fixed number of worker threads and a task queue. Handle graceful shutdown.", category: "Concurrency", difficulty: "Medium" },
  { id: "or-sde-10", companyId: "oracle", roleId: "sde", text: "Explain the WAL (Write-Ahead Logging) protocol. How does it ensure durability and support crash recovery in databases?", category: "Databases", difficulty: "Hard" },

  // ===== SAMSUNG - SDE =====
  { id: "sam-sde-1", companyId: "samsung", roleId: "sde", text: "Given a matrix, rotate it 90 degrees clockwise in-place. Can you do it in O(1) extra space?", category: "Arrays", difficulty: "Medium" },
  { id: "sam-sde-2", companyId: "samsung", roleId: "sde", text: "Implement a memory allocator (malloc/free) that handles allocation, deallocation, and fragmentation.", category: "OS Concepts", difficulty: "Hard" },
  { id: "sam-sde-3", companyId: "samsung", roleId: "sde", text: "Given a grid of characters and a dictionary, find all words in the grid that exist in the dictionary (Boggle).", category: "Backtracking", difficulty: "Hard" },
  { id: "sam-sde-4", companyId: "samsung", roleId: "sde", text: "Explain the difference between RTOS and general-purpose OS. When would you use each in embedded systems?", category: "OS Concepts", difficulty: "Medium" },
  { id: "sam-sde-5", companyId: "samsung", roleId: "sde", text: "Implement Dijkstra's algorithm for finding the shortest path in a weighted graph.", category: "Graphs", difficulty: "Medium" },
  { id: "sam-sde-6", companyId: "samsung", roleId: "sde", text: "Design a file system for a mobile device with limited storage. How do you handle wear leveling on flash memory?", category: "System Design", difficulty: "Hard" },
  { id: "sam-sde-7", companyId: "samsung", roleId: "sde", text: "Given a string, find the minimum number of cuts needed to partition it such that every substring is a palindrome.", category: "Dynamic Programming", difficulty: "Hard" },
  { id: "sam-sde-8", companyId: "samsung", roleId: "sde", text: "Implement the Producer-Consumer problem using semaphores. Explain deadlock prevention techniques.", category: "Concurrency", difficulty: "Medium" },
  { id: "sam-sde-9", companyId: "samsung", roleId: "sde", text: "Design a low-power Bluetooth communication protocol for IoT devices. How do you minimize battery consumption?", category: "System Design", difficulty: "Hard" },
  { id: "sam-sde-10", companyId: "samsung", roleId: "sde", text: "Given a binary matrix, find the largest square sub-matrix containing all 1s.", category: "Dynamic Programming", difficulty: "Medium" },

  // ===== PAYPAL - SDE =====
  { id: "pp-sde-1", companyId: "paypal", roleId: "sde", text: "Design a peer-to-peer money transfer system. How do you ensure consistency when both sender and receiver balances must update atomically?", category: "System Design", difficulty: "Hard" },
  { id: "pp-sde-2", companyId: "paypal", roleId: "sde", text: "Implement a fraud detection algorithm that identifies suspicious transaction patterns (unusual amounts, locations, frequency).", category: "Algorithms", difficulty: "Hard" },
  { id: "pp-sde-3", companyId: "paypal", roleId: "sde", text: "Given a list of transactions, group them by merchant and find the top K merchants by total transaction volume.", category: "Sorting", difficulty: "Medium" },
  { id: "pp-sde-4", companyId: "paypal", roleId: "sde", text: "Design an escrow payment system for marketplace transactions. Handle disputes, refunds, and timeouts.", category: "System Design", difficulty: "Hard" },
  { id: "pp-sde-5", companyId: "paypal", roleId: "sde", text: "Implement a concurrent HashMap that is thread-safe. Explain the difference between ConcurrentHashMap and synchronized HashMap.", category: "Concurrency", difficulty: "Medium" },
  { id: "pp-sde-6", companyId: "paypal", roleId: "sde", text: "How would you design a system to comply with PCI-DSS for storing and processing credit card data?", category: "Security", difficulty: "Hard" },
  { id: "pp-sde-7", companyId: "paypal", roleId: "sde", text: "Given an array of daily stock prices, find the maximum profit with at most 2 transactions.", category: "Dynamic Programming", difficulty: "Hard" },
  { id: "pp-sde-8", companyId: "paypal", roleId: "sde", text: "Design a currency exchange rate service that provides real-time exchange rates with staleness guarantees.", category: "System Design", difficulty: "Medium" },
  { id: "pp-sde-9", companyId: "paypal", roleId: "sde", text: "Implement a Trie-based search for account lookup by name or email prefix.", category: "Trie", difficulty: "Medium" },
  { id: "pp-sde-10", companyId: "paypal", roleId: "sde", text: "Design a transaction history system that supports complex filters (date range, amount range, merchant, status) with sub-second query times.", category: "System Design", difficulty: "Medium" },

  // ===== PAYPAL - BACKEND =====
  { id: "pp-be-1", companyId: "paypal", roleId: "backend", text: "Explain the Saga pattern for distributed transactions. How would you use it for a cross-border payment involving multiple banks?", category: "Distributed Systems", difficulty: "Hard" },
  { id: "pp-be-2", companyId: "paypal", roleId: "backend", text: "How would you design a real-time risk scoring engine that evaluates every transaction against 100+ fraud rules in under 100ms?", category: "System Design", difficulty: "Hard" },
  { id: "pp-be-3", companyId: "paypal", roleId: "backend", text: "Design a ledger system that maintains an immutable audit trail of all financial transactions. How do you handle corrections?", category: "Databases", difficulty: "Hard" },

  // ===== INTUIT - SDE =====
  { id: "int-sde-1", companyId: "intuit", roleId: "sde", text: "Design a tax calculation engine that handles different tax brackets, deductions, and credits for TurboTax.", category: "System Design", difficulty: "Hard" },
  { id: "int-sde-2", companyId: "intuit", roleId: "sde", text: "Given a list of financial transactions, categorize them automatically (food, transport, entertainment) using pattern matching.", category: "Strings", difficulty: "Medium" },
  { id: "int-sde-3", companyId: "intuit", roleId: "sde", text: "Design a real-time expense tracking system for QuickBooks that syncs across multiple devices and handles offline edits.", category: "System Design", difficulty: "Hard" },
  { id: "int-sde-4", companyId: "intuit", roleId: "sde", text: "Implement a function to reconcile bank transactions with user-entered records. Handle fuzzy matching on amounts and dates.", category: "Algorithms", difficulty: "Medium" },
  { id: "int-sde-5", companyId: "intuit", roleId: "sde", text: "Given an array of intervals representing busy time slots, merge overlapping intervals and find free slots.", category: "Intervals", difficulty: "Medium" },
  { id: "int-sde-6", companyId: "intuit", roleId: "sde", text: "Design a document OCR pipeline that extracts financial data from receipts, invoices, and tax forms.", category: "System Design", difficulty: "Hard" },
  { id: "int-sde-7", companyId: "intuit", roleId: "sde", text: "Implement a graph-based dependency resolver for tax form fields where some fields depend on others.", category: "Graphs", difficulty: "Medium" },
  { id: "int-sde-8", companyId: "intuit", roleId: "sde", text: "How would you design a financial data encryption system that complies with SOC 2 and allows analytics on encrypted data?", category: "Security", difficulty: "Hard" },
  { id: "int-sde-9", companyId: "intuit", roleId: "sde", text: "Given a matrix of budgets vs actuals, find all cells where spending exceeds budget by more than 10%. Optimize for large datasets.", category: "Arrays", difficulty: "Easy" },
  { id: "int-sde-10", companyId: "intuit", roleId: "sde", text: "Design a multi-tenant SaaS architecture for QuickBooks Online. How do you isolate customer data while sharing infrastructure?", category: "System Design", difficulty: "Hard" },

  // ===== ATLASSIAN - SDE =====
  { id: "atl-sde-1", companyId: "atlassian", roleId: "sde", text: "Design Jira's issue tracking system. How would you model the workflow engine that supports custom statuses, transitions, and conditions?", category: "System Design", difficulty: "Hard" },
  { id: "atl-sde-2", companyId: "atlassian", roleId: "sde", text: "Implement a real-time collaborative text editor like Confluence using Operational Transformation or CRDTs.", category: "System Design", difficulty: "Hard" },
  { id: "atl-sde-3", companyId: "atlassian", roleId: "sde", text: "Given a directed graph of task dependencies, find a valid execution order (topological sort). Detect circular dependencies.", category: "Graphs", difficulty: "Medium" },
  { id: "atl-sde-4", companyId: "atlassian", roleId: "sde", text: "Design a permission system for Confluence where pages inherit permissions from parent spaces with override capability.", category: "System Design", difficulty: "Medium" },
  { id: "atl-sde-5", companyId: "atlassian", roleId: "sde", text: "How would you design the Trello board with drag-and-drop cards, real-time sync across users, and undo/redo support?", category: "System Design", difficulty: "Hard" },
  { id: "atl-sde-6", companyId: "atlassian", roleId: "sde", text: "Implement a text search engine for Confluence that supports full-text search, highlighting, and relevance ranking.", category: "Design", difficulty: "Hard" },
  { id: "atl-sde-7", companyId: "atlassian", roleId: "sde", text: "Given n tasks with deadlines and profits, find the maximum profit task scheduling (Job Sequencing with Deadlines).", category: "Greedy", difficulty: "Medium" },
  { id: "atl-sde-8", companyId: "atlassian", roleId: "sde", text: "Design a webhook system for Jira that notifies external services when issues are created, updated, or transitioned.", category: "System Design", difficulty: "Medium" },
  { id: "atl-sde-9", companyId: "atlassian", roleId: "sde", text: "Describe your values. Which Atlassian value resonates with you most? (Open company, no bullshit / Build with heart and balance / Don't #@!% the customer / Play as a team / Be the change you seek)", category: "Behavioral", difficulty: "Easy" },
  { id: "atl-sde-10", companyId: "atlassian", roleId: "sde", text: "Implement an in-memory key-value store that supports SET, GET, DELETE, and COUNT (count of keys with a given value) — all in O(1).", category: "Design", difficulty: "Medium" },

  // ===== ZOMATO - SDE =====
  { id: "zm-sde-1", companyId: "zomato", roleId: "sde", text: "Design a food delivery system like Zomato. Cover restaurant listing, order placement, real-time delivery tracking, and payment.", category: "System Design", difficulty: "Hard" },
  { id: "zm-sde-2", companyId: "zomato", roleId: "sde", text: "How would you match delivery partners to orders? Design an assignment algorithm considering distance, load, and estimated time.", category: "Algorithms", difficulty: "Hard" },
  { id: "zm-sde-3", companyId: "zomato", roleId: "sde", text: "Given N restaurants with ratings and distances, find the top K restaurants within a given radius sorted by rating.", category: "Heap", difficulty: "Medium" },
  { id: "zm-sde-4", companyId: "zomato", roleId: "sde", text: "Design a restaurant search system with filters (cuisine, price, rating, delivery time, distance). How do you handle geospatial queries?", category: "System Design", difficulty: "Hard" },
  { id: "zm-sde-5", companyId: "zomato", roleId: "sde", text: "Implement a function to calculate estimated delivery time based on restaurant preparation time, distance, traffic, and rider speed.", category: "Algorithms", difficulty: "Medium" },
  { id: "zm-sde-6", companyId: "zomato", roleId: "sde", text: "Design a dynamic pricing/surge pricing system for Zomato during peak hours. What signals would you use?", category: "System Design", difficulty: "Hard" },
  { id: "zm-sde-7", companyId: "zomato", roleId: "sde", text: "Given a grid representing a city, find the shortest delivery path from restaurant to customer avoiding blocked roads (BFS).", category: "Graphs", difficulty: "Medium" },
  { id: "zm-sde-8", companyId: "zomato", roleId: "sde", text: "Design a review and rating system that prevents fake reviews and supports photo reviews with moderation.", category: "System Design", difficulty: "Medium" },
  { id: "zm-sde-9", companyId: "zomato", roleId: "sde", text: "How would you design a coupon/offer system that handles BOGO, percentage off, cashback, and first-order discounts?", category: "System Design", difficulty: "Medium" },
  { id: "zm-sde-10", companyId: "zomato", roleId: "sde", text: "Given delivery partner locations updating every 5 seconds, design a system to efficiently find the nearest available partner to a restaurant.", category: "System Design", difficulty: "Hard" },

  // ===== SWIGGY - SDE =====
  { id: "sw-sde-1", companyId: "swiggy", roleId: "sde", text: "Design Swiggy Instamart — a 10-minute grocery delivery system. How do you manage inventory across dark stores?", category: "System Design", difficulty: "Hard" },
  { id: "sw-sde-2", companyId: "swiggy", roleId: "sde", text: "How would you build a real-time order tracking system that shows live rider location on a map?", category: "System Design", difficulty: "Hard" },
  { id: "sw-sde-3", companyId: "swiggy", roleId: "sde", text: "Given a list of delivery orders with pickup and drop locations, find the optimal route for a rider to deliver multiple orders (TSP variant).", category: "Graphs", difficulty: "Hard" },
  { id: "sw-sde-4", companyId: "swiggy", roleId: "sde", text: "Design a restaurant menu management system that handles item availability, variants (size, toppings), and customizations.", category: "System Design", difficulty: "Medium" },
  { id: "sw-sde-5", companyId: "swiggy", roleId: "sde", text: "Implement an LRU cache for caching restaurant menus. Handle cache invalidation when restaurants update their menu.", category: "Design", difficulty: "Medium" },
  { id: "sw-sde-6", companyId: "swiggy", roleId: "sde", text: "Given n riders and m orders with pickup/drop locations, design a batching algorithm that groups nearby orders for the same rider.", category: "Algorithms", difficulty: "Hard" },
  { id: "sw-sde-7", companyId: "swiggy", roleId: "sde", text: "How would you handle flash sales (e.g., ₹1 Swiggy deals) with millions of concurrent users without crashing the system?", category: "System Design", difficulty: "Hard" },
  { id: "sw-sde-8", companyId: "swiggy", roleId: "sde", text: "Design a personalized restaurant recommendation system. What features and signals would you use?", category: "System Design", difficulty: "Medium" },

  // ===== DATABRICKS - SDE =====
  { id: "db-sde-1", companyId: "databricks", roleId: "sde", text: "Explain the Delta Lake architecture. How do ACID transactions work on top of a data lake (Parquet + transaction log)?", category: "Databases", difficulty: "Hard" },
  { id: "db-sde-2", companyId: "databricks", roleId: "sde", text: "Design a distributed SQL query engine that can process petabytes of data. How does Spark SQL optimize query execution?", category: "System Design", difficulty: "Hard" },
  { id: "db-sde-3", companyId: "databricks", roleId: "sde", text: "Implement a simple MapReduce framework in any language. Explain how shuffle and sort work between map and reduce phases.", category: "Distributed Systems", difficulty: "Hard" },
  { id: "db-sde-4", companyId: "databricks", roleId: "sde", text: "Given a stream of events, design a real-time aggregation pipeline that computes sliding window metrics (count, avg, percentile).", category: "System Design", difficulty: "Hard" },
  { id: "db-sde-5", companyId: "databricks", roleId: "sde", text: "Explain the difference between Spark RDDs, DataFrames, and Datasets. When would you use each?", category: "Big Data", difficulty: "Medium" },
  { id: "db-sde-6", companyId: "databricks", roleId: "sde", text: "Design a data lineage tracking system that traces how data flows and transforms across an entire data pipeline.", category: "System Design", difficulty: "Hard" },
  { id: "db-sde-7", companyId: "databricks", roleId: "sde", text: "Given a large dataset split across N partitions, implement a distributed sort algorithm.", category: "Sorting", difficulty: "Hard" },
  { id: "db-sde-8", companyId: "databricks", roleId: "sde", text: "How does Databricks handle auto-scaling for Spark clusters? Discuss resource allocation, scheduling, and cost optimization.", category: "System Design", difficulty: "Medium" },

  // ===== DATABRICKS - DATA ENGINEER =====
  { id: "db-de-1", companyId: "databricks", roleId: "data-engineer", text: "Design a medallion architecture (bronze/silver/gold) for a data lakehouse. Explain the purpose of each layer.", category: "Architecture", difficulty: "Medium" },
  { id: "db-de-2", companyId: "databricks", roleId: "data-engineer", text: "How would you build a change data capture (CDC) pipeline from a transactional database to Delta Lake using Spark Structured Streaming?", category: "Data Processing", difficulty: "Hard" },
  { id: "db-de-3", companyId: "databricks", roleId: "data-engineer", text: "Explain the concept of schema evolution in Delta Lake. How do you handle schema changes without breaking downstream consumers?", category: "Data Processing", difficulty: "Medium" },
  { id: "db-de-4", companyId: "databricks", roleId: "data-engineer", text: "Design a data quality framework that validates data at each stage of the pipeline. What checks would you implement?", category: "Data Quality", difficulty: "Medium" },
  { id: "db-de-5", companyId: "databricks", roleId: "data-engineer", text: "How would you optimize a Spark job that is running slowly due to data skew? Explain salting, broadcast joins, and AQE.", category: "Performance", difficulty: "Hard" },

  // ===== COINBASE - SDE =====
  { id: "cb-sde-1", companyId: "coinbase", roleId: "sde", text: "Design a cryptocurrency exchange matching engine that handles limit orders, market orders, and maintains an order book.", category: "System Design", difficulty: "Hard" },
  { id: "cb-sde-2", companyId: "coinbase", roleId: "sde", text: "How would you design a real-time portfolio tracking system that shows live profit/loss across multiple crypto assets?", category: "System Design", difficulty: "Hard" },
  { id: "cb-sde-3", companyId: "coinbase", roleId: "sde", text: "Implement a function to validate a blockchain. Verify that each block's hash is correct and the chain is unbroken.", category: "Algorithms", difficulty: "Medium" },
  { id: "cb-sde-4", companyId: "coinbase", roleId: "sde", text: "Design a wallet system that supports multiple cryptocurrencies, hot/cold storage, and multi-signature approvals.", category: "System Design", difficulty: "Hard" },
  { id: "cb-sde-5", companyId: "coinbase", roleId: "sde", text: "Given a stream of price ticks for a cryptocurrency, implement an algorithm to detect arbitrage opportunities across exchanges.", category: "Algorithms", difficulty: "Hard" },
  { id: "cb-sde-6", companyId: "coinbase", roleId: "sde", text: "How would you design a KYC (Know Your Customer) verification system that handles identity document validation and sanctions screening?", category: "System Design", difficulty: "Hard" },
  { id: "cb-sde-7", companyId: "coinbase", roleId: "sde", text: "Implement a consistent hashing algorithm for distributing data across a cluster of nodes with virtual nodes.", category: "Distributed Systems", difficulty: "Medium" },
  { id: "cb-sde-8", companyId: "coinbase", roleId: "sde", text: "Design a real-time price alert system that notifies millions of users when their target prices are hit.", category: "System Design", difficulty: "Medium" },

  // ===== RAZORPAY - SDE =====
  { id: "rz-sde-1", companyId: "razorpay", roleId: "sde", text: "Design a payment gateway that handles 10M+ transactions daily. Cover payment processing, retry logic, and reconciliation.", category: "System Design", difficulty: "Hard" },
  { id: "rz-sde-2", companyId: "razorpay", roleId: "sde", text: "How would you design an auto-retry mechanism for failed payments that handles different failure types (bank timeout, insufficient funds, network error)?", category: "System Design", difficulty: "Hard" },
  { id: "rz-sde-3", companyId: "razorpay", roleId: "sde", text: "Implement a function that validates and formats Indian bank account numbers (IFSC code validation, account number checksum).", category: "Strings", difficulty: "Easy" },
  { id: "rz-sde-4", companyId: "razorpay", roleId: "sde", text: "Design the settlement system that calculates and transfers merchant payouts with T+2 settlement cycles.", category: "System Design", difficulty: "Hard" },
  { id: "rz-sde-5", companyId: "razorpay", roleId: "sde", text: "Given a list of payment amounts and a total, determine if any combination of payments equals the total (subset sum for reconciliation).", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "rz-sde-6", companyId: "razorpay", roleId: "sde", text: "Design a subscription management system that handles recurring payments, plan changes, prorations, and dunning.", category: "System Design", difficulty: "Hard" },
  { id: "rz-sde-7", companyId: "razorpay", roleId: "sde", text: "How would you design a real-time dashboard that shows payment success rates, failure reasons, and trends for merchants?", category: "System Design", difficulty: "Medium" },
  { id: "rz-sde-8", companyId: "razorpay", roleId: "sde", text: "Implement a concurrent-safe counter that tracks transactions per second across multiple threads.", category: "Concurrency", difficulty: "Medium" },
  { id: "rz-sde-9", companyId: "razorpay", roleId: "sde", text: "Design a UPI payment system. How does the request flow from payer app to payer bank to NPCI to payee bank to payee app?", category: "System Design", difficulty: "Hard" },
  { id: "rz-sde-10", companyId: "razorpay", roleId: "sde", text: "How would you build a split payment system where an order amount is distributed to multiple vendors/partners with configurable rules?", category: "System Design", difficulty: "Medium" },

  // ===== RAZORPAY - BACKEND =====
  { id: "rz-be-1", companyId: "razorpay", roleId: "backend", text: "Explain the difference between optimistic and pessimistic locking. How does Razorpay prevent double-spending in concurrent transactions?", category: "Concurrency", difficulty: "Hard" },
  { id: "rz-be-2", companyId: "razorpay", roleId: "backend", text: "Design an event-sourcing architecture for a payment system. How does it help with auditability and rebuilding state?", category: "Architecture", difficulty: "Hard" },
  { id: "rz-be-3", companyId: "razorpay", roleId: "backend", text: "How would you handle PCI-DSS compliance in a payment gateway? Discuss tokenization, encryption at rest, and network segmentation.", category: "Security", difficulty: "Hard" },
];

export function getQuestionsByCompanyAndRole(
  companyId: string,
  roleId: string
): Question[] {
  return questions.filter(
    (q) => q.companyId === companyId && q.roleId === roleId
  );
}

export function getAvailableRolesForCompany(companyId: string): string[] {
  const roleIds = new Set(
    questions.filter((q) => q.companyId === companyId).map((q) => q.roleId)
  );
  return Array.from(roleIds);
}

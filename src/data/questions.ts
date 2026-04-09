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

  // =============================================================
  // ===== EXPANDED SERVICE-BASED COMPANIES (25+ per company) ====
  // =============================================================

  // ===== TCS - SDE (additional) =====
  { id: "tcs-sde-9", companyId: "tcs", roleId: "sde", text: "What is the difference between final, finally, and finalize in Java?", category: "Java", difficulty: "Easy" },
  { id: "tcs-sde-10", companyId: "tcs", roleId: "sde", text: "Explain the concept of garbage collection in Java. What are the different types of garbage collectors?", category: "Java", difficulty: "Medium" },
  { id: "tcs-sde-11", companyId: "tcs", roleId: "sde", text: "Write a program to find the first non-repeating character in a string.", category: "Strings", difficulty: "Easy" },
  { id: "tcs-sde-12", companyId: "tcs", roleId: "sde", text: "What is the difference between ArrayList and LinkedList? When would you use each?", category: "Collections", difficulty: "Easy" },
  { id: "tcs-sde-13", companyId: "tcs", roleId: "sde", text: "Explain the concept of multithreading. What is the difference between Thread class and Runnable interface?", category: "Concurrency", difficulty: "Medium" },
  { id: "tcs-sde-14", companyId: "tcs", roleId: "sde", text: "What are ACID properties in databases? Explain each with examples.", category: "DBMS", difficulty: "Medium" },
  { id: "tcs-sde-15", companyId: "tcs", roleId: "sde", text: "Write a SQL query to find employees who have the same salary as another employee.", category: "SQL", difficulty: "Easy" },
  { id: "tcs-sde-16", companyId: "tcs", roleId: "sde", text: "What is the difference between TCP and UDP protocols? Give use cases for each.", category: "Networking", difficulty: "Easy" },
  { id: "tcs-sde-17", companyId: "tcs", roleId: "sde", text: "Explain the concept of virtual memory. How does paging work in operating systems?", category: "OS Concepts", difficulty: "Medium" },
  { id: "tcs-sde-18", companyId: "tcs", roleId: "sde", text: "Write a program to implement binary search on a sorted array.", category: "Algorithms", difficulty: "Easy" },
  { id: "tcs-sde-19", companyId: "tcs", roleId: "sde", text: "What are design patterns? Explain Singleton and Factory patterns with examples.", category: "Design Patterns", difficulty: "Medium" },
  { id: "tcs-sde-20", companyId: "tcs", roleId: "sde", text: "What is the difference between inner join, left join, right join, and full outer join?", category: "SQL", difficulty: "Easy" },
  { id: "tcs-sde-21", companyId: "tcs", roleId: "sde", text: "Explain the OSI model. What happens at each layer when you type a URL in a browser?", category: "Networking", difficulty: "Medium" },
  { id: "tcs-sde-22", companyId: "tcs", roleId: "sde", text: "Write a program to detect a cycle in a linked list using Floyd's algorithm.", category: "Linked List", difficulty: "Medium" },
  { id: "tcs-sde-23", companyId: "tcs", roleId: "sde", text: "What is REST API? Explain HTTP methods (GET, POST, PUT, DELETE, PATCH) with examples.", category: "Web", difficulty: "Easy" },
  { id: "tcs-sde-24", companyId: "tcs", roleId: "sde", text: "What is the difference between process and thread? Explain context switching.", category: "OS Concepts", difficulty: "Medium" },
  { id: "tcs-sde-25", companyId: "tcs", roleId: "sde", text: "Write a program to find the longest common prefix among an array of strings.", category: "Strings", difficulty: "Easy" },

  // ===== TCS - FRONTEND =====
  { id: "tcs-fe-1", companyId: "tcs", roleId: "frontend", text: "What is the difference between let, var, and const in JavaScript?", category: "JavaScript", difficulty: "Easy" },
  { id: "tcs-fe-2", companyId: "tcs", roleId: "frontend", text: "Explain the box model in CSS. What is the difference between margin and padding?", category: "CSS", difficulty: "Easy" },
  { id: "tcs-fe-3", companyId: "tcs", roleId: "frontend", text: "What is the difference between == and === in JavaScript?", category: "JavaScript", difficulty: "Easy" },
  { id: "tcs-fe-4", companyId: "tcs", roleId: "frontend", text: "Explain event bubbling and event capturing in JavaScript.", category: "JavaScript", difficulty: "Medium" },
  { id: "tcs-fe-5", companyId: "tcs", roleId: "frontend", text: "What are React hooks? Explain useState and useEffect with examples.", category: "React", difficulty: "Medium" },

  // ===== TCS - BACKEND =====
  { id: "tcs-be-1", companyId: "tcs", roleId: "backend", text: "What is Spring Boot? How does it simplify Java application development?", category: "Frameworks", difficulty: "Easy" },
  { id: "tcs-be-2", companyId: "tcs", roleId: "backend", text: "Explain the difference between @Controller and @RestController in Spring.", category: "Frameworks", difficulty: "Easy" },
  { id: "tcs-be-3", companyId: "tcs", roleId: "backend", text: "What is connection pooling? Why is it important in database-driven applications?", category: "Databases", difficulty: "Medium" },

  // ===== INFOSYS - SDE (additional) =====
  { id: "inf-sde-7", companyId: "infosys", roleId: "sde", text: "What is the difference between Comparable and Comparator interfaces in Java?", category: "Java", difficulty: "Medium" },
  { id: "inf-sde-8", companyId: "infosys", roleId: "sde", text: "Write a program to find the missing number in an array of 1 to N.", category: "Arrays", difficulty: "Easy" },
  { id: "inf-sde-9", companyId: "infosys", roleId: "sde", text: "What is the difference between HTTP and HTTPS? How does SSL/TLS work?", category: "Networking", difficulty: "Medium" },
  { id: "inf-sde-10", companyId: "infosys", roleId: "sde", text: "Explain the concept of indexing in databases. What are B-Tree indexes?", category: "DBMS", difficulty: "Medium" },
  { id: "inf-sde-11", companyId: "infosys", roleId: "sde", text: "Write a program to check if two strings are anagrams of each other.", category: "Strings", difficulty: "Easy" },
  { id: "inf-sde-12", companyId: "infosys", roleId: "sde", text: "What is the difference between an abstract class and an interface in Java 8+?", category: "OOP", difficulty: "Easy" },
  { id: "inf-sde-13", companyId: "infosys", roleId: "sde", text: "Explain deadlock in operating systems. What are the four necessary conditions for deadlock?", category: "OS Concepts", difficulty: "Medium" },
  { id: "inf-sde-14", companyId: "infosys", roleId: "sde", text: "What is Spring Boot auto-configuration? How does dependency injection work?", category: "Frameworks", difficulty: "Medium" },
  { id: "inf-sde-15", companyId: "infosys", roleId: "sde", text: "Write a SQL query to find the top 3 highest-paid employees in each department.", category: "SQL", difficulty: "Medium" },
  { id: "inf-sde-16", companyId: "infosys", roleId: "sde", text: "What is a HashMap? Explain how it works internally including hashing and collision resolution.", category: "Collections", difficulty: "Medium" },
  { id: "inf-sde-17", companyId: "infosys", roleId: "sde", text: "Explain the difference between stack and heap memory in Java.", category: "Java", difficulty: "Medium" },
  { id: "inf-sde-18", companyId: "infosys", roleId: "sde", text: "Write a program to merge two sorted arrays into a single sorted array.", category: "Arrays", difficulty: "Easy" },
  { id: "inf-sde-19", companyId: "infosys", roleId: "sde", text: "What is the difference between String, StringBuilder, and StringBuffer in Java?", category: "Java", difficulty: "Easy" },
  { id: "inf-sde-20", companyId: "infosys", roleId: "sde", text: "Explain the lifecycle of a servlet. What are the differences between GenericServlet and HttpServlet?", category: "Web", difficulty: "Medium" },
  { id: "inf-sde-21", companyId: "infosys", roleId: "sde", text: "What is Docker? How does containerization differ from virtualization?", category: "DevOps", difficulty: "Medium" },
  { id: "inf-sde-22", companyId: "infosys", roleId: "sde", text: "Write a program to find the intersection of two arrays.", category: "Arrays", difficulty: "Easy" },

  // ===== INFOSYS - FRONTEND =====
  { id: "inf-fe-1", companyId: "infosys", roleId: "frontend", text: "What is the DOM? Explain the difference between virtual DOM and real DOM.", category: "JavaScript", difficulty: "Easy" },
  { id: "inf-fe-2", companyId: "infosys", roleId: "frontend", text: "Explain closures in JavaScript with a practical example.", category: "JavaScript", difficulty: "Medium" },
  { id: "inf-fe-3", companyId: "infosys", roleId: "frontend", text: "What is responsive design? How do you implement it using media queries?", category: "CSS", difficulty: "Easy" },

  // ===== WIPRO - SDE (additional) =====
  { id: "wip-sde-6", companyId: "wipro", roleId: "sde", text: "Write a program to implement a stack using two queues.", category: "Data Structures", difficulty: "Medium" },
  { id: "wip-sde-7", companyId: "wipro", roleId: "sde", text: "What is the difference between HashMap and TreeMap in Java?", category: "Collections", difficulty: "Easy" },
  { id: "wip-sde-8", companyId: "wipro", roleId: "sde", text: "Explain the concept of polymorphism in OOP with Java examples.", category: "OOP", difficulty: "Easy" },
  { id: "wip-sde-9", companyId: "wipro", roleId: "sde", text: "Write a SQL query to find the department with the highest average salary.", category: "SQL", difficulty: "Medium" },
  { id: "wip-sde-10", companyId: "wipro", roleId: "sde", text: "What is the difference between checked and unchecked exceptions in Java?", category: "Java", difficulty: "Easy" },
  { id: "wip-sde-11", companyId: "wipro", roleId: "sde", text: "Explain normalization and denormalization. When would you denormalize a database?", category: "DBMS", difficulty: "Medium" },
  { id: "wip-sde-12", companyId: "wipro", roleId: "sde", text: "Write a program to find the GCD of two numbers using the Euclidean algorithm.", category: "Math", difficulty: "Easy" },
  { id: "wip-sde-13", companyId: "wipro", roleId: "sde", text: "What is the difference between static and dynamic binding in Java?", category: "OOP", difficulty: "Medium" },
  { id: "wip-sde-14", companyId: "wipro", roleId: "sde", text: "Explain the concept of CORS. How do you handle cross-origin requests?", category: "Web", difficulty: "Medium" },
  { id: "wip-sde-15", companyId: "wipro", roleId: "sde", text: "Write a program to rotate an array by K positions to the right.", category: "Arrays", difficulty: "Easy" },
  { id: "wip-sde-16", companyId: "wipro", roleId: "sde", text: "What are stored procedures in SQL? Write an example stored procedure.", category: "SQL", difficulty: "Medium" },
  { id: "wip-sde-17", companyId: "wipro", roleId: "sde", text: "Explain the concept of garbage collection in Java. What is the role of finalize() method?", category: "Java", difficulty: "Medium" },
  { id: "wip-sde-18", companyId: "wipro", roleId: "sde", text: "What is the difference between cookie and session? How do you manage user sessions?", category: "Web", difficulty: "Easy" },
  { id: "wip-sde-19", companyId: "wipro", roleId: "sde", text: "Write a program to find the maximum subarray sum (Kadane's algorithm).", category: "Arrays", difficulty: "Medium" },
  { id: "wip-sde-20", companyId: "wipro", roleId: "sde", text: "What is the difference between monolithic and microservices architecture?", category: "Architecture", difficulty: "Medium" },
  { id: "wip-sde-21", companyId: "wipro", roleId: "sde", text: "Explain the concept of transactions in databases. What is a savepoint?", category: "DBMS", difficulty: "Medium" },

  // ===== WIPRO - FRONTEND =====
  { id: "wip-fe-1", companyId: "wipro", roleId: "frontend", text: "What is the difference between null and undefined in JavaScript?", category: "JavaScript", difficulty: "Easy" },
  { id: "wip-fe-2", companyId: "wipro", roleId: "frontend", text: "Explain promises in JavaScript. What is the difference between Promise.all and Promise.race?", category: "JavaScript", difficulty: "Medium" },
  { id: "wip-fe-3", companyId: "wipro", roleId: "frontend", text: "What is Angular? How does two-way data binding work?", category: "Angular", difficulty: "Medium" },
  { id: "wip-fe-4", companyId: "wipro", roleId: "frontend", text: "Explain the lifecycle methods in React class components.", category: "React", difficulty: "Medium" },

  // ===== HCL - SDE (additional) =====
  { id: "hcl-sde-7", companyId: "hcl", roleId: "sde", text: "Write a program to implement a queue using stacks.", category: "Data Structures", difficulty: "Medium" },
  { id: "hcl-sde-8", companyId: "hcl", roleId: "sde", text: "Explain the concept of method references in Java 8.", category: "Java", difficulty: "Medium" },
  { id: "hcl-sde-9", companyId: "hcl", roleId: "sde", text: "What is the difference between truncate, delete, and drop in SQL?", category: "SQL", difficulty: "Easy" },
  { id: "hcl-sde-10", companyId: "hcl", roleId: "sde", text: "Explain the concept of serialization in Java. What is the role of serialVersionUID?", category: "Java", difficulty: "Medium" },
  { id: "hcl-sde-11", companyId: "hcl", roleId: "sde", text: "Write a program to check if a linked list is a palindrome.", category: "Linked List", difficulty: "Medium" },
  { id: "hcl-sde-12", companyId: "hcl", roleId: "sde", text: "What is the difference between final, finally, and finalize in Java?", category: "Java", difficulty: "Easy" },
  { id: "hcl-sde-13", companyId: "hcl", roleId: "sde", text: "Explain the concept of connection pooling in JDBC. Why is it important?", category: "Databases", difficulty: "Medium" },
  { id: "hcl-sde-14", companyId: "hcl", roleId: "sde", text: "What is Git? Explain the difference between git merge and git rebase.", category: "Version Control", difficulty: "Easy" },
  { id: "hcl-sde-15", companyId: "hcl", roleId: "sde", text: "Write a SQL query to find the Nth highest salary from a table.", category: "SQL", difficulty: "Medium" },
  { id: "hcl-sde-16", companyId: "hcl", roleId: "sde", text: "What is the difference between SOAP and REST web services?", category: "Web", difficulty: "Easy" },
  { id: "hcl-sde-17", companyId: "hcl", roleId: "sde", text: "Explain the concept of functional interfaces in Java 8. Give examples.", category: "Java", difficulty: "Medium" },
  { id: "hcl-sde-18", companyId: "hcl", roleId: "sde", text: "Write a program to find the middle element of a linked list in one pass.", category: "Linked List", difficulty: "Easy" },
  { id: "hcl-sde-19", companyId: "hcl", roleId: "sde", text: "What is the difference between @RequestMapping and @GetMapping in Spring Boot?", category: "Frameworks", difficulty: "Easy" },
  { id: "hcl-sde-20", companyId: "hcl", roleId: "sde", text: "Explain the Observer design pattern with a real-world example.", category: "Design Patterns", difficulty: "Medium" },

  // ===== HCL - FRONTEND =====
  { id: "hcl-fe-1", companyId: "hcl", roleId: "frontend", text: "What is hoisting in JavaScript? How does it work with var, let, and const?", category: "JavaScript", difficulty: "Easy" },
  { id: "hcl-fe-2", companyId: "hcl", roleId: "frontend", text: "Explain CSS specificity and how the cascade determines which styles are applied.", category: "CSS", difficulty: "Medium" },
  { id: "hcl-fe-3", companyId: "hcl", roleId: "frontend", text: "What is the this keyword in JavaScript? How does its value change in different contexts?", category: "JavaScript", difficulty: "Medium" },

  // ===== HCL - QA =====
  { id: "hcl-qa-1", companyId: "hcl", roleId: "qa-engineer", text: "What is the difference between Selenium WebDriver and Selenium IDE?", category: "Testing", difficulty: "Easy" },
  { id: "hcl-qa-2", companyId: "hcl", roleId: "qa-engineer", text: "Explain the difference between smoke testing and sanity testing.", category: "Testing", difficulty: "Easy" },

  // ===== COGNIZANT - SDE (additional) =====
  { id: "cog-sde-7", companyId: "cognizant", roleId: "sde", text: "Write a program to implement a linked list with insert, delete, and reverse operations.", category: "Data Structures", difficulty: "Medium" },
  { id: "cog-sde-8", companyId: "cognizant", roleId: "sde", text: "What is the difference between HashMap and ConcurrentHashMap?", category: "Collections", difficulty: "Medium" },
  { id: "cog-sde-9", companyId: "cognizant", roleId: "sde", text: "Explain the concept of microservices. What are the advantages and challenges?", category: "Architecture", difficulty: "Medium" },
  { id: "cog-sde-10", companyId: "cognizant", roleId: "sde", text: "Write a SQL query to find customers who placed orders in every month of the year.", category: "SQL", difficulty: "Medium" },
  { id: "cog-sde-11", companyId: "cognizant", roleId: "sde", text: "What is the difference between fail-fast and fail-safe iterators in Java?", category: "Collections", difficulty: "Medium" },
  { id: "cog-sde-12", companyId: "cognizant", roleId: "sde", text: "Explain the concept of Spring Bean lifecycle and scopes.", category: "Frameworks", difficulty: "Medium" },
  { id: "cog-sde-13", companyId: "cognizant", roleId: "sde", text: "Write a program to remove duplicates from a sorted array in-place.", category: "Arrays", difficulty: "Easy" },
  { id: "cog-sde-14", companyId: "cognizant", roleId: "sde", text: "What is the difference between a view and a materialized view in SQL?", category: "SQL", difficulty: "Medium" },
  { id: "cog-sde-15", companyId: "cognizant", roleId: "sde", text: "Explain the concept of exception hierarchy in Java. Difference between Error and Exception?", category: "Java", difficulty: "Easy" },
  { id: "cog-sde-16", companyId: "cognizant", roleId: "sde", text: "What is JVM architecture? Explain class loading, memory areas, and execution engine.", category: "Java", difficulty: "Hard" },
  { id: "cog-sde-17", companyId: "cognizant", roleId: "sde", text: "Write a program to find the longest common subsequence of two strings.", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "cog-sde-18", companyId: "cognizant", roleId: "sde", text: "What are triggers in SQL? When should you use them and what are the risks?", category: "SQL", difficulty: "Medium" },
  { id: "cog-sde-19", companyId: "cognizant", roleId: "sde", text: "Explain the concept of CI/CD pipelines. What tools have you used for continuous integration?", category: "DevOps", difficulty: "Medium" },
  { id: "cog-sde-20", companyId: "cognizant", roleId: "sde", text: "What is the difference between @Autowired, @Inject, and @Resource in Spring?", category: "Frameworks", difficulty: "Medium" },

  // ===== COGNIZANT - FRONTEND =====
  { id: "cog-fe-1", companyId: "cognizant", roleId: "frontend", text: "What is the difference between local storage, session storage, and cookies?", category: "JavaScript", difficulty: "Easy" },
  { id: "cog-fe-2", companyId: "cognizant", roleId: "frontend", text: "Explain the concept of state management in React. When would you use Redux vs Context API?", category: "React", difficulty: "Medium" },
  { id: "cog-fe-3", companyId: "cognizant", roleId: "frontend", text: "What is AJAX? How do you make HTTP requests using Fetch API vs Axios?", category: "JavaScript", difficulty: "Easy" },

  // ===== COGNIZANT - QA =====
  { id: "cog-qa-1", companyId: "cognizant", roleId: "qa-engineer", text: "What is API testing? How do you test REST APIs using Postman?", category: "Testing", difficulty: "Easy" },
  { id: "cog-qa-2", companyId: "cognizant", roleId: "qa-engineer", text: "Explain test automation frameworks. What is the Page Object Model pattern?", category: "Testing", difficulty: "Medium" },

  // ===== ACCENTURE - SDE (additional) =====
  { id: "acc-sde-7", companyId: "accenture", roleId: "sde", text: "Write a program to find the second largest element in an array without sorting.", category: "Arrays", difficulty: "Easy" },
  { id: "acc-sde-8", companyId: "accenture", roleId: "sde", text: "What is the difference between method overloading and method overriding in Java?", category: "OOP", difficulty: "Easy" },
  { id: "acc-sde-9", companyId: "accenture", roleId: "sde", text: "Explain the concept of API Gateway in microservices architecture.", category: "Architecture", difficulty: "Medium" },
  { id: "acc-sde-10", companyId: "accenture", roleId: "sde", text: "Write a SQL query using window functions (ROW_NUMBER, RANK, DENSE_RANK).", category: "SQL", difficulty: "Medium" },
  { id: "acc-sde-11", companyId: "accenture", roleId: "sde", text: "What is Docker? How do Docker containers differ from virtual machines?", category: "DevOps", difficulty: "Medium" },
  { id: "acc-sde-12", companyId: "accenture", roleId: "sde", text: "Write a program to check if a given number is an Armstrong number.", category: "Math", difficulty: "Easy" },
  { id: "acc-sde-13", companyId: "accenture", roleId: "sde", text: "What is the difference between shallow copy and deep copy in Java?", category: "Java", difficulty: "Medium" },
  { id: "acc-sde-14", companyId: "accenture", roleId: "sde", text: "Explain the concept of database sharding. What are the common sharding strategies?", category: "Databases", difficulty: "Medium" },
  { id: "acc-sde-15", companyId: "accenture", roleId: "sde", text: "Write a program to reverse a linked list iteratively.", category: "Linked List", difficulty: "Easy" },
  { id: "acc-sde-16", companyId: "accenture", roleId: "sde", text: "What is Kubernetes? Explain pods, services, and deployments.", category: "DevOps", difficulty: "Medium" },
  { id: "acc-sde-17", companyId: "accenture", roleId: "sde", text: "Explain the difference between authentication and authorization. How does JWT work?", category: "Security", difficulty: "Medium" },
  { id: "acc-sde-18", companyId: "accenture", roleId: "sde", text: "Write a program to implement a basic calculator using stack (infix to postfix evaluation).", category: "Stack", difficulty: "Medium" },
  { id: "acc-sde-19", companyId: "accenture", roleId: "sde", text: "What is the SOLID principle? Explain each principle with a coding example.", category: "Design Patterns", difficulty: "Medium" },
  { id: "acc-sde-20", companyId: "accenture", roleId: "sde", text: "Write a SQL query to find all employees whose name starts with 'A' and joined in the last 6 months.", category: "SQL", difficulty: "Easy" },

  // ===== ACCENTURE - FRONTEND =====
  { id: "acc-fe-1", companyId: "accenture", roleId: "frontend", text: "What is the difference between CSS Grid and Flexbox? When would you use each?", category: "CSS", difficulty: "Easy" },
  { id: "acc-fe-2", companyId: "accenture", roleId: "frontend", text: "Explain the component lifecycle in Angular. What are lifecycle hooks?", category: "Angular", difficulty: "Medium" },
  { id: "acc-fe-3", companyId: "accenture", roleId: "frontend", text: "What is TypeScript? How does it differ from JavaScript?", category: "TypeScript", difficulty: "Easy" },

  // ===== ACCENTURE - QA =====
  { id: "acc-qa-1", companyId: "accenture", roleId: "qa-engineer", text: "What is BDD (Behavior-Driven Development)? Explain Cucumber and Gherkin syntax.", category: "Testing", difficulty: "Medium" },
  { id: "acc-qa-2", companyId: "accenture", roleId: "qa-engineer", text: "What is performance testing? Explain load testing, stress testing, and endurance testing.", category: "Testing", difficulty: "Medium" },

  // ===== CAPGEMINI - SDE (additional) =====
  { id: "cap-sde-6", companyId: "capgemini", roleId: "sde", text: "Write a program to find all pairs of elements in an array that sum to a given target.", category: "Arrays", difficulty: "Easy" },
  { id: "cap-sde-7", companyId: "capgemini", roleId: "sde", text: "What is Spring Boot? How does it differ from Spring Framework?", category: "Frameworks", difficulty: "Medium" },
  { id: "cap-sde-8", companyId: "capgemini", roleId: "sde", text: "Explain the concept of deadlock prevention and detection in operating systems.", category: "OS Concepts", difficulty: "Medium" },
  { id: "cap-sde-9", companyId: "capgemini", roleId: "sde", text: "Write a SQL query to find the cumulative sum of salaries ordered by employee name.", category: "SQL", difficulty: "Medium" },
  { id: "cap-sde-10", companyId: "capgemini", roleId: "sde", text: "What is the difference between composition and inheritance? When should you prefer each?", category: "OOP", difficulty: "Medium" },
  { id: "cap-sde-11", companyId: "capgemini", roleId: "sde", text: "Write a program to find the kth smallest element in a BST.", category: "Trees", difficulty: "Medium" },
  { id: "cap-sde-12", companyId: "capgemini", roleId: "sde", text: "What is the difference between HTTPS and HTTP/2? Explain the benefits of HTTP/2.", category: "Networking", difficulty: "Medium" },
  { id: "cap-sde-13", companyId: "capgemini", roleId: "sde", text: "Explain the concept of JPA and Hibernate. What is the N+1 query problem?", category: "Frameworks", difficulty: "Medium" },
  { id: "cap-sde-14", companyId: "capgemini", roleId: "sde", text: "Write a program to implement quick sort and explain its average and worst-case time complexity.", category: "Sorting", difficulty: "Medium" },
  { id: "cap-sde-15", companyId: "capgemini", roleId: "sde", text: "What is Jenkins? Explain how to set up a basic CI/CD pipeline.", category: "DevOps", difficulty: "Medium" },
  { id: "cap-sde-16", companyId: "capgemini", roleId: "sde", text: "What is the difference between NoSQL document stores, key-value stores, and graph databases?", category: "Databases", difficulty: "Medium" },
  { id: "cap-sde-17", companyId: "capgemini", roleId: "sde", text: "Write a program to convert a binary tree to its mirror image.", category: "Trees", difficulty: "Easy" },
  { id: "cap-sde-18", companyId: "capgemini", roleId: "sde", text: "What is OAuth 2.0? Explain the authorization code flow.", category: "Security", difficulty: "Medium" },
  { id: "cap-sde-19", companyId: "capgemini", roleId: "sde", text: "Explain the concept of message queues. Compare RabbitMQ and Apache Kafka.", category: "Architecture", difficulty: "Medium" },
  { id: "cap-sde-20", companyId: "capgemini", roleId: "sde", text: "Write a SQL query to delete duplicate rows from a table keeping only the row with the minimum ID.", category: "SQL", difficulty: "Medium" },

  // ===== CAPGEMINI - FRONTEND =====
  { id: "cap-fe-1", companyId: "capgemini", roleId: "frontend", text: "What are Web Components? Explain Shadow DOM, Custom Elements, and Templates.", category: "Web Standards", difficulty: "Medium" },
  { id: "cap-fe-2", companyId: "capgemini", roleId: "frontend", text: "Explain async/await in JavaScript. How does it relate to Promises?", category: "JavaScript", difficulty: "Medium" },
  { id: "cap-fe-3", companyId: "capgemini", roleId: "frontend", text: "What is webpack? Explain the concepts of loaders, plugins, and code splitting.", category: "Build Tools", difficulty: "Medium" },

  // ===== CAPGEMINI - QA =====
  { id: "cap-qa-1", companyId: "capgemini", roleId: "qa-engineer", text: "What is the difference between verification and validation in software testing?", category: "Testing", difficulty: "Easy" },
  { id: "cap-qa-2", companyId: "capgemini", roleId: "qa-engineer", text: "Explain the concept of test coverage. What are statement, branch, and path coverage?", category: "Testing", difficulty: "Medium" },

  // ===== TECH MAHINDRA - SDE (additional) =====
  { id: "tm-sde-6", companyId: "techm", roleId: "sde", text: "What are Lambda expressions in Java 8? Write a program using Stream API to filter and sort a list.", category: "Java", difficulty: "Medium" },
  { id: "tm-sde-7", companyId: "techm", roleId: "sde", text: "Explain the concept of encapsulation with an example. Why is it important?", category: "OOP", difficulty: "Easy" },
  { id: "tm-sde-8", companyId: "techm", roleId: "sde", text: "Write a program to implement a stack using an array with push, pop, and peek operations.", category: "Data Structures", difficulty: "Easy" },
  { id: "tm-sde-9", companyId: "techm", roleId: "sde", text: "What is the difference between clustered and non-clustered indexes in SQL?", category: "DBMS", difficulty: "Medium" },
  { id: "tm-sde-10", companyId: "techm", roleId: "sde", text: "Explain the concept of DNS. What happens when you type a URL in the browser?", category: "Networking", difficulty: "Medium" },
  { id: "tm-sde-11", companyId: "techm", roleId: "sde", text: "Write a program to print all permutations of a given string.", category: "Backtracking", difficulty: "Medium" },
  { id: "tm-sde-12", companyId: "techm", roleId: "sde", text: "What is the difference between a process and a daemon in operating systems?", category: "OS Concepts", difficulty: "Medium" },
  { id: "tm-sde-13", companyId: "techm", roleId: "sde", text: "Explain the concept of RESTful API versioning strategies.", category: "Web", difficulty: "Medium" },
  { id: "tm-sde-14", companyId: "techm", roleId: "sde", text: "Write a SQL query to pivot rows into columns.", category: "SQL", difficulty: "Medium" },
  { id: "tm-sde-15", companyId: "techm", roleId: "sde", text: "What is the Strategy design pattern? Explain with a real-world example.", category: "Design Patterns", difficulty: "Medium" },
  { id: "tm-sde-16", companyId: "techm", roleId: "sde", text: "Write a program to check if a binary tree is height-balanced.", category: "Trees", difficulty: "Medium" },
  { id: "tm-sde-17", companyId: "techm", roleId: "sde", text: "What is caching? Explain different caching strategies (LRU, LFU, TTL).", category: "Architecture", difficulty: "Medium" },
  { id: "tm-sde-18", companyId: "techm", roleId: "sde", text: "Explain the concept of virtual functions and vtable in C++.", category: "OOP", difficulty: "Hard" },
  { id: "tm-sde-19", companyId: "techm", roleId: "sde", text: "Write a program to detect and remove duplicates from an unsorted linked list.", category: "Linked List", difficulty: "Easy" },
  { id: "tm-sde-20", companyId: "techm", roleId: "sde", text: "What is the difference between TCP handshake (3-way) and connection termination (4-way)?", category: "Networking", difficulty: "Medium" },

  // ===== TECH MAHINDRA - FRONTEND =====
  { id: "tm-fe-1", companyId: "techm", roleId: "frontend", text: "What is the difference between arrow functions and regular functions in JavaScript?", category: "JavaScript", difficulty: "Easy" },
  { id: "tm-fe-2", companyId: "techm", roleId: "frontend", text: "Explain the concept of higher-order components (HOC) in React.", category: "React", difficulty: "Medium" },
  { id: "tm-fe-3", companyId: "techm", roleId: "frontend", text: "What is CSS preprocessor? Compare Sass and Less.", category: "CSS", difficulty: "Easy" },

  // ===== TECH MAHINDRA - QA =====
  { id: "tm-qa-1", companyId: "techm", roleId: "qa-engineer", text: "What are the different types of software testing? Explain functional vs non-functional testing.", category: "Testing", difficulty: "Easy" },
  { id: "tm-qa-2", companyId: "techm", roleId: "qa-engineer", text: "What is Selenium Grid? How do you run tests in parallel across multiple browsers?", category: "Testing", difficulty: "Medium" },

  // ===== DELOITTE - SDE (additional) =====
  { id: "del-sde-6", companyId: "deloitte", roleId: "sde", text: "Write a program to implement breadth-first search (BFS) on a graph.", category: "Graphs", difficulty: "Medium" },
  { id: "del-sde-7", companyId: "deloitte", roleId: "sde", text: "What is the difference between SQL and NoSQL databases? Give use cases for each.", category: "Databases", difficulty: "Easy" },
  { id: "del-sde-8", companyId: "deloitte", roleId: "sde", text: "Explain the concept of dependency injection in Spring Boot with examples.", category: "Frameworks", difficulty: "Medium" },
  { id: "del-sde-9", companyId: "deloitte", roleId: "sde", text: "Write a program to find all subsets of a given set (Power Set).", category: "Backtracking", difficulty: "Medium" },
  { id: "del-sde-10", companyId: "deloitte", roleId: "sde", text: "What is the difference between optimistic and pessimistic locking in databases?", category: "DBMS", difficulty: "Medium" },
  { id: "del-sde-11", companyId: "deloitte", roleId: "sde", text: "Explain the concept of serverless computing. What are AWS Lambda and Azure Functions?", category: "Cloud", difficulty: "Medium" },
  { id: "del-sde-12", companyId: "deloitte", roleId: "sde", text: "Write a SQL query to find employees with consecutive attendance streaks of more than 5 days.", category: "SQL", difficulty: "Hard" },
  { id: "del-sde-13", companyId: "deloitte", roleId: "sde", text: "What is the CAP theorem? Explain with examples of real-world distributed systems.", category: "Distributed Systems", difficulty: "Medium" },
  { id: "del-sde-14", companyId: "deloitte", roleId: "sde", text: "Write a program to flatten a nested JSON object into a single-level object with dot notation keys.", category: "Strings", difficulty: "Medium" },
  { id: "del-sde-15", companyId: "deloitte", roleId: "sde", text: "What is the difference between horizontal scaling and vertical scaling? When do you use each?", category: "Architecture", difficulty: "Easy" },
  { id: "del-sde-16", companyId: "deloitte", roleId: "sde", text: "Explain the concept of event-driven architecture. What are the benefits and challenges?", category: "Architecture", difficulty: "Medium" },
  { id: "del-sde-17", companyId: "deloitte", roleId: "sde", text: "Write a program to find the lowest common ancestor of two nodes in a binary tree.", category: "Trees", difficulty: "Medium" },
  { id: "del-sde-18", companyId: "deloitte", roleId: "sde", text: "What are AWS services like S3, EC2, RDS, SQS? When would you use each?", category: "Cloud", difficulty: "Medium" },
  { id: "del-sde-19", companyId: "deloitte", roleId: "sde", text: "Explain GraphQL. How does it differ from REST? What are its advantages?", category: "API Design", difficulty: "Medium" },
  { id: "del-sde-20", companyId: "deloitte", roleId: "sde", text: "Write a program to serialize and deserialize a binary tree.", category: "Trees", difficulty: "Hard" },

  // ===== DELOITTE - FRONTEND =====
  { id: "del-fe-1", companyId: "deloitte", roleId: "frontend", text: "What is the Virtual DOM? How does React's reconciliation algorithm work?", category: "React", difficulty: "Medium" },
  { id: "del-fe-2", companyId: "deloitte", roleId: "frontend", text: "Explain the concept of Progressive Web Apps (PWAs). What are service workers?", category: "Web Standards", difficulty: "Medium" },
  { id: "del-fe-3", companyId: "deloitte", roleId: "frontend", text: "What is cross-site scripting (XSS)? How do you prevent it in web applications?", category: "Security", difficulty: "Medium" },

  // ===== DELOITTE - QA =====
  { id: "del-qa-1", companyId: "deloitte", roleId: "qa-engineer", text: "What is the STLC (Software Testing Life Cycle)? Explain each phase.", category: "Testing", difficulty: "Easy" },
  { id: "del-qa-2", companyId: "deloitte", roleId: "qa-engineer", text: "What is test-driven development (TDD)? How does it differ from BDD?", category: "Methodology", difficulty: "Medium" },

  // ===== LTIMINDTREE - SDE (additional) =====
  { id: "lti-sde-6", companyId: "lti", roleId: "sde", text: "Write a program to find the longest palindromic substring in a string.", category: "Strings", difficulty: "Medium" },
  { id: "lti-sde-7", companyId: "lti", roleId: "sde", text: "What is the difference between an interface and an abstract class in Java? When to use each?", category: "OOP", difficulty: "Easy" },
  { id: "lti-sde-8", companyId: "lti", roleId: "sde", text: "Explain the concept of Spring AOP (Aspect-Oriented Programming).", category: "Frameworks", difficulty: "Medium" },
  { id: "lti-sde-9", companyId: "lti", roleId: "sde", text: "Write a SQL query to find the running total of sales per month.", category: "SQL", difficulty: "Medium" },
  { id: "lti-sde-10", companyId: "lti", roleId: "sde", text: "What is the difference between synchronous and asynchronous programming?", category: "Concurrency", difficulty: "Easy" },
  { id: "lti-sde-11", companyId: "lti", roleId: "sde", text: "Write a program to check whether a graph is bipartite.", category: "Graphs", difficulty: "Medium" },
  { id: "lti-sde-12", companyId: "lti", roleId: "sde", text: "What is the difference between PUT and PATCH HTTP methods?", category: "Web", difficulty: "Easy" },
  { id: "lti-sde-13", companyId: "lti", roleId: "sde", text: "Explain the concept of load balancing. What are the different algorithms used?", category: "Architecture", difficulty: "Medium" },
  { id: "lti-sde-14", companyId: "lti", roleId: "sde", text: "Write a program to implement a priority queue using a heap.", category: "Data Structures", difficulty: "Medium" },
  { id: "lti-sde-15", companyId: "lti", roleId: "sde", text: "What is Redis? How is it used for caching and session management?", category: "Databases", difficulty: "Medium" },
  { id: "lti-sde-16", companyId: "lti", roleId: "sde", text: "Write a program to find the diameter of a binary tree.", category: "Trees", difficulty: "Medium" },
  { id: "lti-sde-17", companyId: "lti", roleId: "sde", text: "Explain the concept of immutability in Java. Why are String objects immutable?", category: "Java", difficulty: "Easy" },
  { id: "lti-sde-18", companyId: "lti", roleId: "sde", text: "What is the Builder design pattern? When would you use it over a constructor?", category: "Design Patterns", difficulty: "Medium" },
  { id: "lti-sde-19", companyId: "lti", roleId: "sde", text: "Write a SQL query to find gaps in a sequence of IDs in a table.", category: "SQL", difficulty: "Medium" },
  { id: "lti-sde-20", companyId: "lti", roleId: "sde", text: "Explain the concept of thread pooling in Java. What is the ExecutorService?", category: "Concurrency", difficulty: "Medium" },

  // ===== LTIMINDTREE - FRONTEND =====
  { id: "lti-fe-1", companyId: "lti", roleId: "frontend", text: "What is the difference between map, filter, and reduce in JavaScript?", category: "JavaScript", difficulty: "Easy" },
  { id: "lti-fe-2", companyId: "lti", roleId: "frontend", text: "Explain the concept of props and state in React. How do they differ?", category: "React", difficulty: "Easy" },
  { id: "lti-fe-3", companyId: "lti", roleId: "frontend", text: "What is the event loop in JavaScript? Explain the call stack and callback queue.", category: "JavaScript", difficulty: "Medium" },

  // =============================================================
  // ===== NEW SERVICE-BASED COMPANIES (25+ per company) =========
  // =============================================================

  // ===== MPHASIS - SDE =====
  { id: "mph-sde-1", companyId: "mphasis", roleId: "sde", text: "What is the difference between an abstract class and an interface in Java?", category: "OOP", difficulty: "Easy" },
  { id: "mph-sde-2", companyId: "mphasis", roleId: "sde", text: "Write a program to reverse a string without using built-in functions.", category: "Strings", difficulty: "Easy" },
  { id: "mph-sde-3", companyId: "mphasis", roleId: "sde", text: "Explain the concept of exception handling in Java. What is the difference between throw and throws?", category: "Java", difficulty: "Easy" },
  { id: "mph-sde-4", companyId: "mphasis", roleId: "sde", text: "Write a SQL query to find the top 5 departments with the highest total salary expenditure.", category: "SQL", difficulty: "Medium" },
  { id: "mph-sde-5", companyId: "mphasis", roleId: "sde", text: "What is the difference between an inner join and a cross join?", category: "SQL", difficulty: "Easy" },
  { id: "mph-sde-6", companyId: "mphasis", roleId: "sde", text: "Write a program to check if a given number is a Fibonacci number.", category: "Math", difficulty: "Easy" },
  { id: "mph-sde-7", companyId: "mphasis", roleId: "sde", text: "What is the difference between stack and heap memory allocation?", category: "OS Concepts", difficulty: "Medium" },
  { id: "mph-sde-8", companyId: "mphasis", roleId: "sde", text: "Explain the MVC design pattern. How is it implemented in Spring Boot?", category: "Design Patterns", difficulty: "Medium" },
  { id: "mph-sde-9", companyId: "mphasis", roleId: "sde", text: "Write a program to implement merge sort and explain its time complexity.", category: "Sorting", difficulty: "Medium" },
  { id: "mph-sde-10", companyId: "mphasis", roleId: "sde", text: "What are ACID properties? Explain each with a banking transaction example.", category: "DBMS", difficulty: "Medium" },
  { id: "mph-sde-11", companyId: "mphasis", roleId: "sde", text: "Write a program to find the maximum element in each sliding window of size K.", category: "Sliding Window", difficulty: "Medium" },
  { id: "mph-sde-12", companyId: "mphasis", roleId: "sde", text: "Explain the concept of cloud computing deployment models (public, private, hybrid).", category: "Cloud", difficulty: "Easy" },
  { id: "mph-sde-13", companyId: "mphasis", roleId: "sde", text: "What is the difference between ArrayList and Vector in Java?", category: "Collections", difficulty: "Easy" },
  { id: "mph-sde-14", companyId: "mphasis", roleId: "sde", text: "Write a SQL query to find employees who have the same manager.", category: "SQL", difficulty: "Easy" },
  { id: "mph-sde-15", companyId: "mphasis", roleId: "sde", text: "Explain the concept of page replacement algorithms in OS (LRU, FIFO, Optimal).", category: "OS Concepts", difficulty: "Medium" },
  { id: "mph-sde-16", companyId: "mphasis", roleId: "sde", text: "Write a program to find all prime numbers up to N using the Sieve of Eratosthenes.", category: "Math", difficulty: "Medium" },
  { id: "mph-sde-17", companyId: "mphasis", roleId: "sde", text: "What is the difference between abstract factory and factory method patterns?", category: "Design Patterns", difficulty: "Medium" },
  { id: "mph-sde-18", companyId: "mphasis", roleId: "sde", text: "Explain the concept of Spring Boot actuators. What endpoints are available?", category: "Frameworks", difficulty: "Medium" },
  { id: "mph-sde-19", companyId: "mphasis", roleId: "sde", text: "Write a program to find the level order traversal of a binary tree.", category: "Trees", difficulty: "Easy" },
  { id: "mph-sde-20", companyId: "mphasis", roleId: "sde", text: "What is the difference between forward proxy and reverse proxy?", category: "Networking", difficulty: "Medium" },

  // ===== MPHASIS - FRONTEND =====
  { id: "mph-fe-1", companyId: "mphasis", roleId: "frontend", text: "What is the difference between display: none and visibility: hidden in CSS?", category: "CSS", difficulty: "Easy" },
  { id: "mph-fe-2", companyId: "mphasis", roleId: "frontend", text: "Explain the concept of prototypal inheritance in JavaScript.", category: "JavaScript", difficulty: "Medium" },
  { id: "mph-fe-3", companyId: "mphasis", roleId: "frontend", text: "What is Angular? Compare it with React in terms of architecture and state management.", category: "Angular", difficulty: "Medium" },

  // ===== MPHASIS - QA =====
  { id: "mph-qa-1", companyId: "mphasis", roleId: "qa-engineer", text: "What is regression testing? How do you decide which test cases to include in regression?", category: "Testing", difficulty: "Easy" },
  { id: "mph-qa-2", companyId: "mphasis", roleId: "qa-engineer", text: "What is a test plan vs a test strategy? What are the key elements of each?", category: "Testing", difficulty: "Easy" },

  // ===== PERSISTENT SYSTEMS - SDE =====
  { id: "per-sde-1", companyId: "persistent", roleId: "sde", text: "Write a program to find the longest substring without repeating characters.", category: "Strings", difficulty: "Medium" },
  { id: "per-sde-2", companyId: "persistent", roleId: "sde", text: "What is the difference between static and dynamic polymorphism in Java?", category: "OOP", difficulty: "Medium" },
  { id: "per-sde-3", companyId: "persistent", roleId: "sde", text: "Explain the concept of database transactions and isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable).", category: "DBMS", difficulty: "Hard" },
  { id: "per-sde-4", companyId: "persistent", roleId: "sde", text: "Write a program to implement depth-first search (DFS) on a graph.", category: "Graphs", difficulty: "Medium" },
  { id: "per-sde-5", companyId: "persistent", roleId: "sde", text: "What is the difference between a HashSet and a TreeSet in Java?", category: "Collections", difficulty: "Easy" },
  { id: "per-sde-6", companyId: "persistent", roleId: "sde", text: "Write a SQL query to find the employee with the highest salary in each department using window functions.", category: "SQL", difficulty: "Medium" },
  { id: "per-sde-7", companyId: "persistent", roleId: "sde", text: "Explain the concept of RESTful web services. What are the Richardson Maturity Model levels?", category: "Web", difficulty: "Medium" },
  { id: "per-sde-8", companyId: "persistent", roleId: "sde", text: "Write a program to implement a trie (prefix tree) with insert and search operations.", category: "Trie", difficulty: "Medium" },
  { id: "per-sde-9", companyId: "persistent", roleId: "sde", text: "What is the difference between a monolith and microservices? Discuss the migration strategy.", category: "Architecture", difficulty: "Medium" },
  { id: "per-sde-10", companyId: "persistent", roleId: "sde", text: "Write a program to detect a cycle in a directed graph using DFS.", category: "Graphs", difficulty: "Medium" },
  { id: "per-sde-11", companyId: "persistent", roleId: "sde", text: "Explain the concept of Spring Security. How do you implement JWT-based authentication?", category: "Frameworks", difficulty: "Hard" },
  { id: "per-sde-12", companyId: "persistent", roleId: "sde", text: "What is the difference between coupling and cohesion in software design?", category: "Design Patterns", difficulty: "Easy" },
  { id: "per-sde-13", companyId: "persistent", roleId: "sde", text: "Write a program to find the shortest path in an unweighted graph using BFS.", category: "Graphs", difficulty: "Medium" },
  { id: "per-sde-14", companyId: "persistent", roleId: "sde", text: "What is the difference between WAR and JAR deployments? When would you use each?", category: "Java", difficulty: "Easy" },
  { id: "per-sde-15", companyId: "persistent", roleId: "sde", text: "Explain the concept of Docker containers. How do you create a Dockerfile?", category: "DevOps", difficulty: "Medium" },
  { id: "per-sde-16", companyId: "persistent", roleId: "sde", text: "Write a program to find the maximum sum of a contiguous subarray (Kadane's algorithm).", category: "Arrays", difficulty: "Medium" },
  { id: "per-sde-17", companyId: "persistent", roleId: "sde", text: "What is the difference between eager loading and lazy loading in Hibernate?", category: "Frameworks", difficulty: "Medium" },
  { id: "per-sde-18", companyId: "persistent", roleId: "sde", text: "Write a SQL query to find departments where the average salary is above the company average.", category: "SQL", difficulty: "Medium" },
  { id: "per-sde-19", companyId: "persistent", roleId: "sde", text: "Explain the concept of design patterns. When would you use the Repository pattern?", category: "Design Patterns", difficulty: "Medium" },
  { id: "per-sde-20", companyId: "persistent", roleId: "sde", text: "What is the difference between multithreading and multiprocessing?", category: "OS Concepts", difficulty: "Medium" },

  // ===== PERSISTENT - FRONTEND =====
  { id: "per-fe-1", companyId: "persistent", roleId: "frontend", text: "What are React hooks? Explain useContext and useReducer with examples.", category: "React", difficulty: "Medium" },
  { id: "per-fe-2", companyId: "persistent", roleId: "frontend", text: "Explain the concept of debouncing and throttling in JavaScript. When would you use each?", category: "JavaScript", difficulty: "Medium" },
  { id: "per-fe-3", companyId: "persistent", roleId: "frontend", text: "What is the difference between SSR, CSR, and SSG? When would you use each rendering strategy?", category: "Architecture", difficulty: "Medium" },

  // ===== PERSISTENT - QA =====
  { id: "per-qa-1", companyId: "persistent", roleId: "qa-engineer", text: "What is the difference between black box testing and white box testing?", category: "Testing", difficulty: "Easy" },
  { id: "per-qa-2", companyId: "persistent", roleId: "qa-engineer", text: "Explain the concept of CI/CD in testing. How do you integrate automated tests in a pipeline?", category: "Testing", difficulty: "Medium" },

  // ===== HEXAWARE - SDE =====
  { id: "hex-sde-1", companyId: "hexaware", roleId: "sde", text: "Write a program to check if a given string has balanced parentheses.", category: "Stack", difficulty: "Easy" },
  { id: "hex-sde-2", companyId: "hexaware", roleId: "sde", text: "What are the four pillars of OOP? Explain abstraction with a real-world example.", category: "OOP", difficulty: "Easy" },
  { id: "hex-sde-3", companyId: "hexaware", roleId: "sde", text: "Write a SQL query to find the third highest salary using a subquery.", category: "SQL", difficulty: "Easy" },
  { id: "hex-sde-4", companyId: "hexaware", roleId: "sde", text: "Explain the concept of multithreading in Java. What is thread safety?", category: "Concurrency", difficulty: "Medium" },
  { id: "hex-sde-5", companyId: "hexaware", roleId: "sde", text: "Write a program to find the intersection point of two linked lists.", category: "Linked List", difficulty: "Medium" },
  { id: "hex-sde-6", companyId: "hexaware", roleId: "sde", text: "What is the difference between process scheduling algorithms (FCFS, SJF, Round Robin, Priority)?", category: "OS Concepts", difficulty: "Medium" },
  { id: "hex-sde-7", companyId: "hexaware", roleId: "sde", text: "Explain the concept of normalization in databases. When should you denormalize?", category: "DBMS", difficulty: "Medium" },
  { id: "hex-sde-8", companyId: "hexaware", roleId: "sde", text: "Write a program to find the first and last occurrence of an element in a sorted array.", category: "Binary Search", difficulty: "Easy" },
  { id: "hex-sde-9", companyId: "hexaware", roleId: "sde", text: "What is Spring Boot? How does it handle auto-configuration?", category: "Frameworks", difficulty: "Medium" },
  { id: "hex-sde-10", companyId: "hexaware", roleId: "sde", text: "Write a program to implement insertion sort and explain its time complexity.", category: "Sorting", difficulty: "Easy" },
  { id: "hex-sde-11", companyId: "hexaware", roleId: "sde", text: "What is the difference between UNION and UNION ALL in SQL?", category: "SQL", difficulty: "Easy" },
  { id: "hex-sde-12", companyId: "hexaware", roleId: "sde", text: "Explain the concept of API testing. How do you test REST APIs?", category: "Testing", difficulty: "Easy" },
  { id: "hex-sde-13", companyId: "hexaware", roleId: "sde", text: "What is the difference between compile-time and runtime exceptions in Java?", category: "Java", difficulty: "Easy" },
  { id: "hex-sde-14", companyId: "hexaware", roleId: "sde", text: "Write a program to convert a decimal number to binary without using built-in functions.", category: "Math", difficulty: "Easy" },
  { id: "hex-sde-15", companyId: "hexaware", roleId: "sde", text: "Explain the concept of Maven and Gradle. How do they manage dependencies?", category: "Build Tools", difficulty: "Easy" },
  { id: "hex-sde-16", companyId: "hexaware", roleId: "sde", text: "Write a program to find the count of each character in a string.", category: "Strings", difficulty: "Easy" },
  { id: "hex-sde-17", companyId: "hexaware", roleId: "sde", text: "What is the difference between a clustered index and a primary key?", category: "DBMS", difficulty: "Easy" },
  { id: "hex-sde-18", companyId: "hexaware", roleId: "sde", text: "Explain the concept of Git workflow. What is the difference between git pull and git fetch?", category: "Version Control", difficulty: "Easy" },
  { id: "hex-sde-19", companyId: "hexaware", roleId: "sde", text: "Write a program to implement a circular queue using an array.", category: "Data Structures", difficulty: "Medium" },
  { id: "hex-sde-20", companyId: "hexaware", roleId: "sde", text: "What is RPA (Robotic Process Automation)? How is Hexaware using it for digital transformation?", category: "Industry", difficulty: "Easy" },

  // ===== HEXAWARE - FRONTEND =====
  { id: "hex-fe-1", companyId: "hexaware", roleId: "frontend", text: "What is the difference between class components and functional components in React?", category: "React", difficulty: "Easy" },
  { id: "hex-fe-2", companyId: "hexaware", roleId: "frontend", text: "Explain the concept of single-page applications (SPAs). What are their advantages?", category: "Architecture", difficulty: "Easy" },
  { id: "hex-fe-3", companyId: "hexaware", roleId: "frontend", text: "What is Bootstrap? How do you create a responsive layout using the grid system?", category: "CSS", difficulty: "Easy" },

  // ===== HEXAWARE - QA =====
  { id: "hex-qa-1", companyId: "hexaware", roleId: "qa-engineer", text: "What is the difference between manual testing and automation testing? When should you automate?", category: "Testing", difficulty: "Easy" },
  { id: "hex-qa-2", companyId: "hexaware", roleId: "qa-engineer", text: "Explain the SDLC and where testing fits in Agile vs Waterfall methodologies.", category: "Methodology", difficulty: "Easy" },

  // ===== COFORGE - SDE =====
  { id: "cof-sde-1", companyId: "coforge", roleId: "sde", text: "Write a program to find the number of islands in a 2D binary grid.", category: "Graphs", difficulty: "Medium" },
  { id: "cof-sde-2", companyId: "coforge", roleId: "sde", text: "What is the difference between Comparable and Comparator in Java?", category: "Java", difficulty: "Easy" },
  { id: "cof-sde-3", companyId: "coforge", roleId: "sde", text: "Write a SQL query to find customers who have placed more than 3 orders in the last month.", category: "SQL", difficulty: "Easy" },
  { id: "cof-sde-4", companyId: "coforge", roleId: "sde", text: "Explain the concept of design patterns. What is the difference between Singleton and Prototype?", category: "Design Patterns", difficulty: "Medium" },
  { id: "cof-sde-5", companyId: "coforge", roleId: "sde", text: "Write a program to reverse words in a sentence without reversing individual characters.", category: "Strings", difficulty: "Easy" },
  { id: "cof-sde-6", companyId: "coforge", roleId: "sde", text: "What is the difference between SOAP and RESTful web services?", category: "Web", difficulty: "Easy" },
  { id: "cof-sde-7", companyId: "coforge", roleId: "sde", text: "Explain the concept of Spring IoC container and bean lifecycle.", category: "Frameworks", difficulty: "Medium" },
  { id: "cof-sde-8", companyId: "coforge", roleId: "sde", text: "Write a program to find the minimum depth of a binary tree.", category: "Trees", difficulty: "Easy" },
  { id: "cof-sde-9", companyId: "coforge", roleId: "sde", text: "What is the difference between a LEFT JOIN and a LEFT OUTER JOIN?", category: "SQL", difficulty: "Easy" },
  { id: "cof-sde-10", companyId: "coforge", roleId: "sde", text: "Explain the concept of memory management in Java. What are strong, weak, soft, and phantom references?", category: "Java", difficulty: "Hard" },
  { id: "cof-sde-11", companyId: "coforge", roleId: "sde", text: "Write a program to find the longest increasing subsequence in an array.", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "cof-sde-12", companyId: "coforge", roleId: "sde", text: "What is the difference between pessimistic locking and optimistic locking in databases?", category: "DBMS", difficulty: "Medium" },
  { id: "cof-sde-13", companyId: "coforge", roleId: "sde", text: "Explain the concept of containerization. How does Docker work?", category: "DevOps", difficulty: "Medium" },
  { id: "cof-sde-14", companyId: "coforge", roleId: "sde", text: "Write a program to implement binary search tree insertion and deletion.", category: "Trees", difficulty: "Medium" },
  { id: "cof-sde-15", companyId: "coforge", roleId: "sde", text: "What is the difference between stateful and stateless applications?", category: "Architecture", difficulty: "Easy" },
  { id: "cof-sde-16", companyId: "coforge", roleId: "sde", text: "Write a SQL query using Common Table Expressions (CTEs) to find hierarchical data.", category: "SQL", difficulty: "Medium" },
  { id: "cof-sde-17", companyId: "coforge", roleId: "sde", text: "Explain the concept of Agile methodology. What are sprints, user stories, and story points?", category: "Software Engineering", difficulty: "Easy" },
  { id: "cof-sde-18", companyId: "coforge", roleId: "sde", text: "Write a program to find the number of paths from top-left to bottom-right of a grid.", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "cof-sde-19", companyId: "coforge", roleId: "sde", text: "What is the difference between TCP/IP and OSI networking models?", category: "Networking", difficulty: "Medium" },
  { id: "cof-sde-20", companyId: "coforge", roleId: "sde", text: "Explain the concept of API rate limiting. Why is it important?", category: "Web", difficulty: "Medium" },

  // ===== COFORGE - FRONTEND =====
  { id: "cof-fe-1", companyId: "coforge", roleId: "frontend", text: "What is the difference between controlled and uncontrolled components in React?", category: "React", difficulty: "Easy" },
  { id: "cof-fe-2", companyId: "coforge", roleId: "frontend", text: "Explain the concept of CSS Flexbox. How do you center elements vertically and horizontally?", category: "CSS", difficulty: "Easy" },
  { id: "cof-fe-3", companyId: "coforge", roleId: "frontend", text: "What is CORS? How do you handle cross-origin requests in a web application?", category: "Web", difficulty: "Medium" },

  // ===== COFORGE - QA =====
  { id: "cof-qa-1", companyId: "coforge", roleId: "qa-engineer", text: "What is boundary value analysis? Give examples of test cases for a form field.", category: "Testing", difficulty: "Easy" },
  { id: "cof-qa-2", companyId: "coforge", roleId: "qa-engineer", text: "What are the different locator strategies in Selenium? Which is the most reliable?", category: "Testing", difficulty: "Easy" },

  // ===== ZENSAR - SDE =====
  { id: "zen-sde-1", companyId: "zensar", roleId: "sde", text: "Write a program to find two numbers in an array that add up to a given sum.", category: "Arrays", difficulty: "Easy" },
  { id: "zen-sde-2", companyId: "zensar", roleId: "sde", text: "What is the difference between overloading and overriding in Java? Can you override static methods?", category: "OOP", difficulty: "Easy" },
  { id: "zen-sde-3", companyId: "zensar", roleId: "sde", text: "Write a SQL query to find the manager of the employee with the highest salary.", category: "SQL", difficulty: "Medium" },
  { id: "zen-sde-4", companyId: "zensar", roleId: "sde", text: "Explain the concept of threads in Java. What is the difference between start() and run()?", category: "Concurrency", difficulty: "Easy" },
  { id: "zen-sde-5", companyId: "zensar", roleId: "sde", text: "Write a program to implement the FizzBuzz problem.", category: "Logic", difficulty: "Easy" },
  { id: "zen-sde-6", companyId: "zensar", roleId: "sde", text: "What is the difference between primary key, unique key, and foreign key?", category: "DBMS", difficulty: "Easy" },
  { id: "zen-sde-7", companyId: "zensar", roleId: "sde", text: "Explain the concept of Spring annotations (@Component, @Service, @Repository, @Controller).", category: "Frameworks", difficulty: "Medium" },
  { id: "zen-sde-8", companyId: "zensar", roleId: "sde", text: "Write a program to convert a Roman numeral to an integer.", category: "Strings", difficulty: "Easy" },
  { id: "zen-sde-9", companyId: "zensar", roleId: "sde", text: "What is the difference between an ArrayList and a LinkedList? Which is better for insertion vs access?", category: "Collections", difficulty: "Easy" },
  { id: "zen-sde-10", companyId: "zensar", roleId: "sde", text: "Explain the concept of API versioning. What are the different strategies?", category: "Web", difficulty: "Medium" },
  { id: "zen-sde-11", companyId: "zensar", roleId: "sde", text: "Write a program to find if a given binary tree is a valid BST.", category: "Trees", difficulty: "Medium" },
  { id: "zen-sde-12", companyId: "zensar", roleId: "sde", text: "What is the difference between WHERE and HAVING clauses in SQL?", category: "SQL", difficulty: "Easy" },
  { id: "zen-sde-13", companyId: "zensar", roleId: "sde", text: "Explain the concept of cloud-native applications. What are 12-factor app principles?", category: "Architecture", difficulty: "Medium" },
  { id: "zen-sde-14", companyId: "zensar", roleId: "sde", text: "Write a program to find the first duplicate element in an array.", category: "Arrays", difficulty: "Easy" },
  { id: "zen-sde-15", companyId: "zensar", roleId: "sde", text: "What is the difference between Git rebase and Git merge? When should you use each?", category: "Version Control", difficulty: "Easy" },
  { id: "zen-sde-16", companyId: "zensar", roleId: "sde", text: "Explain the concept of Maven build lifecycle and its phases.", category: "Build Tools", difficulty: "Easy" },
  { id: "zen-sde-17", companyId: "zensar", roleId: "sde", text: "Write a program to implement the producer-consumer problem in Java.", category: "Concurrency", difficulty: "Medium" },
  { id: "zen-sde-18", companyId: "zensar", roleId: "sde", text: "What is the difference between HTTP 1.1, HTTP/2, and HTTP/3?", category: "Networking", difficulty: "Medium" },
  { id: "zen-sde-19", companyId: "zensar", roleId: "sde", text: "Write a SQL query to find employees who earn more than the average salary of their department.", category: "SQL", difficulty: "Medium" },
  { id: "zen-sde-20", companyId: "zensar", roleId: "sde", text: "Explain the concept of SOLID principles. How does the Liskov Substitution Principle work?", category: "Design Patterns", difficulty: "Medium" },

  // ===== ZENSAR - FRONTEND =====
  { id: "zen-fe-1", companyId: "zensar", roleId: "frontend", text: "What is the difference between display: block, inline, and inline-block in CSS?", category: "CSS", difficulty: "Easy" },
  { id: "zen-fe-2", companyId: "zensar", roleId: "frontend", text: "Explain the concept of routing in React. How does React Router work?", category: "React", difficulty: "Medium" },
  { id: "zen-fe-3", companyId: "zensar", roleId: "frontend", text: "What is JavaScript event delegation? Why is it useful for performance?", category: "JavaScript", difficulty: "Medium" },

  // ===== ZENSAR - QA =====
  { id: "zen-qa-1", companyId: "zensar", roleId: "qa-engineer", text: "What is equivalence partitioning in testing? Give an example.", category: "Testing", difficulty: "Easy" },
  { id: "zen-qa-2", companyId: "zensar", roleId: "qa-engineer", text: "What is a defect life cycle? Explain the states from New to Closed.", category: "Testing", difficulty: "Easy" },

  // ===== VIRTUSA - SDE =====
  { id: "vir-sde-1", companyId: "virtusa", roleId: "sde", text: "Write a program to find the longest palindromic subsequence in a string.", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "vir-sde-2", companyId: "virtusa", roleId: "sde", text: "What is the difference between an interface and an abstract class? When should you use each?", category: "OOP", difficulty: "Easy" },
  { id: "vir-sde-3", companyId: "virtusa", roleId: "sde", text: "Write a SQL query to find the second highest salary without using LIMIT.", category: "SQL", difficulty: "Medium" },
  { id: "vir-sde-4", companyId: "virtusa", roleId: "sde", text: "Explain the concept of Spring Boot profiles. How do you manage environment-specific configurations?", category: "Frameworks", difficulty: "Medium" },
  { id: "vir-sde-5", companyId: "virtusa", roleId: "sde", text: "Write a program to implement a LRU cache using LinkedHashMap.", category: "Design", difficulty: "Medium" },
  { id: "vir-sde-6", companyId: "virtusa", roleId: "sde", text: "What is the difference between TCP and UDP? Give examples of applications that use each.", category: "Networking", difficulty: "Easy" },
  { id: "vir-sde-7", companyId: "virtusa", roleId: "sde", text: "Explain the concept of database connection pooling. What is HikariCP?", category: "Databases", difficulty: "Medium" },
  { id: "vir-sde-8", companyId: "virtusa", roleId: "sde", text: "Write a program to implement topological sort on a directed acyclic graph.", category: "Graphs", difficulty: "Medium" },
  { id: "vir-sde-9", companyId: "virtusa", roleId: "sde", text: "What is the difference between Collection and Collections in Java?", category: "Collections", difficulty: "Easy" },
  { id: "vir-sde-10", companyId: "virtusa", roleId: "sde", text: "Explain the concept of Spring WebFlux. How does reactive programming work?", category: "Frameworks", difficulty: "Hard" },
  { id: "vir-sde-11", companyId: "virtusa", roleId: "sde", text: "Write a program to find the minimum number of coins to make a given amount (Coin Change).", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "vir-sde-12", companyId: "virtusa", roleId: "sde", text: "What is the CAP theorem? Give examples of CP and AP systems.", category: "Distributed Systems", difficulty: "Medium" },
  { id: "vir-sde-13", companyId: "virtusa", roleId: "sde", text: "Write a SQL query to pivot data from rows to columns.", category: "SQL", difficulty: "Medium" },
  { id: "vir-sde-14", companyId: "virtusa", roleId: "sde", text: "Explain the concept of circuit breaker pattern in microservices.", category: "Design Patterns", difficulty: "Medium" },
  { id: "vir-sde-15", companyId: "virtusa", roleId: "sde", text: "Write a program to merge two sorted linked lists into one sorted list.", category: "Linked List", difficulty: "Easy" },
  { id: "vir-sde-16", companyId: "virtusa", roleId: "sde", text: "What is the difference between an Iterator and a ListIterator in Java?", category: "Collections", difficulty: "Easy" },
  { id: "vir-sde-17", companyId: "virtusa", roleId: "sde", text: "Explain the concept of Kubernetes. What are pods, nodes, and clusters?", category: "DevOps", difficulty: "Medium" },
  { id: "vir-sde-18", companyId: "virtusa", roleId: "sde", text: "Write a program to find all pairs with given sum in a sorted array.", category: "Arrays", difficulty: "Easy" },
  { id: "vir-sde-19", companyId: "virtusa", roleId: "sde", text: "What is the Adapter design pattern? When would you use it?", category: "Design Patterns", difficulty: "Medium" },
  { id: "vir-sde-20", companyId: "virtusa", roleId: "sde", text: "Explain the concept of event sourcing. How does it differ from traditional CRUD?", category: "Architecture", difficulty: "Hard" },

  // ===== VIRTUSA - FRONTEND =====
  { id: "vir-fe-1", companyId: "virtusa", roleId: "frontend", text: "What is the difference between useMemo and useCallback in React?", category: "React", difficulty: "Medium" },
  { id: "vir-fe-2", companyId: "virtusa", roleId: "frontend", text: "Explain the concept of micro-frontends. When would you use this architecture?", category: "Architecture", difficulty: "Medium" },
  { id: "vir-fe-3", companyId: "virtusa", roleId: "frontend", text: "What is the difference between ES5 and ES6+? List the key features introduced in ES6.", category: "JavaScript", difficulty: "Easy" },

  // ===== VIRTUSA - QA =====
  { id: "vir-qa-1", companyId: "virtusa", roleId: "qa-engineer", text: "What is the difference between functional and non-functional testing?", category: "Testing", difficulty: "Easy" },
  { id: "vir-qa-2", companyId: "virtusa", roleId: "qa-engineer", text: "What is TestNG? How does it differ from JUnit? Explain annotations in TestNG.", category: "Testing", difficulty: "Medium" },

  // ===== NTT DATA - SDE =====
  { id: "ntt-sde-1", companyId: "nttdata", roleId: "sde", text: "Write a program to implement a hash map from scratch with put, get, and remove operations.", category: "Data Structures", difficulty: "Medium" },
  { id: "ntt-sde-2", companyId: "nttdata", roleId: "sde", text: "What is the difference between encapsulation and abstraction in OOP?", category: "OOP", difficulty: "Easy" },
  { id: "ntt-sde-3", companyId: "nttdata", roleId: "sde", text: "Write a SQL query to find all employees who report directly or indirectly to a given manager.", category: "SQL", difficulty: "Hard" },
  { id: "ntt-sde-4", companyId: "nttdata", roleId: "sde", text: "Explain the concept of Spring Cloud. How do you implement service discovery with Eureka?", category: "Frameworks", difficulty: "Hard" },
  { id: "ntt-sde-5", companyId: "nttdata", roleId: "sde", text: "Write a program to find the maximum profit from stock trading with one buy and one sell.", category: "Arrays", difficulty: "Easy" },
  { id: "ntt-sde-6", companyId: "nttdata", roleId: "sde", text: "What is the difference between SQL COALESCE and IFNULL/NVL?", category: "SQL", difficulty: "Easy" },
  { id: "ntt-sde-7", companyId: "nttdata", roleId: "sde", text: "Explain the concept of database replication. What are master-slave and master-master configurations?", category: "Databases", difficulty: "Medium" },
  { id: "ntt-sde-8", companyId: "nttdata", roleId: "sde", text: "Write a program to find the next greater element for each element in an array.", category: "Stack", difficulty: "Medium" },
  { id: "ntt-sde-9", companyId: "nttdata", roleId: "sde", text: "What is the difference between autoboxing and unboxing in Java?", category: "Java", difficulty: "Easy" },
  { id: "ntt-sde-10", companyId: "nttdata", roleId: "sde", text: "Explain the concept of the Saga pattern in distributed transactions.", category: "Architecture", difficulty: "Hard" },
  { id: "ntt-sde-11", companyId: "nttdata", roleId: "sde", text: "Write a program to check if a number is a power of 2 without using loops.", category: "Math", difficulty: "Easy" },
  { id: "ntt-sde-12", companyId: "nttdata", roleId: "sde", text: "What are Java Generics? Explain bounded and unbounded wildcards.", category: "Java", difficulty: "Medium" },
  { id: "ntt-sde-13", companyId: "nttdata", roleId: "sde", text: "Write a SQL query to find the median salary from an employee table.", category: "SQL", difficulty: "Hard" },
  { id: "ntt-sde-14", companyId: "nttdata", roleId: "sde", text: "Explain the concept of blue-green deployment and canary deployment.", category: "DevOps", difficulty: "Medium" },
  { id: "ntt-sde-15", companyId: "nttdata", roleId: "sde", text: "Write a program to rotate a linked list by K positions to the right.", category: "Linked List", difficulty: "Medium" },
  { id: "ntt-sde-16", companyId: "nttdata", roleId: "sde", text: "What is the difference between a factory method and an abstract factory pattern?", category: "Design Patterns", difficulty: "Medium" },
  { id: "ntt-sde-17", companyId: "nttdata", roleId: "sde", text: "Explain the concept of eventual consistency. How does it apply to distributed databases?", category: "Distributed Systems", difficulty: "Medium" },
  { id: "ntt-sde-18", companyId: "nttdata", roleId: "sde", text: "Write a program to find the minimum spanning tree of a graph using Kruskal's algorithm.", category: "Graphs", difficulty: "Hard" },
  { id: "ntt-sde-19", companyId: "nttdata", roleId: "sde", text: "What is the difference between JNDI, JMS, and JPA in Java EE?", category: "Java", difficulty: "Medium" },
  { id: "ntt-sde-20", companyId: "nttdata", roleId: "sde", text: "Explain the concept of zero-downtime deployments. What strategies can you use?", category: "DevOps", difficulty: "Medium" },

  // ===== NTT DATA - FRONTEND =====
  { id: "ntt-fe-1", companyId: "nttdata", roleId: "frontend", text: "What is the difference between Angular and AngularJS? Explain the key changes.", category: "Angular", difficulty: "Medium" },
  { id: "ntt-fe-2", companyId: "nttdata", roleId: "frontend", text: "Explain the concept of web accessibility (WCAG). How do you make a website accessible?", category: "Web Standards", difficulty: "Medium" },
  { id: "ntt-fe-3", companyId: "nttdata", roleId: "frontend", text: "What are service workers? How are they used in Progressive Web Apps?", category: "Web Standards", difficulty: "Medium" },

  // ===== NTT DATA - QA =====
  { id: "ntt-qa-1", companyId: "nttdata", roleId: "qa-engineer", text: "What is data-driven testing? How do you implement it using Selenium and TestNG?", category: "Testing", difficulty: "Medium" },
  { id: "ntt-qa-2", companyId: "nttdata", roleId: "qa-engineer", text: "Explain the concept of risk-based testing. How do you prioritize test cases?", category: "Testing", difficulty: "Medium" },

  // ===== DXC TECHNOLOGY - SDE =====
  { id: "dxc-sde-1", companyId: "dxc", roleId: "sde", text: "Write a program to remove duplicates from an unsorted linked list.", category: "Linked List", difficulty: "Easy" },
  { id: "dxc-sde-2", companyId: "dxc", roleId: "sde", text: "What are access modifiers in Java? Explain the visibility of each.", category: "Java", difficulty: "Easy" },
  { id: "dxc-sde-3", companyId: "dxc", roleId: "sde", text: "Write a SQL query to find the count of employees in each department who joined in the last year.", category: "SQL", difficulty: "Easy" },
  { id: "dxc-sde-4", companyId: "dxc", roleId: "sde", text: "Explain the concept of the Spring application context and bean factory.", category: "Frameworks", difficulty: "Medium" },
  { id: "dxc-sde-5", companyId: "dxc", roleId: "sde", text: "Write a program to check if a string is a valid IPv4 address.", category: "Strings", difficulty: "Easy" },
  { id: "dxc-sde-6", companyId: "dxc", roleId: "sde", text: "What is the difference between a deadlock and a livelock? How do you prevent each?", category: "OS Concepts", difficulty: "Medium" },
  { id: "dxc-sde-7", companyId: "dxc", roleId: "sde", text: "Explain the concept of CQRS (Command Query Responsibility Segregation).", category: "Architecture", difficulty: "Hard" },
  { id: "dxc-sde-8", companyId: "dxc", roleId: "sde", text: "Write a program to find the maximum depth of a binary tree.", category: "Trees", difficulty: "Easy" },
  { id: "dxc-sde-9", companyId: "dxc", roleId: "sde", text: "What is the difference between Java 8 Optional and null checks?", category: "Java", difficulty: "Easy" },
  { id: "dxc-sde-10", companyId: "dxc", roleId: "sde", text: "Write a SQL query using self-join to find pairs of employees in the same department.", category: "SQL", difficulty: "Medium" },
  { id: "dxc-sde-11", companyId: "dxc", roleId: "sde", text: "Explain the concept of the Observer design pattern with a real-world example.", category: "Design Patterns", difficulty: "Medium" },
  { id: "dxc-sde-12", companyId: "dxc", roleId: "sde", text: "Write a program to find the minimum element in a rotated sorted array.", category: "Binary Search", difficulty: "Medium" },
  { id: "dxc-sde-13", companyId: "dxc", roleId: "sde", text: "What is the difference between cookies, sessions, and tokens for authentication?", category: "Security", difficulty: "Medium" },
  { id: "dxc-sde-14", companyId: "dxc", roleId: "sde", text: "Explain the concept of Java Memory Model. What is the happens-before relationship?", category: "Java", difficulty: "Hard" },
  { id: "dxc-sde-15", companyId: "dxc", roleId: "sde", text: "Write a program to implement counting sort for an array of integers.", category: "Sorting", difficulty: "Easy" },
  { id: "dxc-sde-16", companyId: "dxc", roleId: "sde", text: "What is a CDN (Content Delivery Network)? How does it improve web performance?", category: "Networking", difficulty: "Easy" },
  { id: "dxc-sde-17", companyId: "dxc", roleId: "sde", text: "Write a SQL query to find the longest consecutive login streak per user.", category: "SQL", difficulty: "Hard" },
  { id: "dxc-sde-18", companyId: "dxc", roleId: "sde", text: "Explain the concept of data structures: when would you use a stack vs queue vs deque?", category: "Data Structures", difficulty: "Easy" },
  { id: "dxc-sde-19", companyId: "dxc", roleId: "sde", text: "What is the difference between log4j and SLF4J? How do you configure logging in Spring Boot?", category: "Frameworks", difficulty: "Easy" },
  { id: "dxc-sde-20", companyId: "dxc", roleId: "sde", text: "Explain the concept of ITIL. How does incident management work?", category: "Software Engineering", difficulty: "Easy" },

  // ===== DXC - FRONTEND =====
  { id: "dxc-fe-1", companyId: "dxc", roleId: "frontend", text: "What is the difference between position: relative, absolute, fixed, and sticky in CSS?", category: "CSS", difficulty: "Easy" },
  { id: "dxc-fe-2", companyId: "dxc", roleId: "frontend", text: "Explain the concept of the event loop in Node.js. How does non-blocking I/O work?", category: "JavaScript", difficulty: "Medium" },
  { id: "dxc-fe-3", companyId: "dxc", roleId: "frontend", text: "What is the difference between props drilling and Context API in React?", category: "React", difficulty: "Easy" },

  // ===== DXC - QA =====
  { id: "dxc-qa-1", companyId: "dxc", roleId: "qa-engineer", text: "What is exploratory testing? How does it differ from scripted testing?", category: "Testing", difficulty: "Easy" },
  { id: "dxc-qa-2", companyId: "dxc", roleId: "qa-engineer", text: "Explain the concept of test pyramids. What is the recommended ratio of unit:integration:E2E tests?", category: "Testing", difficulty: "Medium" },

  // ===== UST - SDE =====
  { id: "ust-sde-1", companyId: "ust", roleId: "sde", text: "Write a program to find the maximum product subarray.", category: "Arrays", difficulty: "Medium" },
  { id: "ust-sde-2", companyId: "ust", roleId: "sde", text: "What is the difference between method overloading and method overriding in Java?", category: "OOP", difficulty: "Easy" },
  { id: "ust-sde-3", companyId: "ust", roleId: "sde", text: "Write a SQL query to find the rank of employees by salary within each department.", category: "SQL", difficulty: "Medium" },
  { id: "ust-sde-4", companyId: "ust", roleId: "sde", text: "Explain the concept of Spring Boot starters. What are the commonly used starters?", category: "Frameworks", difficulty: "Easy" },
  { id: "ust-sde-5", companyId: "ust", roleId: "sde", text: "Write a program to check if a given tree is a subtree of another tree.", category: "Trees", difficulty: "Medium" },
  { id: "ust-sde-6", companyId: "ust", roleId: "sde", text: "What is the difference between strong typing and weak typing? Compare Java and JavaScript.", category: "Programming", difficulty: "Easy" },
  { id: "ust-sde-7", companyId: "ust", roleId: "sde", text: "Explain the concept of database partitioning. What are horizontal and vertical partitioning?", category: "Databases", difficulty: "Medium" },
  { id: "ust-sde-8", companyId: "ust", roleId: "sde", text: "Write a program to implement the Tower of Hanoi problem using recursion.", category: "Recursion", difficulty: "Medium" },
  { id: "ust-sde-9", companyId: "ust", roleId: "sde", text: "What is the difference between a HashSet and a HashMap in Java?", category: "Collections", difficulty: "Easy" },
  { id: "ust-sde-10", companyId: "ust", roleId: "sde", text: "Explain the concept of 12-factor app methodology for cloud-native applications.", category: "Architecture", difficulty: "Medium" },
  { id: "ust-sde-11", companyId: "ust", roleId: "sde", text: "Write a program to zigzag traverse a binary tree (level order with alternating direction).", category: "Trees", difficulty: "Medium" },
  { id: "ust-sde-12", companyId: "ust", roleId: "sde", text: "What is the difference between application server and web server?", category: "Web", difficulty: "Easy" },
  { id: "ust-sde-13", companyId: "ust", roleId: "sde", text: "Write a SQL query to find all pairs of employees whose combined salary exceeds a threshold.", category: "SQL", difficulty: "Medium" },
  { id: "ust-sde-14", companyId: "ust", roleId: "sde", text: "Explain the concept of Java Streams. Write code to find the most frequent element in a list.", category: "Java", difficulty: "Medium" },
  { id: "ust-sde-15", companyId: "ust", roleId: "sde", text: "Write a program to rotate a matrix 90 degrees clockwise.", category: "Arrays", difficulty: "Medium" },
  { id: "ust-sde-16", companyId: "ust", roleId: "sde", text: "What is the difference between white-box and black-box testing?", category: "Testing", difficulty: "Easy" },
  { id: "ust-sde-17", companyId: "ust", roleId: "sde", text: "Explain the concept of feature flags. How are they used in continuous deployment?", category: "DevOps", difficulty: "Medium" },
  { id: "ust-sde-18", companyId: "ust", roleId: "sde", text: "Write a program to find the minimum number of platforms required for a train station.", category: "Greedy", difficulty: "Medium" },
  { id: "ust-sde-19", companyId: "ust", roleId: "sde", text: "What is the difference between Docker Compose and Kubernetes? When do you use each?", category: "DevOps", difficulty: "Medium" },
  { id: "ust-sde-20", companyId: "ust", roleId: "sde", text: "Explain the concept of Domain-Driven Design (DDD). What are bounded contexts and aggregates?", category: "Architecture", difficulty: "Hard" },

  // ===== UST - FRONTEND =====
  { id: "ust-fe-1", companyId: "ust", roleId: "frontend", text: "What are React portals? When would you use them?", category: "React", difficulty: "Medium" },
  { id: "ust-fe-2", companyId: "ust", roleId: "frontend", text: "Explain the concept of lazy loading in React. How do React.lazy and Suspense work?", category: "React", difficulty: "Medium" },
  { id: "ust-fe-3", companyId: "ust", roleId: "frontend", text: "What is the difference between rem, em, px, and % units in CSS?", category: "CSS", difficulty: "Easy" },

  // ===== UST - QA =====
  { id: "ust-qa-1", companyId: "ust", roleId: "qa-engineer", text: "What is mutation testing? How does it help in assessing test suite quality?", category: "Testing", difficulty: "Medium" },
  { id: "ust-qa-2", companyId: "ust", roleId: "qa-engineer", text: "What is contract testing? How does Pact help in microservices testing?", category: "Testing", difficulty: "Medium" },

  // ===== L&T TECHNOLOGY SERVICES - SDE =====
  { id: "ltts-sde-1", companyId: "ltts", roleId: "sde", text: "Write a program to find the sum of digits of a number using recursion.", category: "Recursion", difficulty: "Easy" },
  { id: "ltts-sde-2", companyId: "ltts", roleId: "sde", text: "What is the difference between structured and object-oriented programming?", category: "OOP", difficulty: "Easy" },
  { id: "ltts-sde-3", companyId: "ltts", roleId: "sde", text: "Write a SQL query to find the difference between the highest and lowest salary in each department.", category: "SQL", difficulty: "Easy" },
  { id: "ltts-sde-4", companyId: "ltts", roleId: "sde", text: "Explain the concept of embedded systems. What are the key differences from general-purpose computing?", category: "Systems", difficulty: "Medium" },
  { id: "ltts-sde-5", companyId: "ltts", roleId: "sde", text: "Write a program to find the smallest window in a string containing all characters of another string.", category: "Sliding Window", difficulty: "Hard" },
  { id: "ltts-sde-6", companyId: "ltts", roleId: "sde", text: "What is the difference between C and C++? When would you use C in embedded systems?", category: "Programming", difficulty: "Easy" },
  { id: "ltts-sde-7", companyId: "ltts", roleId: "sde", text: "Explain the concept of RTOS (Real-Time Operating System). Give examples.", category: "OS Concepts", difficulty: "Medium" },
  { id: "ltts-sde-8", companyId: "ltts", roleId: "sde", text: "Write a program to implement selection sort and explain its space complexity.", category: "Sorting", difficulty: "Easy" },
  { id: "ltts-sde-9", companyId: "ltts", roleId: "sde", text: "What is the difference between pass by value and pass by reference?", category: "Programming", difficulty: "Easy" },
  { id: "ltts-sde-10", companyId: "ltts", roleId: "sde", text: "Explain the concept of IoT (Internet of Things). How does MQTT protocol work?", category: "Networking", difficulty: "Medium" },
  { id: "ltts-sde-11", companyId: "ltts", roleId: "sde", text: "Write a program to implement a doubly linked list with insertion and deletion.", category: "Data Structures", difficulty: "Medium" },
  { id: "ltts-sde-12", companyId: "ltts", roleId: "sde", text: "What is the difference between volatile, transient, and synchronized keywords in Java?", category: "Java", difficulty: "Medium" },
  { id: "ltts-sde-13", companyId: "ltts", roleId: "sde", text: "Write a SQL query to create a stored procedure that accepts department ID and returns employee count.", category: "SQL", difficulty: "Medium" },
  { id: "ltts-sde-14", companyId: "ltts", roleId: "sde", text: "Explain the concept of memory-mapped I/O in embedded systems.", category: "Systems", difficulty: "Hard" },
  { id: "ltts-sde-15", companyId: "ltts", roleId: "sde", text: "Write a program to convert an infix expression to a postfix expression.", category: "Stack", difficulty: "Medium" },
  { id: "ltts-sde-16", companyId: "ltts", roleId: "sde", text: "What are pointers in C? Explain pointer arithmetic and dangling pointers.", category: "Programming", difficulty: "Medium" },
  { id: "ltts-sde-17", companyId: "ltts", roleId: "sde", text: "Explain the concept of I2C, SPI, and UART communication protocols.", category: "Systems", difficulty: "Medium" },
  { id: "ltts-sde-18", companyId: "ltts", roleId: "sde", text: "Write a program to find the nth node from the end of a linked list.", category: "Linked List", difficulty: "Easy" },
  { id: "ltts-sde-19", companyId: "ltts", roleId: "sde", text: "What is the difference between a semaphore and a mutex? When would you use each?", category: "OS Concepts", difficulty: "Medium" },
  { id: "ltts-sde-20", companyId: "ltts", roleId: "sde", text: "Explain the concept of interrupt handling in operating systems.", category: "OS Concepts", difficulty: "Medium" },

  // ===== LTTS - FRONTEND =====
  { id: "ltts-fe-1", companyId: "ltts", roleId: "frontend", text: "What is the Document Object Model (DOM)? How do you manipulate it with JavaScript?", category: "JavaScript", difficulty: "Easy" },
  { id: "ltts-fe-2", companyId: "ltts", roleId: "frontend", text: "Explain the concept of semantic HTML. Why is it important for accessibility?", category: "HTML", difficulty: "Easy" },
  { id: "ltts-fe-3", companyId: "ltts", roleId: "frontend", text: "What are template literals in JavaScript? How do tagged templates work?", category: "JavaScript", difficulty: "Easy" },

  // ===== LTTS - QA =====
  { id: "ltts-qa-1", companyId: "ltts", roleId: "qa-engineer", text: "What is the difference between alpha testing and beta testing?", category: "Testing", difficulty: "Easy" },
  { id: "ltts-qa-2", companyId: "ltts", roleId: "qa-engineer", text: "Explain the concept of test case design techniques: decision table and state transition testing.", category: "Testing", difficulty: "Medium" },

  // =============================================================
  // ===== EXPANDED PRODUCT-BASED COMPANIES (to 25+ each) ========
  // =============================================================

  // ===== APPLE - SDE (additional) =====
  { id: "apple-sde-7", companyId: "apple", roleId: "sde", text: "Design the Handoff feature that allows seamless task transfer between iPhone, iPad, and Mac.", category: "System Design", difficulty: "Hard" },
  { id: "apple-sde-8", companyId: "apple", roleId: "sde", text: "Implement a function to flatten a nested array of arbitrary depth.", category: "Arrays", difficulty: "Medium" },
  { id: "apple-sde-9", companyId: "apple", roleId: "sde", text: "Design a notification system like Apple Push Notification Service (APNs) for millions of devices.", category: "System Design", difficulty: "Hard" },
  { id: "apple-sde-10", companyId: "apple", roleId: "sde", text: "Implement a concurrent read-write lock that allows multiple readers but only one writer.", category: "Concurrency", difficulty: "Hard" },
  { id: "apple-sde-11", companyId: "apple", roleId: "sde", text: "Given a list of words and a target, find the minimum edit distance (Levenshtein distance) between them.", category: "Dynamic Programming", difficulty: "Medium" },
  { id: "apple-sde-12", companyId: "apple", roleId: "sde", text: "Design the iCloud sync system that resolves conflicts when the same file is edited on multiple devices.", category: "System Design", difficulty: "Hard" },
  { id: "apple-sde-13", companyId: "apple", roleId: "sde", text: "Implement a LRU Cache that is thread-safe and supports concurrent access.", category: "Design", difficulty: "Hard" },
  { id: "apple-sde-14", companyId: "apple", roleId: "sde", text: "Explain the difference between strong, weak, and unowned references in Swift/ARC.", category: "Memory", difficulty: "Medium" },
  { id: "apple-sde-15", companyId: "apple", roleId: "sde", text: "Design the App Store search and ranking system. How do you rank apps based on relevance and quality?", category: "System Design", difficulty: "Hard" },

  // ===== APPLE - FRONTEND =====
  { id: "apple-fe-1", companyId: "apple", roleId: "frontend", text: "How would you build a pixel-perfect, responsive product page like apple.com with smooth scroll animations?", category: "CSS", difficulty: "Medium" },
  { id: "apple-fe-2", companyId: "apple", roleId: "frontend", text: "Implement a custom carousel/slider component with touch gesture support for mobile devices.", category: "JavaScript", difficulty: "Medium" },
  { id: "apple-fe-3", companyId: "apple", roleId: "frontend", text: "Explain web animations API vs CSS animations. When would you use JavaScript-based animations?", category: "Performance", difficulty: "Medium" },

  // ===== TWITTER/X - SDE (additional) =====
  { id: "tw-sde-11", companyId: "twitter", roleId: "sde", text: "Design a hashtag analytics system that tracks trending hashtags with decay over time.", category: "System Design", difficulty: "Hard" },
  { id: "tw-sde-12", companyId: "twitter", roleId: "sde", text: "Implement a function to find the top K most frequent words from a stream of tweets.", category: "Heap", difficulty: "Medium" },
  { id: "tw-sde-13", companyId: "twitter", roleId: "sde", text: "Design Twitter Spaces — a live audio rooms feature. Handle real-time audio streaming and speaker management.", category: "System Design", difficulty: "Hard" },
  { id: "tw-sde-14", companyId: "twitter", roleId: "sde", text: "Implement a function to check if a tweet's text is within character limits considering Unicode and URL shortening.", category: "Strings", difficulty: "Medium" },
  { id: "tw-sde-15", companyId: "twitter", roleId: "sde", text: "Design a content recommendation system that suggests accounts to follow based on interests and interactions.", category: "System Design", difficulty: "Hard" },

  // ===== TWITTER/X - FRONTEND =====
  { id: "tw-fe-1", companyId: "twitter", roleId: "frontend", text: "How would you implement an infinite scroll timeline that efficiently handles thousands of tweets?", category: "JavaScript", difficulty: "Medium" },
  { id: "tw-fe-2", companyId: "twitter", roleId: "frontend", text: "Implement a tweet compose box with @mention autocomplete, hashtag highlighting, and character count.", category: "React", difficulty: "Medium" },
  { id: "tw-fe-3", companyId: "twitter", roleId: "frontend", text: "How do you implement optimistic UI updates for actions like liking, retweeting, and bookmarking?", category: "React", difficulty: "Medium" },
  { id: "tw-fe-4", companyId: "twitter", roleId: "frontend", text: "Design a responsive layout that adapts between mobile, tablet, and desktop views with a side navigation.", category: "CSS", difficulty: "Medium" },

  // ===== STRIPE - SDE (additional) =====
  { id: "str-sde-11", companyId: "stripe", roleId: "sde", text: "Design a dispute/chargeback handling system with evidence submission and automated resolution.", category: "System Design", difficulty: "Hard" },
  { id: "str-sde-12", companyId: "stripe", roleId: "sde", text: "Implement a function to validate credit card numbers using the Luhn algorithm.", category: "Algorithms", difficulty: "Easy" },
  { id: "str-sde-13", companyId: "stripe", roleId: "sde", text: "Design Stripe's Checkout — an embeddable payment form that handles multiple payment methods securely.", category: "System Design", difficulty: "Hard" },
  { id: "str-sde-14", companyId: "stripe", roleId: "sde", text: "Implement a function to calculate compound interest on a recurring subscription with prorations.", category: "Algorithms", difficulty: "Medium" },
  { id: "str-sde-15", companyId: "stripe", roleId: "sde", text: "Design an invoicing system that generates, sends, and tracks payment status of invoices.", category: "System Design", difficulty: "Medium" },

  // ===== STRIPE - FRONTEND =====
  { id: "str-fe-1", companyId: "stripe", roleId: "frontend", text: "How would you build a secure payment form that handles card input with PCI compliance (Stripe Elements)?", category: "Security", difficulty: "Hard" },
  { id: "str-fe-2", companyId: "stripe", roleId: "frontend", text: "Implement a real-time dashboard that shows transaction metrics with live-updating charts.", category: "React", difficulty: "Medium" },
  { id: "str-fe-3", companyId: "stripe", roleId: "frontend", text: "Design an interactive API documentation page with code examples that can be run in the browser.", category: "JavaScript", difficulty: "Medium" },

  // ===== LINKEDIN - SDE (additional) =====
  { id: "li-sde-11", companyId: "linkedin", roleId: "sde", text: "Design LinkedIn Learning's video streaming and course progress tracking system.", category: "System Design", difficulty: "Hard" },
  { id: "li-sde-12", companyId: "linkedin", roleId: "sde", text: "Implement a function to serialize and deserialize a social graph for efficient storage.", category: "Graphs", difficulty: "Hard" },
  { id: "li-sde-13", companyId: "linkedin", roleId: "sde", text: "Design the LinkedIn endorsement and skill assessment system. How do you prevent gaming?", category: "System Design", difficulty: "Medium" },
  { id: "li-sde-14", companyId: "linkedin", roleId: "sde", text: "Implement a function to find mutual connections between two users efficiently.", category: "Graphs", difficulty: "Medium" },
  { id: "li-sde-15", companyId: "linkedin", roleId: "sde", text: "Design LinkedIn's SSO (Single Sign-On) system for enterprise customers.", category: "System Design", difficulty: "Hard" },

  // ===== LINKEDIN - FRONTEND =====
  { id: "li-fe-1", companyId: "linkedin", roleId: "frontend", text: "How would you implement a rich text editor for LinkedIn posts with mentions, hashtags, and link previews?", category: "JavaScript", difficulty: "Hard" },
  { id: "li-fe-2", companyId: "linkedin", roleId: "frontend", text: "Implement a connection request card with accept/reject actions and animated transitions.", category: "React", difficulty: "Medium" },
  { id: "li-fe-3", companyId: "linkedin", roleId: "frontend", text: "How do you optimize the loading performance of a profile page with multiple sections and images?", category: "Performance", difficulty: "Medium" },

  // ===== SPOTIFY - SDE (additional) =====
  { id: "sp-sde-11", companyId: "spotify", roleId: "sde", text: "Design a collaborative queue feature where friends in a group can add songs to a shared queue.", category: "System Design", difficulty: "Medium" },
  { id: "sp-sde-12", companyId: "spotify", roleId: "sde", text: "Implement an algorithm to generate radio stations based on a seed song using similarity metrics.", category: "Algorithms", difficulty: "Hard" },
  { id: "sp-sde-13", companyId: "spotify", roleId: "sde", text: "Design the podcast hosting and distribution system. Handle episode uploads, RSS feeds, and analytics.", category: "System Design", difficulty: "Hard" },
  { id: "sp-sde-14", companyId: "spotify", roleId: "sde", text: "Implement a music fingerprinting system to identify songs from audio clips (like Shazam).", category: "Algorithms", difficulty: "Hard" },
  { id: "sp-sde-15", companyId: "spotify", roleId: "sde", text: "Design Spotify's offline mode — how do you handle downloads, cache management, and sync with server?", category: "System Design", difficulty: "Hard" },

  // ===== SPOTIFY - FRONTEND =====
  { id: "sp-fe-1", companyId: "spotify", roleId: "frontend", text: "Implement a music player UI with play/pause, seek bar, volume control, and queue management.", category: "React", difficulty: "Medium" },
  { id: "sp-fe-2", companyId: "spotify", roleId: "frontend", text: "How would you implement a smooth crossfade transition between songs in the web player?", category: "JavaScript", difficulty: "Hard" },
  { id: "sp-fe-3", companyId: "spotify", roleId: "frontend", text: "Design a responsive album grid view with lazy loading images and skeleton loading states.", category: "CSS", difficulty: "Medium" },

  // ===== ORACLE - SDE (additional) =====
  { id: "or-sde-11", companyId: "oracle", roleId: "sde", text: "Design a query optimizer that chooses between different execution plans (nested loop, hash join, merge join).", category: "Databases", difficulty: "Hard" },
  { id: "or-sde-12", companyId: "oracle", roleId: "sde", text: "Implement a lock manager that supports shared locks, exclusive locks, and deadlock detection.", category: "Concurrency", difficulty: "Hard" },
  { id: "or-sde-13", companyId: "oracle", roleId: "sde", text: "Design a materialized view refresh system that handles incremental and full refreshes efficiently.", category: "Databases", difficulty: "Hard" },
  { id: "or-sde-14", companyId: "oracle", roleId: "sde", text: "Implement a simple SQL parser that can parse SELECT, WHERE, and ORDER BY clauses.", category: "Strings", difficulty: "Hard" },
  { id: "or-sde-15", companyId: "oracle", roleId: "sde", text: "Write a SQL query to find all tables that have circular foreign key dependencies.", category: "SQL", difficulty: "Hard" },

  // ===== ORACLE - BACKEND =====
  { id: "or-be-1", companyId: "oracle", roleId: "backend", text: "How does Oracle RAC (Real Application Clusters) achieve high availability and scalability?", category: "Databases", difficulty: "Hard" },
  { id: "or-be-2", companyId: "oracle", roleId: "backend", text: "Explain the difference between OLTP and OLAP databases. How would you design a hybrid system?", category: "Architecture", difficulty: "Medium" },
  { id: "or-be-3", companyId: "oracle", roleId: "backend", text: "Design a backup and recovery system for a large database. Discuss full, incremental, and differential backups.", category: "Databases", difficulty: "Medium" },

  // ===== SAMSUNG - SDE (additional) =====
  { id: "sam-sde-11", companyId: "samsung", roleId: "sde", text: "Design a task scheduler for a mobile OS that balances performance and battery life.", category: "System Design", difficulty: "Hard" },
  { id: "sam-sde-12", companyId: "samsung", roleId: "sde", text: "Implement a function to solve the N-Queens problem using backtracking.", category: "Backtracking", difficulty: "Hard" },
  { id: "sam-sde-13", companyId: "samsung", roleId: "sde", text: "Design a firmware update system for IoT devices that handles partial downloads and rollback.", category: "System Design", difficulty: "Hard" },
  { id: "sam-sde-14", companyId: "samsung", roleId: "sde", text: "Implement a memory pool allocator for embedded systems with fixed block sizes.", category: "OS Concepts", difficulty: "Hard" },
  { id: "sam-sde-15", companyId: "samsung", roleId: "sde", text: "Design the Samsung Health data sync system across watch, phone, and tablet.", category: "System Design", difficulty: "Hard" },
  { id: "sam-sde-16", companyId: "samsung", roleId: "sde", text: "Implement Kruskal's algorithm for minimum spanning tree.", category: "Graphs", difficulty: "Medium" },
  { id: "sam-sde-17", companyId: "samsung", roleId: "sde", text: "Explain the difference between flash memory types (NOR, NAND, SLC, MLC, TLC). When is each used?", category: "Systems", difficulty: "Medium" },
  { id: "sam-sde-18", companyId: "samsung", roleId: "sde", text: "Design a power management system for a mobile device that optimizes battery usage based on app behavior.", category: "System Design", difficulty: "Hard" },

  // ===== PAYPAL - SDE (additional) =====
  { id: "pp-sde-11", companyId: "paypal", roleId: "sde", text: "Design a cross-border payment system that handles multiple currencies and regulatory compliance.", category: "System Design", difficulty: "Hard" },
  { id: "pp-sde-12", companyId: "paypal", roleId: "sde", text: "Implement a function to detect cycles in transaction graphs (for money laundering detection).", category: "Graphs", difficulty: "Medium" },
  { id: "pp-sde-13", companyId: "paypal", roleId: "sde", text: "Design a dispute resolution workflow system with escalation rules and SLA tracking.", category: "System Design", difficulty: "Hard" },
  { id: "pp-sde-14", companyId: "paypal", roleId: "sde", text: "Implement a rate limiter using the token bucket algorithm for API throttling.", category: "Design", difficulty: "Medium" },
  { id: "pp-sde-15", companyId: "paypal", roleId: "sde", text: "Design a merchant onboarding system with identity verification, bank account linking, and risk assessment.", category: "System Design", difficulty: "Hard" },

  // ===== PAYPAL - FRONTEND =====
  { id: "pp-fe-1", companyId: "paypal", roleId: "frontend", text: "How would you build a secure checkout button SDK that merchants can embed on their websites?", category: "JavaScript", difficulty: "Hard" },
  { id: "pp-fe-2", companyId: "paypal", roleId: "frontend", text: "Implement a transaction history page with infinite scroll, filters, and export functionality.", category: "React", difficulty: "Medium" },

  // ===== INTUIT - SDE (additional) =====
  { id: "int-sde-11", companyId: "intuit", roleId: "sde", text: "Design a financial report generation system that produces P&L, balance sheets, and cash flow statements.", category: "System Design", difficulty: "Hard" },
  { id: "int-sde-12", companyId: "intuit", roleId: "sde", text: "Implement a function to calculate tax brackets progressively given income and bracket thresholds.", category: "Algorithms", difficulty: "Medium" },
  { id: "int-sde-13", companyId: "intuit", roleId: "sde", text: "Design Credit Karma's credit score monitoring system with alerts for significant changes.", category: "System Design", difficulty: "Hard" },
  { id: "int-sde-14", companyId: "intuit", roleId: "sde", text: "Implement a rule engine that evaluates complex tax rules with dependencies and conditions.", category: "Design", difficulty: "Hard" },
  { id: "int-sde-15", companyId: "intuit", roleId: "sde", text: "Design a data import system that handles CSV, Excel, and bank feed formats with data validation.", category: "System Design", difficulty: "Medium" },

  // ===== INTUIT - FRONTEND =====
  { id: "int-fe-1", companyId: "intuit", roleId: "frontend", text: "Implement a multi-step tax filing wizard form with validation, progress tracking, and auto-save.", category: "React", difficulty: "Medium" },
  { id: "int-fe-2", companyId: "intuit", roleId: "frontend", text: "How would you build an interactive financial dashboard with drag-and-drop widgets and real-time charts?", category: "JavaScript", difficulty: "Hard" },
  { id: "int-fe-3", companyId: "intuit", roleId: "frontend", text: "Design a receipt scanner UI that uses the camera, crops the image, and shows extracted data for review.", category: "JavaScript", difficulty: "Medium" },

  // ===== ATLASSIAN - SDE (additional) =====
  { id: "atl-sde-11", companyId: "atlassian", roleId: "sde", text: "Design Confluence's page versioning and diff system. How do you show changes between versions?", category: "System Design", difficulty: "Hard" },
  { id: "atl-sde-12", companyId: "atlassian", roleId: "sde", text: "Implement a priority queue with decrease-key operation for task scheduling.", category: "Data Structures", difficulty: "Medium" },
  { id: "atl-sde-13", companyId: "atlassian", roleId: "sde", text: "Design the Jira sprint planning board with drag-and-drop issue management and capacity tracking.", category: "System Design", difficulty: "Hard" },
  { id: "atl-sde-14", companyId: "atlassian", roleId: "sde", text: "Implement a text diffing algorithm that shows character-level changes between two strings.", category: "Algorithms", difficulty: "Hard" },
  { id: "atl-sde-15", companyId: "atlassian", roleId: "sde", text: "Design Bitbucket's pull request review system with inline comments, approval workflows, and merge checks.", category: "System Design", difficulty: "Hard" },

  // ===== ATLASSIAN - FRONTEND =====
  { id: "atl-fe-1", companyId: "atlassian", roleId: "frontend", text: "Implement a drag-and-drop Kanban board like Trello with smooth animations and real-time sync.", category: "React", difficulty: "Hard" },
  { id: "atl-fe-2", companyId: "atlassian", roleId: "frontend", text: "Design a WYSIWYG editor for Confluence with support for tables, macros, and embedded content.", category: "JavaScript", difficulty: "Hard" },
  { id: "atl-fe-3", companyId: "atlassian", roleId: "frontend", text: "How would you implement optimistic UI updates for issue status changes on a Jira board?", category: "React", difficulty: "Medium" },

  // ===== ZOMATO - SDE (additional) =====
  { id: "zm-sde-11", companyId: "zomato", roleId: "sde", text: "Design a restaurant partner app for managing orders, menu, and availability in real-time.", category: "System Design", difficulty: "Hard" },
  { id: "zm-sde-12", companyId: "zomato", roleId: "sde", text: "Implement an algorithm to detect clusters of restaurants in a geographic area using geohashing.", category: "Algorithms", difficulty: "Medium" },
  { id: "zm-sde-13", companyId: "zomato", roleId: "sde", text: "Design a loyalty points and rewards system. Handle earning, redeeming, and expiry of points.", category: "System Design", difficulty: "Medium" },
  { id: "zm-sde-14", companyId: "zomato", roleId: "sde", text: "Implement a function to find the optimal assignment of multiple orders to delivery partners (bipartite matching).", category: "Graphs", difficulty: "Hard" },
  { id: "zm-sde-15", companyId: "zomato", roleId: "sde", text: "Design Zomato's notification system for order updates, offers, and restaurant recommendations.", category: "System Design", difficulty: "Medium" },

  // ===== ZOMATO - FRONTEND =====
  { id: "zm-fe-1", companyId: "zomato", roleId: "frontend", text: "Implement a restaurant listing page with map view, list view toggle, and geolocation-based sorting.", category: "React", difficulty: "Medium" },
  { id: "zm-fe-2", companyId: "zomato", roleId: "frontend", text: "Build a real-time order tracking component that shows delivery rider movement on a map.", category: "JavaScript", difficulty: "Hard" },
  { id: "zm-fe-3", companyId: "zomato", roleId: "frontend", text: "How would you implement a food menu page with category-based navigation and a floating cart summary?", category: "React", difficulty: "Medium" },

  // ===== ZOMATO - BACKEND =====
  { id: "zm-be-1", companyId: "zomato", roleId: "backend", text: "How would you design the order state machine (placed → accepted → preparing → picked → delivered)?", category: "Architecture", difficulty: "Medium" },
  { id: "zm-be-2", companyId: "zomato", roleId: "backend", text: "Design a location-based push notification system for nearby restaurant offers.", category: "System Design", difficulty: "Hard" },

  // ===== SWIGGY - SDE (additional) =====
  { id: "sw-sde-9", companyId: "swiggy", roleId: "sde", text: "Design Swiggy's rider earnings and payout system. Handle daily earnings, tips, bonuses, and weekly settlements.", category: "System Design", difficulty: "Hard" },
  { id: "sw-sde-10", companyId: "swiggy", roleId: "sde", text: "Implement a function to find the shortest delivery route visiting multiple restaurants and customers (multi-stop routing).", category: "Graphs", difficulty: "Hard" },
  { id: "sw-sde-11", companyId: "swiggy", roleId: "sde", text: "Design a food quality feedback system that triggers alerts for consistently low-rated orders.", category: "System Design", difficulty: "Medium" },
  { id: "sw-sde-12", companyId: "swiggy", roleId: "sde", text: "Implement a geofencing algorithm that determines if a delivery location is within a restaurant's serviceable area.", category: "Algorithms", difficulty: "Medium" },
  { id: "sw-sde-13", companyId: "swiggy", roleId: "sde", text: "Design the Swiggy One membership system with benefits, usage tracking, and subscription management.", category: "System Design", difficulty: "Medium" },
  { id: "sw-sde-14", companyId: "swiggy", roleId: "sde", text: "How would you design the estimated delivery time algorithm considering kitchen prep, distance, traffic, and weather?", category: "Algorithms", difficulty: "Hard" },
  { id: "sw-sde-15", companyId: "swiggy", roleId: "sde", text: "Design a restaurant onboarding system with menu digitization, commission setup, and compliance verification.", category: "System Design", difficulty: "Medium" },

  // ===== SWIGGY - FRONTEND =====
  { id: "sw-fe-1", companyId: "swiggy", roleId: "frontend", text: "Implement a food search page with autocomplete, recent searches, and trending items.", category: "React", difficulty: "Medium" },
  { id: "sw-fe-2", companyId: "swiggy", roleId: "frontend", text: "Build a cart management component with quantity updates, variant selection, and price calculations.", category: "React", difficulty: "Medium" },
  { id: "sw-fe-3", companyId: "swiggy", roleId: "frontend", text: "How would you implement a restaurant listing with horizontal scrolling categories and lazy-loading images?", category: "JavaScript", difficulty: "Medium" },

  // ===== SWIGGY - BACKEND =====
  { id: "sw-be-1", companyId: "swiggy", roleId: "backend", text: "How would you design a real-time demand forecasting system to position delivery riders optimally?", category: "System Design", difficulty: "Hard" },
  { id: "sw-be-2", companyId: "swiggy", roleId: "backend", text: "Design the payment split system for orders involving multiple restaurants and delivery charges.", category: "System Design", difficulty: "Medium" },

  // ===== COINBASE - SDE (additional) =====
  { id: "cb-sde-9", companyId: "coinbase", roleId: "sde", text: "Design a transaction monitoring system that flags suspicious activity patterns for compliance.", category: "System Design", difficulty: "Hard" },
  { id: "cb-sde-10", companyId: "coinbase", roleId: "sde", text: "Implement a function to calculate the cost basis for cryptocurrency tax reporting (FIFO, LIFO, HIFO methods).", category: "Algorithms", difficulty: "Medium" },
  { id: "cb-sde-11", companyId: "coinbase", roleId: "sde", text: "Design a staking rewards system that calculates and distributes rewards based on staked amounts and duration.", category: "System Design", difficulty: "Hard" },
  { id: "cb-sde-12", companyId: "coinbase", roleId: "sde", text: "Implement a Merkle tree for efficient verification of transaction data.", category: "Data Structures", difficulty: "Medium" },
  { id: "cb-sde-13", companyId: "coinbase", roleId: "sde", text: "Design a crypto portfolio analytics system that shows historical performance, unrealized P&L, and allocation breakdowns.", category: "System Design", difficulty: "Hard" },
  { id: "cb-sde-14", companyId: "coinbase", roleId: "sde", text: "Implement a simple order matching engine that handles limit and market orders for a crypto trading pair.", category: "Design", difficulty: "Hard" },
  { id: "cb-sde-15", companyId: "coinbase", roleId: "sde", text: "Design a multi-chain wallet system that supports Bitcoin, Ethereum, and Solana with unified account management.", category: "System Design", difficulty: "Hard" },

  // ===== COINBASE - BACKEND =====
  { id: "cb-be-1", companyId: "coinbase", roleId: "backend", text: "How do you ensure data consistency between on-chain transactions and off-chain database records?", category: "Distributed Systems", difficulty: "Hard" },
  { id: "cb-be-2", companyId: "coinbase", roleId: "backend", text: "Design an event-driven system for processing blockchain confirmations and updating user balances.", category: "Architecture", difficulty: "Hard" },
  { id: "cb-be-3", companyId: "coinbase", roleId: "backend", text: "How would you implement a withdrawal approval system with multi-level authorization and velocity checks?", category: "System Design", difficulty: "Hard" },

  // ===== COINBASE - FRONTEND =====
  { id: "cb-fe-1", companyId: "coinbase", roleId: "frontend", text: "Implement a real-time candlestick chart for cryptocurrency price data with zoom and time range selection.", category: "JavaScript", difficulty: "Hard" },
  { id: "cb-fe-2", companyId: "coinbase", roleId: "frontend", text: "Build a crypto portfolio dashboard with live price updates and animated value changes.", category: "React", difficulty: "Medium" },

  // ===== RAZORPAY - SDE (additional) =====
  { id: "rz-sde-11", companyId: "razorpay", roleId: "sde", text: "Design Razorpay's payment links system — create, share, and track one-time payment links.", category: "System Design", difficulty: "Medium" },
  { id: "rz-sde-12", companyId: "razorpay", roleId: "sde", text: "Implement a function to detect duplicate transactions based on amount, timing, and merchant.", category: "Algorithms", difficulty: "Medium" },
  { id: "rz-sde-13", companyId: "razorpay", roleId: "sde", text: "Design an automated refund processing system with different refund modes (instant, normal) and status tracking.", category: "System Design", difficulty: "Hard" },
  { id: "rz-sde-14", companyId: "razorpay", roleId: "sde", text: "Implement a routing algorithm that selects the best payment gateway/bank based on success rate, cost, and latency.", category: "Algorithms", difficulty: "Hard" },
  { id: "rz-sde-15", companyId: "razorpay", roleId: "sde", text: "Design Razorpay's invoice management system with GST calculations, recurring invoices, and payment reminders.", category: "System Design", difficulty: "Medium" },

  // ===== RAZORPAY - FRONTEND =====
  { id: "rz-fe-1", companyId: "razorpay", roleId: "frontend", text: "Implement a payment checkout form that handles UPI, card, netbanking, and wallet payment methods.", category: "React", difficulty: "Medium" },
  { id: "rz-fe-2", companyId: "razorpay", roleId: "frontend", text: "Build a merchant analytics dashboard showing payment success rates, revenue trends, and settlement details.", category: "React", difficulty: "Medium" },

  // ===== DATABRICKS - SDE (additional) =====
  { id: "db-sde-9", companyId: "databricks", roleId: "sde", text: "Design a notebook execution engine that supports multiple languages (Python, SQL, Scala) with shared state.", category: "System Design", difficulty: "Hard" },
  { id: "db-sde-10", companyId: "databricks", roleId: "sde", text: "Implement a simple columnar storage format reader/writer. Explain why columnar is better for analytics.", category: "Data Structures", difficulty: "Hard" },
  { id: "db-sde-11", companyId: "databricks", roleId: "sde", text: "Design a workspace collaboration system with notebook sharing, commenting, and access control.", category: "System Design", difficulty: "Medium" },
  { id: "db-sde-12", companyId: "databricks", roleId: "sde", text: "Implement a bloom filter for efficient membership testing in a data pipeline.", category: "Data Structures", difficulty: "Medium" },
  { id: "db-sde-13", companyId: "databricks", roleId: "sde", text: "Design a job scheduling system that handles dependencies, retries, and resource allocation for data pipelines.", category: "System Design", difficulty: "Hard" },

  // ===== DATABRICKS - DATA ENGINEER (additional) =====
  { id: "db-de-6", companyId: "databricks", roleId: "data-engineer", text: "How would you implement a slowly changing dimension (SCD Type 1, 2, 3) in Delta Lake?", category: "Data Modeling", difficulty: "Medium" },
  { id: "db-de-7", companyId: "databricks", roleId: "data-engineer", text: "Design a real-time feature store for ML models using Spark Structured Streaming and Delta Lake.", category: "Data Processing", difficulty: "Hard" },
  { id: "db-de-8", companyId: "databricks", roleId: "data-engineer", text: "Explain data governance and cataloging. How does Unity Catalog work in Databricks?", category: "Data Quality", difficulty: "Medium" },

  // =============================================================
  // ===== REMAINING PRODUCT COMPANIES EXPANDED TO 25+ ===========
  // =============================================================

  // ===== ORACLE - SDE & FRONTEND (to reach 25+) =====
  { id: "or-sde-16", companyId: "oracle", roleId: "sde", text: "Design an in-memory database cache layer that handles invalidation and consistency with disk storage.", category: "Databases", difficulty: "Hard" },
  { id: "or-sde-17", companyId: "oracle", roleId: "sde", text: "Implement a skip list and explain how it provides O(log n) search in a linked-list-based structure.", category: "Data Structures", difficulty: "Hard" },
  { id: "or-fe-1", companyId: "oracle", roleId: "frontend", text: "How would you build a SQL query builder UI with drag-and-drop table joining and visual query design?", category: "JavaScript", difficulty: "Hard" },
  { id: "or-fe-2", companyId: "oracle", roleId: "frontend", text: "Implement a data grid component with inline editing, sorting, filtering, and virtual scrolling for large datasets.", category: "React", difficulty: "Hard" },
  { id: "or-fe-3", companyId: "oracle", roleId: "frontend", text: "What are Oracle JET components? How do they compare to React/Angular for enterprise applications?", category: "Frameworks", difficulty: "Medium" },
  { id: "or-qa-1", companyId: "oracle", roleId: "qa-engineer", text: "How do you perform database testing? What SQL queries would you use to validate data integrity after a migration?", category: "Testing", difficulty: "Medium" },
  { id: "or-qa-2", companyId: "oracle", roleId: "qa-engineer", text: "Explain the concept of database performance testing. How do you identify slow queries?", category: "Testing", difficulty: "Medium" },

  // ===== SAMSUNG - SDE additional & FRONTEND =====
  { id: "sam-sde-19", companyId: "samsung", roleId: "sde", text: "Implement the KMP (Knuth-Morris-Pratt) string matching algorithm.", category: "Strings", difficulty: "Hard" },
  { id: "sam-sde-20", companyId: "samsung", roleId: "sde", text: "Design a smart home hub system that connects multiple IoT devices with different protocols (Zigbee, Z-Wave, WiFi).", category: "System Design", difficulty: "Hard" },
  { id: "sam-fe-1", companyId: "samsung", roleId: "frontend", text: "How would you build a TV remote control interface optimized for Samsung Tizen OS with D-pad navigation?", category: "JavaScript", difficulty: "Medium" },
  { id: "sam-fe-2", companyId: "samsung", roleId: "frontend", text: "Implement a gallery app UI with pinch-to-zoom, swipe navigation, and image preloading for mobile devices.", category: "JavaScript", difficulty: "Medium" },
  { id: "sam-be-1", companyId: "samsung", roleId: "backend", text: "Design a health data aggregation backend for Samsung Health that ingests data from watch, phone, and third-party devices.", category: "System Design", difficulty: "Hard" },
  { id: "sam-be-2", companyId: "samsung", roleId: "backend", text: "How would you design an OTA (Over-The-Air) firmware update system for millions of Galaxy devices with rollback support?", category: "System Design", difficulty: "Hard" },
  { id: "sam-be-3", companyId: "samsung", roleId: "backend", text: "Design a notification routing system for Samsung Push that delivers to phones, watches, and tablets efficiently.", category: "System Design", difficulty: "Medium" },

  // ===== INTUIT - SDE additional & more roles =====
  { id: "int-sde-16", companyId: "intuit", roleId: "sde", text: "Design a bank feed aggregation system that securely connects to thousands of banks and imports transactions.", category: "System Design", difficulty: "Hard" },
  { id: "int-sde-17", companyId: "intuit", roleId: "sde", text: "Implement a function to detect anomalous transactions in a user's spending history using statistical methods.", category: "Algorithms", difficulty: "Medium" },
  { id: "int-be-1", companyId: "intuit", roleId: "backend", text: "How would you design a double-entry bookkeeping ledger system for QuickBooks with real-time balance calculations?", category: "System Design", difficulty: "Hard" },
  { id: "int-be-2", companyId: "intuit", roleId: "backend", text: "Design an API platform for QuickBooks integrations that handles rate limiting, webhooks, and OAuth for third-party apps.", category: "System Design", difficulty: "Hard" },
  { id: "int-be-3", companyId: "intuit", roleId: "backend", text: "How do you ensure data accuracy in a financial application? Discuss validation, reconciliation, and audit logging.", category: "Architecture", difficulty: "Medium" },
  { id: "int-qa-1", companyId: "intuit", roleId: "qa-engineer", text: "How would you test a tax calculation engine with thousands of rules across different states and filing statuses?", category: "Testing", difficulty: "Hard" },
  { id: "int-qa-2", companyId: "intuit", roleId: "qa-engineer", text: "What is property-based testing? How would you apply it to test financial calculation functions?", category: "Testing", difficulty: "Medium" },

  // ===== ATLASSIAN - additional roles =====
  { id: "atl-be-1", companyId: "atlassian", roleId: "backend", text: "How does Atlassian's multi-tenant cloud architecture work? Explain tenant isolation and data sharding strategies.", category: "Architecture", difficulty: "Hard" },
  { id: "atl-be-2", companyId: "atlassian", roleId: "backend", text: "Design the backend for Jira's custom field system that supports different field types and workflow conditions.", category: "System Design", difficulty: "Hard" },
  { id: "atl-be-3", companyId: "atlassian", roleId: "backend", text: "How would you implement a full-text search system for Confluence that indexes millions of pages with real-time updates?", category: "System Design", difficulty: "Hard" },
  { id: "atl-qa-1", companyId: "atlassian", roleId: "qa-engineer", text: "How would you test a real-time collaborative editing feature? What race conditions would you look for?", category: "Testing", difficulty: "Hard" },
  { id: "atl-qa-2", companyId: "atlassian", roleId: "qa-engineer", text: "Design a test strategy for a Jira workflow engine that supports custom transitions and validators.", category: "Testing", difficulty: "Medium" },
  { id: "atl-sde-16", companyId: "atlassian", roleId: "sde", text: "Design a comment threading system for Jira with nested replies, mentions, and emoji reactions.", category: "System Design", difficulty: "Medium" },
  { id: "atl-sde-17", companyId: "atlassian", roleId: "sde", text: "Implement a function that finds the critical path in a project network (longest path in a DAG).", category: "Graphs", difficulty: "Hard" },

  // ===== SALESFORCE - additional =====
  { id: "sf-sde-13", companyId: "salesforce", roleId: "sde", text: "Design a bulk data import/export system for Salesforce CRM that handles millions of records efficiently.", category: "System Design", difficulty: "Hard" },
  { id: "sf-sde-14", companyId: "salesforce", roleId: "sde", text: "Implement a formula evaluation engine that parses and executes Salesforce formula fields with nested functions.", category: "Design", difficulty: "Hard" },
  { id: "sf-sde-15", companyId: "salesforce", roleId: "sde", text: "How would you design an audit trail system that tracks every field change across millions of records?", category: "System Design", difficulty: "Hard" },
  { id: "sf-be-4", companyId: "salesforce", roleId: "backend", text: "Explain Salesforce's multi-tenant architecture. How do metadata-driven apps and governor limits work together?", category: "Architecture", difficulty: "Hard" },
  { id: "sf-be-5", companyId: "salesforce", roleId: "backend", text: "Design an event-driven architecture for Salesforce Platform Events. How do you ensure at-least-once delivery?", category: "Architecture", difficulty: "Hard" },
  { id: "sf-qa-1", companyId: "salesforce", roleId: "qa-engineer", text: "How do you test Salesforce customizations (triggers, workflows, validation rules) across different orgs?", category: "Testing", difficulty: "Medium" },

  // ===== NVIDIA - additional (non-ML roles) =====
  { id: "nv-sde-1", companyId: "nvidia", roleId: "sde", text: "Design a GPU driver architecture that handles resource allocation, memory management, and context switching.", category: "System Design", difficulty: "Hard" },
  { id: "nv-sde-2", companyId: "nvidia", roleId: "sde", text: "Implement a parallel prefix sum (scan) algorithm. Explain how it is used in GPU computing.", category: "Algorithms", difficulty: "Hard" },
  { id: "nv-sde-3", companyId: "nvidia", roleId: "sde", text: "What is the difference between shared memory, global memory, and registers in CUDA programming?", category: "Systems", difficulty: "Hard" },
  { id: "nv-sde-4", companyId: "nvidia", roleId: "sde", text: "Design a job scheduler for a multi-GPU cluster that optimizes utilization and minimizes queue wait times.", category: "System Design", difficulty: "Hard" },
  { id: "nv-sde-5", companyId: "nvidia", roleId: "sde", text: "Implement a parallel merge sort using a divide-and-conquer approach suitable for GPU execution.", category: "Sorting", difficulty: "Hard" },

  // ===== PAYPAL - additional =====
  { id: "pp-sde-16", companyId: "paypal", roleId: "sde", text: "Design a rewards cashback system that handles different earning rates per merchant category and redemption options.", category: "System Design", difficulty: "Medium" },
  { id: "pp-sde-17", companyId: "paypal", roleId: "sde", text: "Implement a function to detect anomalous spending patterns using a sliding window and z-score analysis.", category: "Algorithms", difficulty: "Medium" },
  { id: "pp-fe-3", companyId: "paypal", roleId: "frontend", text: "Implement a money transfer form with recipient search, amount input with currency formatting, and confirmation flow.", category: "React", difficulty: "Medium" },
  { id: "pp-qa-1", companyId: "paypal", roleId: "qa-engineer", text: "How would you test a payment processing system for edge cases (partial failures, timeouts, duplicate submissions)?", category: "Testing", difficulty: "Hard" },
  { id: "pp-qa-2", companyId: "paypal", roleId: "qa-engineer", text: "What is chaos testing? How would you apply it to ensure payment system resilience?", category: "Testing", difficulty: "Medium" },

  // ===== ZOMATO - additional =====
  { id: "zm-sde-16", companyId: "zomato", roleId: "sde", text: "Design a restaurant capacity and table reservation system with real-time availability updates.", category: "System Design", difficulty: "Medium" },
  { id: "zm-sde-17", companyId: "zomato", roleId: "sde", text: "Implement an algorithm to calculate delivery route optimization for a rider with multiple pickups and drops.", category: "Graphs", difficulty: "Hard" },
  { id: "zm-sde-18", companyId: "zomato", roleId: "sde", text: "Design a food photo recognition system that auto-tags dishes in user-uploaded images.", category: "System Design", difficulty: "Hard" },
  { id: "zm-qa-1", companyId: "zomato", roleId: "qa-engineer", text: "How would you test an order placement flow end-to-end including payment, kitchen notification, and delivery assignment?", category: "Testing", difficulty: "Medium" },
  { id: "zm-qa-2", companyId: "zomato", roleId: "qa-engineer", text: "Design a test strategy for location-based features like nearby restaurant search and delivery tracking.", category: "Testing", difficulty: "Medium" },

  // ===== SWIGGY - additional =====
  { id: "sw-sde-16", companyId: "swiggy", roleId: "sde", text: "Design a dynamic menu pricing system that changes based on demand, time of day, and inventory.", category: "System Design", difficulty: "Hard" },
  { id: "sw-sde-17", companyId: "swiggy", roleId: "sde", text: "Implement a geospatial index using quadtree for efficient nearby rider lookup.", category: "Data Structures", difficulty: "Hard" },
  { id: "sw-sde-18", companyId: "swiggy", roleId: "sde", text: "Design Swiggy Dineout — a restaurant table booking system with waitlist management and offer integration.", category: "System Design", difficulty: "Medium" },
  { id: "sw-qa-1", companyId: "swiggy", roleId: "qa-engineer", text: "How would you test the real-time order tracking feature for accuracy of rider location and ETA predictions?", category: "Testing", difficulty: "Medium" },
  { id: "sw-qa-2", companyId: "swiggy", roleId: "qa-engineer", text: "Design test cases for Swiggy Instamart's 10-minute delivery promise including inventory, routing, and time constraints.", category: "Testing", difficulty: "Medium" },

  // ===== COINBASE - additional =====
  { id: "cb-sde-16", companyId: "coinbase", roleId: "sde", text: "Design a crypto asset listing pipeline that evaluates new tokens for security, compliance, and liquidity before listing.", category: "System Design", difficulty: "Hard" },
  { id: "cb-sde-17", companyId: "coinbase", roleId: "sde", text: "Implement a function to compute real-time P&L for a portfolio with frequent trades across multiple trading pairs.", category: "Algorithms", difficulty: "Medium" },
  { id: "cb-sde-18", companyId: "coinbase", roleId: "sde", text: "Design a gas fee estimation service for Ethereum transactions that predicts optimal gas prices.", category: "System Design", difficulty: "Hard" },
  { id: "cb-qa-1", companyId: "coinbase", roleId: "qa-engineer", text: "How would you test a cryptocurrency exchange for order matching correctness, including edge cases like market orders during high volatility?", category: "Testing", difficulty: "Hard" },
  { id: "cb-qa-2", companyId: "coinbase", roleId: "qa-engineer", text: "Design test scenarios for a wallet system covering multi-signature transactions, key recovery, and balance accuracy.", category: "Testing", difficulty: "Hard" },

  // ===== RAZORPAY - additional =====
  { id: "rz-sde-16", companyId: "razorpay", roleId: "sde", text: "Design Razorpay's smart routing engine that dynamically routes payments through the highest success-rate gateway.", category: "System Design", difficulty: "Hard" },
  { id: "rz-sde-17", companyId: "razorpay", roleId: "sde", text: "Implement a function to reconcile bank settlement files with internal transaction records and flag mismatches.", category: "Algorithms", difficulty: "Medium" },
  { id: "rz-sde-18", companyId: "razorpay", roleId: "sde", text: "Design the Razorpay Route system that splits payments between multiple linked accounts with configurable ratios.", category: "System Design", difficulty: "Hard" },
  { id: "rz-qa-1", companyId: "razorpay", roleId: "qa-engineer", text: "How would you test a payment gateway integration for all payment modes (UPI, cards, netbanking, wallets)?", category: "Testing", difficulty: "Medium" },
  { id: "rz-qa-2", companyId: "razorpay", roleId: "qa-engineer", text: "Design test cases for idempotent payment APIs to ensure no double charging under retry scenarios.", category: "Testing", difficulty: "Hard" },

  // ===== UBER - additional =====
  { id: "ub-sde-15", companyId: "uber", roleId: "sde", text: "Design Uber's safety features system — SOS button, trip sharing, trusted contacts, and driver verification.", category: "System Design", difficulty: "Hard" },
  { id: "ub-sde-16", companyId: "uber", roleId: "sde", text: "Implement an algorithm to predict rider demand in different city zones using historical trip data.", category: "Algorithms", difficulty: "Hard" },
  { id: "ub-fe-1", companyId: "uber", roleId: "frontend", text: "Implement a map-based UI that shows nearby drivers with real-time movement and ETA estimation.", category: "React", difficulty: "Hard" },
  { id: "ub-fe-2", companyId: "uber", roleId: "frontend", text: "Design a ride booking flow with pickup/dropoff selection, fare estimation, and payment method chooser.", category: "React", difficulty: "Medium" },

  // ===== LINKEDIN - additional =====
  { id: "li-sde-16", companyId: "linkedin", roleId: "sde", text: "Design a content analytics system that tracks post impressions, engagement, and audience demographics.", category: "System Design", difficulty: "Hard" },
  { id: "li-sde-17", companyId: "linkedin", roleId: "sde", text: "Implement a function to find the most influential connections in a social graph (PageRank-style algorithm).", category: "Graphs", difficulty: "Hard" },
  { id: "li-fe-4", companyId: "linkedin", roleId: "frontend", text: "Implement a job application form with multi-step wizard, file upload, and LinkedIn profile auto-fill.", category: "React", difficulty: "Medium" },
  { id: "li-fe-5", companyId: "linkedin", roleId: "frontend", text: "How would you implement real-time typing indicators and read receipts in LinkedIn Messaging?", category: "JavaScript", difficulty: "Medium" },

  // ===== SPOTIFY - additional =====
  { id: "sp-sde-16", companyId: "spotify", roleId: "sde", text: "Design a social listening feature that shows what friends are currently listening to with privacy controls.", category: "System Design", difficulty: "Medium" },
  { id: "sp-sde-17", companyId: "spotify", roleId: "sde", text: "Implement an audio normalization algorithm that ensures consistent volume across different tracks.", category: "Algorithms", difficulty: "Medium" },
  { id: "sp-fe-4", companyId: "spotify", roleId: "frontend", text: "Implement a Spotify Wrapped-style year-end review page with animated statistics and shareable graphics.", category: "React", difficulty: "Hard" },
  { id: "sp-fe-5", companyId: "spotify", roleId: "frontend", text: "Design a podcast episode player UI with chapters, show notes, variable speed, and sleep timer.", category: "JavaScript", difficulty: "Medium" },

  // ===== DATABRICKS - additional =====
  { id: "db-sde-14", companyId: "databricks", roleId: "sde", text: "Design a real-time dashboard that queries Delta Lake tables and updates metrics as new data arrives.", category: "System Design", difficulty: "Medium" },
  { id: "db-sde-15", companyId: "databricks", roleId: "sde", text: "Implement a simple version control system for data tables (time travel) using transaction logs.", category: "Design", difficulty: "Hard" },
  { id: "db-de-9", companyId: "databricks", roleId: "data-engineer", text: "Design a data pipeline that processes both batch and streaming data using a unified Spark framework.", category: "Data Processing", difficulty: "Hard" },
  { id: "db-de-10", companyId: "databricks", roleId: "data-engineer", text: "How would you build a cost-efficient ETL pipeline that optimizes Spark cluster usage with auto-scaling?", category: "Performance", difficulty: "Medium" },

  // ===== OPENAI - additional =====
  { id: "oai-sde-1", companyId: "openai", roleId: "sde", text: "Design the ChatGPT conversation system — handle session management, context windows, and streaming responses.", category: "System Design", difficulty: "Hard" },
  { id: "oai-sde-2", companyId: "openai", roleId: "sde", text: "Implement a token counting function for a BPE-based tokenizer. How do you handle edge cases with Unicode?", category: "Algorithms", difficulty: "Medium" },
  { id: "oai-sde-3", companyId: "openai", roleId: "sde", text: "Design a rate limiting and usage metering system for an API with multiple pricing tiers and burst allowances.", category: "System Design", difficulty: "Hard" },

  // ===== STRIPE - additional =====
  { id: "str-sde-16", companyId: "stripe", roleId: "sde", text: "Design a tax calculation system that handles sales tax, VAT, and GST across different jurisdictions.", category: "System Design", difficulty: "Hard" },
  { id: "str-sde-17", companyId: "stripe", roleId: "sde", text: "Implement a reconciliation algorithm that matches bank settlement records with internal transaction data.", category: "Algorithms", difficulty: "Medium" },
  { id: "str-sde-18", companyId: "stripe", roleId: "sde", text: "Design Stripe Connect's onboarding system that handles identity verification across 40+ countries.", category: "System Design", difficulty: "Hard" },

  // ===== TWITTER - additional =====
  { id: "tw-sde-16", companyId: "twitter", roleId: "sde", text: "Design a polls/voting feature for tweets with real-time result updates and anti-manipulation measures.", category: "System Design", difficulty: "Medium" },
  { id: "tw-sde-17", companyId: "twitter", roleId: "sde", text: "Implement a function to find the most retweeted tweets within a time window using a max-heap.", category: "Heap", difficulty: "Medium" },

  // ===== ADOBE - additional =====
  { id: "ad-sde-16", companyId: "adobe", roleId: "sde", text: "Design a collaborative annotation system for Adobe Acrobat that handles real-time comments, highlights, and drawings.", category: "System Design", difficulty: "Hard" },
  { id: "ad-sde-17", companyId: "adobe", roleId: "sde", text: "Implement a flood fill algorithm for a paint application (like Photoshop's paint bucket tool).", category: "Graphs", difficulty: "Medium" },

  // ===== FLIPKART - additional =====
  { id: "fk-sde-16", companyId: "flipkart", roleId: "sde", text: "Design Flipkart's Big Billion Days sale system — handle flash sales, inventory locking, and 10x traffic spikes.", category: "System Design", difficulty: "Hard" },

  // ===== LTIMINDTREE - additional =====
  { id: "lti-sde-21", companyId: "lti", roleId: "sde", text: "Explain the concept of reactive programming. How does Project Reactor work with Spring WebFlux?", category: "Frameworks", difficulty: "Hard" },
  { id: "lti-sde-22", companyId: "lti", roleId: "sde", text: "Write a program to find all strongly connected components in a directed graph (Tarjan's algorithm).", category: "Graphs", difficulty: "Hard" },
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

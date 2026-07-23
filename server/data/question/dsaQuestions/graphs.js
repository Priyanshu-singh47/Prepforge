const graphQuestions = [
  {
    title: "Introduction to Graph",
    difficulty: "Easy",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
    },
    order: 1,
  },
  {
    title: "Graph Representation",
    difficulty: "Easy",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/graph-and-its-representations/",
    },
    order: 2,
  },
  {
    title: "Connected Components",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/dsa/connected-components-in-an-undirected-graph/",
    },
    order: 3,
  },
  {
    title: "Breadth First Search",
    difficulty: "Easy",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
    },
    order: 4,
  },
  {
    title: "Depth First Search",
    difficulty: "Easy",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
    },
    order: 5,
  },
  {
    title: "Number of Provinces",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/number-of-provinces/",
    },
    order: 6,
  },
  {
    title: "Number of Islands",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/number-of-islands/",
    },
    order: 7,
  },
  {
    title: "Rotting Oranges",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/rotting-oranges/",
    },
    order: 8,
  },
  {
    title: "Flood Fill",
    difficulty: "Easy",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/flood-fill/",
    },
    order: 9,
  },
  {
    title: "Cycle Detection in Undirected Graph (BFS)",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
    },
    order: 10,
  },
  {
    title: "Cycle Detection in Undirected Graph (DFS)",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
    },
    order: 11,
  },
  {
    title: "01 Matrix",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/01-matrix/",
    },
    order: 12,
  },
  {
    title: "Surrounded Regions",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/surrounded-regions/",
    },
    order: 13,
  },
  {
    title: "Number of Enclaves",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/number-of-enclaves/",
    },
    order: 14,
  },
  {
    title: "Word Ladder",
    difficulty: "Hard",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/word-ladder/",
    },
    order: 15,
  },
  {
    title: "Word Ladder II",
    difficulty: "Hard",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/word-ladder-ii/",
    },
    order: 16,
  },
  {
    title: "Is Graph Bipartite?",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/is-graph-bipartite/",
    },
    order: 17,
  },
  {
    title: "Cycle Detection in Directed Graph",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
    },
    order: 18,
  },
    {
    title: "Topological Sort (DFS)",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/topological-sort/1",
    },
    order: 19,
  },
  {
    title: "Topological Sort (Kahn's Algorithm)",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/topological-sort/1",
    },
    order: 20,
  },
  {
    title: "Detect Cycle in Directed Graph (BFS)",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
    },
    order: 21,
  },
  {
    title: "Course Schedule",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/course-schedule/",
    },
    order: 22,
  },
  {
    title: "Course Schedule II",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/course-schedule-ii/",
    },
    order: 23,
  },
  {
    title: "Find Eventual Safe States",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/find-eventual-safe-states/",
    },
    order: 24,
  },
  {
    title: "Alien Dictionary",
    difficulty: "Hard",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
    },
    order: 25,
  },
  {
    title: "Shortest Path in Undirected Graph with Unit Weights",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1",
    },
    order: 26,
  },
  {
    title: "Shortest Path in Directed Acyclic Graph",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1",
    },
    order: 27,
  },
  {
    title: "Dijkstra's Algorithm",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
    },
    order: 28,
  },
  {
    title: "Shortest Path in Binary Matrix",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    },
    order: 29,
  },
  {
    title: "Path With Minimum Effort",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/path-with-minimum-effort/",
    },
    order: 30,
  },
  {
    title: "Cheapest Flights Within K Stops",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    },
    order: 31,
  },
  {
    title: "Network Delay Time",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/network-delay-time/",
    },
    order: 32,
  },
  {
    title: "Number of Ways to Arrive at Destination",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
    },
    order: 33,
  },
  {
    title: "Minimum Multiplications to Reach End",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/minimum-multiplications-to-reach-end/1",
    },
    order: 34,
  },
  {
    title: "Bellman-Ford Algorithm",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1",
    },
    order: 35,
  },
  {
    title: "Floyd Warshall Algorithm",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1",
    },
    order: 36,
  },
  {
    title: "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
    },
    order: 37,
  },
    {
    title: "Minimum Spanning Tree - Theory",
    difficulty: "Easy",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/minimum-spanning-tree/",
    },
    order: 38,
  },
  {
    title: "Prim's Algorithm",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",
    },
    order: 39,
  },
  {
    title: "Disjoint Set (Union Find)",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/",
    },
    order: 40,
  },
  {
    title: "Kruskal's Algorithm",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",
    },
    order: 41,
  },
  {
    title: "Number of Operations to Make Network Connected",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
    },
    order: 42,
  },
  {
    title: "Most Stones Removed with Same Row or Column",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
    },
    order: 43,
  },
  {
    title: "Accounts Merge",
    difficulty: "Medium",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/accounts-merge/",
    },
    order: 44,
  },
  {
    title: "Number of Islands II",
    difficulty: "Hard",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/number-of-islands-ii/",
    },
    order: 45,
  },
  {
    title: "Making A Large Island",
    difficulty: "Hard",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/making-a-large-island/",
    },
    order: 46,
  },
  {
    title: "Swim in Rising Water",
    difficulty: "Hard",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/swim-in-rising-water/",
    },
    order: 47,
  },
  {
    title: "Critical Connections in a Network",
    difficulty: "Hard",
    pattern: "Graphs",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/critical-connections-in-a-network/",
    },
    order: 48,
  },
  {
    title: "Articulation Point",
    difficulty: "Hard",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/articulation-point2616/1",
    },
    order: 49,
  },
  {
    title: "Kosaraju's Algorithm",
    difficulty: "Hard",
    pattern: "Graphs",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
    },
    order: 50,
  },
];

module.exports = graphQuestions;
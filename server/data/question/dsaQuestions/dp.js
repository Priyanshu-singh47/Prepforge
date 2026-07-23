const dpQuestions = [
  {
    title: "Introduction to Dynamic Programming",
    difficulty: "Easy",
    pattern: "Dynamic Programming",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/dynamic-programming/",
    },
    order: 1,
  },
  {
    title: "Climbing Stairs",
    difficulty: "Easy",
    pattern: "1D DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/climbing-stairs/",
    },
    order: 2,
  },
  {
    title: "Frog Jump",
    difficulty: "Medium",
    pattern: "1D DP",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/geek-jump/1",
    },
    order: 3,
  },
  {
    title: "Frog Jump with K Distances",
    difficulty: "Medium",
    pattern: "1D DP",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/geek-jump-with-k-distances/1",
    },
    order: 4,
  },
  {
    title: "Maximum Sum of Non-Adjacent Elements",
    difficulty: "Medium",
    pattern: "1D DP",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1",
    },
    order: 5,
  },
  {
    title: "House Robber",
    difficulty: "Medium",
    pattern: "1D DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/house-robber/",
    },
    order: 6,
  },
  {
    title: "Ninja's Training",
    difficulty: "Medium",
    pattern: "2D/3D DP",
    source: {
      name: "Coding Ninjas",
      url: "https://www.naukri.com/code360/problems/ninja-s-training_3621003",
    },
    order: 7,
  },
  {
    title: "Unique Paths",
    difficulty: "Medium",
    pattern: "2D/3D DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/unique-paths/",
    },
    order: 8,
  },
  {
    title: "Unique Paths II",
    difficulty: "Medium",
    pattern: "2D/3D DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/unique-paths-ii/",
    },
    order: 9,
  },
  {
    title: "Minimum Falling Path Sum",
    difficulty: "Medium",
    pattern: "2D/3D DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/minimum-falling-path-sum/",
    },
    order: 10,
  },
  {
    title: "Triangle",
    difficulty: "Medium",
    pattern: "2D/3D DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/triangle/",
    },
    order: 11,
  },
  {
    title: "Cherry Pickup II",
    difficulty: "Hard",
    pattern: "2D/3D DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/cherry-pickup-ii/",
    },
    order: 12,
  },
  {
    title: "Subset Sum Equal to Target",
    difficulty: "Medium",
    pattern: "DP on Subsequences",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",
    },
    order: 13,
  },
  {
    title: "Partition Equal Subset Sum",
    difficulty: "Medium",
    pattern: "DP on Subsequences",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/partition-equal-subset-sum/",
    },
    order: 14,
  },
  {
    title: "Partition Array Into Two Arrays to Minimize Sum Difference",
    difficulty: "Hard",
    pattern: "DP on Subsequences",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/",
    },
    order: 15,
  },
  {
    title: "Perfect Sum Problem",
    difficulty: "Medium",
    pattern: "DP on Subsequences",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1",
    },
    order: 16,
  },
  {
    title: "Partitions with Given Difference",
    difficulty: "Medium",
    pattern: "DP on Subsequences",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1",
    },
    order: 17,
  },
  {
    title: "Minimum Coins",
    difficulty: "Medium",
    pattern: "DP on Subsequences",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/coin-change/",
    },
    order: 18,
  },
  {
    title: "Target Sum",
    difficulty: "Medium",
    pattern: "DP on Subsequences",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/target-sum/",
    },
    order: 19,
  },
    {
    title: "Coin Change II",
    difficulty: "Medium",
    pattern: "DP on Subsequences",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/coin-change-ii/",
    },
    order: 20,
  },
  {
    title: "Unbounded Knapsack",
    difficulty: "Medium",
    pattern: "DP on Subsequences",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",
    },
    order: 21,
  },
  {
    title: "Rod Cutting",
    difficulty: "Medium",
    pattern: "DP on Subsequences",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/rod-cutting0840/1",
    },
    order: 22,
  },
  {
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    pattern: "DP on Strings",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/longest-common-subsequence/",
    },
    order: 23,
  },
  {
    title: "Print Longest Common Subsequence",
    difficulty: "Medium",
    pattern: "DP on Strings",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/print-longest-common-subsequence/1",
    },
    order: 24,
  },
  {
    title: "Longest Common Substring",
    difficulty: "Medium",
    pattern: "DP on Strings",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1",
    },
    order: 25,
  },
  {
    title: "Longest Palindromic Subsequence",
    difficulty: "Medium",
    pattern: "DP on Strings",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
    },
    order: 26,
  },
  {
    title: "Minimum Insertions to Make a String Palindrome",
    difficulty: "Hard",
    pattern: "DP on Strings",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
    },
    order: 27,
  },
  {
    title: "Delete Operation for Two Strings",
    difficulty: "Medium",
    pattern: "DP on Strings",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/delete-operation-for-two-strings/",
    },
    order: 28,
  },
  {
    title: "Shortest Common Supersequence",
    difficulty: "Hard",
    pattern: "DP on Strings",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/shortest-common-supersequence/",
    },
    order: 29,
  },
  {
    title: "Distinct Subsequences",
    difficulty: "Hard",
    pattern: "DP on Strings",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/distinct-subsequences/",
    },
    order: 30,
  },
  {
    title: "Edit Distance",
    difficulty: "Medium",
    pattern: "DP on Strings",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/edit-distance/",
    },
    order: 31,
  },
  {
    title: "Wildcard Matching",
    difficulty: "Hard",
    pattern: "DP on Strings",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/wildcard-matching/",
    },
    order: 32,
  },
  {
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    pattern: "DP on Stocks",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    },
    order: 33,
  },
  {
    title: "Best Time to Buy and Sell Stock II",
    difficulty: "Medium",
    pattern: "DP on Stocks",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    },
    order: 34,
  },
  {
    title: "Best Time to Buy and Sell Stock III",
    difficulty: "Hard",
    pattern: "DP on Stocks",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
    },
    order: 35,
  },
  {
    title: "Best Time to Buy and Sell Stock IV",
    difficulty: "Hard",
    pattern: "DP on Stocks",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
    },
    order: 36,
  },
  {
    title: "Best Time to Buy and Sell Stock with Cooldown",
    difficulty: "Medium",
    pattern: "DP on Stocks",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    },
    order: 37,
  },
  {
    title: "Best Time to Buy and Sell Stock with Transaction Fee",
    difficulty: "Medium",
    pattern: "DP on Stocks",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
    },
    order: 38,
  },
  {
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    pattern: "DP on LIS",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/longest-increasing-subsequence/",
    },
    order: 39,
  },
  {
    title: "Print Longest Increasing Subsequence",
    difficulty: "Medium",
    pattern: "DP on LIS",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1",
    },
    order: 40,
  },
  {
    title: "Longest Increasing Subsequence (Binary Search)",
    difficulty: "Medium",
    pattern: "DP on LIS",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/longest-increasing-subsequence/",
    },
    order: 41,
  },
  {
    title: "Largest Divisible Subset",
    difficulty: "Medium",
    pattern: "DP on LIS",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/largest-divisible-subset/",
    },
    order: 42,
  },
    {
    title: "Longest String Chain",
    difficulty: "Medium",
    pattern: "DP on LIS",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/longest-string-chain/",
    },
    order: 43,
  },
  {
    title: "Longest Bitonic Subsequence",
    difficulty: "Medium",
    pattern: "DP on LIS",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1",
    },
    order: 44,
  },
  {
    title: "Number of Longest Increasing Subsequence",
    difficulty: "Medium",
    pattern: "DP on LIS",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
    },
    order: 45,
  },
  {
    title: "Matrix Chain Multiplication",
    difficulty: "Hard",
    pattern: "MCM / Partition DP",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1",
    },
    order: 46,
  },
  {
    title: "Matrix Chain Multiplication (Bottom-Up)",
    difficulty: "Hard",
    pattern: "MCM / Partition DP",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1",
    },
    order: 47,
  },
  {
    title: "Minimum Cost to Cut a Stick",
    difficulty: "Hard",
    pattern: "MCM / Partition DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
    },
    order: 48,
  },
  {
    title: "Burst Balloons",
    difficulty: "Hard",
    pattern: "MCM / Partition DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/burst-balloons/",
    },
    order: 49,
  },
  {
    title: "Parsing A Boolean Expression",
    difficulty: "Hard",
    pattern: "MCM / Partition DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/parsing-a-boolean-expression/",
    },
    order: 50,
  },
  {
    title: "Palindrome Partitioning II",
    difficulty: "Hard",
    pattern: "MCM / Partition DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/palindrome-partitioning-ii/",
    },
    order: 51,
  },
  {
    title: "Partition Array for Maximum Sum",
    difficulty: "Medium",
    pattern: "MCM / Partition DP",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/partition-array-for-maximum-sum/",
    },
    order: 52,
  },
  {
    title: "Maximal Rectangle",
    difficulty: "Hard",
    pattern: "DP on Squares",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/maximal-rectangle/",
    },
    order: 53,
  },
  {
    title: "Count Square Submatrices with All Ones",
    difficulty: "Medium",
    pattern: "DP on Squares",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/",
    },
    order: 54,
  },
];

module.exports = dpQuestions;
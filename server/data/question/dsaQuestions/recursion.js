const recursionQuestions = [
  {
    title: "Implement Atoi",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/implement-atoi/1",
    },
    order: 1,
  },
  {
    title: "Pow(x, n)",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/powx-n/",
    },
    order: 2,
  },
  {
    title: "Count Good Numbers",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/count-good-numbers/",
    },
    order: 3,
  },
  {
    title: "Sort a Stack Using Recursion",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/sort-a-stack/1",
    },
    order: 4,
  },
  {
    title: "Reverse a Stack",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/reverse-a-stack/1",
    },
    order: 5,
  },
  {
    title: "Generate Binary Strings Without Consecutive 1s",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1",
    },
    order: 6,
  },
  {
    title: "Generate Parentheses",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/generate-parentheses/",
    },
    order: 7,
  },
  {
    title: "Power Set",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/power-set4302/1",
    },
    order: 8,
  },
  {
    title: "Subsequence Pattern Theory",
    difficulty: "Easy",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/",
    },
    order: 9,
  },
  {
    title: "Count All Subsequences with Sum K",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1",
    },
    order: 10,
  },
  {
    title: "Check if There Exists a Subsequence with Sum K",
    difficulty: "Easy",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",
    },
    order: 11,
  },
  {
    title: "Combination Sum",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/combination-sum/",
    },
    order: 12,
  },
  {
    title: "Combination Sum II",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/combination-sum-ii/",
    },
    order: 13,
  },
    {
    title: "Subsets",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/subsets/",
    },
    order: 14,
  },
  {
    title: "Subsets II",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/subsets-ii/",
    },
    order: 15,
  },
  {
    title: "Combination Sum III",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/combination-sum-iii/",
    },
    order: 16,
  },
  {
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    },
    order: 17,
  },
  {
    title: "Palindrome Partitioning",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/palindrome-partitioning/",
    },
    order: 18,
  },
  {
    title: "Word Search",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/word-search/",
    },
    order: 19,
  },
  {
    title: "N-Queens",
    difficulty: "Hard",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/n-queens/",
    },
    order: 20,
  },
  {
    title: "Rat in a Maze",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
    },
    order: 21,
  },
  {
    title: "Word Break",
    difficulty: "Medium",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/word-break/",
    },
    order: 22,
  },
  {
    title: "M-Coloring Problem",
    difficulty: "Hard",
    pattern: "Recursion",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
    },
    order: 23,
  },
  {
    title: "Sudoku Solver",
    difficulty: "Hard",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/sudoku-solver/",
    },
    order: 24,
  },
  {
    title: "Expression Add Operators",
    difficulty: "Hard",
    pattern: "Recursion",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/expression-add-operators/",
    },
    order: 25,
  },
];

module.exports = recursionQuestions;
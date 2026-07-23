
const arrayQuestions = [
    {
      order: 1,
      title: "Largest Element in an Array",
      difficulty: "Easy",
      pattern: "Array Basics",
      source: {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1",
      },
    },

    {
      order: 2,
      title: "Second Largest Element in an Array",
      difficulty: "Easy",
      pattern: "Array Basics",
      source: {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/second-largest3735/1",
      },
    },

    {
      order: 3,
      title: "Check if Array is Sorted",
      difficulty: "Easy",
      pattern: "Array Traversal",
      source: {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1",
      },
    },

    {
      order: 4,
      title: "Remove Duplicates from Sorted Array",
      difficulty: "Easy",
      pattern: "Two Pointers",
      source: {
        name: "LeetCode",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
    },

    {
      order: 5,
      title: "Cyclically Rotate by One (right rotation)",
      difficulty: "Easy",
      pattern: "Array Rotation",
      source: {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1",
      },
    },

    {
      order: 6,
      title: "Left Rotate Array by K Places",
      difficulty: "Medium",
      pattern: "Array Rotation",
      source: {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1",
      },
    },

    {
      order: 7,
      title: "Move Zeroes",
      difficulty: "Easy",
      pattern: "Two Pointers",
      source: {
        name: "LeetCode",
        url: "https://leetcode.com/problems/move-zeroes/",
      },
    },

    {
      order: 8,
      title: "Linear Search",
      difficulty: "Easy",
      pattern: "Searching",
      source: {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1",
      },
    },

    {
      order: 9,
      title: "Union of Two Sorted Arrays",
      difficulty: "Easy",
      pattern: "Two Pointers",
      source: {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1",
      },
    },

    {
      order: 10,
      title: "Missing Number",
      difficulty: "Easy",
      pattern: "Math / XOR",
      source: {
        name: "LeetCode",
        url: "https://leetcode.com/problems/missing-number/",
      },
    },
    {
  order: 11,
  title: "Maximum Consecutive Ones",
  difficulty: "Easy",
  pattern: "Array Traversal",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/max-consecutive-ones/",
  },
},

{
  order: 12,
  title: "Single Number",
  difficulty: "Easy",
  pattern: "Bit Manipulation",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/single-number/",
  },
},

{
  order: 13,
  title: "Longest Subarray with Given Sum K (Positives)",
  difficulty: "Medium",
  pattern: "Sliding Window",
  source: {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1",
  },
},

{
  order: 14,
  title: "Longest Subarray with Sum K (Positives & Negatives)",
  difficulty: "Medium",
  pattern: "Prefix Sum + HashMap",
  source: {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1",
  },
},

{
  order: 15,
  title: "Two Sum",
  difficulty: "Easy",
  pattern: "Hashing",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/two-sum/",
  },
},

{
  order: 16,
  title: "Sort Colors",
  difficulty: "Medium",
  pattern: "Dutch National Flag",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/sort-colors/",
  },
},

{
  order: 17,
  title: "Majority Element",
  difficulty: "Easy",
  pattern: "Moore's Voting Algorithm",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/majority-element/",
  },
},

{
  order: 18,
  title: "Maximum Subarray",
  difficulty: "Medium",
  pattern: "Kadane's Algorithm",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/maximum-subarray/",
  },
},

{
  order: 19,
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  pattern: "Greedy",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
  },
},

{
  order: 20,
  title: "Rearrange Array Elements by Sign",
  difficulty: "Medium",
  pattern: "Two Pointers",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
  },
},
{
  order: 21,
  title: "Next Permutation",
  difficulty: "Medium",
  pattern: "Implementation",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/next-permutation/",
  },
},

{
  order: 22,
  title: "Leaders in an Array",
  difficulty: "Easy",
  pattern: "Array Traversal",
  source: {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1",
  },
},

{
  order: 23,
  title: "Longest Consecutive Sequence",
  difficulty: "Medium",
  pattern: "Hashing",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/longest-consecutive-sequence/",
  },
},

{
  order: 24,
  title: "Set Matrix Zeroes",
  difficulty: "Medium",
  pattern: "Matrix",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/set-matrix-zeroes/",
  },
},

{
  order: 25,
  title: "Rotate Image",
  difficulty: "Medium",
  pattern: "Matrix",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/rotate-image/",
  },
},

{
  order: 26,
  title: "Spiral Matrix",
  difficulty: "Medium",
  pattern: "Matrix Traversal",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/spiral-matrix/",
  },
},

{
  order: 27,
  title: "Count Subarrays with Given Sum",
  difficulty: "Medium",
  pattern: "Prefix Sum + HashMap",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/subarray-sum-equals-k/",
  },
},

{
  order: 28,
  title: "Pascal's Triangle",
  difficulty: "Easy",
  pattern: "Math",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/pascals-triangle/",
  },
},

{
  order: 29,
  title: "Majority Element II",
  difficulty: "Medium",
  pattern: "Moore's Voting Algorithm",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/majority-element-ii/",
  },
},

{
  order: 30,
  title: "3Sum",
  difficulty: "Medium",
  pattern: "Two Pointers",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/3sum/",
  },
},
{
  order: 31,
  title: "4Sum",
  difficulty: "Medium",
  pattern: "Two Pointers",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/4sum/",
  },
},

{
  order: 32,
  title: "Largest Subarray with Sum 0",
  difficulty: "Medium",
  pattern: "Prefix Sum + HashMap",
  source: {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1",
  },
},

{
  order: 33,
  title: "Count Subarrays with XOR K",
  difficulty: "Medium",
  pattern: "Prefix XOR + HashMap",
  source: {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1",
  },
},

{
  order: 34,
  title: "Merge Intervals",
  difficulty: "Medium",
  pattern: "Intervals",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/merge-intervals/",
  },
},

{
  order: 35,
  title: "Merge Sorted Array",
  difficulty: "Easy",
  pattern: "Two Pointers",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/merge-sorted-array/",
  },
},

{
  order: 36,
  title: "Find the Repeating and Missing Number",
  difficulty: "Medium",
  pattern: "Math / XOR",
  source: {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
  },
},

{
  order: 37,
  title: "Count Inversions",
  difficulty: "Hard",
  pattern: "Merge Sort",
  source: {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/inversion-of-array/1",
  },
},

{
  order: 38,
  title: "Reverse Pairs",
  difficulty: "Hard",
  pattern: "Merge Sort",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/reverse-pairs/",
  },
},

{
  order: 39,
  title: "Maximum Product Subarray",
  difficulty: "Medium",
  pattern: "Kadane's Variant",
  source: {
    name: "LeetCode",
    url: "https://leetcode.com/problems/maximum-product-subarray/",
  },
},

{
  order: 40,
  title: "Count Reverse Pairs",
  difficulty: "Hard",
  pattern: "Merge Sort",
  source: {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/problems/reverse-pairs/1",
  },
},
  ];
    module.exports = arrayQuestions;
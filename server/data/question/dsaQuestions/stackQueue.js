const stackQueueQuestions = [
  {
    title: "Implement Stack Using Array",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1",
    },
    order: 1,
  },
  {
    title: "Implement Queue Using Array",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1",
    },
    order: 2,
  },
  {
    title: "Implement Stack Using Queues",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/implement-stack-using-queues/",
    },
    order: 3,
  },
  {
    title: "Implement Queue Using Stacks",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/implement-queue-using-stacks/",
    },
    order: 4,
  },
  {
    title: "Implement Stack Using Linked List",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/implement-stack-using-linked-list/1",
    },
    order: 5,
  },
  {
    title: "Implement Queue Using Linked List",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1",
    },
    order: 6,
  },
  {
    title: "Valid Parentheses",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/valid-parentheses/",
    },
    order: 7,
  },
  {
    title: "Min Stack",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/min-stack/",
    },
    order: 8,
  },
  {
    title: "Infix to Postfix Conversion",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1",
    },
    order: 9,
  },
  {
    title: "Prefix to Infix Conversion",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/prefix-infix-conversion/",
    },
    order: 10,
  },
  {
    title: "Prefix to Postfix Conversion",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/prefix-postfix-conversion/",
    },
    order: 11,
  },
  {
    title: "Postfix to Prefix Conversion",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/postfix-prefix-conversion/",
    },
    order: 12,
  },
  {
    title: "Postfix to Infix Conversion",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/postfix-to-infix/",
    },
    order: 13,
  },
  {
    title: "Infix to Prefix Conversion",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/infix-to-prefix-conversion-using-two-stacks/",
    },
    order: 14,
  },
  {
    title: "Next Greater Element I",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/next-greater-element-i/",
    },
    order: 15,
  },
    {
    title: "Next Greater Element II",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/next-greater-element-ii/",
    },
    order: 16,
  },
  {
    title: "Next Smaller Element",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/help-classmates--141631/1",
    },
    order: 17,
  },
  {
    title: "Number of Greater Elements to the Right",
    difficulty: "Easy",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/number-of-nges-to-the-right/1",
    },
    order: 18,
  },
  {
    title: "Trapping Rain Water",
    difficulty: "Hard",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/trapping-rain-water/",
    },
    order: 19,
  },
  {
    title: "Sum of Subarray Minimums",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/sum-of-subarray-minimums/",
    },
    order: 20,
  },
  {
    title: "Asteroid Collision",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/asteroid-collision/",
    },
    order: 21,
  },
  {
    title: "Sum of Subarray Ranges",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/sum-of-subarray-ranges/",
    },
    order: 22,
  },
  {
    title: "Remove K Digits",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/remove-k-digits/",
    },
    order: 23,
  },
  {
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    },
    order: 24,
  },
  {
    title: "Maximal Rectangle",
    difficulty: "Hard",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/maximal-rectangle/",
    },
    order: 25,
  },
  {
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/sliding-window-maximum/",
    },
    order: 26,
  },
  {
    title: "Online Stock Span",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/online-stock-span/",
    },
    order: 27,
  },
  {
    title: "Celebrity Problem",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1",
    },
    order: 28,
  },
  {
    title: "LRU Cache",
    difficulty: "Medium",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/lru-cache/",
    },
    order: 29,
  },
  {
    title: "LFU Cache",
    difficulty: "Hard",
    pattern: "Stack & Queue",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/lfu-cache/",
    },
    order: 30,
  },
];

module.exports = stackQueueQuestions;
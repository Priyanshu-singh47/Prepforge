const binaryQuestions = [
  {
    title: "Binary Search",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-search/",
    },
    order: 1,
  },
  {
    title: "Lower Bound",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/implement-lower-bound/1",
    },
    order: 2,
  },
  {
    title: "Upper Bound",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/implement-upper-bound/1",
    },
    order: 3,
  },
  {
    title: "Search Insert Position",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/search-insert-position/",
    },
    order: 4,
  },
  {
    title: "Floor and Ceil in Sorted Array",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1",
    },
    order: 5,
  },
  {
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    },
    order: 6,
  },
  {
    title: "Count Occurrences in a Sorted Array",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1",
    },
    order: 7,
  },
  {
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    },
    order: 8,
  },
  {
    title: "Search in Rotated Sorted Array II",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    },
    order: 9,
  },
  {
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    },
    order: 10,
  },
  {
    title: "Find Rotation Count",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/rotation4723/1",
    },
    order: 11,
  },
  {
    title: "Single Element in a Sorted Array",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    },
    order: 12,
  },
  {
    title: "Find Peak Element",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/find-peak-element/",
    },
    order: 13,
  },
  {
    title: "Sqrt(x)",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/sqrtx/",
    },
    order: 14,
  },
  {
    title: "Nth Root of a Number",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1",
    },
    order: 15,
  },
  {
    title: "Koko Eating Bananas",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/koko-eating-bananas/",
    },
    order: 16,
  },
  
  {
    title: "Minimum Number of Days to Make m Bouquets",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
    },
    order: 17,
  },
  {
    title: "Find the Smallest Divisor Given a Threshold",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
    },
    order: 18,
  },
  {
    title: "Capacity To Ship Packages Within D Days",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    },
    order: 19,
  },
  {
    title: "Kth Missing Positive Number",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/kth-missing-positive-number/",
    },
    order: 20,
  },
  {
    title: "Aggressive Cows",
    difficulty: "Hard",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/aggressive-cows/1",
    },
    order: 21,
  },
  {
    title: "Allocate Minimum Number of Pages",
    difficulty: "Hard",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
    },
    order: 22,
  },
  {
    title: "Split Array Largest Sum",
    difficulty: "Hard",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/split-array-largest-sum/",
    },
    order: 23,
  },
  {
    title: "Painter's Partition Problem",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1",
    },
    order: 24,
  },
  {
    title: "Minimize Max Distance to Gas Station",
    difficulty: "Hard",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/minimize-max-distance-to-gas-station/1",
    },
    order: 25,
  },
  {
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    },
    order: 26,
  },
  {
    title: "K-th Element of Two Sorted Arrays",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1",
    },
    order: 27,
  },
  {
    title: "Row with Max 1s",
    difficulty: "Easy",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1",
    },
    order: 28,
  },
  {
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/search-a-2d-matrix/",
    },
    order: 29,
  },
  {
    title: "Search a 2D Matrix II",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    },
    order: 30,
  },
  {
    title: "Find a Peak Element II",
    difficulty: "Medium",
    pattern: "Binary Search",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/find-a-peak-element-ii/",
    },
    order: 31,
  },
  {
    title: "Median in a Row-wise Sorted Matrix",
    difficulty: "Hard",
    pattern: "Binary Search",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
    },
    order: 32,
  }



];
module.exports = binaryQuestions;
const treeQuestions = [
  {
    title: "Introduction to Trees",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
    },
    order: 1,
  },
  {
    title: "Binary Tree Representation",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
    },
    order: 2,
  },
  {
    title: "Preorder, Inorder and Postorder in One Traversal",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/preorder-inorder-and-postorder-traversal-of-binary-tree-in-one-traversal/1",
    },
    order: 3,
  },
  {
    title: "Binary Tree Preorder Traversal",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    },
    order: 4,
  },
  {
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    },
    order: 5,
  },
  {
    title: "Binary Tree Postorder Traversal",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    },
    order: 6,
  },
  {
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    },
    order: 7,
  },
  {
    title: "Binary Tree Preorder Traversal (Iterative)",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    },
    order: 8,
  },
  {
    title: "Binary Tree Inorder Traversal (Iterative)",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    },
    order: 9,
  },
  {
    title: "Binary Tree Postorder Traversal (Two Stacks)",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    },
    order: 10,
  },
  {
    title: "Binary Tree Postorder Traversal (One Stack)",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    },
    order: 11,
  },
  {
    title: "Preorder, Inorder and Postorder in One Traversal",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/preorder-inorder-and-postorder-traversal-of-binary-tree-in-one-traversal/1",
    },
    order: 12,
  },
  {
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    },
    order: 13,
  },
  {
    title: "Balanced Binary Tree",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/balanced-binary-tree/",
    },
    order: 14,
  },
  {
    title: "Diameter of Binary Tree",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/diameter-of-binary-tree/",
    },
    order: 15,
  },
  {
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    },
    order: 16,
  },
  {
    title: "Same Tree",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/same-tree/",
    },
    order: 17,
  },
  {
    title: "Binary Tree Zigzag Level Order Traversal",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    },
    order: 18,
  },
  {
    title: "Boundary Traversal of Binary Tree",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",
    },
    order: 19,
  },
    {
    title: "Vertical Order Traversal of a Binary Tree",
    difficulty: "Hard",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
    },
    order: 20,
  },
  {
    title: "Top View of Binary Tree",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
    },
    order: 21,
  },
  {
    title: "Bottom View of Binary Tree",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
    },
    order: 22,
  },
  {
    title: "Binary Tree Right Side View",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/binary-tree-right-side-view/",
    },
    order: 23,
  },
  {
    title: "Symmetric Tree",
    difficulty: "Easy",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/symmetric-tree/",
    },
    order: 24,
  },
  {
    title: "Root to Leaf Paths",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/root-to-leaf-paths/1",
    },
    order: 25,
  },
  {
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    },
    order: 26,
  },
  {
    title: "Maximum Width of Binary Tree",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
    },
    order: 27,
  },
  {
    title: "Children Sum Property",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/children-sum-parent/1",
    },
    order: 28,
  },
  {
    title: "All Nodes Distance K in Binary Tree",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
    },
    order: 29,
  },
  {
    title: "Burning Tree",
    difficulty: "Hard",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/problems/burning-tree/1",
    },
    order: 30,
  },
  {
    title: "Count Complete Tree Nodes",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/count-complete-tree-nodes/",
    },
    order: 31,
  },
  {
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    },
    order: 32,
  },
  {
    title: "Construct Binary Tree from Inorder and Postorder Traversal",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
    },
    order: 33,
  },
  {
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    },
    order: 34,
  },
  {
    title: "Binary Tree Morris Preorder Traversal",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/morris-traversal-for-preorder/",
    },
    order: 35,
  },
  {
    title: "Binary Tree Morris Inorder Traversal",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/",
    },
    order: 36,
  },
  {
    title: "Flatten Binary Tree to Linked List",
    difficulty: "Medium",
    pattern: "Trees",
    source: {
      name: "LeetCode",
      url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    },
    order: 37,
  },
];
module.exports = treeQuestions;
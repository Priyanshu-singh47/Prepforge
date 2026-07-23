const arrayQuestions = require("./array");
const basicsQuestions = require("./basics");
const binaryQuestions = require("./binary");
const bitQuestions = require("./bitManipulation");
const bstQuestions = require("./bst");
const dpQuestions = require("./dp");
const graphQuestions = require("./graphs");
const greedyQuestions = require("./greedy");
const heapQuestions = require("./heap");
const linkedListQuestions = require("./linkedList");
const recursionQuestions = require("./recursion");
const slidingWindowQuestions = require("./slidingWindow");
const stackQueueQuestions = require("./stackQueue");
const stringQuestions = require("./strings");
const treeQuestions = require("./trees");
const trieQuestions = require("./tries");

module.exports = {
    "Learn the Basics": basicsQuestions,
    "Arrays": arrayQuestions,
    "Binary Search": binaryQuestions,
    "Strings": stringQuestions,
    "Recursion": recursionQuestions,
    "Bit Manipulation": bitQuestions,
    "Linked List": linkedListQuestions,
    "Stack & Queue": stackQueueQuestions,
    "Sliding Window": slidingWindowQuestions,
    "Trees": treeQuestions,
    "Binary Search Tree": bstQuestions,
    "Heap": heapQuestions,
    "Greedy": greedyQuestions,
    "Graph": graphQuestions,
    "Trie": trieQuestions,
    "Dynamic Programming": dpQuestions,
};
import assert from "assert";
import { Problem } from "../types/problem";

export const maximumDepthOfBinaryTreeHandler = (fn: any) => {
    try {
        const tests = [
            { root: { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } } },
            { root: { val: 1, left: { val: 2 }, right: null } },
            { root: null },
        ];
        const answers = [3, 2, 0];
        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i].root);
            assert.equal(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log("Error from maximumDepthOfBinaryTreeHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeMaximumDepthOfBinaryTreeJS = `function maxDepth(root) {
  // Write your code here
};`;

export const maximumDepthOfBinaryTree: Problem = {
    id: "maximum-depth-of-binary-tree",
    title: "8. Maximum Depth Of Binary Tree",
    problemStatement: `<p class='mt-3'>
        Given a binary tree, find its maximum depth.
    </p>`,
    examples: [
        {
            id: 0,
            inputText: `root = [3,9,20,null,null,15,7]`,
            outputText: `3`,
            explanation: "The maximum depth is 3.",
        },
        {
            id: 1,
            inputText: `root = [1,2]`,
            outputText: `2`,
            explanation: "The maximum depth is 2.",
        },
    ],
    constraints: `<li class='mt-2'><code>The number of nodes in the tree is in the range [0, 10^4].</code></li>
        <li class='mt-2'><code>-100 <= Node.val <= 100</code></li>`,
    starterCode: starterCodeMaximumDepthOfBinaryTreeJS,
    handlerFunction: maximumDepthOfBinaryTreeHandler,
    starterFunctionName: "function maxDepth(",
    order: 8,
};

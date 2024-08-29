import assert from "assert";
import { Problem } from "../types/problem";

export const containerWithMostWaterHandler = (fn: any) => {
    try {
        const tests = [
            [1,8,6,2,5,4,8,3,7],
            [1,1],
            [4,3,2,1,4],
            [1,2,1],
        ];
        const answers = [49, 1, 16, 2];
        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i]);
            assert.equal(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log("Error from containerWithMostWaterHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeContainerWithMostWaterJS = `function maxArea(height) {
  // Write your code here
};`;

export const containerWithMostWater: Problem = {
    id: "container-with-most-water",
    title: "6. Container With Most Water",
    problemStatement: `<p class='mt-3'>
        You are given an integer array <code>height</code> where <code>height[i]</code> represents the height of a line at index <code>i</code>. 
        Find two lines that together with the x-axis form a container, such that the container contains the most water.
    </p>`,
    examples: [
        {
            id: 0,
            inputText: `height = [1,8,6,2,5,4,8,3,7]`,
            outputText: `49`,
            explanation: "The maximum area is obtained between the lines at index 1 and 8.",
        },
        {
            id: 1,
            inputText: `height = [1,1]`,
            outputText: `1`,
            explanation: "The maximum area is obtained between the only two lines.",
        },
    ],
    constraints: `<li class='mt-2'><code>2 <= height.length <= 10^5</code></li>
        <li class='mt-2'><code>0 <= height[i] <= 10^4</code></li>`,
    starterCode: starterCodeContainerWithMostWaterJS,
    handlerFunction: containerWithMostWaterHandler,
    starterFunctionName: "function maxArea(",
    order: 6,
};

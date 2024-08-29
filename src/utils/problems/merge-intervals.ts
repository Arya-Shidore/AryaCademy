import assert from "assert";
import { Problem } from "../types/problem";

export const mergeIntervalsHandler = (fn: any) => {
    try {
        const tests = [
            [[1,3],[2,6],[8,10],[15,18]],
            [[1,4],[4,5]],
            [[1,2],[3,5],[4,6]],
        ];
        const answers = [[[1,6],[8,10],[15,18]], [[1,5]], [[1,2],[3,6]]];
        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i]);
            assert.deepEqual(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log("Error from mergeIntervalsHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeMergeIntervalsJS = `function merge(intervals) {
  // Write your code here
};`;

export const mergeIntervals: Problem = {
    id: "merge-intervals",
    title: "7. Merge Intervals",
    problemStatement: `<p class='mt-3'>
        Given an array of intervals where <code>intervals[i] = [start_i, end_i]</code>, merge all overlapping intervals.
    </p>`,
    examples: [
        {
            id: 0,
            inputText: `intervals = [[1,3],[2,6],[8,10],[15,18]]`,
            outputText: `[[1,6],[8,10],[15,18]]`,
            explanation: "The intervals [1,3] and [2,6] merge into [1,6].",
        },
        {
            id: 1,
            inputText: `intervals = [[1,4],[4,5]]`,
            outputText: `[[1,5]]`,
            explanation: "The intervals [1,4] and [4,5] merge into [1,5].",
        },
    ],
    constraints: `<li class='mt-2'><code>1 <= intervals.length <= 10^4</code></li>
        <li class='mt-2'><code>intervals[i].length == 2</code></li>
        <li class='mt-2'><code>-10^4 <= start_i <= end_i <= 10^4</code></li>`,
    starterCode: starterCodeMergeIntervalsJS,
    handlerFunction: mergeIntervalsHandler,
    starterFunctionName: "function merge(",
    order: 7,
};

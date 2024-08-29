import assert from "assert";
import { Problem } from "../types/problem";

export const bestTimeToBuyAndSellStockHandler = (fn: any) => {
    try {
        const tests = [
            [7, 1, 5, 3, 6, 4],
            [7, 6, 4, 3, 1],
            [2, 4, 1],
        ];
        const answers = [5, 0, 2];
        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i]);
            assert.equal(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log("Error from bestTimeToBuyAndSellStockHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeBestTimeToBuyAndSellStockJS = `function maxProfit(prices) {
  // Write your code here
};`;

export const bestTimeToBuyAndSellStock: Problem = {
    id: "best-time-to-buy-and-sell-stock",
    title: "9. Best Time to Buy and Sell Stock",
    problemStatement: `<p class='mt-3'>
        You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
    </p>
    <p class='mt-3'>
        You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    </p>
    <p class='mt-3'>
        Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.
    </p>`,
    examples: [
        {
            id: 0,
            inputText: `prices = [7,1,5,3,6,4]`,
            outputText: `5`,
            explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
        },
        {
            id: 1,
            inputText: `prices = [7,6,4,3,1]`,
            outputText: `0`,
            explanation: "In this case, no transactions are done and the max profit = 0.",
        },
    ],
    constraints: `<li class='mt-2'><code>1 <= prices.length <= 10^5</code></li>
        <li class='mt-2'><code>0 <= prices[i] <= 10^4</code></li>`,
    starterCode: starterCodeBestTimeToBuyAndSellStockJS,
    handlerFunction: bestTimeToBuyAndSellStockHandler,
    starterFunctionName: "function maxProfit(",
    order: 9,
};

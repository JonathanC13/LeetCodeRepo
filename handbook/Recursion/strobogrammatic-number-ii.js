// https://leetcode.com/problems/strobogrammatic-number-ii/description/

/**
 * Problem:
Given an integer n, return all the strobogrammatic numbers that are of length = n. You may return the answer in any order.

Definitions & Explanation:
A strobogrammatic number is a number that looks the same when rotated 180 degrees (viewed upside down).

Examples of valid digit-rotations:

    0 ↔ 0

    1 ↔ 1

    8 ↔ 8

    6 ↔ 9

    9 ↔ 6 

    Digits like 2, 3, 4, 5, 7 don’t form valid strobogrammatic rotations in this context.

Important Note: Leading zeros are not allowed in the final result (except the number “0” itself when n = 1). 

Examples:
Example 1
    Input: n = 2
    Output: ["11","69","88","96"] 
    Leetcode
    +1

Example 2
    Input: n = 1
    Output: ["0","1","8"] 
    Medium
    +1

Constraints:
1. 1 ≤ n ≤ 14 (as per typical implementations) 
2. You must generate all possible numbers of length exactly n that satisfy the strobogrammatic property.
 * 
 */

/**
 * Recursive backtracking, get to the smallest subproblem which is the center of the strobogrammatic number and then build outward from the center.
 * 
 */

const strobo = (n, memo) => {

    const mapping = new Map([
        ["0", "0"],
        ["1", "1"],
        ["6", "9"],
        ["8", "8"],
        ["9", "6"]
    ])

    return rec(n, n, mapping, memo)
}

const rec = (end, n, mapping, memo) => {
    if (memo.has(n)) {
        console.log('hit')
        return memo[n]
    }
    if (n === 0) {
        return [""]
    }
    if (n === 1) {
        return ["0", "1", "8"]
    }

    const centers = rec(end, n-2, mapping, memo)
    const nums = new Array()
    // iterate the centers and create strobogrammatic numbers of length n at this recursive step
    for (let cen of centers) {
        for (let [k, v] of mapping) {
            if (n === end && k === "0") {
                continue
            }
            nums.push(k + cen + v)
        }
    }
    memo[n] = Array.from(nums)
    return nums

}

// not really memoization, but if running the problem multiple times it does reduce the time complexity by caching the previous solutions.
const memo = new Map()

const driver = (n) => {
    console.log(strobo(n, memo))
    return
}

driver(1)
driver(2)
driver(3)
driver(4)
driver(5)
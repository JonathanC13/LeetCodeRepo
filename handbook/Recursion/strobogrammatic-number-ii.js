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

1. Assumptions
    1. n >= 0

2. input validation
    n is a Number that is >= 0

3. time and space constraints
    BTTC: O(n * 5^((n/2)))  // 5 strob numbers to put on sides ^, since rec(n-2)
    Space: O(n * 5^((n/2))) // + stack which is O(n/2) ~= n

4. edge cases and some test cases
    edge cases
    1. n = 0
        res = [""]
    2. n = 1
        res = ["0", "1", "8"]
    some test cases
    1. n = 2
        expected output
            ["11", "69", "88", "96"]
    2. n = 3
        expected output
            [
            '101', '609', '808',
            '906', '111', '619',
            '818', '916', '181',
            '689', '888', '986'
            ]

5. visualize by drawing and manaully solve
6. break into subproblems
    To ensure a strobogrammatic number is being constructed, build the number from the center outward left and right
    recursive function
        base cases
        1. n === 0
            return [""]
        2. n === 1
            return ["0", "1", "8"]  // valid strobo numbers when n = 1

        centers = reduce the number of digits by -2 (left and right) until get to the base case centers of n = 0 or n = 1
        
        iterate the centers
            iterate the valid strobogrammatic number pairs
                if the outermost sides of a strobo number (end === n) AND key === '0'
                    continue

                newStrobos.push(key + center + val)

        return newStrobos   // return newly constructed strobo centers to recursive caller

7. algos
    1. recursive breakdown of problem

8. data structures
    1. recursive stack
    2. Arrays

9. complexity
    BTTC: O(n * 5^((n/2)))  // 5 strob numbers to put on sides ^, since rec(n-2)
    Space: O(n * 5^((n/2))) // + stack which is O(n/2) ~= n
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
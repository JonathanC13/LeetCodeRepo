// https://leetcode.com/problems/combinations/description/

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. Input validation
 *  1. Type: n and k typeof === 'Number'
 *  2. length: N/A
 *  3. content n and k are Numbers
 * 
 * 3. Time and space constraints
 *  BTTC: O(n * 2^k)    // for each value n has 2^k paths
 *  Space: O(k)
 * 
 * 4. Edge cases and some test cases
 *  Edge cases
 *  1. if n < 1: return []
 *  2. if k === 0: return []
 * 
 *  Test cases
 *  1.
 *      Inputs
 *          n = 3, k = 2
 *      Expected Output
 *          [[1, 3], [1, 2], [2, 3]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  For each value from [1, n], need to choose ahead values until the combination is size k
 * 
 *  Recursive backtracking to choose the next value in the combination
 * 
 *  Main
 *      global Array from result
 *      rec(
 *          n, k,
 *          i = 0,              // the start value to choose the next value in the combination
 *          new Array(),    // to hold the current combination
 *          res
 *          )
 * 
 *  rec(n, k, i, combo, res)
 *      base case 1: has met size k restriction
 *      if combo.length === k
 *          res.push(Array.from(combo))
 *          return
 * 
 *      base case 2: no more values to choose
 *      if i > n:
 *          return
 * 
 *      // can choose the value for the combination from i to = n
 *      for (let j = i; j <= n; j ++) {
 *          combo.push(j)
 *          rec(n, k, j + 1, combo, res)    // next i = j + 1 because need to choose a forward value
 *          combo.pop()
 *      }
 * 
 * 7. Algos
 *  - Recursive backtracking
 * 
 * 8. Data structures
 *  - recursive stack
 *  - Arrays
 * 
 * 9. Complexity
 *  Time: O(n * 2^k)
 *  Space: O(k)
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = new Array()
    // rec(n, k, 1, new Array(), res)
    recAlt(n, k, 1, new Array(), res)
    return res
};

const rec = (n, k, i, combo, res) => {
    if (combo.length === k) {
        res.push(Array.from(combo))
        return
    }

    if (i > n || combo.length > k) {
        return
    }

    // not use
    rec(n, k, i + 1, combo, res)

    // use
    combo.push(i)
    rec(n, k, i + 1, combo, res)
    combo.pop()

    return
}

const recAlt = (n, k, i, combo, res) => {
    if (combo.length === k) {
        res.push([...combo])
        return
    }
    if (combo.length > k) {
        return
    }

    for (let j = i; j <= n; j ++) {
        combo.push(j)
        recAlt(n, k, j + 1, combo, res)
        combo.pop()
    }

    return
}
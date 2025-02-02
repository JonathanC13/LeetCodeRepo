// https://leetcode.com/problems/combinations/

/*
ex. n = 4
arr bounds of [1, 4]

backtracking until the combination arr is length of k, then add to the result array and return.

2 options, include and exclude the current number

- Time: O(n * 2^n)
- Space: O(n)
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (n === 0) {
        return []
    }

    const res = []
    dfs(n, 1, k, res, [])
    return res
};

var dfs = function(n, i, k, res, combo) {
    if (combo.length === k) {
        res.push([...combo])
        return
    }
    if (i > n) {
        return
    }

    // include
    combo.push(i)
    dfs(n, i + 1, k, res, combo)
    combo.pop(i)

    // exclude
    dfs(n, i + 1, k, res, combo)

    return
}


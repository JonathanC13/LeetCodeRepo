// https://leetcode.com/problems/combinations/description/

/**
recursive backtracking

Time: O(n * 2^n)
Space: O(n)
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
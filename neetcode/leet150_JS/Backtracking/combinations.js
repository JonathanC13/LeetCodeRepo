// https://leetcode.com/problems/combinations/description/?envType=study-plan-v2&envId=top-interview-150

/*
recursive backtracking; maintain i for what number to start on to add to the combo
    base case 1: if combo.length >= k: 
        res.push([...combo])
        return
    
    iterate j from i to <= n:   // since [i, n]
        combo.push(j)
        dfs(j + 1, n, k, combo, res)
        combo.pop()

    return
*/

const dfs = function(i, n, k, combo, res) {
    if (combo.length >= k) {
        res.push([...combo])
        return
    }

    for (let j = i; j <= n; j ++) {
        combo.push(j)
        dfs(j + 1, n, k, combo, res)
        combo.pop()
    }

    return
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (k === 0 || n < 1) {
        return []
    }
    const res = new Array()
    dfs(1, n, k, new Array(), res)

    return res
};
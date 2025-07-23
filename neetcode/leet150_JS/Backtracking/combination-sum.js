// https://leetcode.com/problems/combination-sum/description/?envType=study-plan-v2&envId=top-interview-150

/*
recursive backtracking
    if (amount < 0) {
        return
    }
    if (amount === 0) {
        res.push([...combo])
        return
    }

    itearte j the candidates from i to < cand.length
        combo.push(cand[j])
        // continue combination with index j so that it guarentees the combinations in result are unqiue since always using the current number or forward therefore not repeating a previous combination
        dfs(candiates, target, j, combo, res)
        combo.pop()

- Time: O(n * !n)   // each n has !n options. !n since only can choose values >= of n's index therefore reducing the pool of options
- Space: O(n)
*/

const dfs = (candidates, target, i, combo, res) => {
    if (target < 0) {
        return
    }
    if (target === 0) {
        res.push([...combo])
        return
    }

    for (let j = i; j < candidates.length; j ++) {
        combo.push(candidates[j])
        dfs(candidates, target - candidates[j], j, combo, res)
        combo.pop()
    }

    return
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = new Array()
    dfs(candidates, target, 0, [], res)
    return res
};
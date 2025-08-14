// https://leetcode.com/problems/combination-sum/description/

/*
2 <= candidates[i] <= 40

recursive dfs backtracking:
**
currCombo: Array. to hold the current combination, 
combos: Array. for all the solution combinations
i: int. to start the candidates to be chosen from. To avoid duplicate combinations, the next value in the path will be i to end. If allowed to use values before i, a duplicate will be formed.
**

    base case 1: if target < 0
        // cannot continue since subtracting more will not create solution
        return
    base case 2: if target === 0
        combos.push([...currCombo])
        return

    iterate j in candidates from i to end   // since allowed to use a candidate an unlimited number of times
        currCombo.push(candidates[i])   // add candidtate to path
        dfs(...)
        currCombo.pop() // pop so that the next will be used.

    return

- Time: O(n^!n)
- Space: O(n)
*/

const dfs = function(candidates, target, i, currCombo, combos) {
    if (target < 0) {
        return
    }
    if (target === 0) {
        combos.push([...currCombo])
        return
    }

    for (let j = i; j < candidates.length; j ++) {
        currCombo.push(candidates[j])
        dfs(candidates, target - candidates[j], j, currCombo, combos)
        currCombo.pop()
    }
    return
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const combos = new Array()

    dfs(candidates, target, 0, new Array(), combos)
    return combos
};
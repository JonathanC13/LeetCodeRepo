// https://neetcode.io/problems/combination-target-sum-ii

/*
- edge case 1: if candidates.length === 0: return []

sort the candidates in asc order so that the duplicate values are next to eachother.
Can use backtracking to find the combinations, in the backtrack exclusion section for the next value, find the next distinct value that is not the current.

- Time: O(n * 2^n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        if (candidates.length === 0) {
            return []
        }
        
        const res = []
        candidates.sort((a, b) => a - b)
        this.dfs(candidates, 0, target, res, [])
        return res
    }

    dfs(candidates, i, target, res, combo) {
        if (target === 0) {
            res.push([...combo])
            return
        }
        if (target < 0 || i >= candidates.length) {
            return
        }

        // include, initial path will try to include all numbers
        combo.push(candidates[i])
        this.dfs(candidates, i + 1, target - candidates[i], res, combo)
        combo.pop()

        // on the backtrack, exclude this index but also move to the index that is not this number
        const thisNum = candidates[i]
        while (i < candidates.length && candidates[i] === thisNum) {
            i += 1
        }
        this.dfs(candidates, i, target, res, combo)

        return
    }
}

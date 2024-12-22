// https://neetcode.io/problems/combination-target-sum-ii

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

        candidates.sort((a, b) => {return a - b})
        const res = []
        const subset = []
        this.DFS(candidates, 0, subset, res, target)
        return res
    }

    DFS(candidates, i, subset, res, target) {
        if (target === 0) {
            res.push([...subset])
            return
        }

        if (i >= candidates.length || target < 0) {
            return
        }

        for (let j = i; j < candidates.length; j ++) {
            if (j > i && candidates[j] === candidates[j - 1]) {
                continue
            }

            subset.push(candidates[j])
            this.DFS(candidates, j + 1, subset, res, target - candidates[j])

            subset.pop()
        }
    }
}

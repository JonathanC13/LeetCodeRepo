// https://neetcode.io/problems/combination-target-sum-ii

/*
Now since it may contain duplicates, must handle different indexes.
Candidate only allowed to be chosen once.

Create a Set for the combos.
Sort the candidates in non descending order so that the duplicates are neighbors. This will create duplicate combos in consistent order to be able to not record them in the Set.

recursive backtrack to choose elements

convert the Set elements to arrays for the result.

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
        candidates.sort((a, b) => a - b)
        
        const combosSet = new Set()
        const combo = new Array()

        this.bt(candidates, 0, target, combosSet, combo)
        console.log(combosSet)
        return Array.from(combosSet, (elem) => elem.split(','))
    }

    bt(candidates, i, target, combosSet, combo) {
        if (target === 0) {
            combosSet.add(combo.join(','))
            return
        }
        if (i >= candidates.length || target < 0) {
            return
        }
        
        for (let m = i; m < candidates.length; m ++) {
            if (target - candidates[m] < 0) {
                return  // don't need to proceed since sorted in non-descending
            }
            combo.push(candidates[m])
            this.bt(candidates, m + 1, target - candidates[m], combosSet, combo)
            combo.pop()
        }

        return
    }

    dfs(candidates, target, i, cur, total) {
        if (total === target) {
            this.res.push([...cur]);
            return;
        }
        if (total > target || i === candidates.length) {
            return;
        }

        // 1. Attempt to use the current value at i
        cur.push(candidates[i]);
        this.dfs(candidates, target, i + 1, cur, total + candidates[i]);
        cur.pop();

        // since sorted, and #1 has completed, can move i while next value is the same as current.
        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
            i++;
        }
        // 2. i + 1 to go to the next value which is not a dup value of the current
        this.dfs(candidates, target, i + 1, cur, total);
    }
}

// https://neetcode.io/problems/permutations

/*
- edge case 1: if nums.length === 0: return []

use recursive backtracking to determine the combinations.
Use a visited array to mark which indexes already used.

each recursive call
    - base case 1: if combo.length === nums.length: res.push([...combo])

    visited[i] = true   // mark this index as used

    // at each index, it has a loop to choose the next index to use.
    for (let i = 0; i < nums.length; i ++) {
        if (!visited[i]) {    
            combo.push(nums[i])
            rec(with i)
            combo.pop()
        }
    }

    visited[i] = false  // unmark so next ath can use

    return

- Time: O(n! * n^2). n! because n has n -1 choices. n^2 because need to iterate n, n times.
- Space: O(n)

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if (nums.length === 0) {
            return []
        }

        const res = []
        const visited = new Array(nums.length).fill(false)
        this.dfs(nums, 0, res, [], visited)
        return res
    }

    dfs(nums, i, res, combo, visited) {
        console.log(combo)
        if (combo.length === nums.length) {
            res.push([...combo])
            return
        }

        for (let j = 0; j < nums.length; j ++) {
            if (!visited[j]) {
                visited[j] = true
                combo.push(nums[j])
                this.dfs(nums, j, res, combo, visited)
                combo.pop()
                visited[j] = false
            }
        }
        
        return
    }
}

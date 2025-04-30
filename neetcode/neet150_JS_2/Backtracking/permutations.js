// https://neetcode.io/problems/permutations

/*

Use an Array to track which index has been used in the current permutation

recursive backtracking
    base case 1: 
        if perm.length === nums.length  // since permutation uses all values
            res.push([...perm])
            return

    // since it always starts at 0 it will pick the first available and then on backtack continue forward.
    iterate the Used Array from 0 to len
        if not used,
            push into perm
            this.recur
            pop()

    return

- Time: O(!n * n)   // 5 options * 4 options * 3 options etc for each n
- Space: O(!n * n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = new Array()
        const perm = new Array()
        const visited = new Array(nums.length).fill(false)

        this.bt(nums, perm, visited, res)
        return res
    }

    bt(nums, perm, visited, res) {
        if (perm.length === nums.length) {
            res.push([...perm])
            return
        }

        for (let i = 0; i < visited.length; i ++) {
            if (!visited[i]) {
                visited[i] = true
                perm.push(nums[i])
                this.bt(nums, perm, visited, res)
                perm.pop()
                visited[i] = false
            }
        }

        return
    }
}

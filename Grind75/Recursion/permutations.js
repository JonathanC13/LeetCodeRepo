// https://leetcode.com/problems/permutations/

/**
recursive backtracking

main
    res = new Array()
    create a visited Array of length nums.length fill with false

    dfs(nums, new Array(), visited, res)

    return res

* {number[]} nums
* {number[]} currPerm
* {bool[]} visited  // to ensure same index value not used again
* {number[][]} res
dfs
    base case 1: 
    if currPerm.length === nums.length
        // permutation complete
        res.push(Array.from(currPerm))
        return

    iterate i in nums from 0 to nums.length
        if (visited[i] === false) {
            // can use in permutation
            visited[i] = true
            currPerm.push(nums[i])
            dfs(...)    // continue with this added to the perm

            // afterward, remove it for the next perm
            currPerm.pop()
            visited[i] = false
        }

    return

- Time: O(!n * n)  // each n level has reducing options since used will restrict the paths.
- Space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = new Array()
    const visited = new Array(nums.length).fill(false)

    dfs(nums, new Array(), visited, res)
    return res
};

const dfs = (nums, currPerm, visited, res) => {
    if (currPerm.length === nums.length) {
        res.push(Array.from(currPerm))
        return
    }

    for (let i = 0; i < nums.length; i ++) {
        if (visited[i] === false) {
            visited[i] = true
            currPerm.push(nums[i])
            dfs(nums, currPerm, visited, res)
            currPerm.pop()
            visited[i] = false
        }
    }

    return
}
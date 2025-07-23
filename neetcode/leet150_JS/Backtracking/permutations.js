// https://leetcode.com/problems/permutations/description/?envType=study-plan-v2&envId=top-interview-150

/*
// permutations:
    1. Use all values
    2. unique order

Constraints:
    1. All the integers in Array nums are unqiue. But if not unqiue, can store the string representation into a Set so that the duplicates are not added and then convert back to Arrays after.
    

--
main
    create an Array of length nums.length to track if that index has been used.

recursive backtracking
    base case 1: if perm.length === nums.length: res.push([...perm]); return

    iterate the nums
        if index already used indicated by used[i] === true
            continue

        used[i] = true
        call next recursive step to use nums[i] in path and continue to next
        used[i] = false

- Time: O(!n * n)  // each n level has reducing options since used will restrict the paths.
- Space: O(n)

*/

const dfs = function(nums, used, perm, res) {
    if (perm.length === nums.length) {
        res.push([...perm])
        return
    }

    for (let i = 0; i < nums.length; i ++) {
        if (used[i] === true) {
            continue
        }

        used[i] = true
        perm.push(nums[i])
        dfs(nums, used, perm, res)
        perm.pop()
        used[i] = false
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) {
        return []
    }

    const used = new Array(nums.length).fill(false)
    const res = new Array()
    dfs(nums, used, [], res)
    return res
};
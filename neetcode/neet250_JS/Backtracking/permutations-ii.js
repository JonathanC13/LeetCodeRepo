// https://leetcode.com/problems/permutations-ii/

-- come back later

/*
Another array that may contain duplicates and the permutation does not have to maintain order relative to the input array. So can sort.
In permutation all values must be used.

dfs
    if (i >= nums.length) 
        add perm to res
        return
    
    for (let j = 0; j < nums.length; j ++) {
        if (!used[j] && (j === 0 || j > 0 && nums[j-1] === nums[j] && used[j-1])) {
            mark this idx.
            perm.push(val)

            dfs(nums, visited)

            perm.pop()
            unmark this idx
        }
    }

    return

- Time: O(n! * n)
- Space: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
};
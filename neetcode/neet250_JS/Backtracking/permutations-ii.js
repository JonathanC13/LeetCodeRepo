// https://leetcode.com/problems/permutations-ii/

/*
Another array that may contain duplicates and the permutation does not have to maintain order relative to the input array. So can sort.
In permutation all values must be used.

dfs
    if (i >= nums.length) 
        add perm to res
        return
    
    for (let j = 0; j < nums.length; j ++) {
        if (!used[j] && (j === 0 || j > 0 && (nums[j - 1] !== nums[j] || nums[j - 1] === nums[j] && used[j - 1])))
            // since sorted, we check if the previous value is duplicate and if yes check if used. If used it means that we are going depth direction. Once in backtracking, it will not use it.
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
    nums.sort((a, b) => {return a - b})
    const res = []
    const used = new Array(nums.length).fill(false)
    dfs(nums, 0, res, [], used)
    return res
};

var dfs = function(nums, i, res, perm, used) {
    if (i >= nums.length) {
        res.push([...perm])
        return
    }

    for (let j = 0; j < nums.length; j ++) {
        if (used[j] || j > 0 && nums[j - 1] === nums[j] && used[j - 1]) {
            continue
        }

        perm.push(nums[j])
        used[j] = true
        dfs(nums, i + 1, res, perm, used)
        perm.pop()
        used[j] = false
    }

    return
    
}
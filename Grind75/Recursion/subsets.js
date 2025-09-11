// https://leetcode.com/problems/subsets/description/

/**
recursive backtracking

main
    res = new Array()

    dfs(nums, 0, new Array(), res)
    return res

* {number[]} nums
* {number} i    // to ensure unique subset since it will choose from values from index forward
* {number[]} currSubset
* {number[]} res
dfs
    base case 1:
    if (i === nums.length) {
        // no more values to choose
        res.push(Array.from(currSubset))
        return
    }

    // 2 choices, exclude from the subset or include
    // exlude
    dfs(nums, i + 1, currSubset, res)

    // include
    currSubset.push(nums[j])
    dfs(nums, i + 1, currSubset, res)
    currSubset.pop()

- Time: O(n * 2^n). // each n has the will either include or exluce the values ahead of it.
- Space: O(n)

If the nums are not unqiue
    1. can sort the nums in non-descending order
    2. Maintain a Set where the values are the String representation of the subsets, there when adding a currSubset to the res check if it already exists in the Set.

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = new Array()
    dfs(nums, 0, new Array(), res)
    return res
};

const dfs = function(nums, i, currSubset, res) {
    if (i === nums.length) {
        res.push(Array.from(currSubset))
        return
    }

    dfs(nums, i + 1, currSubset, res)

    
    currSubset.push(nums[i])
    dfs(nums, i + 1, currSubset, res)
    currSubset.pop()

    return
}
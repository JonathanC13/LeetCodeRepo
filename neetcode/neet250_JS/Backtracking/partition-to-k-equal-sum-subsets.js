// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/

/*
- edge case 1: if nums.length === 0: return false

iterate the nums and get the total

if (sum % k !== 0) {return false}   // since it will not be possible to create k subsets that have equal sums

target = sum % k

sort the nums in non-ascending order so that the larger numbers are placed first, this is so when backtracking the smallest numbers are adjusted into different groups first.

const res = []  // where element is [sum, [elems]]

call recursive function to check if possible. 
    Maintain index for the current number in nums that is being placed in one of the groups

return bool

* rec(nums, i, k, res, target)
    - base case 1: 
    if i >= nums
        iterate the res and if all sums are the same return true
        else return false

    iterate 0 to k to try to put the current value into the group
        if (res[j][0] + nums[i] < target) {
            res[j][0] += nums[i]
            res[j][1].push(nums[i])

            if (this.rec(nums, i + 1, k, res, target)) {
                return true
            }

            res[j][0] -= nums[i]
            res[j][1].pop()
        }

    return false

- Time: O(n * k^n). n nums * k groups ^ n
- Space: O(n)

TLE

Yuvaraj soln to TLE

# Important line, otherwise function will give TLE
if subSets[j] == 0:
    break

"""
Explanation:
If subSets[j] = 0, it means this is the first time adding values to that subset.
If the backtrack search fails when adding the values to subSets[j] and subSets[j] remains 0, it will also fail for all subSets from subSets[j+1:]. **This is because the target is the same for each group**
Because we are simply going through the previous recursive tree again for a different j+1 position.
So we can effectively break from the for loop or directly return False.
"""

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    if (nums.length === 0) {
        return false
    }

    let target = 0
    for (let i = 0; i < nums.length; i ++) {
        target += nums[i]
    }
    if (target % k !== 0) {
        return false
    }
    
    target /= k
    nums.sort((a, b) => {return b - a})
    const res = new Array(k).fill().map((e) => {return [0, new Array()]})
    
    const ret = dfs(nums, 0, k, res, target)

    console.log(res)
    return ret
};

var dfs = function(nums, i, k, res, target) {
    if (i >= nums.length) {
        for (let j = 0; j < res.length; j ++) {
            if (res[j][0] !== target) {
                return false
            }
        }
        return true
    }

    for (let j = 0; j < k; j ++) {
        if (res[j][0] + nums[i] <= target) {
            res[j][0] += nums[i]
            res[j][1].push(nums[i])

            if (dfs(nums, i + 1, k, res, target)) {
                return true
            }

            res[j][1].pop()
            res[j][0] -= nums[i]

            if (res[j][0] === 0) {
                break
            }
        }
    }

    return false
}
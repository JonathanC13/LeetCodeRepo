// https://leetcode.com/problems/partition-equal-subset-sum/description/

/**
main
    totalSum = iterate nums for the sum
    if totalSum is odd
        return false, since impossible to split into 2 equal subset Arrays

    create memo = 2D array
        rows: indexes of nums
        cols: length target + 1
        * each cell represents if can get the target when get to the index (row) and have the currSum (col)

    rec(nums, 0, currSum, totalSum/2, memo)

rec
    base case 1:
    if (currSum === target) {
        return true
    }

    base case 2:
    if currSum > target || i >= nums.length
        return false

    base case 3
    if memo[currSum] !== null
        return memo[currSum]

    const notUsed = rec(nums, i + 1, currSum, target, memo)
    if (notUsed === true) {
        return true
    }
    const used = rec(nums, i + 1, currSum + nums[i], target, memo)
    if (used === true) {
        return true
    }

    memo[currSum] = notUsed || used // from this currSum could not find other values to get to target.
    return memo[currSum]

- Time: O(n * target)    // n = nums.length   // without memo O(n * 2^n)  //need to choose if use values or not
- Space: O(n * target)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let totalSum = 0
    for (let i = 0; i < nums.length; i ++) {
        totalSum += nums[i]
    }
    if (totalSum % 2 === 1) {
        return false
    }
    const target = totalSum/2
    // console.log(target)

    const memo = new Array(nums.length).fill().map((e) => new Array(target + 1).fill(null))

    const res = rec(nums, 0, 0, [], target, memo)
    // console.log(memo)

    return res
};

const rec = function(nums, i, currSum, path, target, memo) {
    if (currSum === target) {
        console.log(path)
        return true
    }
    if (currSum > target || i >= nums.length) {
        return false
    }
    if (memo[i][currSum] !== null) {
        // console.log('hit')
        return memo[i][currSum]
    }

    const notUsed = rec(nums, i + 1, currSum, path, target, memo)
    if (notUsed === true) {
        memo[i][currSum] = notUsed
        return true
    }
    path.push(nums[i])
    const used = rec(nums, i + 1, currSum + nums[i], path, target, memo)
    path.pop()
    if (used === true) {
        memo[i][currSum] = used
        return true
    }

    memo[i][currSum] = notUsed || used
    return memo[i][currSum]
}
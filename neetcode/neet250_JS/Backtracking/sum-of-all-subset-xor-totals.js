https://leetcode.com/problems/sum-of-all-subset-xor-totals/

/*
- edge case 1: if nums.length === 0 {
    return 0
}

recursive
dfs(nums, i, subSetXOR) {
    if (i >= nums.length) {
        return subSetSum
    }

    let sum = 0
    2 options, include the current value at index i or exclude itself
    1. include
    sum += this.dfs(nums, i + 1, subSetXOR ^ nums[i])

    2. exclude
    sum += this.dfs(nums, i + 1, subSetXOR)

    return sum
}

- Time: O(n * 2^n). for each number, 2 paths
- Space: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    return dfs(nums, 0, 0)
};

const dfs = (nums, i, subsetXOR) => {
    if (i >= nums.length) {
        return subsetXOR
    }

    let sum = 0
    sum += dfs(nums, i + 1, subsetXOR ^ nums[i])

    sum += dfs(nums, i + 1, subsetXOR)

    return sum
}
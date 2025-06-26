// https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150

/*
backtracking dfs
    base case 1: if i >= nums.lenegth - 1 {return 0}

    minJumps = POS INFIN

    for (j = nums[i]; j >= 0; j --) {
        minJumps = min(minJumps, dfs(nums, i + j) + 1)  // + 1 for this jump
    }

    return minJumps

- Time: O(n^2)
- Space: O(n)

* reduce time complexity with dp memo
memo = new Array(nums.length).fill(-1)
- Time: O(n)
- Space: O(n)


* Greedy linear
track: 
    jumpRangeEnd = 0    // for the range from i to max jump from i
    furthestJump = 0    // this is the max jump of any index within i to jumpRangeEnd
iterate from beginning
    furthest = max(furthest, i + nums[i])
    if (i === jumpRangeEnd) // if i reaches end of range, all jumps within have been evaluated meaning a new jump will now occur and start
        jumps += 1
        jumpRangeEnd = furthestJump

return jumpsRangeEnd >= nums.length - 1 ? jumps : -1

- Time: O(n)
- Space: O(1)
*/

const dfs = (nums, i, memo) => {
    if (i >= nums.length - 1) {
        return 0
    }
    if (memo[i] !== -1) {
        return memo[i]
    }

    let minJumps = Number.POSITIVE_INFINITY
    for (let j = nums[i]; j > 0; j --) {
        minJumps = Math.min(minJumps, dfs(nums, i + j, memo) + 1)
    }
    memo[i] = minJumps
    return minJumps
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // const n = nums.length
    // const memo = new Array(n).fill(-1)

    // return dfs(nums, 0, memo)

    // Greedy linear
    let jumpsRangeEnd = 0
    let furthestJump = 0
    let jumps = 0
    for (let i = 0; i < nums.length - 1; i ++) {
        furthestJump = Math.max(furthestJump, i + nums[i])
        if (i === jumpsRangeEnd) {
            jumps += 1
            jumpsRangeEnd = furthestJump
        }
    }

    return jumpsRangeEnd >= nums.length - 1 ? jumps : -1
};
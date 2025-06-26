// https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150

/*
greedy.

goal = nums.length - 1
iterate from last index
    if (this index + max jump >= curr goal)
        update goal = i .Since from this i the goal can be reached, update it so that the next jump only needs to meet the new goal to be able to reach the end.
    // else false, 

return goal === 0   // if goal is 0 it means that 0 has a jump <= num[i] that reaches a goal that can get to the end

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) {
        return true
    }

    let goal = nums.length - 1
    for (let i = nums.length - 2; i >= 0; i --) {
        if (i + nums[i] >= goal) {
            goal = i
        }
    }

    return goal === 0
};
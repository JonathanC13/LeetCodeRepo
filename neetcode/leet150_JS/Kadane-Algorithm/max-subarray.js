// https://leetcode.com/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-interview-150

/*
edge case if nums.length === 0: return 0

create var to record max sum seen, init to nums[0]
create var to record sum of the current window, init to 0

iterate the nums
    currSum = currSum + nums[i]
    maxSum = max(maxSum, currSum)

    if (currSum < 0) 
        currSum = 0 // this is because having a negative number does not positively contribute to the search for max sum, by setting to 0 it removes this index and all before it from the subarray (window)

return maxSum

- Time: O(n)
- Space: O(1)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0
    }

    let maxSum = nums[0]
    let currSum = 0
    let wind = [0,0]
    let l = 0
    for (let i = 0; i < nums.length; i ++) {
        currSum = currSum + nums[i]
        //maxSum = Math.max(maxSum, currSum)
        if (currSum > maxSum) {
            wind = [l, i]
            maxSum = currSum
        }
        if (currSum < 0) {
            currSum = 0
            l = i + 1
        }
    }
    console.log(wind)
    return maxSum
};
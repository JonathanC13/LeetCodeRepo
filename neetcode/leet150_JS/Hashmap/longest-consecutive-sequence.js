// https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150

/*
O(n) Time, so one pass

create a Map to store the seen values
    key: value
    val: the longest streak it connects to

iterate the nums
    insert into the Map where the value checks if this number extends any exsisting streak
        val = nums[i] - 1 streak + nums[i] + 1 streak + itself 1

    longest = max(longest, Map.get(nums[i]))

    update the ends of the streak this number contributed to
    to get lower end, key = nums[i] - nums[i] - 1 streak. e.g. 2: 2. ins 3. therefore 3 - 2 = 1. update key 1
    to get upper end, key = nums[i] + nums[i] + 1 streak

return longest

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length < 2) {
        return nums.length
    }

    let longest = 0

    const consecMap = new Map()

    for (let i = 0; i < nums.length; i ++) {
        if (consecMap.has(nums[i])) {
            continue
        }
        consecMap.set(nums[i], (consecMap.get(nums[i] - 1) || 0) + (consecMap.get(nums[i] + 1) || 0) + 1)
        longest = Math.max(longest, consecMap.get(nums[i]))

        consecMap.set(nums[i] - (consecMap.get(nums[i] - 1) || 0), consecMap.get(nums[i])) 
        consecMap.set(nums[i] + (consecMap.get(nums[i] + 1) || 0), consecMap.get(nums[i])) 
    }

    return longest
};
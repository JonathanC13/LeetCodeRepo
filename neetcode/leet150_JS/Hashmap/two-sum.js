// https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150

/*
// could sort them and keep the index then use 2 pointers to find the solution.

// In this category, use a Map

create a Map
    key: difference need to be compatible with the value at index
    val: the index

iterate nums
    if Map has nums[i]
        return [map.get(nums[i]), i]
    else
        diff = target - nums[i]
        Map.set(diff, i)

return [-1, -1]

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length < 2) {
        return [-1, -1]
    }

    const dMap = new Map()
    for (let i = 0; i < nums.length; i ++) {
        if (dMap.has(nums[i])) {
            return [dMap.get(nums[i]), i]
        } else {
            const diff = target - nums[i]
            dMap.set(diff, i)
        }
    }
    return [-1, -1]
};
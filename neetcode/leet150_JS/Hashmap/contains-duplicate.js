// https://leetcode.com/problems/contains-duplicate-ii/?envType=study-plan-v2&envId=top-interview-150

/*
create a Map
    key: val
    val: last seen index

iterate nums
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
        return true
    }

    map.set(nums[i], i)

return false

- Time: O(n)
- Space: O(n)
    
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const nMap = new Map()

    for (let i = 0; i < nums.length; i ++) {
        if (nMap.has(nums[i]) && i - nMap.get(nums[i]) <= k) {
            return true
        }

        nMap.set(nums[i], i)
    }

    return false
};
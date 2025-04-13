// https://neetcode.io/problems/two-integer-sum

/*
edge case 1: if nums.length < 2: return []

create a Map
    key: difference of target - num, which is the complement number to get to target
    val: the index of num

iterate the nums

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length < 2) {
            return []
        }

        const map = new Map()

        for (let i = 0; i < nums.length; i ++) {
            
            if (map.get(nums[i]) !== undefined) {
                return [map.get(nums[i]), i]
            }
            const diff = target - nums[i]
            map.set(diff, i)
        }
        console.log(map)

        return []
    }
}

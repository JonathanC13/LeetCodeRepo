// https://neetcode.io/problems/two-integer-sum

/*
- edge case 1: if nums.length < 2: return []

Maintain a Map that has the key = number needed to add to get target (target - curr num) and value is the index of curr num

iterate the nums
    
    if (Map has the curr num, it means that a prev num needs this one to get to target)
        return [Map.get(curr num), i]
    else
        diff = target - curr num
        Map.set(diff, i)

return []

Time: O(n)
Space: O(n)
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

        const diffs = new Map()

        for (let i = 0; i < nums.length; i ++) {
            if (diffs.has(nums[i])) {
                return [diffs.get(nums[i]), i]
            } else {
                diffs.set(target - nums[i], i)
            }
        }

        return []
    }
}

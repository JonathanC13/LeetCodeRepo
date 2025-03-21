// https://neetcode.io/problems/two-integer-sum

/*
edge case 1; if nums.length < 2: return []

create a Map to hold the k-v pair of:
    key = difference needed to reach target
    val = the index of the value that needs the difference

iterate the nums
    if (nums[i] exists in Map) {
        // an existing value requires this nums[i] to reach target
        return [Map.get(nums[i]), i]   // since iterating smallest index up, the already existing k-v in Map is the smaller index
    } else {
        get the difference needed to target; diff = target - nums[i]
        add diff, i to Map
    }

return []

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

        const diffs = new Map()
        for (let i = 0; i < nums.length; i ++) {
            if (diffs.get(nums[i]) !== undefined) {
                return [diffs.get(nums[i]), i]
            } else {
                diffs.set(target - nums[i], i)
            }
        }
        
        return []
    }
}

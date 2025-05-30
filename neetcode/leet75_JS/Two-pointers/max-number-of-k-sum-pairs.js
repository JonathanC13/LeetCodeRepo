// https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75

/*
edge case 1: if nums.length < 2: return 0

create a Map 
    key: difference. k - num value
    value: array of indexes that the difference would satisfy to k

iterate nums
    if (map.has(nums[i]) && map.get(nums[i]).length > 0) {
        pairs += 1
        pairArr.push([nums[map.get(nums[i]).pop()], nums[i]])

    } else {
        diff = k - nums[i]
        if (!map.has(diff)) {
            map.set(diff, new Array())
        }
        map.get(diff).push(i)
    }

return pairs

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    if (nums.length < 2) {
        return 0
    }
    const map = new Map()
    const pairsArr = new Array()
    let pairs = 0

    for (let i = 0; i < nums.length; i ++) {
        if (map.has(nums[i]) && map.get(nums[i]).length > 0) {
            pairs += 1
            pairsArr.push([nums[map.get(nums[i]).pop()], nums[i]])
        } else {
            const diff = k - nums[i]
            if (!map.has(diff)) {
                map.set(diff, new Array())
            }
            map.get(diff).push(i)
        }
    }

    console.log(pairsArr)
    return pairs
};
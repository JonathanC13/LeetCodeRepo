// https://leetcode.com/problems/two-sum/description/

/*
* Naive method:
iterate i in nums
    iterate j in nums
        if nums[i] + nums[j] === target
            return [i, j]

- Time: O(n^2)
- Space: O(1)

* Map method
create a Map for:
    key: the diff needed for the index to equal the target
    val: the index of the number that needs the diff

iterate i in nums
    if (Map has nums[i]):
        the combination found
        return [Map.get(nums[i]), i]
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

    const diffMap = new Map()
    for (let i = 0; i < nums.length; i ++) {
        if (diffMap.has(nums[i])) {
            return [diffMap.get(nums[i]), i]
        } else {
            diffMap.set(target - nums[i], i)
        }
    }

    return [-1, -1]
};
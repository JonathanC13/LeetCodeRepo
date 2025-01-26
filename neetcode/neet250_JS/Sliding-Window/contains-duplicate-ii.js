// https://leetcode.com/problems/contains-duplicate-ii/

/*
abs(i - j) <= k just means the i and k are <= k apart

left pointer interating from left
    right pointer only checks elements that are <= left + k

Time: O(n)
Space: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if (nums.length === 0) {
        return false
    }

    const windowSet = new Set()

    const windowEnd = k >= nums.length ? nums.length - 1 : k

    // first window
    let i = 0
    for (i; i <= windowEnd; i ++) {
        if (windowSet.has(nums[i])) {
            return true
        }
        windowSet.add(nums[i])
    }
    
    // slide the window
    for (let right = i; right < nums.length; right ++) {
        windowSet.delete(nums[right - k - 1])

        if (windowSet.has(nums[right])) {
            return true
        }
        windowSet.add(nums[right])
    }

    return false
};
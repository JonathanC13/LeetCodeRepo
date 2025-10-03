// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
1. Assumptions
    None

2. Validate input
    - Length: if input.length === 0: return 0
    - Content: Stated all the values are positive integers. Don't need to validate.

3. Constaints?
    - Time: O(n) since can be completed in one-pass

4. Algorithm
    - Since determining subarray size, use sliding window to maintain the contiguous window

5. Data structures to be used
    - No additional, the min size can be stored in a variable

6. Edge cases
    - None

7. Some test cases.
    1. nums = [], target = 1
    2. nums = [2], target = 3
    3. nums = [2, 3, 2], target = 3

8. Complexity:
    - Time: O(n)
    - Space: O(1)
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if (nums.length === 0) {
        return 0
    }

    let minSize = Number.POSITIVE_INFINITY
    let l = 0

    for (let r = l; r < nums.length; r ++) {
        // apply the new value at r to the target.
        target -= nums[r]

        // once the window has satisfied the conditon of the sum >= target, reduce the window until not valid.
        while (l <= r && target <= 0) {
            // evaluate window for minSize
            minSize = Math.min(minSize, r - l + 1)

            // move l forward to remove the value from the window
            target += nums[l]
            l += 1
        }
    }

    return minSize === Number.POSITIVE_INFINITY ? 0 : minSize
};
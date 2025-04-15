// https://neetcode.io/problems/two-integer-sum-ii

/*
two pointers
    first at start
    second at end

if the sum of nums[l] + nums[r]:
    === target, return 1-indexed
    > target, then need a smaller positive. Move r -= 1
    < target, then need a smaller negative. Move l += 1

- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0
        let r = numbers.length - 1

        while (l < r) {
            let sum = numbers[l] + numbers[r]

            if (sum === target) {
                return [l + 1, r + 1]
            } else if (sum > target) {
                r -= 1
            } else {
                l += 1
            }
        }

        return []
    }
}

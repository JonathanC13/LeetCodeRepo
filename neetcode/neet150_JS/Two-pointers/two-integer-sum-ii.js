// https://neetcode.io/problems/two-integer-sum-ii

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (numbers.length < 2) {
            return []
        }

        let l = 0
        let r = numbers.length -1

        while (l < r) {
            const sum = numbers[l] + numbers[r]

            if (sum === target) {
                return [l + 1, r + 1]
            } else if (sum < target) {
                l += 1
            } else {
                r -= 1
            }
        }

        return []
    }
}

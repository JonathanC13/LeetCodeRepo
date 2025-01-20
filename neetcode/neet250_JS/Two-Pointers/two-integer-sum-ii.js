// https://neetcode.io/problems/two-integer-sum-ii

/*
left = 0
right = numbers.length - 1

while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum < target) {
        // need more positive
        left += 1
    } else if (sum > target)
        // need less positive
        right -= 1
    else
        // equal
        return [left + 1, right + 1]
}

return []

- Time: O(n). n/2
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length - 1

        while (left < right) {
            const sum = numbers[left] + numbers[right]
            if (sum < target) {
                // need more positive
                left += 1
            } else if (sum > target) {
                // need less positive
                right -= 1
            } else {
                // equal
                return [left + 1, right + 1]
            }
        }

        return []
    }
}

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150

/*
one pointer at the beginning
one pointer at the end

while l < r
    sum = numbers[l] + numbers[j]

    if (sum === target) {
        return [l + 1, r + 1]
    } else if (sum > target) {
        // need to reduce the sum, since sorted in non-descending move r -= 1
        r -= 1
    } else {
        l += 1
    }

return [0, 0]

- Time: O(numbers.length)
- Space: O(1)
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if (numbers.length < 2) {
        return [0, 0]
    }

    let l = 0
    let r = numbers.length - 1

    while (l < r) {
        const sum = numbers[l] + numbers[r]

        if (sum > target) {
            r -= 1
        } else if (sum < target) {
            l += 1
        } else {
            return [l + 1, r + 1]
        }
    }

    return [0, 0]
};
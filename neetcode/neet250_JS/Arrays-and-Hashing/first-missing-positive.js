// https://leetcode.com/problems/first-missing-positive/description/
// TODO
/*
Non-constant space
    create a Set

    iterate the nums and add into the Set

    let i = 1
    while (true) {
        if (!set.has(i)) {
            return i
        }
        i += 1
    }

    - Time: O(n)
    - Space: O(n)

Constant space
    iterate the nums
        find the min that is not <= 0

       
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const max = 0

    const nonConstantSpace = () => {
        const set = new Set()

        for (let i = 0; i < nums.length; i ++) {
            set.add(nums[i])
        }

        let i = 1
        while (true) {
            if (!set.has(i)) {
                return i
            }
            i += 1
        }
    }

    return nonConstantSpace()
};
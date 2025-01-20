// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/*
left = 1    // position to insert the new unique element
right = 1   // find element that is not equal to left - 1. The most recent unique element

while (right < nums.length)
    while (nums[left - 1] === nums[right])
        right += 1

    swap nums[left] and nums[right]
    left += 1
    right += 1

return left // since no more elements to find and left is the last position a unique element could have been placed, since 0 indexed it is the number of unqiue elements

- Time: O(n)
- Space: O(1)
}
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 1

    for (let right = 1; right < nums.length; right ++) {
        if (nums[left - 1] !== nums[right]) {
            nums[left] = nums[right]
            left += 1
        }
    }

    return left
};
// https://leetcode.com/problems/sort-colors/description/

/**
red pointer at 0
white pointer at 0
blue pointer at end - 1
these are the swap indexes for the colors when encountered.

// white will only move when boundary is pushed from swapping in red or white
// this is because after swap with blue, need to take another loop at same index to see where to swap incoming.
while (w <= b)
    if (nums[w] === 0) {
        swap nums[w] with nums[r]
        r += 1
        w += 1
        
    } else white
        w + 1
    else
        swap with nums[b]
        b -= 1


- Time: O(n)
- Space: O(1)
 */

const swap = (arr, a, b) => {
    const tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let r = 0
    let w = 0
    let b = nums.length - 1
    while (w <= b) {
        if (nums[w] === 0) {
            swap(nums, w, r)
            r += 1
            w += 1
        } else if (nums[w] === 1) {
            w += 1
        } else {
            swap(nums, w, b)
            b -= 1
        }
    }
};
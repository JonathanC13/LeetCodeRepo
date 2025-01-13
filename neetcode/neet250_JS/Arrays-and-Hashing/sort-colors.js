// https://leetcode.com/problems/sort-colors/

/*
One pass, in-place
white ptr = 0
red ptr = 0
blur ptr = nums.length - 1

red ptr is the index to put the reds
blue ptr is the index to put the blues
white ptr is the current index being evaluted

while (white <= blue) {
    if (nums[white] === 0) {
        swap val at red and white ptr
        red += 1
        white += 1
    } else if (nums[white] === 1) {
        white += 1
    } else {
        swap val at white and blue
        blue -= 1
    }
}

Time: O(n)
Space: O(1)
*/

var swap = function(nums, a, b) {
    const tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
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
            w += 1
            r += 1 
        } else if (nums[w] === 1) {
            w += 1
        } else {
            swap(nums, w, b)
            b -= 1
        }
    }
};
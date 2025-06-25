// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

/*
* brute
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    const rotated = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }    
};

reversing an array doesn't change the continuous of an array. (for example: [a, b, c, d] -> [d, c, b, a]. we did't change the neighbor of each element during the reverser process. before we reverse, b is next to a and c, after reverse b is still next to a and c.)
though reversing doesn't change the neighbor inside an array, but it can change the neighbor of an element which is on the edge of an array.
if we reverse [2,3,4,5] in [1,2,3,4,5,6]. aka, [1, 2,3,4,5, 6] -> [1, 5,4,3,2, 6]
Before reversing:
The neighbor of [2] is: [1],[3]
The neighbor of [5] is: [4],[6]
After reversing:
The neighbor of [2] is: [3],[6]
The neighbor of [5] is: [1],[4]
[1] and [6] are switch between element [2] and [5].
We can use reversing as a trick to split subarrays and rearrange their neighbors.

- Time: O(n)
- Space: O(1)
*/

const rev = (nums, l, r) => {
    let tmp = 0
    while (l < r) {
        tmp = nums[l]
        nums[l] = nums[r]
        nums[r] = tmp
        l += 1
        r -= 1
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    rev(nums, 0, nums.length - k - 1)
    rev(nums, nums.length - k, nums.length - 1)
    rev(nums, 0, nums.length - 1)
};
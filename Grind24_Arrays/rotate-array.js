// https://leetcode.com/problems/rotate-array/description/

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
// Time: O(k * n/k)
// Space: O(n)



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

To find the index to partition: nums.length - k - 1


[1,2,3,4,5,6,7]
[4,3,2,1,7,6,5]	// partition Array at index 3, k, and then reverse both so 1 and 7 are next to each other, 5 on the right end, and 4 on the left end.
[5,6,7,1,2,3,4]	// reverse entire Array for rotated result.

- Time: O(n)
- Space: O(1)
*/

const reverse = (nums, l, r) => {
    // to reverse, swap left and right elements
    while (l < r) {
        const tmp = nums[l]
        nums[l] = nums[r]
        nums[r] = tmp
        l += 1
        r -= 1
    }
}

const brute = function(nums, k) {
    const res = new Array(nums.length).fill(0)
    k = k % nums.length   // a k > nums.length is the same as k % nums.length rotated.
    // const times = Math.floor(nums.length / k)
    
    // for (let i = 0; i <= k; i ++) {
    //     for (let j = 1; j <= times; j ++) {
    //         res[(i + j*k) % nums.length] = nums[(i + (j-1)*k) % nums.length]
    //     }
    // }

    // simpler
    // for each nums[i], put it into rotated position in res. Need additional space because it is overwriting at that index it rotates to.
    for (let i = 0; i < nums.length; i ++) {
        res[(i + k) % nums.length] = nums[i]
    }

    // result in nums
    for (let i = 0; i < nums.length; i ++) {
        nums[i] = res[i]
    }

    return
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // return brute(nums, k)

    k = k % nums.length
    reverse(nums, 0, nums.length - k - 1)
    reverse(nums, nums.length - k, nums.length - 1)
    reverse(nums, 0, nums.length - 1)
};
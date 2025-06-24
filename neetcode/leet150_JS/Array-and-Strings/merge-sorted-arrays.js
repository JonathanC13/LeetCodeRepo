// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/*
if go forwards, need to handle nums1 elements into a buffer if nums2 is less than since overwriting indexes in nums1.

if go from the end, just replacing the 0s and run no risk of losing elements due to overwriting

- Time: O(m + n)
- Space: O(1)
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m + n - 1
    m -= 1
    n -= 1
    for (i; i >= 0; i --) {
        if (m >= 0 && n >= 0) {
            if (nums1[m] > nums2[n]) {
                nums1[i] = nums1[m]
                m -= 1
            } else {
                nums1[i] = nums2[n]
                n -= 1
            }
        } else if (m >= 0) {
            nums1[i] = nums1[m]
            m -= 1
        } else {
            nums1[i] = nums2[n]
            n -= 1
        }
    }
};
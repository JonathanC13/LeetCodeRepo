// https://leetcode.com/problems/merge-sorted-array/

/*
brute two pointer
    create an Array for nums1 with length m

    n1 = 0 for new Arr
    n2 = 0 for nums2
    i = 0
    while n1 < m && n2 < n
        if content at n1 is <= content at n2
            nums1[i] = content at n1
            n1 += 1
        else 
            nums1[i] = content at n2
            n2 += 1

        i += 1

    // left over
    while (n1 < m)
        nums1[i] = content at n1
        n1 += 1
        i += 1

    while (n2 < n)
        nums2[i] = content at n2
        n2 += 1
        i += 1

    - Time: O(m + n)
    - Space: O(m)

two pointer from end
    By merging from the end of nums1, not nums1 values that need to be merged will be overwritten while merging
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

    var mergeBackward = function() {
        let n1 = m - 1
        let n2 = n - 1
        let i = nums1.length - 1

        while (n1 >= 0 && n2 >= 0) {
            if (nums1[n1] >= nums2[n2]) {
                nums1[i] = nums1[n1]
                n1 -= 1
            } else {
                nums1[i] = nums2[n2]
                n2 -= 1
            }
            i -= 1
        }

        // left over
        while (n1 >= 0) {
            nums1[i] = nums1[n1]
            n1 -= 1
            i -= 1
        }

        while (n2 >= 0) {
            nums1[i] = nums2[n2]
            n2 -= 1
            i -= 1
        }
    }

    mergeBackward()


    var Om = function() {
        const nums1Cpy = nums1.slice(0, m)

        let n1 = 0
        let n2 = 0
        let i = 0

        while (n1 < m && n2 < n) {
            if (nums1Cpy[n1] <= nums2[n2]) {
                nums1[i] = nums1Cpy[n1]
                n1 += 1
            } else {
                nums1[i] = nums2[n2]
                n2 += 1
            }
            i += 1
        }

        while (n1 < m) {
            nums1[i] = nums1Cpy[n1]
            n1 += 1
            i += 1
        }

        while (n2 < n) {
            nums1[i] = nums2[n2]
            n2 += 1
            i += 1
        }
    }

    // Om()
};
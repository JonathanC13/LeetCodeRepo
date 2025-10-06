// https://leetcode.com/problems/merge-sorted-array/description/

/**
1. Assumptions: None

2. Validate inputs.
    1. type
    2. length
    3. content

3. Constraints?
    BTTC: Time: O(m + n)    // one pass both input Arrays
    Space: O(1) // inplace into nums1

4. Visualize by drawing and manually solve.
    one pointer at insertion starting at m + n - 1. r
    one pointer at end of nums2, p2
    one pointer at end of nums1, p1, which is the index of nums1.length - nums2.length - 1
    
    select the greatest value at p1 and p2 and overwrite at r then move selected index - 1. Since start at end of nums1 that has the expanded capacity already, no data loss for the values that we need to merge

5. Some test cases / edge cases
    Edge cases.
    1. nums1 = [], nums2 = []

    Test cases
    1. nums1 = [0], nums2 = [1]
    2. nums1 = [1,2,3,0,0,0], nums2 = [2, 5, 6]

6. Break the question down into smaller independent parts to program. Abstract plan.

7. Select algorithm
    Two pointers

8. Data structures
    - 2 Input Arrays

9. Complexity:
    Time: O(m + n)
    Space: O(1)

 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (nums1.length === 0) {
        return []
    }

    let r = m + n - 1
    let p1 = m - 1
    let p2 = n - 1
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[r] = nums1[p1]
            p1 -= 1
        } else {
            nums1[r] = nums2[p2]
            p2 -= 1
        }
        r -= 1
    }

    // remaining
    while (p1 >= 0) {
        nums1[r] = nums1[p1]
        p1 -= 1
        r -= 1
    }
    while (p2 >= 0) {
        nums1[r] = nums2[p2]
        p2 -= 1
        r -= 1
    }
};
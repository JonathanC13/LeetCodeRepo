// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
Since the solution requires time complexity of O(log(m + n)), cannot simply merge first OR enqueue each value into 2 heaps since that would take n + m.

get the total length of both arrays = m + n
get the half number of elements = floor(total / 2)  // elements in each half of the median

assign a = smaller of the 2 Arrays
assign b = the other Array

Need to determine the valid position of Array a in Array b. Use binary search determine this.
while(true)
    midA = get mid of Array a   // last index of left parition
    midB = pick the last index for the remaining elements of Array b's left = half - midA - 2   // -2 for 0 based for Array a (includes midA in left) and b (includes midB in left)

    // to determine if the left partition of Array a at midA fits with left partition of midB, both max of the left sides must be <= min of the right sides.
    // since sorted in non-descending, the max in the left half is the most right and the min in the right half is the most left
    assign left1 which is the most right value in nums1's current partition represented by l and midA (idx). if < 0 assign neg inif
    assign right1 which is midA + 1, if > nums1.length assign pos inif
    assign left2 which is the most right value in nums2's partition. 0 to midB
    assign right2 which is midB

    if (leftA <= rightB && leftB <= rightA) {
        if odd number of total elements
            the median the the exact middle value
        else
            // even, therefore need the calculated median
            return (max(leftA, leftB) + min(rightA, rightB)) / 2.0

    } else if (leftA > rightB) {
        // need to reduce the value of leftA, therefore continue search left. 
        // Since sorted, by going left in Array a, the midA value will decrease and midB = half - midA will increase index which will get a higher value
        r = midA - 1
    } else {
        // leftB > rightA, must increase the value by picking a higher index in Array a for a higher value, this will decrease the midB for a lower value
        l = midA + 1
    }

* explaination. Since always taking half the elements: x from nums1 and then half - x from nums2 and when the common index is found where both partitions fit then the median can be found:
    1. odd total length. the left partitions of nums1 and nums2 fit together to make the left half, therefore the median is the min at right1, right2
    2. even, ((max of left1, left2) + (min of right1, right2)) / 2.0 

- Time: O(log(min(m, n)))   // since running binary search on only the smallest array of nums1, nums2
- Space: O(1)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let a = null
    let b = null
    if (nums1.length <= nums2.length) {
        a = nums1
        b = nums2
    } else {
        a = nums2
        b = nums1
    }

    const total = a.length + b.length
    const half = Math.floor(total / 2)

    let l = 0
    let r = a.length - 1
    while (true) {
        const midA = Math.floor((r - l) / 2) + l
        const midB = half - midA - 2

        const lA = (midA >= 0 && midA < a.length) ? a[midA] : Number.NEGATIVE_INFINITY
        const lB = (midB >= 0 && midB < b.length) ? b[midB] : Number.NEGATIVE_INFINITY
        const rA = (midA + 1 >= 0 && midA + 1 < a.length) ? a[midA + 1] : Number.POSITIVE_INFINITY
        const rB = (midB + 1 >= 0 && midB + 1 < b.length) ? b[midB + 1] : Number.POSITIVE_INFINITY

        // console.log(lA, lB, rA, rB)

        if (lA <= rB && lB <= rA) {
            if (total % 2 === 1) {
                return Math.min(rA, rB)
            } else {
                return (Math.max(lA, lB) + Math.min(rA, rB)) / 2.0
            }
        } else if (lA > rB) {
            // need to reduce value at lA
            r = midA - 1
        } else {
            // lB > rA, need to increase value at lA, which in turn reduces the value at lB.
            l = midA + 1
        }
    }

    return -1
};
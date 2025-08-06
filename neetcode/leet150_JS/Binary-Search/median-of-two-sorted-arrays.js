// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

/*
Since the solution requires time complexity of O(log(m + n)), cannot simply merge first OR enqueue each value into 2 heaps since that would take n + m.

get the total length of both arrays = m + n
get the half number of elements = floor(total / 2)

Conduct binary search on the smallest array of nums1 and nums2
    mid = floor((r - l) / 2) + l    // take 'mid' number of elements in the nums1 partition
    j = mid idx of nums2 = half - mid - 2

    assign left1 which is the most right value in nums1's current partition represented by l and mid (idx). if < 0 assign neg inif
    assign right1 which is mid + 1, if > nums1.length or j + 1 < 0 assign pos inif
    assign left2 which is the most right value in nums2's partition. 0 to j
    assign right2 which is j + 1

    if partition of nums1 fits in the partition of nums2 and nums2 fits in the partition of nums1 (left1 <= right2 && left2 <= right1)
        if odd total
            return min(right1, right2)
        else even
            return ((max of left1, left2) + (min of right1, right2)) / 2.0 
    else if left1 > right2
        means need to decrease nums1 partition, since sorted it will decrease the value at left1 and this will increase the partition of nums2 which increases the value at right2
        r = i - 1
    else
        // need to increase nums1 partition since nums2 partition could not fit so increase nums1 value and decrease nums2 value.
        l = i + 1

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
    // return brute(nums1, nums2)
    return binary(nums1, nums2)
};

/*
Since the solution requires time complexity of O(log(m + n)), cannot simply merge first OR enqueue each value into 2 heaps since that would take n + m.


*/

/**
    * @param {number[]} nums1
    * @param {number[]} nums2
    * @return {number}
    */
const binary = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        const tmp = nums1
        nums1 = nums2
        nums2 = tmp
    }
    let l = 0
    let r = nums1.length - 1
    const total = nums1.length + nums2.length
    const half = Math.floor(total / 2)

    while (true) {
        const i = Math.floor((r - l) / 2) + l // number of elements in left partition// mid of nums1
        const j = half - i - 2    // number of elements - 1 (from nums1) - 1 (for nums2) = index i

        const left1 = i >= 0 && nums1.length > 0 ? nums1[i] : Number.NEGATIVE_INFINITY
        const right1 = i + 1 >= 0 && i + 1 < nums1.length ? nums1[i + 1] : Number.POSITIVE_INFINITY
        const left2 = j >= 0 && nums2.length > 0 ? nums2[j] : Number.NEGATIVE_INFINITY
        const right2 = j + 1 >= 0 && j + 1 < nums2.length ? nums2[j + 1] : Number.POSITIVE_INFINITY

        if (left1 <= right2 && left2 <= right1) {
            if (total % 2 === 0) {
                // even
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2.0
            } else {
                // odd
                return Math.min(right1, right2)
            }
        }

        if (left1 > right2) {
            // value at left1 not in correct position w.r.t. right2. Since it is larger, need to go backward. Decreasing left partition.
            r = i - 1
        } else {
            // take more elements from nums1. Increasing right partition
            l = i + 1
        }
    }
}

// Time: O(m + n)
// Space: O(1)
var brute = function(nums1, nums2) {
    const arr = new Array()

    let i = 0
    let j = 0
    while (i < nums1.length || j < nums2.length) {
        let n1 = Number.POSITIVE_INFINITY
        if (i < nums1.length) {
            n1 = nums1[i]
        }
        let n2 = Number.POSITIVE_INFINITY
        if (j < nums2.length) {
            n2 = nums2[j]
        }

        if (n1 <= n2) {
            arr.push(n1)
            i += 1
        } else {
            arr.push(n2)
            j += 1
        }
    }

    if (arr.length % 2 === 0) {
        return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2.0
    } else {
        return arr[Math.floor(arr.length / 2)]
    }
}
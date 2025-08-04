// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/?envType=study-plan-v2&envId=top-interview-150

/*
create priQ that sorts the element's sum in non-ascending order
    Element: [sum, [v1, v2]]

Two pointers
    1. one to choose value from nums1
    2. one to choose value from nums2

for each pair created by the pointers, enqueue into the priQ
    if the sum of the pair exceeds the front of the priQ, move ptr1 forward and reset ptr2. There is no need to continue with this ptr1 and continue ptr2 since nums1 and nums2 are sorted in non-desc, ptr2 forward will only result in larger sums.

- Time: O(n1 * n2 * log(k)) // n1 * n2 since need to create pairs, log(k) since max keep k pairs in the priQ
- Space: O(k)
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const priQ = new PriorityQueue(
        (a, b) => {
            return b[0] - a[0]
        }
    )

    let p1 = 0
    while (p1 < nums1.length) {
        for (let p2 = 0; p2 < nums2.length; p2 ++) {
            const sum = nums1[p1] + nums2[p2]
            if (priQ.size() === k && sum >= priQ.front()[0]) {
                break
            }

            priQ.enqueue([sum, [nums1[p1], nums2[p2]]])
            while (priQ.size() > k) {
                priQ.dequeue()
            }
        }
        p1 += 1
    }

    const res = new Array()
    while (priQ.size() > 0) {
        res.push(priQ.dequeue()[1])
    }
    return res
};
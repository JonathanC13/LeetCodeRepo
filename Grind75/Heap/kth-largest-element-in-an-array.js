// https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
create min pri Q and limit the size to k
    sort descending so that the front is the kth largest and the other elements are larger than it. If a larger element appears, front is dequeued.

- Time: O(n log k)  // potentially n operations on k sized heap
- Space: O(k)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const priQ = new PriorityQueue((a, b) => {return a - b})

    for (let i = 0; i < nums.length; i ++) {
        if (priQ.size() < k) {
            priQ.enqueue(nums[i])
        } else if (priQ.front() < nums[i]) {
            priQ.dequeue()
            priQ.enqueue(nums[i])
        }
    }

    return priQ.front()
};
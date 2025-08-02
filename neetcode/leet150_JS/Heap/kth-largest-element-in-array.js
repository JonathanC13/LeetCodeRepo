// https://leetcode.com/problems/kth-largest-element-in-an-array/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a minPriorityQueue, this will keep the min value on the top.

restrict the queue's size to k so that when queue.size() > k, it will pop the min value. Therefore the remaining elements are the k largest with the kth largest at top.

- Time: O(n * log k)    // O(Log k) for each operation on Priority queue, k since will only maintain queue size of k. n times since iterate n
- Space: O(k)           // will only maintain queue size of k
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minQ = new MinPriorityQueue()
    for (let i = 0; i < nums.length; i ++) {
        minQ.enqueue(nums[i])

        while (minQ.size() > k) {
            minQ.dequeue()
        }
    }

    return minQ.front()
};
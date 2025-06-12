// https://leetcode.com/problems/kth-largest-element-in-an-array/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a Min priority queue to store the top k largest values and the front will be the smallest of them.

iterate the nums
    enqueue the nums[i]
    while qu.size() > k
        dequeue 

at the end the min priority queue has <= k elements and the front is the kth largest

- Time: O(n log k)  // n operations, at most k elements
- Space: O(k) // k since the pri queue at most maintains k elements
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minQu = new MinPriorityQueue()

    for (let i = 0; i < nums.length; i ++) {
        minQu.enqueue(nums[i])
        while (minQu.size() > k) {
            minQu.dequeue()
        }
    }

    return minQu.front()
};
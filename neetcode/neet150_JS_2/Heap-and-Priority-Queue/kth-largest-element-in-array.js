// https://neetcode.io/problems/kth-largest-element-in-an-array

/*
create a min pri Q.
Iterate the nums
    insert the value into the Q

    while Q size > k
        pop, this is so the Q holds the largest k elements while anything smaller is popped

return Q.front()

- Time: O(n log k)  n = nums length, k = k
- Space: O(k)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minQ = new MinPriorityQueue()

        for (let i = 0; i < nums.length; i ++) {
            minQ.enqueue(nums[i])

            while (minQ.size() > k) {
                minQ.dequeue()
            }
        }

        return minQ.front()
    }
}

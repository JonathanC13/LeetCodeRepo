// https://neetcode.io/problems/kth-largest-element-in-an-array

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        if (nums.length < k) {
            return null
        }

        const minQ = new MinPriorityQueue()

        for (let i = 0; i < nums.length; i ++) {
            minQ.enqueue(nums[i])

            while(minQ.size() > k) {
                minQ.dequeue()
            }
        }
        // console.log(minQ['_heap']['_heap']['_nodes'])

        return minQ.size() > 0 ? minQ.dequeue() : null
    }
}

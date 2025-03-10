// https://neetcode.io/problems/kth-largest-integer-in-a-stream

/*
use a MinPriorityQueue to store the top k largest values
add values one by one to the Queue and if Queue.size() > k, remove the top to remove the min value to maintain the top k largest

return the top of the Queue for the current kth largest

- Time: (n log k)
- Space: O(k) 
*/

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.minHeap = new MinPriorityQueue()
        for (let i = 0; i < nums.length; i ++) {
            this.add(nums[i])
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val)
        while (this.minHeap.size() > this.k) {
            this.minHeap.dequeue()
        }
        return this.minHeap.front()
    }
}

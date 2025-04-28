// https://neetcode.io/problems/kth-largest-integer-in-a-stream

/*
create a Min Pri queue and maintain the size as k so that the top is the kth largest and the values below are greater. 
Since want the kth largest at every 'add', 
    insert the value and then dequeue until k size

- Time: O(m * log k)    . heap operations are log n, where n is the number of elements. m = number of operations
- Space: O(k)
*/

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.minQ = new MinPriorityQueue()
        for (let i = 0; i < nums.length; i ++) {
            this.add(nums[i])
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minQ.enqueue(val)
        while(this.minQ.size() > this.k) {
            this.minQ.dequeue()
        }

        return this.minQ.front()
    }
}

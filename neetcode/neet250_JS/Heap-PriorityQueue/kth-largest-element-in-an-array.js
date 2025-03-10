// https://neetcode.io/problems/kth-largest-element-in-an-array

/*
create a MinPriorityQueue to maintain the k largest distinct nums by removing the new minimums

- Time: O(n log k)
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

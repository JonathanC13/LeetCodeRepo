// https://neetcode.io/problems/sliding-window-maximum

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = []
        const maxQ = new MaxPriorityQueue((x) => x[0])

        for (let i = 0; i < nums.length; i ++) {
            maxQ.enqueue([nums[i], i])

            if (i >= k - 1) {
                while (maxQ.size && maxQ.front()[1] <= i - k) {
                    maxQ.dequeue()
                }

                res.push(maxQ.front()[0])
            }
        }
        return res
    }
}

// https://neetcode.io/problems/sliding-window-maximum

/*
- edge case 1: if k >= nums.length {
    iterate nums to find the max
    return max
}

need a max priority queue data structure to maintain what items are in the current window and the current max. 
Since sliding right, we enqueue the new value, the max is on top, and remove the out of window value
store the [value, index] since there are duplicate values

res = []
left = 0

max = Number.NEGATIVE_INFINITY

create the initial window of length k and get it's max
right = 0
right to < k
    push to back of queue

res.push(maxQ.front())

for right to < nums.length
    remove([nums[l]. l])
    enqueue(nums[r])

    res.push(maxQ.front())

    l ++

return res

- Time: O(n log n). add, remove is O(n log n)
- Space: O(n). n nodes in the max priority heap
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (k >= nums.length) {
            let max = Number.NEGATIVE_INFINITY
            for (let i = 0; i < nums.length; i ++) {
                max = Math.max(max, nums[i])
            }
            return [max]
        }

        const res = []
        const maxQ = new MaxPriorityQueue((elem) => elem[0])
        let l = 0
        let r = 0
        for (r; r < k; r ++) {
            maxQ.enqueue([nums[r], r])
        }
        res.push(maxQ.front()[0])

        for (r; r < nums.length; r ++) {
            maxQ.remove((elem) => {return elem[0] === nums[l] && elem[1] === l})
            maxQ.enqueue([nums[r], r])

            res.push(maxQ.front()[0])
            l += 1
        }

        return res
    }
}

// https://neetcode.io/problems/last-stone-weight

/*
create Max pri queue so that the two heaviest stones are always immediately accessible
if size > 1. pop the top 2 and perform the rules. if not destroyed insert back into the heap

- Time: O(n log n)
- Space: (n)
*/

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxQ = new MaxPriorityQueue()

        for (let i = 0; i < stones.length; i ++) {
            maxQ.enqueue(stones[i])
        }

        while (maxQ.size() > 1) {
            const s1 = maxQ.dequeue()
            const s2 = maxQ.dequeue()

            if (s1 !== s2) {
                maxQ.enqueue(Math.abs(s1 - s2))
            }
        }

        return maxQ.size() === 1 ? maxQ.front() : 0
    }
}

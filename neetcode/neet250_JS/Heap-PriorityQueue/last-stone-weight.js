// https://neetcode.io/problems/last-stone-weight

/*
create a MaxPriorityQueue to initially hold all the stones so that the largest stone is at the front
while Queue.size() > 1
    1st stone = pop the front   // it will re-arrange
    2nd stone = pop the front again

    // apply the smash rules
    if 1st === 2nd:
        continue
    else if 2nd < 1st:
        Queue.enqueue(1st - 2nd)

return Queue.size() === 0 ? 0 : Queue.front()

- Time: O(m log n)  // log n for operation, * m for number of operations
- Space: O(n). // n = number of stones
*/

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = MaxPriorityQueue.fromArray(stones)
        while (maxHeap.size() > 1) {
            const stoneOne = maxHeap.dequeue()
            const stoneTwo = maxHeap.dequeue()

            if (stoneTwo < stoneOne) {
                maxHeap.enqueue(stoneOne - stoneTwo)
            }
        }

        return maxHeap.size() === 0 ? 0 : maxHeap.front()
    }
}

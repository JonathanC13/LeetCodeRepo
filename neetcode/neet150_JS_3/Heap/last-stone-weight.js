// https://neetcode.io/problems/last-stone-weight/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. stones
 *      - stones instanceof Array
 *      - stones's elements are Number > 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n* log(n))
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if stones.length === 0: return 0
 * 
 *  test cases
 *  1. 1 remaining
 *      inputs
 *          stones = [2,3,6,4]
 *      expected output
 *          1
 *  2. 0 remaining
 *      inputs
 *          stones = [2,6,4]
 *      expected output
 *          0
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  For O(1) access of 2 heaviest. Use max pri queue so that the heaviest is always at the front.
 *  Track size() to know when complete
 * 
 * 7. algos
 *  - priority queue operations (impl w/ heap)
 * 
 * 8. data structures
 *  - priority queue (impl w/ heap)
 * 
 * 9. complexity
 *  Time: O(n log(n))
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if (stones.length === 0) {
            return 0
        }

        const maxPriQ = new MaxPriorityQueue()
        for (let stone of stones) {
            maxPriQ.enqueue(stone)
        }

        while(maxPriQ.size() > 1) {
            const first = maxPriQ.dequeue()
            const second = maxPriQ.dequeue()
            if (Math.abs(first - second) > 0) {
                maxPriQ.enqueue(Math.abs(first - second))
            }
            // else 0 = both destroyed
        }

        if (maxPriQ.size() === 1) {
            return maxPriQ.front()
        }
        return 0
    }
}

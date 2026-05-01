// https://neetcode.io/problems/kth-largest-integer-in-a-stream/question

/**
 * kth largest = from the largest down
 * 
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. constructor(k, nums)
 *      1. k
 *          - typeof k === 'number'
 *          - k >= 0
 *      2. nums
 *          - nums instanceof Array
 *          - nums's elements are Number
 *  2. add(val)
 *      1. val
 *          - typeof val === 'number'
 * 
 * 3. time and space constraints
 *  1. constructor
 *      BTTC: O(n * log(k))
 *      Space: O(k)
 *  2. add
 *      BTTC: O(1)
 *      Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if k > ds size: return null
 * 
 *  test cases
 *  1. kth largest is replaced
 *      inputs
 *          constructor
 *              k = 3, nums = [1,2,3,3,4]
 *          add ops
 *              [1,5,6]
 *      expected output
 *          [3,3,4]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Maintain Min pri queue of size k so that the kth largest is at the top.
 *  When adding values larger the front is popped, and when adding smaller it is not added.
 * 
 * 7. algos
 *  - Min pri queue operations
 * 
 * 8. data structures
 *  - priority queues implemented with heap
 * 
 * 9. complexity
 *  Time: O(n * log(k))  // n = stream items, k = size of heap
 *  Space: O(k)
 *              
 * 
 */

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.minPriQ = new MinPriorityQueue()
        for (let num of nums) {
            this.priQadd(this.k, this.minPriQ, num)
        }
    }

    priQadd(cap, priQ, num) {
        priQ.enqueue(num)
        if (priQ.size() > cap) {
            priQ.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.priQadd(this.k, this.minPriQ, val)
        return this.minPriQ.front()
    }
}

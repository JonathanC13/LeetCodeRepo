// https://neetcode.io/problems/k-closest-points-to-origin/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. points
 *      - points instanceof Array
 *      - points.length >= 0
 *      - points's elements are Array
 *  2. k
 *      - typeof k === Number
 *      - k >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n log(k))
 *  Space: O(k)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if k >= points.length: return [...points]
 *  
 *  test cases
 *  1. closer points later in the Array
 *      inputs
 *          points = [[0,5],[2,0],[0,2]], k = 2
 *      expected output
 *          [[2,0],[0,2]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  To maintain the k closest to origin, use a max priority queue with max capacity of k. This is so the front is the furthest away and when any closer are added the front is dequeued.
 * 
 * 7. algos
 *  - priority queue operations (impl with heap)
 * 
 * 8. data structures
 *  - priority queue (impl w/ heap)
 * 
 * 9. complexity
 *  Time: O(n log(k))
 *  Space: O(k)
 */

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        if (points.length <= k) {
            return [...points]
        }

        const maxPriQ = new PriorityQueue((a, b) => {
            return b[0] - a[0]  // > 0, Array descending, pop at front
        })

        for (let [x,y] of points) {
            const dist = x*x + y*y
            maxPriQ.enqueue([dist, [x,y]])
            if (maxPriQ.size() > k) {
                maxPriQ.dequeue()
            }
        }

        const res = new Array()
        while (maxPriQ.size() > 0) {
            res.push(maxPriQ.dequeue()[1])
        }

        return res
    }
}

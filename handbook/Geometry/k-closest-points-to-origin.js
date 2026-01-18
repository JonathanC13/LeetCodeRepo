// https://leetcode.com/problems/k-closest-points-to-origin/description/

/**
1. Assumptions
    1. None

2. input validation
    1. points
        - points instanceof Array
        - points.length >= 0
        - points elements are Arrays of length 2 where its elements are Numbers

    2. k
        - k instanceof Number
        - k >= 0

3. time and space constraints
    BTTC: O(n)  // n = points.length
    Space: O(k)

4. edge cases and some test cases
    edge cases
    1. if k === 0: return []
    2. if k >= points.length: return points

    test cases
    1. 
        inputs
            points = [[0, 1], [2, 0], [-1, 0], [3, 5], [0, 0]]
            k = 3
        expected output
            [[0, 1], [-1, 0], [0, 0]]

5. visualize by drawing and manually solve
6. break into subproblems
    maintain a Max priority Queue of size k. When size > k, pop the top, this will ensure that the k elements in the Heap are the k closest since the top has the furthest

7. algos
    - Priority Queue operations

8. data structures
    - Heap for Priority Queue

9. Complexity
    Time: O(n)
    Space: O(k)
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    if (k === 0) {
        return []
    }
    if (k >= points.length) {
        return [...points]
    }

    const maxPriQ = new PriorityQueue(
        (a, b) => {
            return b[0] - a[0]  // descending from top, therefore max pri queue
        }
    )

    for (let i = 0; i < points.length; i ++) {
        maxPriQ.enqueue([points[i][0]*points[i][0] + points[i][1]*points[i][1], points[i]])

        while (maxPriQ.size() > k) {
            maxPriQ.dequeue()
        }
    }

    const res = new Array()
    while (maxPriQ.size() > 0) {
        res.push(maxPriQ.dequeue()[1])
    }

    return res
};
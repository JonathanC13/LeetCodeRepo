// https://leetcode.com/problems/k-closest-points-to-origin/description/

/**
Soln 1: calcuate the Euclidean distance of each point and push into an Array, and then sort the Array. The result is the first k elements.
    Time: O(n + n*log(n)) // n = all points +, n*log(n) to sort
Soln 2: Employ a Max priority Queue of max capacity of k. This will ensure that the k elements are the shortest distance since if > capacity dequeue until === capacity which removes all the greater distance points. 
    Time: O(n*log(k))   // log(k) since each enqueue needs to heapify to maintain the max priority attributes

1. Assumptions
    1. k >= 0

2. input validation
    1. Points
        - points instanceof Array
        - points.length > 0
        - points elements are Arrays of length 2 that contain Numbers

    2. k
        - typeof k === 'Number'
        - k >= 0

3. time and space constraints
    BTTC: O(n * log(k))
    Space: O(k)

4. edge cases and some test cases
    edge cases
    1. if k >= points.length: return points
    2. if k <= 0: return []
    test cases
    1. 
        inputs
            points = [[1,3],[-2,2]], k = 1
        expected output
            [[-2, 2]]

5. visualize by drawing and manually solve
6. break into subproblems
    maintain a Max priority Queue of maximum capacity of k

    iterate the points
        calculate the Euclidean distance and enqueue [dist, point]
        while > capacity
            dequeue // which removes points that are greater than the k closest

    dequeue all elements and push point into res

    return res

7. algos
    - Max priority queue

8. data structures
    - Heap

9. Complexity
    Time: O(n*log(k))
    Space: O(k)
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    if (k <= 0) {
        return []
    }
    if (k >= points.length) {
        return [...points]
    }

    const priQ = new PriorityQueue((a, b) => {
        return b[0] - a[0]  // max Q, so > 0 it is closer to top of Heap
    })

    for (let i = 0; i < points.length; i ++) {
        priQ.enqueue([Math.sqrt(Math.pow(0 - points[i][0], 2) + Math.pow(0 - points[i][1], 2)), [...points[i]]])
        while (priQ.size() > k) {
            priQ.dequeue()
        }
    }
    
    const res = new Array()
    while (priQ.size() > 0) {
        res.push(priQ.dequeue()[1])
    }
    return res
};
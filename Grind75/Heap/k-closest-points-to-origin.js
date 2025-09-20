// https://leetcode.com/problems/k-closest-points-to-origin/description/

/**
create a minHeap so that the closet point to 0,0 is on the top
    Note: -1 asc, 1 desc from top

iterate the points, calculate the Euclidean distance and enqueue [dist, points[i]]. It will sort itself. O(log n) // n = number of elements in the heap

res = new Array()

while k > 0
    dequeue and push into res

return res

- Time: O(n log n)
- Space: O(n)
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const priQ = new PriorityQueue((a, b) => {
        return a[0] - b[0]
    })

    for (let i = 0; i < points.length; i ++) {
        const euc = Math.sqrt(points[i][0]*points[i][0] + points[i][1]*points[i][1])
        priQ.enqueue([euc, points[i]])
    }

    const res = new Array()

    while (k > 0) {
        const deq = priQ.dequeue()
        res.push(deq[1])
        k -= 1
    }

    return res
};
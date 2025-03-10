// https://neetcode.io/problems/k-closest-points-to-origin

/*
create a MaxPriorityQueue to hold the elements of form: [dist, pointIdx], and maintain the order with 'dist'
keep the Queue.size() <= k so that it will maintain the k closest points to the origin (0, 0) by removing any larger distances

- Time: O(n log k)
- Space: O(k)
*/

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxQ = new MaxPriorityQueue((point) => point[0])
        const x1 = 0
        const y1 = 0
        for (let i = 0; i < points.length; i ++) {
            const dist = Math.abs(Math.sqrt(Math.pow(x1 - points[i][0], 2) + Math.pow(y1 - points[i][1], 2)))
            
            maxQ.enqueue([dist, i])
            while (maxQ.size() > k) {
                maxQ.dequeue()
            }
        }

        const res = []
        while (maxQ.size() > 0) {
            res.push(points[maxQ.dequeue()[1]])
        }

        return res
    }
}

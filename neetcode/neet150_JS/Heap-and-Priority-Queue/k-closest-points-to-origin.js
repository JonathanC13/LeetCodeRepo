// https://neetcode.io/problems/k-closest-points-to-origin

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        if (points.length <= k) {
            return points
        }

        const maxPriQ = new MaxPriorityQueue((point) => point.dist)
        const origin = [0, 0]

        for (let i = 0; i < points.length; i ++) {
            const dist = Math.sqrt(Math.pow(points[i][0] - origin[0], 2) + Math.pow(points[i][1] - origin[1], 2))
            maxPriQ.enqueue({dist:dist, point:points[i]})

            while(maxPriQ.size() > k) {
                maxPriQ.dequeue()
            }
        }

        // console.log(maxPriQ['_heap']['_heap']['_nodes'])
        // return []

        const res = []
        while(maxPriQ.size() > 0) {
            res.push(maxPriQ.dequeue()['point'])
        }

        return res
    }
}

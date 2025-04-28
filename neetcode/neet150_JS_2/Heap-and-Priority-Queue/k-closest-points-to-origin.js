// https://neetcode.io/problems/k-closest-points-to-origin

/*
create max pri q and it will store k elements and they are the k closest, since any point that is > top and over capacity will be popped.

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
        const maxQ = new MaxPriorityQueue((elem) => elem[0])

        for (let i = 0; i < points.length; i ++) {
            const dist = Math.sqrt((Math.pow(points[i][0] - 0, 2)) + (Math.pow(points[i][1] - 0, 2)))
            maxQ.enqueue([dist, i])

            while (maxQ.size() > k) {
                maxQ.dequeue()
            }
        }

        const res = new Array()

        while (maxQ.size() > 0) {
            res.push(points[maxQ.dequeue()[1]])
        }

        return res
    }
}

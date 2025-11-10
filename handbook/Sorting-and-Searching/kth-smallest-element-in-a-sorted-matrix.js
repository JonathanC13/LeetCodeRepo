// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

/**


try to solve with merge sort soln
try to solve with binary search soln


 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    return priQSoln(matrix, k)
};

// Time: O(n^2) // must visit each cell
// Space: O(k)  // max pri Q only keeps max k values, the top is the kth smallest.
const priQSoln = (matrix, k) => {
    const minPriQ = new MaxPriorityQueue()

    for (let r = 0; r < matrix.length; r ++) {
        for (let c = 0; c < matrix[0].length; c ++) {
            minPriQ.enqueue(matrix[r][c])

            while (minPriQ.size() > k) {
                minPriQ.dequeue()
            }
        }
    }

    return minPriQ.front()
}

/* lol kth element of matrix

valid test case:
matrix = [[1,2],[1,3]]
k = 2
*/
/*
Use binary search to find the row that contains the kth smallest element. If k >= (row) * (# of cols) and k < (row) * (# of cols) + # of cols
O(1) access the column. new k = k - (row) * (# of cols) + # of cols
Time: O(log n)
Space: O(1)

const rows = matrix.length
    const cols = matrix[0].length
    let r1 = 0
    let r2 = rows - 1
    let mid = 0

    let k2 = k - 1

    while (r1 <= r2) {
        mid = Math.floor((r2 - r1) / 2) + r1

        if ((k2 >= mid * cols) && (k2 < (mid * cols) + cols)) {
            break
        } else if (k2 < mid * cols) {
            r2 = mid - 1
        } else {
            r1 = mid + 1
        }
    }

    k2 = k2 - (mid * cols)

    return matrix[mid][k2]
*/
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/?envType=study-plan-v2&envId=leetcode-75

/*
[1, 2] and [2, 3] is burst by 1 arrow

sort by points start in non-descending order and if same, sort by end in non-descending. Need the lowest end first.

merge them and maintain the max start and min end since to burst overlapping balloons, the smallest balloon is targetted. The final length is the number of arrows needed

- Time: O(n log n)
- Space: O(log n)
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => {
        const diff = a[0] - b[0]
        if (diff === 0) {
            return a[1] - b[1]
        }
        return diff
    })
    console.log(points)
    const res = new Array()
    let i = 0
    while (i < points.length) {
        currEnd = points[i][1]
        let j = i + 1
        while (j < points.length && currEnd >= points[j][0]) {
            currEnd = Math.min(currEnd, points[j][1])
            j += 1
        }
        res.push(currEnd)
        i = j
    }
    console.log(currEnd)
    return res.length
};
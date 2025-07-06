// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/?envType=study-plan-v2&envId=top-interview-150

/*
start and end are inclusive

sort the points by the start in non-descending order.

iterate points and merge the intervals while maintaining the max for the start and min for the end. To keep the new interval as small as possible when merging is so that one arrow can burst the overlapping balloons.

return merged.length

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length <= 1) {
        return points.length
    }

    points.sort((a, b) => a[0] - b[0])

    const merged = new Array()
    let arrows = 0
    let i = 0
    while (i < points.length) {
        const newInterval = points[i]
        i += 1
        while (i < points.length && points[i][0] <= newInterval[1]) {
            newInterval[0] = Math.max(newInterval[0], points[i][0])
            newInterval[1] = Math.min(newInterval[1], points[i][1])
            i += 1
        }
        arrows += 1
        merged.push(newInterval)
    }
    return arrows
    // return merged.length
};
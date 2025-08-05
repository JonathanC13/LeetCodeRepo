// https://leetcode.com/problems/max-points-on-a-line/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Map for:
    key: slope, x intercept and y intercept
    val: Set of points that have that slope

iterate points
    iterate all ahead points
        get the slope between the two points, x intercept, and y intercept
        store into Map

maxPoints = 0
iterate Map
    maxPoints = max(maxPoints, val)

return maxPoints

- Time: O(n^2)
- Space: O(n)
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 1) {
        return points.length
    }

    const slopesMap = new Map()

    for (let i = 0; i < points.length; i ++) {
        const [x1, y1] = points[i]
        for (let j = i + 1; j < points.length; j ++) {
            const [x2, y2] = points[j]
            if (x1 === x2 && y1 === y2) {
                continue
            }

            let slope = Number.POSITIVE_INFINITY
            let x = 0
            let b = 0
            if (x2 === x1) {
                x = x2
                b = Number.POSITIVE_INFINITY
            } else {
                slope = (y2 - y1) / (x2 - x1)
                b = y2 - slope * x2
                x = slope === 0 ? Number.POSITIVE_INFINITY : (y2 - b) / slope
            }
            
            const key = `${slope},${x},${b}`

            if (!slopesMap.has(key)) {
                slopesMap.set(key, new Set())
            }
            slopesMap.get(key).add(points[i])
            slopesMap.get(key).add(points[j])
        }
    }
    console.log(slopesMap)
    let maxPoints = 0
    for (let [k, v] of slopesMap.entries()) {
        maxPoints = Math.max(maxPoints, v.size)
    }
    return maxPoints
};
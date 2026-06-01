// https://neetcode.io/problems/count-squares/question

/**
 * 1. Assumptions
 *  1. Duplicate points are seperate
 *  2. No diagonal squares
 * 
 * 2. input validation
 *  1. point
 *      - point instanceof Array
 *      - point.length === 2
 *      - point's elements are Number
 * 
 * 3. time and space complexity
 *  add:
 *      BTTC: O(1)
 *      Space: O(n)
 *  count:
 *      BTTC: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1.
 * 
 *  test cases
 *  1. a duplicate point contributes to a square
 *      inputs
 *          ["CountSquares", "add", [[1, 1]], "add", [[2, 2]], "add", [[1, 2]], "count", [[2, 1]], "count", [[3, 3]], "add", [[2, 2]], "count", [[2, 1]]]
 *      expected output
 *          [null, null, null, null, 1, 0, null, 2]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create a Map for:
 *      key: 'x,y'
 *      value: count for duplicates
 * 
 *  count(point)
 *      res = 0
 *      iterate each point in Map
 *          if diagonal is made with point (x diff !== 0 && y diff !== 0)
 *              check if other corners exist (x, dy) and (dx, y) exist in Map
 *              res += if point exists in Map ? count : 1 * count of diagonal * count of corner (x, dy) * count (dx, y)
 * 
 * 7. algos
 *  - math
 * 
 * 8. data structures
 *  - Hash map
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class CountSquares {
    constructor() {
        this.points = new Map()
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const key = `${point[0]},${point[1]}`
        if (!this.points.has(key)) {
            this.points.set(key, 0)
        }

        this.points.set(key, this.points.get(key) + 1)
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const x = point[0]
        const y = point[1]
        let res = 0
        for (let [k, v] of this.points) {
            const pnt = k.split(',').map((e) => Number(e))
            if (pnt[0] - x !== 0 && pnt[1] - y !== 0) {
                const corner1 = `${x},${pnt[1]}`
                const corner2 = `${pnt[0]},${y}`
                if (this.points.has(corner1) && this.points.has(corner2)) {
                    res += v * this.points.get(corner1) * this.points.get(corner2) * (this.points.has(`${x},${y}`) ? this.points.get(`${x},${y}`) : 1)
                }
            }
        }

        return res
    }
}

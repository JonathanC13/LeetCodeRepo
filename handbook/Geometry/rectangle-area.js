// https://leetcode.com/problems/rectangle-area/

/**
1. Assumptions
    1. None

2. input validation
    - Number

3. time and space constraints
    BTTC: O(1)
    Space: O(1)

4. edge cases and some test cases
    edge cases
    --

    test cases
    1. do not overlap
        inputs
            ax1 = -2, ay1 = -2, ax2 = 0, ay2 = 0,
            bx1 = 0, by1 = 0, bx2 = 2, by2 = 2
        expected output
            8

    2. overlap exactly
        inputs
            ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2,
            bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
        expected output
            16

    3. Some overlap
        inputs
            ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4,
            bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
        expected output
            45

5. visualize by drawing and manually solve
6. break into subproblems
    calculate rect1 area
    calculate rect2 area

    determine intersection points
    bottom left of intersection = [max(ax1, bx1), max(ay1, by1)]
    top right of intersection = [min(ax2, bx2), min(ay2, by2)]

    intersection = 0
    if overlapping ( if the points make sense like: left < right AND bottom < top)
        intersection = calculate intersection area with the points
    else 
    return rect1 area + rect2 area - intersection

7. algos
    - determine intersection

8. data structures
    - Geometry

9. complexity
    Time: O(1)
    Space: O(1)

 */

/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const rect1Area = (ax2 - ax1) * (ay2 - ay1)
    const rect2Area = (bx2 - bx1) * (by2 - by1)

    const cx1 = Math.max(ax1, bx1)
    const cy1 = Math.max(ay1, by1)
    const cx2 = Math.min(ax2, bx2)
    const cy2 = Math.min(ay2, by2)
    let intersection = 0

    if (cx1 < cx2 && cy1 < cy2) {
        intersection =(cx2 - cx1) * (cy2 - cy1)
    }

    return rect1Area + rect2Area - intersection
};
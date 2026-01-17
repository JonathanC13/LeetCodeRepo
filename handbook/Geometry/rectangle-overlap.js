// https://leetcode.com/problems/rectangle-overlap/

/**
1. Assumptions
    1. Overlap is when intersected and not edge contact

2. input validation
    1. rec
        - rec instanceof Array
        - rec.length === 4
        - rec elements are Numbers

3. time and space constraints
    BTTC: O(1)
    Space: O(1)

4. edge cases and some test cases
    edge cases
    N/A

    test cases
    1. overlap
        inputs
            rec1 = [0,0,2,2], rec2 = [1,1,3,3]
        expected output
            true

    2. edge touch
        inputs
            rec1 = [0,0,2,2], rec2 = [2,0,3,3]
        expected output
            false

    3. not overlap
        inputs
            rec1 = [0,0,1,1], rec2 = [2,2,3,3]
        expected output
            false

5. visualize by drawing and manually solve
6. break into subproblems
    4 conditions
    1. rec1.x1 < rec2.x2    // if rec2 on left, it potentially intersects. if rec2 on right, always true
    2. rec1.y1 < rec2.y2    // if rec2 below, it potentially intersects. if rec2 above, always true
    3. rec1.x2 > rec2.x1    // if rec2 on right, it potentially intersects. if rec2 on left, always true
    4. rec1.y2 > rec2.y1    // if rec2 above, it potentially intersects. if rec2 below, always true

7. algos
    - point comparison

8. data structures
    - Arrays

9. complexity
    Time: O(1)
    Space: O(1)
 */

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    if (rec1[0] < rec2[2] && rec1[1] < rec2[3] && rec1[2] > rec2[0] && rec1[3] > rec2[1]) {
        return true
    }

    return false
};
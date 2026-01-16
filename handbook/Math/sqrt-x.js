// https://leetcode.com/problems/sqrtx/

/**
1. Assumptions
    1. x >= 0

2. input validation
    1. x
        - x instanceof Number
        - x >= 0

3. time and space constraints
    BTTC: O(log(n))
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. x === 0: return 0
    2. x === 1: return 1

    test cases
    1. integer result
        inputs
            x = 4
        expected output
            2
    2. float result, round down
        inputs
            x = 8
        expected output
            2. since sqrt(8) = 2.8... round down to 2

5. visualize by drawing and manually solve
6. break into subproblems
    binary search for the sqrt
    maintain integer window boundaries, if with floats the search would be very long.
    if left^2 <= x AND (mid+1)^2 > x; then return l
    else if mid^2 < x
        l = floor(mid) + 1
    else
        r = floor(mid) - 1

7. algos
    - binary search

8. data structures
    - Number

9. complexity
    Time: O(log(n))
    Space: O(1)
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) {
        return x
    }

    let l = 0
    let r = Math.floor(x/2)

    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l // will always produce integer.
        const pow = mid * mid
        if (pow <= x && (mid+1)*(mid+1) > x) {
            return mid
        } else if (pow < x) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return l
};

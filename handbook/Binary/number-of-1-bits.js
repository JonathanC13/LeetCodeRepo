// https://leetcode.com/problems/number-of-1-bits/

/**
1. Assumptions
    1. n >= 1

2. input validation
    1. n
        - n instanceof Number
        - n is >= 1 and < 2^31 -1

3. time and space constraints
    BTTC: O(1)  // 32 bits
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. if n === 1: return 1

    test cases
    1. arbitrary number
        inputs
            n = 5
        expected output
            2

    2. Max 32 bit Number
        inputs
            n = 2147483647
        expected output
            31

5. visualize by drawing and manually solve
6. break into subproblems
    - 1st solution. Shift and count 1s
        Time: O(1)
        Space: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    if (n === 1) {
        return 1
    }

    // return shiftSoln(n)
    
};

const shiftSoln = (n) => {
    let cnt = 0

    for (let i = 0; i < 32; i ++) {
        if ((n >> i) & 1 === 1) {
            cnt += 1
        }
    }
    return cnt
}
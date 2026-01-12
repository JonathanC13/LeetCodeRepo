// https://leetcode.com/problems/reverse-bits/

/**
1. Assumptions
    1. positive Number

2. input validation
    1. n
        - n instanceof Number
        - n is a 32 bit signed Number

3. time and space constraints
    BTTC: O(1)  // 32
    Space: O(1) // max 32 bits

4. edge cases and some test cases
    edge cases
    1. if n === 0: return 0

    test cases
    1. positive Number
        inputs
            n = 43261596
        expected output
            964176192

5. visualize by drawing and manually solve
6. break into subproblems
    iterate 32 bits
        take least significant bit from n and shift left into res

7. algos
    - bitwise operators

8. data structures
    - Number

9. complexity
    Time: O(1)
    Space: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    if (n === 0) {
        return 0
    }

    let res = 0
    for (let i = 0; i < 32; i ++) {
        res = res << 1
        res |= (n >> i) & 1
    }

    return res
};
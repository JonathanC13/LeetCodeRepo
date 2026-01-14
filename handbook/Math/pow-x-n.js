// https://leetcode.com/problems/powx-n/

/**
1. Assumptions
    1. x can be any Number (float)
    2. n can be any Integer

2. input validation
    1. x
        - x instanceof Number
        - x is a Number that is negative or positive
        - Float

    2. n
        - n instanceof Number
        - n is a Number that is negative or positive
        - Integer

3. time and space constraints
    BTTC: O(1)  // 32 bit max
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. if x === 0: return 0
    2. if n === 0: return 1

    test cases
    1. positive x and n
        inputs
            x = 2.0, n = 10
        expected output
            1024.0
        
    2. negative x and n
        inputs
            x = -2.0, n = -3
        expected output
            -0.125
    3. positive x and negative n
        inputs
            x = 2.0, n = -3
        expected output
            0.125

5. visualize by drawing and manually solve
6. break into subproblems
    1. handle negative exponent
        if n < 0
            x becomes 1/x
            n = abs(n)

    2. 
        Binary of n i.e. (5)10 is (0101)2
        0    1    0    1
        2^3  2^2  2^1  2^0   <-- Corresponding place values of each bit

        OR we can also write this as
        0 1 0 1
        8 4 2 1 <-- Corresponding place values of each bit

        Now, 3^4 × 3^1 == 3^5 as 3^(4 + 1) == 3^5

        So, 3^4 × 3^1 == 81 × 3 == 243 <-- Desired Output
        Now, applying logic keeping this concept in mind

        - res = 1
        - while n !== 0
            if n LSB === 1
                res = res * x

            n = n >>> 1 // zero fill right shift since want to move toward 0
            x = x * x

7. aglos
    - Binary pow

8. data structures
    - Binary

9. complexity
    Time: O(1)
    Space: O(1)

                
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x === 0) {
        return 0
    }
    if (n === 0) {
        return 1
    }

    if (n < 0) {
        x = 1/x
        n = -1 * n
    }

    let res = 1.0
    while (n !== 0) {
        if (n & 1 === 1) {  // if LSB is 1
            res = res * x
        }

        // zero right shift for next LSB
        n = n >>> 1

        // since each binary position is doubling, prepare next position
        x = x * x
    }

    return res
};
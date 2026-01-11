// https://leetcode.com/problems/counting-bits/

/**
1. Assumptions
    1. n >= 0

2. input validation
    1. n
        - n instanceof Number
        - n >= 0

3. time and space constraints
    BTTC: O(n)
    Space: O(n+1)

4. edge cases and some test cases
    edge cases
    1. if n === 0: return [0]
    2. if n === 1: return [0, 1]

    test cases
    1. 
        inputs
            n = 5
        expected output
            [0, 1, 1, 2, 1, 2]

            0000
            0001
            0010
            0011
            0100

            0101

5. visualize by drawing and manually solve
6. break into subproblems
    Instead of counting the 1 bits for each number from 0 to n, 
    can determine the number of 1 bits by:
        if even (num % 2 === 0) then it has the same number of 1s as num//2
        else 1s of num//2 + 1, +1 to make the binary an odd

    pattern
    0000    init
    0001    init

    0010    
    0011    

    0100    
    0101    
    0110    
    0111    

    1000
    1001
    1010
    1011
    1100
    1101
    1110
    1111

7. algos
    - Binary

8. data structures
    - Array

9. complexity
    Time: O(n)
    Space: O(n + 1)
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if (n === 0) {
        return [0]
    }
    if (n === 1) {
        return [0, 1]
    }

    const res = new Array(n + 1).fill(0)
    res[0] = 0
    res[1] = 1

    for(let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            res[i] = res[i / 2]
        } else {
            res[i] = res[Math.floor(i / 2)] + 1
        }
    }

    return res
};
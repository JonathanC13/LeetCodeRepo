// https://leetcode.com/problems/sum-of-two-integers/

/**
1. Assumtpions
    1. Sum will not overflow

2. input validation 
    1. a and b
        - a instanceof Number

3. time and space constraints
    BTTC: O(1)  // 32 bits max
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. if a === 0: return b
    2. if b === 0: return a

    test cases
    1.
        inputs
            a = 1, b = 2
        expected output
            3
    
    2. negative 
        inputs
            a = 3, b = -1
        expected output
            2

5. visualize by drawing and manually solve
6. break into subproblems
    Binary addition

7. algos
    - Binary addition

8. data structures
    - Binary

9. complexity
    Time: O(1)  // 32 bits max
    Space: O(1)
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (a === 0 || b === 0) {
        return a | b
    }

    let res = 0
    let carry = 0
    for (let i = 0; i < 32; i ++) {
        // get most right bit
        const abit = (a >> i) & 1
        const bbit = (b >> i) & 1

        // current bit can be 1 if only one of a1, b1, or carry is 1
        const currentBit = abit ^ bbit ^ carry

        // put bit in correct position, zero fill right
        res = res | (currentBit << i)

        // determine carry.
        carry = (abit & bbit === 1) || (abit | bbit) & carry === 1 ? 1 : 0
    }

    // handle signed, if result is negative in twos complement convert back to signed integer.
    /*
    In JavaScript:

        Numbers are normally 64-bit floating point

        But bitwise operators (~, ^, |, &) convert the number to a signed 32-bit integer

    So when res is larger than 0x7FFFFFFF:

        It represents a negative number in 32-bit two’s complement

        Applying bitwise operators forces JS to reinterpret it as signed

        The result becomes the correct negative integer
    */
    const mask = 0xFFFFFFFF
    if (res > 0x7FFFFFFF) {
        res = ~(res ^ mask);
    }

    return res
};
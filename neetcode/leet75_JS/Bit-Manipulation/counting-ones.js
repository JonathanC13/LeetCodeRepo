// https://leetcode.com/problems/counting-bits/description/?envType=study-plan-v2&envId=leetcode-75
/*
pattern
    0 --> 0     = 0     // base case 1
    1 --> 1     = 1     // base case 2
    2 --> 10    = 1
    3 --> 11    = 2

    4 --> 100   = 1
    5 --> 101   = 2
    6 --> 110   = 2
    7 --> 111   = 3

    8 --> 1000  = 1
    9 --> 1001  = 2
    10 --> 1010 = 2
    11 --> 1011 = 3

    12 --> 1100 = 2
    13 --> 1101 = 3
    14 --> 1110 = 3
    15 --> 1111 = 4

if the num is even: the number of ones is the same as shifted right by 1
    e.g. 10 = 1010  . 2 ones
        1010 >> 1
        = 101, which is 5   . 2 ones

if the num is odd, it is the previous number's number of ones + 1

- Time: O(n)
- Space: O(n)   // n for result Array

*/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = new Array(n + 1).fill(0)
    if (n === 0) {
        return res
    }
    res[1] = 1

    for (let i = 2; i < n + 1; i ++) {
        if (i % 2 === 0) {
            res[i] = res[i / 2]
        } else {
            res[i] = res[i - 1] + 1
        }
    }

    return res
};
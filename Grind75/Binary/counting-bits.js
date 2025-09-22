// https://leetcode.com/problems/counting-bits/description/

/**
0 = 0000
1 = 0001
2 = 0010
3 = 0011

4 = 0100
5 = 0101
6 = 0110
7 = 0111

create Array for previously determined number of 1s
    init state
        arr[0] = 0
        arr[1] = 1

iterate 0 to <= n
    if the current number is even, the number of 1s the the same as Number(nums[i] >> 1)
    else if odd, the number of 1s is previous number's 1s + 1. since odd will always add an additional 1


- Time: O(n)
- Space: O(n)

 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if (n === 0) {
        return [0]
    }
    const res = new Array(n + 1).fill(0)
    res[1] = 1

    for (let i = 2; i <= n; i ++) {
        if (i % 2 === 0) {
            res[i] = res[Number(i >> 1)]
        } else {
            res[i] = res[i - 1] + 1
        }
    }
    return res
};
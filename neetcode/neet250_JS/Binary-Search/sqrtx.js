// https://leetcode.com/problems/sqrtx/description/

/*
explore integers from 1 <= to <= x
if the num * num === x: return Math.floor(num)
else if num * num < x: left = num
else right = num

if after the loop, x has not been specifically found, the answer is Math.floor(mid) because it is the closest.

- Time: O(log n)
- Space: O(1)
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 1
    let right = x
    let mid = 0

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        const sqr = mid * mid

        if (sqr <= x && x < ((mid + 1) * (mid + 1))) {
            return mid
        } else if (sqr < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return Math.floor(mid)
};
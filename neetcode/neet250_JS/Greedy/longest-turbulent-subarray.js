// https://leetcode.com/problems/longest-turbulent-subarray/

/*
Thanks solutions
For each A[i]
inc: The length of current valid sequence which ends with two increasing numbers
dec: The length of current valid sequence which ends with two decreasing numbers

- Time: O(n)
- Space: O(1)

*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let inc = 1
    let dec = 1
    let res = 1
    // compare with previous
    for (let i = 1; i < arr.length; i ++) {
        if (arr[i] < arr[i - 1]) {
            dec = inc + 1
            inc = 1
        } else if (arr[i] > arr[i - 1]) {
            inc = dec + 1
            dec = 1
        } else {
            inc = 1
            dec = 1
        }

        res = Math.max(res, inc, dec)
    }

    return res
};
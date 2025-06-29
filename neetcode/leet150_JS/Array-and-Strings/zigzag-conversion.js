// https://leetcode.com/problems/zigzag-conversion/?envType=study-plan-v2&envId=top-interview-150

/*
create 2D Array with
    rows: numRows
    cols: String

while i < s.length
    // populate vertical down of zigzag
    for (let j = 0; j < Arr.length; j ++) {
        Arr[j] append s[i]
        i += 1
    }

    currCol += 1
    // populate diagonal up to right
    for (let j = arr.length - 2; j > 0; j --) {
        Arr[j] append s[i]
        i += 1
    }

str = ''
for (let i = 0; i < Arr.length; i ++) {
    str += Arr[j]
}

return str

- Time: O(n)    // n = s.length
- Space: O(numRows * n)
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const n = numRows
    const zz = Array.from(new Array(n), (e) => '')
    let i = 0
    while (i < s.length) {
        let r = 0
        while (i < s.length && r < n) {
            zz[r] += s[i]
            i += 1
            r += 1
        }

        r = n - 2
        while (i < s.length && r > 0) {
            zz[r] += s[i]
            i += 1
            r -= 1
        }
    }
    let str = ''
    for (let j = 0; j < n; j ++) {
        str += zz[j]
    }

    return str
};
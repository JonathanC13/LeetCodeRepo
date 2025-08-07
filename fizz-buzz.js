// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const res = new Array()
    for (let i = 1; i <= n; i ++) {
        let str = ''
        if (i % 3 === 0) {
            str += 'Fizz'
        }
        if (i % 5 === 0) {
            str += 'Buzz'
        }
        res.push(str === '' ? i.toString() : str)
    }

    return res
};
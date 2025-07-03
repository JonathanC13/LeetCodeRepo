// https://leetcode.com/problems/happy-number/?envType=study-plan-v2&envId=top-interview-150

/*
create a seen Set

while true
    get the sum of the squares of the digits
        val += n % 10 to get ones place digit ^ 2
        n = floor n / 10 to remove ones place and shift

    if val === 1
        return true
    if seen has val
        return false since it is going to loop

    seen.add(val)

- Time: O(m)    m = max digits
- Space: O(m)
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set()
    while (true) {
        let val = 0
        while (n > 0) {
            val += Math.pow(n % 10, 2)
            n = Math.floor(n / 10)
        }

        if (val === 1) {
            return true
        }
        if (seen.has(val)) {
            console.log(seen)
            return false
        }

        seen.add(val)
        n = val
    }
};
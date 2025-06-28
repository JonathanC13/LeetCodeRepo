// https://leetcode.com/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150

/*
1 <= num <= 3999

create a map:
    key: int
    val: char


tar = num[i]
pow = num.length - i - 1
val = tar * math.pow(10, pow)
while (val !== 0) { // loop for consecutive characters
    key = math.pow(10, pow)
    if (val[0] === 4) {
        res += mapping.get(key) + mapping.get(key * 5)
        val = 0
    else if (val[0] === 9) {
        res += mapping.get(key) + mapping.get(key * 10)
        val = 0
    } else {
        if (val[0] < 5) {
            res += mapping.get(key)
            val -= key
        } else {
            res += mapping.get(key * 5)
            val -= key * 5
        }

        pow = val.length - 1
    }
}

- Time: O(n)
- Space: (1)

*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const mapping = new Map([
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M']
    ])
    let res = ''
    
    let pow = num.toString().length - 1
    let val = num
    while (val !== 0) {
        const key = Math.pow(10, pow)
        const first = Math.floor(val / key)
        // console.log(val, key, first, pow)
        if (first === 4) {
            res += mapping.get(key) + mapping.get(key * 5)
            val -= (first * key)
        } else if (first === 9) {
            res += mapping.get(key) + mapping.get(key * 10)
            val -= (first * key)
        } else {
            if (first < 5) {
                res += mapping.get(key)
                val -= key
            } else {
                res += mapping.get(key * 5)
                val -= key * 5
            }
        }
        pow = val.toString().length - 1
    }

    return res
};
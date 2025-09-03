// https://leetcode.com/problems/string-to-integer-atoi/description/

/**
const min = -1 * pow(2, 31)
const max = pow(2, 31) - 1

n = s.length
l = 0
// ignore leading " "
while (l < n && s[l] === ' ') {
    l += 1
}

// determine signage
negative = false
if (s[l] === '-') {
    negative = true
    l += 1
} else if (s[l] === "+") {
    l += 1
}

total = 0
while (l < n && s[l] !== " " && isNaN(s[l]) === false) {
    total * 10
    total += s.charCodeAt(l) - '0'.charCodeAt(0)    // to get decimal value of the character
    l += 1
}

if (negative) {
    total *= -1
}

if (total < min) {
    return min
} else if (total > max) {
    return max
} else {
    return total
}

- Time: O(n)
- Space: O(1)

 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const min = -1 * Math.pow(2, 31)
    const max = Math.pow(2, 31) - 1

    const n = s.length
    let l = 0
    while (l < n && s[l] === " ") {
        l += 1
    }

    let negative = false
    if (s[l] === '-') {
        negative = true
        l += 1
    } else if (s[l] === '+') {
        l += 1
    }

    let total = 0
    while (l < n && s[l] !== " " && isNaN(s[l]) === false) {
        total *= 10
        total += s.charCodeAt(l) - '0'.charCodeAt(0)
        //console.log(s[l], total)
        l += 1
    }

    if (negative === true) {
        total *= -1
    }

    if (total < min) {
        return min
    } else if (total > max) {
        return max
    } else {
        return total
    }
};
// https://leetcode.com/problems/decode-ways/

/**
recursive backtracking with memo

main
    memo = Array of length s. each cell represents the ways to decode from this index to end

    rec(s, i, memo)
    return memo[0]

rec
    base case 1:
    if (i === s.length) {
        return 1
    }
    if (memo[i] !== -1) {
        return memo[i]
    }

    // prepare backtrack, go to end
    rec(s, i + 1, memo)

    decodeWays = 0

    // 2 paths: 1. take single digit to decode. 2. take 2 digits
    if (s[i] !== "0")
        decodeWays += rec(s, i + 1, memo)

    if (i + 1 < s.length AND (first digit is "1" OR (first digit is "2" and second digit is ["0", "6"]))) {
        decodeWays += rec(s, i + 2, memo)
    }

    memo[i] = decodeWays
    return memo[i]

- Time: O(n)    // without memo. O(n * 2^n)
- Space: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const memo = new Array(s.length).fill(-1)

    rec(s, 0, memo)
    return memo[0]
};

const rec = function(s, i, memo) {
    if (i === s.length) {
        return 1
    }
    if (memo[i] !== -1) {
        return memo[i]
    }

    rec(s, i + 1, memo)

    let decodeWays = 0
    if (s[i] !== "0") {
        decodeWays += rec(s, i + 1, memo)
    }
    
    if (i + 1 < s.length && (s[i] === "1" || (s[i] === "2" && s[i + 1].charCodeAt(0) >= "0".charCodeAt(0) && s[i + 1].charCodeAt(0) <= "6".charCodeAt(0)))) {
        decodeWays += rec(s, i + 2, memo)
    }

    memo[i] = decodeWays
    return decodeWays
}
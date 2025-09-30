// https://leetcode.com/problems/palindrome-pairs/

/**
** first soln, brute force. Of course TLE.
    Time: O(n^2 * avg combined word length)
    Space: O(1)
    for i each word, 
        for each word i + 1
        check palindrome for words[i] + words[j] and words[j] + words[i]

** Time(n*k^2) // n = number of words, * length of a word * length of word to check if palindrome
- Space: O(n * k)
    Put all words in a dictionary (or hashmap) with their index for O(1) lookups.

    For each word, try all possible splits (including empty prefix or suffix).

    Check if the prefix/suffix is a palindrome.

    If so, check if the reverse of the other part exists in the dictionary.

    Collect valid pairs of indices.
 */

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    // return brute(words)

    const wMap = new Map()  // treat each word as the suffix
    for (let i = 0; i < words.length; i ++) {
        wMap.set(words[i], i)
    }
    // console.log(wMap)

    const res = new Set()

    // for each word, treat as the prefix.
    for (let i = 0; i < words.length; i ++) {
        const s = words[i]
        for (let j = 0; j <= s.length; j ++) {  // need === s.length for last split of ("...", "") for full prefix
            const left = s.slice(0, j)
            const leftRev = left.split('').reverse().join('')
            const right = s.slice(j, s.length + 1)
            const rightRev = right.split('').reverse().join('')
            // console.log(left, right)
            // if the left or right substring is a palindrome === true, then check wMap for suffix
            if (left === leftRev && wMap.has(rightRev) && wMap.get(rightRev) !== i) {
                // if the leftRev is matched, then this String is the suffix to the palindrome since the leftRev is concat on the left
                res.add(`${wMap.get(rightRev)},${i}`)
            } 
            // j !== s.length to not check empty split twice
            if (j !== s.length && right === rightRev && wMap.has(leftRev) && wMap.get(leftRev) !== i) {
                // the prefix
                res.add(`${i},${wMap.get(leftRev)}`)
            }
        }
    }
    
    return Array.from(res, (e) => e.split(',').map((v) => Number(v)))
};

const brute = function(words) {
    const n = words.length
    const res = new Array()

    for (let i = 0; i < n; i ++) {
        for (let j = i + 1; j < n; j ++) {
            if (checkPalin(words[i] + words[j])) {
                res.push([i, j])
            }
            if (checkPalin(words[j] + words[i])) {
                res.push([j, i])
            }
        }
    }

    return res
}

const checkPalin = function(s) {
    let l = 0
    let r = s.length - 1

    while (l < r) {
        if (s[l] !== s[r]) {
            return false
        }
        l += 1
        r -= 1
    }

    return true
}
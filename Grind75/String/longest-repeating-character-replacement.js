// https://leetcode.com/problems/longest-repeating-character-replacement/description/

/**
create a Set for the unqiue characters in String s

let maxLen = 0
let maxStr = ''



//Must iterate the String s for the longest substring for each unqiue character as the character that does not need to be replaced
iterate currChar in unqiue chars
    currCharCnt = 0 // for the count of characters that does not need replacement
    sliding window
    l = 0
    iterate r in String s
        if (s[r] === currChar) {
            currCharCnt +1
        } else {
            // needs to use replacement
            // while too many replacments used, must reduce by closing the window from the left
            while (l <= r && (r - l + 1) - currCharCnt > k) {
                if (s[l] === currChar) {
                    currCharCnt -= 1
                }
            }
        }

        if (r - l + 1 > maxLen) {
            maxLen = r - l + 1
            maxStr = s.slice(l, r + 1)
        }
console.log(maxStr)
return maxLen

- Time: O(u * n)    // u = unique chars, n = s.length
- Space: O(u)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const unique = new Set()
    for (let c of s) {
        unique.add(c)
    }

    let maxLen = 0
    let maxStr = ''

    for (let currChar of unique) {
        let currCharCnt = 0
        let l = 0
        for (let r = 0; r < s.length; r ++) {
            if (currChar === s[r]) {
                currCharCnt += 1
            } else {
                while (l <= r && r - l + 1 - currCharCnt > k) {
                    if (s[l] === currChar) {
                        currCharCnt -= 1
                    }
                    l += 1
                }
            }

            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1
                maxStr = s.slice(l, r + 1)
            }
        }
    }
    console.log(maxStr)
    return maxLen
};
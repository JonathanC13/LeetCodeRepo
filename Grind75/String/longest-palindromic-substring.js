// https://leetcode.com/problems/longest-palindromic-substring/

/**
create a 2D Array of dimensions of s.length * s.length, fill with false
    * this is used to track with char indexes create palindromes with eachother

maxLen = 0
maxPalin = ''

iterate row from s.length - 1 to 0  // fill the bottom up so that the smallest component is evaluated first and then the longer strings to be evaluated base extend from previously found palindromes
    tab[r][r] = true, must fill the same char as true before checking palindrome because the center could be even, therefore this would be left of the even(2) char center
    iterate col from s.length - 1 to > row    // eval if this char extends a palindrome, must also start from end towar row since palindrome check
        if (r === c || 
            (
                s[row] === s[col] &&    // of course need to be the same character AND
                (
                    tab[row][col - 1] === true  // middle of palindrome can be extended
                    ||
                    tab[row + 1][col - 1] === true  // extends an existing palindrome
                )
            )
        ) {
            tab[r][c] = true
            if (col - row + 1 > maxLen) {
                maxLen = col - row + 1
                maxPalin = s.slice(row, col + 1)
            }
        }

return maxPalin

- Time: O(n ^ 2)
- Space: O(n ^ 2)
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length
    const tab = new Array(n).fill().map((e) => new Array(n).fill(false))

    let maxLen = 0
    let maxPalin = ''

    for (let r = n - 1; r >= 0; r --) {
        tab[r][r] = true
        for (let c = n - 1; c >= r; c --) {
            if (r === c || (s[r] === s[c] && (tab[r][c - 1] === true || tab[r + 1][c - 1]))) {
                tab[r][c] = true
                if (c - r + 1 > maxLen) {
                    maxLen = c - r + 1
                    maxPalin = s.slice(r, c + 1)
                }
            }
        }
    }
    //console.log(tab)
    return maxPalin
};
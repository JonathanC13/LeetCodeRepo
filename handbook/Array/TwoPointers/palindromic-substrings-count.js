// https://leetcode.com/problems/palindromic-substrings/

/**
1. Assumptions: None

2. Input validation:
    1. Type: s is a String
    2. Length: if s.length === 0: return 0
    3. Content: only lowercase English characters

3. Constraints
    - Time: O(n^2)  // Best theoretical time complexity if n chars compare to n chars
    - Space: O(n^2)   // memo of n * n

4. Visualize by drawing and solve manually.
    Time: O(n^n) soln
    - iterate String s left to right and at each:
        1. check if this index is the odd center of a palindrome expanding left and right
        2. check if even center, take i + 1

    Time: O(n^2) soln
        Dynamic programming by checking if matching character can extend a palindrome

5. Some test cases and edge cases.
    Edge cases:
    1. s.length === 0: return 0
    2. for even center, if i + 1 >= s.length: don't check

    Test cases:
    1. s = ''   // expected: 0
    2. s = 'abc'    // expected: 3
    3. s = 'baaba'  // expected: 8. a, b, a, aba, a, aa, b, baab

6. Break problem into sub problems
    1. Determine if the character matches another in a different index. Use memo that is a 2D array of n*n
    2. evaluate if matching character can extend a palindromee

7. Determine algorithm
    - Dynamic programming with memo to reduce time complexity
    2D memo Array of n*n

    numPalin = 0
    start r from the last row of memo // by starting on the last character, consider the substring to only contain the smallest subproblem
        set memo[r][r] = T  // since it is the same character already
        numPalin += 1
        start c from the last col to r   // in the subproblem, start on the most right character to check if it extends a previous palindrome evaluated in a subproblem. 
            if the char at r and c match
                memo[r][c] = True
                if this char extends a palindrome, where directly previous char has a match, memo[r + 1][c - 1]
                    numPalin += 1
                    memo[r][c] = true

                if this char match extends a palindrome center, memo[r][c-1]
                    numPalin += 1
                    memo[r][c] = true

8. Determine data structures
    - Input Array
    - 2D Array for memo, store the characters that match to another.

9. Complexity
    - Time: O(n^2)
    - Space: O(n^2)
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (typeof s !== 'string') {
        return 0
    }
    if (s.length === 0) {
        return 0
    }
    const regex = /^[a-z]*$/
    if (regex.test(s) === false) {
        return 0
    }
    const n = s.length
    const memo = Array.from(new Array(n), (e) => new Array(n).fill(false))

    let numPalin = 0
    for (let r = n - 1; r >= 0; r --) {
        memo[r][r] = true
        numPalin += 1
        for (let c = n - 1; c > r; c --) {
            if (s[r] === s[c]) {
               
                if (memo[r+1][c-1] === true) {
                    numPalin += 1
                    memo[r][c] = true
                }

                if (memo[r][c-1] === true) {
                    numPalin += 1
                    memo[r][c] = true
                }
            } else {
                memo[r][c] = false
            }
        }
    }
    console.log(memo)
    return numPalin
};
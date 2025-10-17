// https://leetcode.com/problems/longest-palindromic-substring/description/

/**
1. Assumptions
    1. Are there specific characters in the String? Numbers and English chars
    2. Case sensative? Yes

2. Input validation
    ...

3. Time/space constraints
    BTTC: O(n^2)    // n * n/2
    Space: O(n^2)

4. edge cases and test cases
    edge cases
    1. if (s.length < 2) {return s.length}
    test cases
    1. s = 'a'  // expected 'a'
    2. s = 'raceCar'    // expected 'r'
    2. s = 'racecar6'    // expected 'racecar'

5. visualize by drawing and manually solve
6. break into subproblems
    - Initial way: Time: O(n^n)
    for each char, treat as;
        1. odd center, so expand left and right checking palindrome. If match, update maxLen
        2. even center, l = i, r = i + 1 then expand left and right

        while ((l >= 0 || r < s.length) && s[l] === s[r]) {
            if (r - l > maxLen[1] - maxLen[0]) {
                maxLen[0] = l
                maxLen[1] = r
            } 
        }

        extract: s.slice(maxLen[0], maxLen[1] + 1)

    - Dynamic Programming with tabulation to reduce time complexity
    create 2D Array, where r is the starting char of the substring and c are the characters being compared, for each row only compare to c that are c >= r
    start with the smallest subproblem, which is last char which is last r and c then decrement r and compare c from end to c = r + 1. From the end to r + 1 since the last check at c = r + 1 is for the even center, if started from c = r + 1 then the algorithm would be incorrect
    A char extends a palindrome if the chars at r and c match and either;
        1. the char left of c is also a palindrome, so this char can extend. The 'left' char in the Array is arr[r+1][c-1]
        2. An even center palindrome, arr[r][c-1]   it is the same row since if the same char is beside eachother then it is here

7. algo
    - Dynamic programming with tabulation

8. data structures
    - String
    - 2D Array

9. Complexity
    - Time: O(n^2)
    - Space: O(n^2)

 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) {
        return ''
    }

    const n = s.length
    const tab = Array.from(new Array(n), (e) => new Array(n).fill(false))
    let maxStr = s[0]
    for (let r = n - 1; r >= 0; r --) {
        tab[r][r] = true
        for (let c = n - 1; c > r; c --) {
            if (s[r] === s[c] && (tab[r + 1][c - 1] === true || tab[r][c - 1] === true)) {
                tab[r][c] = true
                if (c - r + 1 > maxStr.length) {
                    maxStr = s.slice(r, c + 1)
                }
            }
        }
    }

    return maxStr
};
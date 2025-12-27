// https://leetcode.com/problems/climbing-stairs/description/

/**
1. Assumptions
    1. none

2. input validation
    1. n >= 0

3. time and space constraints
    BTTC: O(n)
    Space: O(n) // n = tabulation

4. edge cases and some test cases
    edge cases
    1. if n <= 2: return n
    test cases
    1. 
        inputs
            n = 3
        expected output
            3
            combos:
                1. 1 + 1 + 1
                2. 1 + 2
                3. 2 + 1

5. visualize by drawing and manually solve
6. break into subproblems
    create tabulation Array of size n + 1
    Know for sure that 
        1. step 0 = 0 combos
        2. step 1 = 1 combo // 1
        3. step 2 = 2 combos    // 1 + 1, 2

    pattern emerges when looking at step 3
        1 + 1 + 1
        1 + 2
        2 + 1

        get # of combos to get to step 1 + # of combos to get to step 2 = # of combos for step 3
        because extending the combos with +1 or +2 does not increase the overall number of combos.

7. algos
    - dynamic programming

8. data structures
    - Arrays

9. complexity
    Time: O(n)
    Space: O(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n
    }

    const tab = new Array(n + 1).fill(0)
    tab[1] = 1
    tab[2] = 2

    for (let i = 3; i < n + 1; i ++) {
        tab[i] = tab[i - 1] + tab[i - 2]
    }

    return tab[n]
};
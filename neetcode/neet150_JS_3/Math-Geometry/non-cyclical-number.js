// https://neetcode.io/problems/non-cyclical-number/question

/**
 * 1. Assumptions
 *  1. positive integer
 * 
 * 2. input validation
 *  - n
 *      - typeof n === 'number'
 *      - n is a positive integer
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(m)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 1: return true
 * 
 *  test cases
 *  1. can reach 1
 *      inputs
 *          n = 100
 *      expected output
 *          true
 *  2. cannot reach 1
 *      inputs
 *          n = 2
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. Method 1: visited
 *      create a visited Set
 *      while n !== 1
 *          perform manipulation
 *          if Set has n: return false since cyclical
 *      return true
 * 
 *  2. Method 2: slow, fast pointers
 *      Either fast will get to 1 or slow and fast meet to indicate cycle.
 * 
 * 7. algos
 *  - given
 * 
 * 8. data structures
 *  - Set
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(m)
 */

class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        // slow, fast
        let slow = n
        let fast = this.algo(n)
        while (slow !== fast) {
            slow = this.algo(slow)
            fast = this.algo(this.algo(fast))
            if (fast === 1) {
                return true
            }
        }

        return fast === 1
    }

    algo(n) {
        let next = 0
        while (n !== 0) {
            const dig = n % 10
            next += dig * dig
            n = Math.floor(n / 10)
        }

        return next
    }

    visitedSoln(n) {
        const visited = new Set()
        while (n !== 1) {
            let next = 0
            while (n !== 0) {
                next +=  (n % 10) * (n % 10)
                n = Math.floor(n / 10)
            }
            if (visited.has(next)) {
                return false
            }
            n = next
            visited.add(next)
        }

        return true
    }
}

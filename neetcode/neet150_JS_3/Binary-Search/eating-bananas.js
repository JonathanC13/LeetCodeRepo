// https://neetcode.io/problems/eating-bananas/question

/**
 * 1. Assumptions
 *  1. Given: Cannot eat from another pile if piles[i] < k
 *  2. It is possible to eat all piles
 * 
 * 2. input validation
 *  1. piles
 *      - piles instanceof Array
 *      - piles.length >= 0
 *      - piles element's are Number
 *  2. h
 *      - typeof h === 'number'
 *      - h >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(log(n)) // binary search to find min k
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if piles.length === 0: return 0
 * 
 *  test cases
 *  1. must eat at max of piles[i]
 *      inputs
 *          piles = [1,2,3,4], h = 4
 *      expected output
 *          4
 *  
 *  2. can eat at slower rate
 *      inputs
 *          piles = [1,2,3,4], h = 6
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  l = 1
 *  r = need to get the max of piles[i] for the max rate
 *  lastValid = 0
 * 
 *  while (l <= r)
 *      mid = floor((r - l) / 2) + l
 * 
 *      If (canFinish(piles, mid, h))
 *          lastValid = mid
 *          try lower rate. r = mid - 1
 *      else
 *          could not finish within h with mid rate, must increase rate. l = mid + 1
 * 
 *  return lastValid
 * 
 * 7. algos
 *  - Binary search
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(log(n))
 *  Space: O(1)
 *          
 */

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        if (piles.length === 0) {
            return 0
        }

        let l = 1
        let r = 1
        for (let b of piles) {
            r = Math.max(r, b)
        }

        let lastValid = 0

        while (l <= r) {
            const m = Math.floor((r - l) / 2) + l
            if (this.canFinish(piles, m, h)) {
                lastValid = m
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return lastValid
    }

    canFinish(piles, rate, h) {
        for (let b of piles) {
            const needed = Math.ceil(b / rate)
            h -= needed

            if (h < 0) {
                // not enough hours to complete all piles
                return false
            }
        }

        return true
    }
}

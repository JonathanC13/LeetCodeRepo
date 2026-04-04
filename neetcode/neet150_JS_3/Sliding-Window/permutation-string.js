// https://neetcode.io/problems/permutation-string/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. s1 and s2
 *      - typeof s1 === 'string'
 *      - s1.length >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(m)  // m = s2.length
 *  Space: O(n) // n = s1.length
 * 
 * 4. edge cases and test cases
 *  edge cases
 *  1. if s1.length > s2.length
 *      return false
 * 
 *  test cases
 *  1. true
 *      inputs
 *          s1 = 'abc', s2 = 'afbactc'
 *      expected output
 *          true
 *  2. false
 *      inputs
 *          s1 = 'abc', s2 = 'asdbfgco'
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblem
 *  since permutation, the order does not matter. iterate s1 and record the frequency of each character in a Map
 *  maintain s2Map for char freq in window
 *  since substring, have a window defined by l and r. Move r forward while char in s1Map and s2Map count < s1Map count until permutation confirmed or char not in s1 that breaks the permutation clear s2Map
 *  maintain need = s1Map.size, have = 0. When the frequency of a character in the window meets what s1 has, have += 1.
 * 
 * 7. algos
 *  - sliding window
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(m)  // m = s2.length
 *  Space: O(n) // n = s1.length
 * 
 *  
 */

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false
        }

        const s1Map = new Map()
        let need = 0
        for (let c of s1) {
            if (!s1Map.has(c)) {
                s1Map.set(c, 0)
                need += 1
            }
            s1Map.set(c, s1Map.get(c) + 1)
        }

        const s2Map = new Map()
        let have = 0
        let l = 0
        let r = 0
        while (r < s2.length) {
            const cR = s2[r]
            if (!s1Map.has(cR)) {
                // continuing permutation impossible, reset window
                s2Map.clear()
                have = 0
                r += 1
                l = r
                continue
            } 
            
            // while no more character uses, so move l forward until can use current char
            while (l <= r && s2Map.get(cR) >= s1Map.get(cR)) {
                const cL = s2[l]
                if (s1Map.get(cL) === s2Map.get(cL)) {
                    // about to decrement, therefore have - 1
                    have -= 1
                }
                s2Map.set(cL, s2Map.get(cL) - 1)
                l += 1
            }
            
            // increment
            if (!s2Map.has(cR)) {
                s2Map.set(cR, 0)
            }
            s2Map.set(cR, s2Map.get(cR) + 1)
            if (s2Map.get(cR) === s1Map.get(cR)) {
                have += 1
            }
            r += 1

            if (have === need) {
                return true
            }
        }

        return false
    }
}

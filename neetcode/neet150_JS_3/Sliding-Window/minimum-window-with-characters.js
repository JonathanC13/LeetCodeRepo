// https://neetcode.io/problems/minimum-window-with-characters/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. s and t
 *      - typeof s === 'string'
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n = s.length
 *  Space: O(m) // m = t.length
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if t.length > s.length: return ""
 * 
 *  test cases
 *  1. exact match
 *      inputs
 *          s = 'abc'
 *          t = 'cba'
 *      expected output
 *          abc
 *  2. substring
 *      inputs
 *          s = 'abcdef'
 *          t = 'bdf'
 *      expected output
 *          bcdef
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  sliding window to track the current substring
 *  create a Map of the characters' frequencies of String t
 *  create variables 'need' and 'have' to easily track if the substring has met all the characters' frequencies of String t
 *  
 *  Once need === have, move left pointer forward while still valid and recording the minimum valid window, then once invalid continue right forward
 * 
 *  * Note: if gets too complicated to mentally track, 
 *      also create a Map for the current Window character frequencies, once window char freq === mapT char freq: have += 1
 *      Then within: while need === have
 *          once window char freq < mapT char freq: have -= 1
 * 
 * 7. algos
 *  - sliding window
 * 
 * 8. data structures
 *  - Arrays
 *  - Hash map
 * 
 * 9. complexity
 *  Time: O(s.length)
 *  Space: O(t.length)
 */

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return ""
        }

        const minSub = [0, 0, Number.POSITIVE_INFINITY]
        const mapT = new Map()
        let need = 0
        for (let i = 0; i < t.length; i ++) {
            if (!mapT.has(t[i])) {
                mapT.set(t[i], 0)
                need += 1
            }
            mapT.set(t[i], mapT.get(t[i]) + 1)
        }
        // console.log(need, mapT)

        let have = 0
        let l = 0
        for (let r = l; r < s.length; r ++) {
            if (!mapT.has(s[r])) {
                continue
            }

            mapT.set(s[r], mapT.get(s[r]) - 1)  // at this point freqency can go negative
            if (mapT.get(s[r]) === 0) {
                have += 1
            }

            // met requirements of t in s
            // l <= r since recording min substring in here, l could === r; e.g. l = 0, r = 0
            while (l <= r && have === need) {
                if (r - l + 1 < minSub[2]) {
                    minSub[0] = l
                    minSub[1] = r
                    minSub[2] = r - l + 1
                }

                if (mapT.has(s[l])) {
                    mapT.set(s[l], mapT.get(s[l]) + 1)
                }

                if (mapT.get(s[l]) > 0) {
                    // since frequency can go negative, only decrement have when > 0
                    have -= 1
                }

                l += 1
            }
        }

        return minSub[2] === Number.POSITIVE_INFINITY ? "" : s.slice(minSub[0], minSub[1] + 1)

    }
}

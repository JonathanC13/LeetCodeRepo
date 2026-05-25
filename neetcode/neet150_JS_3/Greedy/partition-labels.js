// https://neetcode.io/problems/partition-labels/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  - S
 *      - typeof S === 'string'
 *      - regex = '/^[a-z]+$/'
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if S.length === 0: return []
 * 
 *  test cases
 *  1. has > 1 partitions
 *      inputs
 *          S = 'abcdamn'
 *      expected output
 *          [5, 1, 1]
 * 
 *  2. 1 partition
 *      inputs
 *          S = 'abcda'
 *      expected output
 *          [5]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Just like jump game, from window l to r, determine the next window
 *  Create a Map: char: most right index
 *  
 *  start = 0
 *  while (start < S.length)
 * 
 *      For the partition
 *      l = start
 *      r = l
 *      while (r < S.length && l <= r)
 *          farthest = 0
 *          for (l to r)
 *              farthest = max(farthest, Map.get(S[i]))
 * 
 *          l = r + 1
 *          r = farthest
 *          
 *      res.push(r - start + 1)
 * 
 *      start = r + 1
 * 
 * 7. algos
 *  - Greedy, local solution leads to global solution. Within local window, go to the max range.
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        if (S.length === 0) {
            return []
        }

        // Set the last index the char appears
        const jump = new Map()
        for (let i = 0; i < S.length; i ++) {
            jump.set(S[i], i)
        }

        const res = []
        let start = 0
        while (start < S.length) {
            let l = start
            let r = l
            while (r < S.length && l <= r) {
                let farthest = 0
                for (let i = l; i <= r; i ++) {
                    farthest = Math.max(farthest, jump.get(S[i]))
                }

                l = r + 1
                r = farthest
            }

            res.push(r - start + 1)
            start = r + 1
        }

        return res
    }

    partitionLabels2(S) {
        const map = new Map()
        for (let i = 0; i < S.length; i ++) {
            map.set(S[i], i)
        }

        let start = 0
        let r = 0
        const res = new Array()
        const subs = new Array()
        let size = 0
        for (let l = 0; l < S.length; l ++) {
            size += 1

            r = Math.max(r, map.get(S[l]))

            if (l === r) {
                res.push(size)
                subs.push(S.slice(start, r + 1))
                start = r + 1
                size = 0
            }
        }
        console.log(subs)
        return res
    }

}

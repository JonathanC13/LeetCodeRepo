// https://neetcode.io/problems/combination-target-sum-ii/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. candidates
 *      - candidates instanceof Array
 *      - candidates.length >= 0
 *      - candidates elements are Number
 *  2. target
 *      - typeof target === 'number'
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if candidates.length === 0: return []
 * 
 *  test cases
 *  1. duplicate Number
 *      input
 *          candidates = [1,2,2,3], target = 5
 *      expected output
 *          [[2,3]]
 * 
 *  2.  duplicate
 *      input
 *          candidates = [1,2,2,2,3,5], target = 7
 *      expected output
 *          [[1,2,2,2],[2,2,3],[2,5]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. Initial. recursive backtracking
 *      Sort candidates in non-descending order so that the combination is also ordered and when target is met can return. If not ordered and target met there could be a combination that continues and wraps back to target.
 *      When a combination met, convert Array to String and store into the result Set. Since combinations are ordered, a duplicate will not be added.
 *          *better use Map so key is the String and val is the original Array, so that when getting combinations don't need to convert String back to Array and then each element to Number.
 *      Result: TLE. Need to somehow skip re-evaluate duplicate combo in the first place.
 *      Time: O(2^n)    // log(n) + 2^n
 * 
 *  2. 
 *      - definitely still sort so that duplicates are next to eachother.
 *      - include current number if target < 0 and i < cand.length. Once return to choose next since building left to right, the duplicates of current number forward can be skipped over.
 *      e.g. candidates = [1,2,2,2,3,5], target = 7
 *          1,2,2,2. met, return
 *          1,2,2,3. < 0, return. // next immediate i + 1 value to use is 3
 *          1,2,3 ...   // since 1,2,2,.. already checked, move until 3
 *          ...
 *          
 * 
 *      Time: O(n)
 * 
 * 7. algos
 *  - recursive backtracking
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
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        if (candidates.length === 0) {
            return []
        }

        // return this.first(candidates, target)

        candidates.sort((a, b) => a - b)
        const res = new Array()
        this.sec(candidates, 0, target, new Array(), res)
        return res

    }

    sec(candidates, i, target, combo, res) {
        if (target < 0) {
            // since sorted in non-desc, once < 0 cannot get back to 0
            return false
        }
        if (target === 0) {
            res.push([...combo])
            return true
        }
        if (i === candidates.length) {
            return false
        }

        // try to use
        combo.push(candidates[i])
        this.sec(candidates, i + 1, target - candidates[i], combo, res)
        combo.pop()

        // on return, since build left to right. Can skip already used duplicate values.
        const prev = candidates[i]
        i += 1
        while (i < candidates.length && prev === candidates[i]) {
            i += 1
        }
        // continue with new value
        this.sec(candidates, i, target, combo, res)
    }

    first(candidates, target) {
        candidates.sort((a, b) => a - b)

        const map = new Map()
        this.rec(candidates, 0, target, new Array(), map)
        
        const res = new Array()
        for (let [_,v] of map) {
            res.push(v)
        }
        return res
    }

    rec(candidates, i, target, combo, map) {
        if (target < 0) {
            // since ordered, once target < 0 it is impossible to become > 0
            return
        }
        if (target === 0) {
            map.set(combo.join(','), [...combo])
            return
        }
        if (i === candidates.length) {
            return
        }

        // 1. do not include
        this.rec(candidates, i + 1, target, combo, map)

        // 2. use
        combo.push(candidates[i])
        this.rec(candidates, i + 1, target - candidates[i], combo, map)
        combo.pop()

        return
    }
}

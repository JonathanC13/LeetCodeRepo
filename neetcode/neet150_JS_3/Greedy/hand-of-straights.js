// https://neetcode.io/problems/hand-of-straights/question

/**
 * 1. Assumptions
 *  1. hand is divisible by groupSize
 * 
 * 2. input validation
 *  1. hand
 *      - hand instanceof Array
 *      - hand.length >= 0 and divisible by groupSize
 *      - hand's elements are Number
 *  2. groupSize
 *      - typeof groupSize === 'number'
 *      - groupSize > 1
 * 
 * 3. time and space constraints
 *  BTTC: O(n log(n)) // n log(n) to sort
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if hand % groupSize > 0: return false
 * 
 *  test cases
 *  1. can group
 *      inputs
 *          hand = [1,2,2,3,4,3,4,5], groupsSize = 4
 *      expected output
 *          true, [1,2,3,4], [2,3,4,5]
 *  2. cannot group
 *      inputs
 *          hand = [1,2,2,3,4,3,4,6], groupSize = 4
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  sort in non-descending order
 *  Greedy #1, append to group where:
 *      1. empty group
 *      2. group.length < groupSize && value === last group value + 1
 *      3. if cannot fit in any of the groups, return false
 * 
 *  Greedy #2,
 *      sort in non-descending order
 *      create a frequency Map of the values, {1: 1, 2: 2, ...}
 *      iterate hand, i
 *          if map.get(hand[i]) > 0 // can try to start a group
 *              let val = hand[i]
 *              for j = 0; j < groupSize; j ++  // try to make the group
 *                  if (map.get[val] > 0)
 *                      map.set(val, map.get(val) - 1)
 *                      val += 1    // for next in group
 *                  else
 *                      return false    // no next value in straight
 * 
 *  #3 Heap, without sorting use a min prioiry queue to keep the smallest value Time O(1)
 *      create frequency of value in Map
 *      enqueue each key into a min PQ
 * 
 *      while minPQ.size > 0
 *          first = minPQ.front() // to start the group
 *          for (i = first; i < first + groupSize; i ++)
 *              if (map.has(i) === false || map.get(i) === 0)
 *                  return false, cannot continue straight
 * 
 *              map[i] -= 1 // used value
 *              if (map[i] === 0)
 *                  if (i !== minPQ.front())
 *                      return false    // this is stopping since if the min in minPQ is not current i, then the next group will already be invalid
 *                  else: minPQ.pop()
 *                      
 * 
 * 7. algos
 *  - Greedy    // take value and immediately place into a group, local decision is best
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n log(n) + (n * numGroups))
 *  Space: O(n * numGroups)
 */

class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize > 0) {
            return false
        }

        const groups = new Array(hand.length / groupSize).fill().map((e) => new Array())
        hand.sort((a, b) => a - b)

        for (let i = 0; i < hand.length; i ++) {
            let added = false
            for (let j = 0; j < groups.length; j ++) {
                if (groups[j].length === 0 || (groups[j].length < groupSize && hand[i] === 1 + groups[j][groups[j].length - 1])) {
                    groups[j].push(hand[i])
                    added = true
                    break
                }
            }
            if (added === false) {
                return false
            }
        }
        // console.log(groups)
        return true
    }
}

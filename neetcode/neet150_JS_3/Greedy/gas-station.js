// https://neetcode.io/problems/gas-station/question

/**
 * 1. Assumptions
 *  1. Given: at most 1 solution, so there could be more than 1.
 * 
 * 2. input validation
 *  1. gas
 *      - gas instanceof Array
 *      - gas.length >= 0
 *      - gas's elements are Number
 *  2. cost
 *      - cost instanceof Array
 *      - cost.length >= 0
 *      - cost's elements are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. is gas.length === 0 || cost.length === 0: return 0
 * 
 *  test cases
 *  1. can travel around
 *      inputs
 *          gas = [1,2,1,4], cost = [2,1,3,1]
 *      expected output
 *          3
 *  2. cannot travel around
 *      inputs
 *          gas = [1,2,1,4], cost = [2,1,5,1]
 *      expected output
 *          -1
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  To simplify and consider the circular connection, since clockwise; initial start (src) at end and attempt to get to station (dest) as start.
 *  Greedy approach is:
 *  With current gas evaluate if can get to dest + 1 station:
 *  1. if cannot: get more gas by starting the route at src - 1 station
 *  2. else can: consume gas to get to dest + 1
 * 
 * 7. algos
 *  - Greedy. need to understand underlying problem
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1)
 */

class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const n = gas.length
        let start = n - 1
        let dest = 0

        let currGas = gas[start] - cost[start]  // try to get to initial dest
        while (dest < start) {
            if (currGas < 0) {
                // need more gas
                start -= 1
                currGas = currGas + gas[start] - cost[start]    // since need to get from new start to prev start
            } else {
                // has enough gas for the current route to get to current dest. Extend to next dest
                currGas = currGas + gas[dest] - cost[dest]
                dest += 1
            }
        }

        if (currGas < 0) {
            return -1
        } else {
            return start
        }
    }
}

// https://neetcode.io/problems/daily-temperatures/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. temperatures
 *      - temperatures instanceof Array
 *      - temperatures.length >= 0
 *      - temperatures element's are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if temps.length === 0: return []
 * 
 *  test cases
 *  1. warmer days buffered by cooler temps
 *      inputs
 *          temps = [10,4,11,12]
 *      expected output
 *          [2,1,1,0]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  maintain an decreasing monotonic stack (decreasing from bottom up) where elements are [temp, idx].
 *  iterate the temps from the end to 0 so that it can evaluate the top of the Stack for the next warmer temp
 *      while current temp >= Stack top: 
 *          pop() to maintain the monotonic decreasing remove lesser and since iterating backward, the equal and lower temps on the right are irrelevant due to want recent next warmer.
 * 
 *      if not empty
 *          res[i] = top()[idx] - current idx
 *      else
 *          res[i] = 0 since no warmer
 * 
 *      push [current temp, i] onto Stack
 *  
 * 7. algos
 *  - monotonic decreasing stack for "next greater value"
 * 
 * 8. data structures
 *  - Stack with Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        if (temperatures.length === 0) {
            return []
        }
        const n = temperatures.length
        const res = new Array(n).fill(0)
        const dMonoStk = new Array()

        for (let i = n - 1; i >= 0; i--) {
            while (dMonoStk.length > 0 && temperatures[i] >= dMonoStk[dMonoStk.length - 1][0]) {
                dMonoStk.pop()
            }

            if (dMonoStk.length > 0) {
                res[i] = dMonoStk[dMonoStk.length - 1][1] - i
            }

            dMonoStk.push([temperatures[i], i])
        }

        return res
    }
}

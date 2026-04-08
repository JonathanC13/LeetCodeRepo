// https://neetcode.io/problems/car-fleet/question

/**
 * 1. Assumptions
 *  1. Cars have unique starting position, position Array not sorted.
 * 
 * 2. input validation
 *  1. target
 *      - typeof target === 'number'
 *      - target >= 0
 * 
 *  2. position
 *      - position instanceof Array
 *      - position.length >= 0
 *      - position element's are Number >= 0
 * 
 *  3. speed
 *      - speed instanceof Array
 *      - speed.length >= 0
 *      - speed element's are Number >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if position.length <= 1: return position.length
 * 
 *  test cases
 *  1. at least 1 fleet of 2 cars made
 *      inputs
 *          target = 10, position = [0, 2, 4], speed = [1, 5, 2]
 *      expected output
 *          2
 * 
 *  2. a fleet where cars that reach target are: 3. slow, 2. fast blocked by 3, medium blocked by 3 (test 2 does not remove 3)
 *      inputs
 *          target = 10, position = [0, 2, 4], speed = [3, 4, 1]
 *      expected output
 *          1
 * 
 *          3. tot = (10 - 4) / 1 = 6s
 *          2. tot = 2s, merges with 3. Keep 6 on stack, the faster 2s is irrelevant due to merge
 *          1. tot = 3.3, merges with 3 since <= 6s.
 * 
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  maintain a monotonic increasing Stack based on the time required for the car to reach target
 *  since cars cannot pass eachother and position not sorted, need to sort position in increasing order and then speed to match index.
 *  start from the car with the closest to target since those 'block' the lane that may create fleets of > 1 car
 *      calculate the time to target, tot
 *      pop all cars from stack that have a tot >= current tot since this car is faster but since blocked will join the fleet.
 *          save the greatest tot because the slowest creates a fleet due to blocking
 *      push saved tot onto stack
 * 
 *  The number of fleets is the Stack.length since remaining cars are the slowest of a fleet that reached target
 * 
 * 7. algos
 *  - monotonic increasing stack operations.
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
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if (position.length <= 1) {
            return position.length
        }
        const n = position.length

        // pair the index and value
        const arrange = position.map((v, i) => {
            return {i, v}
        })
        // sort values in increasing order
        arrange.sort((a, b) => {
            return a.v - b.v
        })
        // sort position and speed based on arranged index
        position = arrange.map((e) => e.v) // extract value, which is the position already sorted
        speed = arrange.map((e) => speed[e.i]) // get the speed at arranged position's index
        // console.log(position)
        // console.log(speed)
        
        const incStk = new Array()
        for (let i = n - 1; i >= 0; i --) {
            let tot = (target - position[i]) / speed[i]
            while (incStk.length > 0 && tot <= incStk[incStk.length - 1]) {
                tot = Math.max(tot, incStk.pop())
            }

            incStk.push(tot)
        }
        // console.log(incStk)
        return incStk.length
    }
}

// https://neetcode.io/problems/car-fleet

/*
Combine the position and speed into a single Array so that when sorting they are together
Just put in position array. elem = [position, speed]
sort the array by the position in non-ascending order because the front position cars cannot be passed. The behind cars will form a fleet

for each car
    calc the time to finish (target - position) / speed
    if (stack.length > 0 && top stack car time >= this car time) {
        // must create car fleet with slower time car since it is in front
        // don't even need to add to stack. the front car will provide limit
        continue
    }

    stack.push(time)

return stack.length

Time: O(n). n + sort (n log n) + n + n
Space: O(n)

*/

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = Array()

        for (let i = 0; i < position.length; i ++) {
            position[i] = [position[i], speed[i]]
        }

        position.sort((a, b) => {return b[0] - a[0]})

        for (let i = 0; i < position.length; i ++) {
            let time = (target - position[i][0]) / position[i][1]

            if (stack.length > 0 && stack[stack.length - 1] >= time) {
                // time = stack[stack.length - 1]
                continue
            }

            stack.push(time)
        }


        return stack.length
    }
}

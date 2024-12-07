// https://neetcode.io/problems/car-fleet

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((val, i) => {
            return [val, speed[i]]
        })
        pairs.sort((a, b) => {return b[0] - a[0]})

        const stack = new Array()

        for (let i = 0; i < pairs.length; i ++) {
            const time = (target - pairs[i][0]) / pairs[i][1]
            if (stack.length === 0) {
                stack.push(time)
            } else if (time > stack[stack.length - 1]){
                // prev fleet did not catch up to this car, new fleet
                stack.push(time)
            } 
            // else {
                // prev car will reach target faster but since cannot pass, join fleet. don't have to add to stack since already limited.
            // }
        }

        return stack.length
    }
}

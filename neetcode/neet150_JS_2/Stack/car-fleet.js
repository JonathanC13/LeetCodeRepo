// https://neetcode.io/problems/car-fleet

/*
create a 2d array for the cars:
    position
    speed

sort the cars by position in non-descending order. This is because the cars behind cannot pass, need to eval behind cars first

create a Stack with Deque
    it will hold the current time to reach target
    at the end the size will be the number of fleets because:
        at car eval, while the car's time is >= (slower or match) than the top of stack car
            pop stack because since we eval behind position cars first and they cannot pass, since the behind car has lower finish time it means they become a fleet with the slower ahead car.

        if the car is faster (< top time) it means the previous cars cannot be a fleet with it.

- Time: O(n log n)  // n log n for sort + n for iterate cars
- Space: O(n)
*/

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const carsInfo = new Array()
        for (let i = 0; i < position.length; i ++) {
            carsInfo.push([position[i], speed[i]])
        }
        carsInfo.sort((a, b) => a[0] - b[0])

        const stack = new Deque()

        for (let i = 0; i < carsInfo.length; i ++) {
            const carTime = (target - carsInfo[i][0]) / carsInfo[i][1]
            while (stack.size() > 0 && carTime >= stack.back()) {
                stack.popBack()
            }

            stack.pushBack(carTime)
        }

        return stack.size()
    }
}

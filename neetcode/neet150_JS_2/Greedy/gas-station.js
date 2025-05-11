// https://neetcode.io/problems/gas-station

/*
Since moving clockwise
pick the initial starting gas station as length - 1
pick the end gas station to visit as 0
calc the gas in the tank and was gained from start and cost to get to the next station which is end
    currGas = gas[start] - cost[start]

while end < start
    if currGas < 0, it cannot get to the next station
        therefore must choose a new one. To maintain continuity, move the start station -1 to eval to that station can get to current and then also have enough gas to get to next

    else has enough gas from start to curr end
        eval if curr end can get to next station
        move curr end + 1

return if currGas at end is < 0 return -1 since impossible, else return curr start station

- Time: O(n)
- Space: O(1)

*/

class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let start = gas.length - 1
        let end = 0
        let currGas = gas[start] - cost[start]

        while (start > end) {
            if (currGas < 0) {
                start = start - 1
                currGas += gas[start] - cost[start]
            } else {
                currGas += gas[end] - cost[end]
                end = end + 1
            }
        }

        return currGas < 0 ? -1 : start
    }
}

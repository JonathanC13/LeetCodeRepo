// https://neetcode.io/problems/gas-station

/*
two pointer
start at the last station, the next destination station is 0
get the initial tank value = gas[start] - cost[start]

while (start > end)
    if (tank < 0)
        it means, this is not the starting station because it cannot go to the destination station
        start --
        tank += gas[start] - cost[start]
    else
        has enough to go to destination station
        tank += gas[end] - cost[end]
        end ++
    
return if tank < 0 ? -1 : start

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
        let end = 0;
        let tank = gas[start] - cost[start];

        while (start > end) {
            if (tank < 0) {
                start--;
                tank += gas[start] - cost[start];
            } else {
                tank += gas[end] - cost[end];
                end++;
            }
        }
        return tank < 0 ? -1 : start;
    }
}

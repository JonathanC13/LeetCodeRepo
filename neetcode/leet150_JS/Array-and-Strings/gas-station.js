// https://leetcode.com/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150

/*
initially set the start station at length - 1
initially set the end station at 0

initial currGas = gas from start station - cost of curr station to next
while start > end
    if currGas < 0    // to get to next station(s) from start to end < 0, then need more gas so move the start station back one get get more gas
        start -= 1
        currGas = currGas + gas[start] - cost[start]
    else    // have enough gas to current end, so extend end to next station
        currGas = currGas + gas[end] - cost[end]
        end += 1

return gas < 0 ? -1 : start

- Time: O(n)
- Space: O(1)

*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let start = gas.length - 1
    let end = 0

    let currGas = gas[start] - cost[start]
    while (start > end) {
        if (currGas < 0) {
            start = start - 1
            currGas = currGas + gas[start] - cost[start]
        } else {
            currGas = currGas + gas[end] - cost[end]
            end = end + 1
        }
    }
    
    return currGas < 0 ? -1 : start
};
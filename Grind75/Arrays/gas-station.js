// https://leetcode.com/problems/gas-station/description/

/**
To account for the circular route,
set start to gas.length - 1
set end at 0

set currGas = gas[start] - cost[start]  // to link the circle to get to end // Note: if the gas tank has a limit just use Min(currGas, limit)

while (end < start)
    if (currGas < 0) {
        need to move the start back one station since not enough gas to go from current start to travel to end
        start -= 1
        currGas = currGas + gas[start] - cost[start]
    } else {
        currGas = currGas + gas[end] - cost[end]
        end += 1
    }

return currGas >= 0 ? start : -1

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
    while (end < start) {
        if (currGas < 0) {
            start -= 1
            currGas = currGas + gas[start] - cost[start]
        } else {
            currGas = currGas + gas[end] - cost[end]
            end += 1
        }
    }

    return currGas >= 0 ? start : -1
};
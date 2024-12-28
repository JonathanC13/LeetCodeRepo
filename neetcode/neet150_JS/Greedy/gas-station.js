// https://neetcode.io/problems/gas-station

class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        if (gas.reduce((acc, curr) => {return acc + curr}, 0) < cost.reduce((acc, curr) => {return acc + curr}, 0)
        ) {
            return -1
        }

        let chosen = 0
        let reserve = 0
        const n = gas.length

        for (let i = 0; i < n; i ++) {
            reserve += gas[i] - cost[i]

            if (reserve < 0) {
                reserve = 0
                chosen = i + 1
            }
        }

        let i = chosen
        reserve = 0
        do {
            reserve += gas[i] - cost[i]
            if (reserve < 0) {
                return -1
            }
            i = (i + 1) % n
        } while (i !== chosen) {
            reserve += gas[i] - cost[i]
            if (reserve < 0) {
                return -1
            }
            i = (i + 1) % n
        }

        return chosen
    }
}

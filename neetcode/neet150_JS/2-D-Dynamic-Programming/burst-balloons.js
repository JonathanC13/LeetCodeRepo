// https://neetcode.io/problems/burst-balloons

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        // return this.dfsNoDP(0, nums)

        const dp = new Map()
        return this.dfsDP(0, nums, dp)
    }

    dfsDP(i, array, dp) {
        if (array.length === 0) {
            return 0
        }
        if (i >= array.length) {
            return 0
        }
        if (dp.has(`${i}-${array.join(',')}`)) {
            // console.log(dp.get(`${i}-${array.join(',')}`))
            return dp.get(`${i}-${array.join(',')}`)
        }


        // burst
        let burst = (i - 1 < 0 ? 1 : array[i - 1]) * array[i] * (i + 1 >= array.length ? 1 : array[i + 1])
        burst += this.dfsDP(0, [...array.slice(0, i), ...array.slice(i + 1)], dp)

        // no burst
        let nonBurst = this.dfsDP(i + 1, array, dp)

        dp.set(`${i}-${array.join(',')}`, Math.max(burst, nonBurst))

        return dp.get(`${i}-${array.join(',')}`)
    }

    dfsNoDP(i, array) {
        if (array.length === 0) {
            return 0
        }
        if (i >= array.length) {
            return 0
        }


        // burst
        let burst = (i - 1 < 0 ? 1 : array[i - 1]) * array[i] * (i + 1 >= array.length ? 1 : array[i + 1])
        burst += this.dfsNoDP(0, [...array.slice(0, i), ...array.slice(i + 1)])

        // no burst
        let nonBurst = this.dfsNoDP(i + 1, array)

        return Math.max(burst, nonBurst)
    }
}

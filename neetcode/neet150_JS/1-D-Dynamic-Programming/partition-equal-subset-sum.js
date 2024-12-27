// https://neetcode.io/problems/partition-equal-subset-sum

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((accum, curr) => {return accum + curr}, 0)

        if (sum % 2 !== 0) {
            return false
        }
        const target = sum / 2
        const n = nums.length
        const dp = Array(n + 1).fill().map((e) => {return Array(target + 1).fill(false)})

        for (let i = 0; i < n + 1; i ++) {
            dp[i][0] = true
        }

        for (let i = 1; i < n + 1; i ++) {
            for (let j = 1; j < target + 1; j ++) {
                if (nums[i - 1] <= j) {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
                } else {
                    dp[i][j] = dp[i - 1][j]
                }
            }
        }
        
        for (let r = 0; r < n + 1; r ++) {
            console.log(dp[r])
        }

        // const res = []
        // let subset = []
        // for (let i = 1; i < n + 1; i ++) {
        //     subset = []
        //     if (dp[i][target]) {
        //         let j = i
        //         let sum = target
        //         while (sum > 0) {
        //             if (dp[j][sum] === false) {
        //                 break
        //             }
        //             subset.push(nums[j - 1])
        //             sum -= nums[j - 1]
        //             j = j - 1
        //         }
        //         console.log(i, ', ', sum)
        //         if (sum != 0) {continue}

        //         res.push([...subset])
                
        //         if (res.length === 2) 
        //         {
        //             break
        //         }
        //     }
        // }
        // console.log(res)
        return dp[n][target]
    }
}

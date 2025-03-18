// https://neetcode.io/problems/target-sum

/*
method 1: recursive dfs
    each step use the current value as positive or negative in the equation
    base case 1: if i === nums.length
        return target === 0 ? 1 : 0

    let ways = 0
    2 options
    1. positive
    ways += this.dfs(nums, target + nums[i], i + 1)
    2. negative
    ways += this.dfs(nums, target - nums[i], i + 1)

    return ways

    -Time: O(2^(n)), n = nums.length
    -Space: O(n)

method 2: dfs with memo
    memo 2D array will be:
        rows of length nums.length
        cols of length 2 * totalSum + 1. fill with Number.NEGATIVE_INFINITY
            explaination
                target is at 2 * totalSum + 1
                since the path sum can go negative, to save it in the memo array offset it into positive. therefore the 0 is at totalSum

        -Time: O(n * m), m = totalSum of nums
        -Space: O(n * m)

method 3: bottom Up with tabulation
    2d array of rows length nums.length + 1 and cols of Map
        The map key will be the num's sum when pos/neg, the value will be the number of combos to target

    init dp state dp[0][0] = 1
    final answer will be at dp[n][target] || if not exist then 0
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        // return this.initdfs(nums, target, 0)
        // return this.topDown(nums, target)
        return this.bottomUp(nums, target)
    }

    topDown(nums, target) {
        const totalSum = nums.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        );
        const memo = Array.from(new Array(nums.length), (e) => new Array(2 * totalSum + 1).fill(Number.NEGATIVE_INFINITY))
        
        return this.dfs(nums, target, 0, 0, memo, totalSum)
    }

    bottomUp(nums, target) {
        const n = nums.length;
        let dp = Array.from({ length: n + 1 }, () => ({}));
        dp[0][0] = 1;

        for (let i = 0; i < n; i++) {
            for (let total in dp[i]) {                            
                total = Number(total);
                let count = dp[i][total];
                dp[i + 1][total + nums[i]] = (dp[i + 1][total + nums[i]] || 0) + count;
                dp[i + 1][total - nums[i]] = (dp[i + 1][total - nums[i]] || 0) + count;
            }
        }
        console.log(dp)
        return dp[n][target] || 0;
    }

    dfs(nums, target, i, curTotal, memo, totalSum) {
        if (i === nums.length) {
            return target === curTotal ? 1 : 0
        }
        if (memo[i][curTotal + totalSum] !== Number.NEGATIVE_INFINITY) {
            return memo[i][curTotal + totalSum]
        }

        memo[i][curTotal + totalSum] = this.dfs(nums, target, i + 1, curTotal + nums[i], memo, totalSum) + this.dfs(nums, target, i + 1, curTotal - nums[i], memo, totalSum)
        return memo[i][curTotal + totalSum]
    }

    initdfs(nums, target, i) {
        if (i === nums.length) {
            return target === 0 ? 1 : 0
        }

        let ways = this.initdfs(nums, target + nums[i], i + 1)

        ways += this.initdfs(nums, target - nums[i], i + 1)

        return ways
    }
}

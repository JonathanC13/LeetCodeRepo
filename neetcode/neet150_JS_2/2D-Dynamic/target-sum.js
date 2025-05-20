// https://neetcode.io/problems/target-sum

/*
* recursive dfs
    base case 1: if i === nums.length: return sum === target ? 1 : 0

    each call has 2 paths
    1. add the current value
    2. subtract the current value

- Time: O(n 2^n)    // n = nums.length
- Space: O(n)

* reduce time complexity with dynamic programming memo
iterate the nums to get the total
memo = 
    rows are the indexes of nums
    cols are (total * 2) + 1    because need to account for the negative sum. so 0 is at total / 2
    fill with -1

    each cell represents the number of combos to target from that number (use to add + use to substract)

- Time: O(n * target)
- Space: O(n * target * 2)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        // return this.dfs(nums, target, 0, 0)
        let total = 0
        for (let i = 0; i < nums.length; i ++) {
            total += nums[i]
        }

        const memo = Array.from(new Array(nums.length), (e) => new Array((total * 2) + 1).fill(-1))
        const res = this.dfsMemo(nums, target, 0, 0, memo, total)
        console.log(memo)
        return res
    }

    dfsMemo(nums, target, i, sum, memo, mid) {
        if (i === nums.length) {
            return sum === target ? 1 : 0
        }
        if (memo[i][sum + mid] !== -1) {
            return memo[i][sum + mid]
        }

        let combos = this.dfsMemo(nums, target, i + 1, sum + nums[i], memo, mid)
        combos += this.dfsMemo(nums, target, i + 1, sum - nums[i], memo, mid)
        memo[i][sum + mid] = combos
        return combos
    }

    dfs(nums, target, i, sum) {
        if (i === nums.length) {
            return sum === target ? 1 : 0
        }

        let combos = this.dfs(nums, target, i + 1, sum + nums[i])
        combos += this.dfs(nums, target, i + 1, sum - nums[i])
        return combos
    }
}

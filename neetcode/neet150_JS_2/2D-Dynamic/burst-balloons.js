// https://neetcode.io/problems/burst-balloons

/*
recursive dfs
    base case 1: if nums.length === 0: return 0

    max = 0
    iterate the nums
        max = max(max, left * curr * right + this.dfs(nums with current index removed))

    return max

- Time: O(n * 2^n)
- Space: O(n * 2^n)

* reduce time complexity with 2D dp with top down memo
memo will be a Map
    key = stringified array
    value = max product that combination onward produces

- Time: O(n ^ 2)
- Space: O(n ^ 2)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const memo = new Map()
        const res = this.dfs(nums, memo)
        console.log(memo)
        return res
    }

    dfs(nums, memo) {
        if (nums.length === 0) {
            return 0
        }
        const key = nums.join(',')
        if (memo.has(key)) {
            console.log('hit: ', key)
            return memo.get(key)
        }

        let max = 0
        for (let i = 0; i < nums.length; i ++) {
            const arr = nums.slice(0, i)
            arr.push(...nums.slice(i + 1))
            max = Math.max(max, (i - 1 < 0 ? 1 : nums[i - 1]) * nums[i] * (i + 1 >= nums.length ? 1 : nums[i + 1]) + this.dfs(arr, memo))
        }

        memo.set(key, max)
        return max
    }
}

// https://neetcode.io/problems/top-k-elements-in-list

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === 0) {
            return []
        }

        const freqs = new Map()
        const ascCounts = Array(nums.length + 1).fill().map((e) => {return []})

        for (let n of nums) {
            freqs.set(n, (freqs.get(n) || 0) + 1)
        }

        for (let [k, v] of freqs.entries()) {
            ascCounts[v].push(k)
        }

        const res = []

        for (let i = nums.length; i >= 0; i --) {
            for (let j of ascCounts[i]) {
                res.push(j)
                k -= 1
                if (k <= 0) {
                    return res
                }
            }
        }

        return res
    }
}

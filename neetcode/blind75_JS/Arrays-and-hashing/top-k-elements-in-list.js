// https://neetcode.io/problems/top-k-elements-in-list

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const buckets = Array(nums.length + 1).fill().map(v => []);

        // record counts of each number
        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        // unload the counts into the buckets, where the index is the count and the value is the number
        for (const key in count) {
            buckets[count[key]].push(key)
        }

        // starting from the end of the buckets, since the higher counts are in higher indexes,
        // When encounter an index that is not empty, push to the result
        const res = []
        
        for (let i = buckets.length - 1; i >= 0; i --) {
            for (let num of buckets[i]) {
                res.push(num)
                if (res.length === k) {
                    return res;
                }
            }
        }
        return res;
    }
}

// https://neetcode.io/problems/top-k-elements-in-list

/*
edge case 1: if k === 0 or nums.length === 0: return []
edge case 2: if nums.length <= k: return nums

create a Map and it will hold key-val pairs
    key: value in nums
    value: frequency

iterate nums    // time: n
    increrment frequency in Map

const countsArr = []
iterate the Map // time: m, m = unique values
    push each [k, v] pair into countsArr

sort the countsArr in non ascending order by index 1. -Time: m log m. space: O(log m)

return countsArr.slice(0, k).map(pair => pair[1]);

- Time: O(m log m). n + m + m log m
- Space: O(m)

*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === 0 || k === 0) {
            return []
        }
        if (nums.length <= k) {
            return nums
        }

        const freqMap = new Map()
        for (let i = 0; i < nums.length; i ++) {
            if (freqMap.get(nums[i]) === undefined) {
                freqMap.set(nums[i], 0)
            }
            freqMap.set(nums[i], freqMap.get(nums[i]) + 1)
        }

        const freqArr = []
        for (let [k, v] of freqMap.entries()) {
            freqArr.push([k, v])
        }

        freqArr.sort((a, b) => b[1] - a[1])

        return freqArr.slice(0, k).map(pair => pair[0]);
    }
}

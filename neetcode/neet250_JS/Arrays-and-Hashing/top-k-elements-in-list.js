// https://neetcode.io/problems/top-k-elements-in-list

/*
create a Map to maintain the number and its freqency
let max freq = 0
iterate nums to update the frequencies
    track the max freq seen

create an 2D Array with length max + 1 and buckets of Array
iterate the Map k, v
    Array[v].push(k)

const res = []
for (let i = Array.length - 1; i >= 0; i --) {
    for (let j = 0; j < Array[i].length; j ++) {
        res.push(Array[i][j])
        k -= 1
        if (k === 0) {
            return res
        }
    }
}

Time: O(n). n + m + m*n ~= n. max time is nums.length
Space: O(n). m + n + res ~= n
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map()
        let maxFreq = 0
        
        for (let i = 0; i < nums.length; i ++) {
            freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
            maxFreq = Math.max(maxFreq, freq.get(nums[i]))
        }

        const freqArr = new Array(maxFreq + 1).fill().map((e) => {return Array(0)})
        for (let [k, v] of freq.entries()) {
            freqArr[v].push(k)
        }

        const res = []
        for (let i = freqArr.length - 1; i >= 0; i --) {
            for (let j = 0; j < freqArr[i].length; j ++) {
                res.push(freqArr[i][j])
                k -= 1
                if (k === 0) {
                    return res
                }
            }
        }

        return res
    }
}

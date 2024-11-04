// https://neetcode.io/problems/longest-consecutive-sequence

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0
        }

        const map = new Map()
        let maxSeq = 0

        for (let num of nums) {
            if (!map.has(num)) {
                // get current streak of adj and + 1 for itself.
                map.set(num, (map.get(num - 1) || 0) + (map.get(num + 1) || 0) + 1)
                // update left end of streak if exist
                map.set(num - (map.get(num - 1) || 0), map.get(num))
                map.set(num + (map.get(num + 1) || 0), map.get(num))
                maxSeq = Math.max(maxSeq, map.get(num))
            }
        }

        return maxSeq

        // doesn't work for negative values
        // let hashLeng = 0

        // // for (let i of nums) {
        // //     Math.max(hashLeng, nums[i])
        // // }
        // hashLeng = Math.max(...nums)

        // const hashTable = Array(hashLeng + 1).fill(false)

        // // store 1 in the index of the hash table indicated by the value of num
        // for (let num of nums) {
        //     hashTable[num] = true
        // }

        // // now the consecutive sequence is the neighbors of 1s in the hash table
        // let maxSeq = 0
        // let localLen = 0
        // for (let i = 0; i < hashLeng + 1; i++) {
        //     if (hashTable[i]){
        //         localLen = localLen + 1
        //         maxSeq = Math.max(maxSeq, localLen)
        //     } else {
        //         localLen = 0
        //     }
        // }

        // return maxSeq
    }
}

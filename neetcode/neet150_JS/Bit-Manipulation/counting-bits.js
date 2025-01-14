// https://neetcode.io/problems/counting-bits

class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const arr = Array(n + 1).fill(0)
        for (let i = 1; i < arr.length; i ++) {
            let ones = 0
            let num = i
            while (num !== 0) {
                ones += 1 
                num = num & (num - 1)
            }
            arr[i] = ones
        }

        return arr
    }
}

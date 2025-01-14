// https://neetcode.io/problems/number-of-one-bits

class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {

        let num = n
        let cnt = 0
        while (num !== 0) {
            if (num & 1 === 1) {
                cnt += 1
            }
            num = num >> 1
        }
        console.log(cnt)

        let bin = []
        let nn = n
        let cc = 0
        while (nn !== 0) {
            let rem = nn % 2
            bin.push(rem)
            if (rem === 1) {
                cc += 1
            }
            nn = Math.floor(nn / 2)
        }
        console.log(bin.reverse().join(''))
        return cc
    }
}

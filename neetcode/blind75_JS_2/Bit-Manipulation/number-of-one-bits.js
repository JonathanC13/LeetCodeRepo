// https://neetcode.io/problems/number-of-one-bits

/*
while converting to binary rep, count the 1 bits

bit = currN (remainder op %) 2
currN = currN (floor /) 2
*/

class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        if (n === 0) {
            return 0
        }

        let count = 0
        let binaryRep = ''

        while (n !== 0) {
            let bit = n % 2
            if (bit === 1) {
                count += 1
            }

            binaryRep += bit.toString()

            n = Math.floor(n / 2)
        }

        console.log(binaryRep.reverse)
        return count
    }
}

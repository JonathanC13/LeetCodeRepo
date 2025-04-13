// https://neetcode.io/problems/reverse-bits

/*
edge case 1: if n === 0: return 0

while determining the binary rep of the number, shift it to the right position that is opposite

- Time: O(1)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        
        let res = 0;
        for (let i = 0; i < 32; i++) {
            const bit = (n >>> i) & 1   // take the first bit
            res += bit << (31 - i)      // shift that first bit to the position and add
        }
        
        return res >>> 0;   // to ignore signed.
    }
}

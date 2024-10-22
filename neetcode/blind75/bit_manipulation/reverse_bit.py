# https://neetcode.io/problems/reverse-bits

class Solution:
    def reverseBits(self, n: int) -> int:
        res = 0
        # just appending to a string will already reverse it
        for i in range(32):
            # get the current bit from the original by shifting it to the front and then & 1 to get it
            bit = (n >> i) & 1
            # shift the bit to the unused left bit and simply add. 
            res += (bit << (31 - i))

        return res
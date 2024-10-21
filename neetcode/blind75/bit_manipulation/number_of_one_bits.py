# https://neetcode.io/problems/number-of-one-bits

class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        while (n != 0):
            if (n % 2 == 1):
                count += 1

            n = math.floor(n/2)

        return count
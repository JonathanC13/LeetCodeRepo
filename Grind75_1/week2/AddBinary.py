"""
https://leetcode.com/problems/add-binary/
"""

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        carry = 0
        aIdx = len(a) - 1
        bIdx = len(b) - 1

        result = ''

        while (aIdx >= 0 or bIdx >= 0):
            if (aIdx < 0 or bIdx < 0):
                if (aIdx >= 0):
                    posSum = int(a[aIdx]) + carry
                elif (bIdx >= 0):
                    posSum = int(b[bIdx]) + carry
            else:
                posSum = int(a[aIdx]) + int(b[bIdx]) + carry

            result = str(int(posSum % 2)) + result
            carry = int(posSum / 2)

            aIdx = aIdx - 1
            bIdx = bIdx - 1

        if (carry == 1):
            result = '1' + result

        return result
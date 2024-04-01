"""
https://leetcode.com/problems/first-bad-version/description/
"""

# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:

    def firstBadVersionRec(self, left: int, right: int) -> int:
        # print (str(left) + ' : ' + str(right))
        # base case
        if (left >= right):
            return left

        mid = left + floor((right - left) / 2)

        if (isBadVersion(mid)):
            return self.firstBadVersionRec(left, mid)
        else:
            return self.firstBadVersionRec(mid + 1, right)


    def firstBadVersionStd(self, n: int) -> int:
        a = 1
        # use b to keep track of earliest bad version found so far
        b = n

        # searching for left-most bad version
        while (a < b):
            mid = floor(a + ((b - a) / 2))
            if (isBadVersion(mid)):
                b = mid
            else:
                # mid is a good version, start from one to the right
                a = mid + 1
        
        return a

    def firstBadVersion(self, n: int) -> int:
        # return self.firstBadVersionStd(n)
        return self.firstBadVersionRec(1, n)
            
            
        
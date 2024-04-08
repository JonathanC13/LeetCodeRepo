"""
https://leetcode.com/problems/majority-element/
"""

class Solution:
    def majorityElementNonO1Space(self, nums: List[int]) -> int:
        dictNums = {}
        lenOfList = len(nums)

        for n in nums:
            if (n not in dictNums):
                dictNums[n] = 1
            else:
                dictNums[n] = dictNums[n] + 1

            if (dictNums[n] > (lenOfList // 2)):
                return n

        return -1

    # after reading https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
    def majorityElementO1Space(self, nums: List[int]) -> int:

        lenOfList = len(nums)
        votes = 0
        majorOccur = 0
        majorCand = -1

        # find the majority candidate
        for n in nums:
            if (votes == 0):
                # switch majority candidate
                majorCand = n
                votes = 1
            elif (n == majorCand):
                # if next element is same value as candidate, add 1 vote
                votes = votes + 1
            else:
                votes = votes - 1

        # since Description states that a majority element always exists can just return here, but in the case where it is not guarenteed, must count occurances
        return majorCand

        # check if the majority candiate is more than n//2 by counting the occurances within the list
        for n in nums:
            if (n == majorCand):
                majorOccur = majorOccur + 1

        # return result
        if (majorOccur > (n//2)):
            return majorCand
        else:
            return -1

        
    
    def majorityElement(self, nums: List[int]) -> int:
        #return(self.majorityElementNonO1Space(nums))
        return(self.majorityElementO1Space(nums))
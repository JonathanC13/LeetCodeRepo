"""
https://leetcode.com/problems/product-of-array-except-self/
"""
# TODO

class Solution:

    # note: if product of array but include index i, it's just product of entire array. Mind open

    def productExceptSelfTest(self, nums: List[int]) -> List[int]:

        lenNums = len(nums)

        retArrPrefix = [1] * lenNums
        retArrSuffix = [1] * lenNums

        # prefix products excluding current value at i
        for i in range(1, lenNums):
            retArrPrefix[i] = retArrPrefix[i - 1] * nums[i - 1]

        print(retArrPrefix)

        # suffix product excluding current value at i
        for i in range(1, lenNums):
            retArrSuffix[lenNums - i - 1] = retArrSuffix[lenNums - i] * nums[lenNums - i]

        print(retArrSuffix)

        # include
        retArrPrefix = nums[::]
        retArrSuffix = nums[::]

        # prefix products include current value at i
        for i in range(1, lenNums):
            retArrPrefix[i] = retArrPrefix[i - 1] * retArrPrefix[i]

        print(retArrPrefix)

        # suffix product include current value at i
        for i in range(1, lenNums):
            retArrSuffix[lenNums - i - 1] = retArrSuffix[lenNums - i] * nums[lenNums - i - 1]

        print(retArrSuffix)
        #

        return nums
        
    


    def productExceptSelf(self, nums: List[int]) -> List[int]:
        #return self.productExceptSelfTest(nums)
        #return self.productExceptSelfOn(nums)
        # need to multiply prefix and suffix array for result for each index, combine iterating for O(n)
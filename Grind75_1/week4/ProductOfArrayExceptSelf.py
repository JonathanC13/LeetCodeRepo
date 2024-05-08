"""
https://leetcode.com/problems/product-of-array-except-self/
"""
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
            retArrSuffix[lenNums - i - 1] = retArrSuffix[lenNums - i] * retArrSuffix[lenNums - i - 1]

        print(retArrSuffix)
        #

        return nums
        

    # Time complexity of O(n) and without using division
    # O(2*n) ~ O(n)
    def productExceptSelfOn(self, nums: List[int]) -> List[int]:

        lenNums = len(nums)

        arrPrefixProd = [1] * lenNums
        arrSuffixProd = [1] * lenNums

        # fill the arrays for the prefix and suffix products
        for x in range(1, lenNums):
            
            # since the previous product did not include the value at the previous index, multiply it
            arrPrefixProd[x] = arrPrefixProd[x - 1] * nums[x - 1]

            # suffix will need to start at the 2nd last index
            arrSuffixProd[lenNums - x - 1] = arrSuffixProd[lenNums - x] * nums[lenNums - x]

        #print(arrPrefixProd)
        #print(arrSuffixProd)

        # to get the product at each index, prefix[i] * suffix[i]
        for i in range(lenNums):
            nums[i] = arrPrefixProd[i] * arrSuffixProd[i]


        return nums


    # O(1), only make 1 extra array
    # The output array does not count as extra space for space complexity analysis
    def productExceptSelfO1(self, nums: List[int]) -> List[int]:
        lenNums = len(nums)

        retArr = [1] * lenNums

        # storage for previous/post product
        prefProd = 1
        postProd = 1

        for i in range(lenNums):
            retArr[i] = retArr[i] * prefProd
            # save the product in the index for next index use
            prefProd = prefProd * nums[i]

            retArr[lenNums - i - 1] = retArr[lenNums - i - 1] * postProd
            postProd = postProd * nums[lenNums - i - 1]

        return retArr


    def productExceptSelf(self, nums: List[int]) -> List[int]:
        #return self.productExceptSelfTest(nums)
        #return self.productExceptSelfOn(nums)
        return self.productExceptSelfO1(nums)
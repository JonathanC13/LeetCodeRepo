"""
https://leetcode.com/problems/3sum/
"""

class Solution:

    def threeSumMap(self, nums: List[int]) -> List[List[int]]:
        
        nums.sort()

        lenOfNums = len(nums)

        valueMap = {}
        
        retList = []

        # fill map with all nums and indexes, if dups the latest index is saved
        for x in range(lenOfNums):
            valueMap[nums[x]] = x
        
        x = 0
        while (x < lenOfNums - 2):
            # lock first value
            # -2 due to nested loop index y = x + 1 and valid 3rd value is > than index y

            if (nums[x] > 0):
                # since sorted asc, there will be no negative numbers after to reduce to sum of 0
                break

            y = x + 1
            while (y < lenOfNums - 1):
                # - 1 due to 3rd valid value is at > index y
                # search for 2nd and 3rd to make sum = 0
                iDiff = (-1) * (nums[x] + nums[y])

                if (iDiff in valueMap and valueMap[iDiff] > y):
                    # if the iDiff exists and it's index is greater than the 2nd index (so that it doesn't use previously evaluated indexes)
                    retList.append([nums[x], nums[y], iDiff])

                # move to the last occurance of it's dup value
                y = valueMap[nums[y]]
                y = y + 1

            # move to the last occurance of it's dup value
            x = valueMap[nums[x]]
            x = x + 1

        return retList


    def threeSum2P(self, nums: List[int]) -> List[List[int]]:

        lenOfNums = len(nums)

        if (lenOfNums < 3):
            return []

        nums.sort()

        if (nums[0] > 0):
            return []

        retList = []

        x = 0
        while (x < lenOfNums - 2):
            if (nums[x] > 0):
                break

            # if the locked value has already been evaluated, move up until next value appears.
            if (x > 0 and nums[x] == nums[x - 1]):
                x = x + 1
                continue

            left = x + 1
            right = lenOfNums - 1
            
            while (left < right):
                iDiff = nums[x] + nums[left] + nums[right]
                #print (str(x) + " : " + str(left) + ", " + str(right))
                if (iDiff > 0):
                    # need a less positive value, move right down
                    right = right - 1
                elif (iDiff < 0):
                    # need more positive value
                    left = left + 1
                else:
                    # 0
                    retList.append([nums[x], nums[left], nums[right]])

                    leftNum = nums[left]
                    rightNum = nums[right]

                    while (left < right and nums[left] == leftNum):
                        # keep moving if dup
                        left = left + 1

                    while (left < right and nums[right] == rightNum):
                        right = right - 1

            x = x + 1

        return retList


    def threeSum(self, nums: List[int]) -> List[List[int]]:
        #return self.threeSumMap(nums)
        return self.threeSum2P(nums)
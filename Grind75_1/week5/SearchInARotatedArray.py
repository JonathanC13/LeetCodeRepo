"""
https://leetcode.com/problems/search-in-rotated-sorted-array/description/
"""

class Solution:
    def searchMine(self, nums: List[int], target: int) -> int:

        lenNums = len(nums)

        minIdx = lenNums - 1

        def binarySearchPivotIdx(left: int, right: int) -> None:

            nonlocal minIdx

            if (left > right):
                return

            mid = int((left + right) / 2)

            if (nums[mid] < nums[minIdx]):
                minIdx = mid

                binarySearchPivotIdx(left, mid - 1)
            else:
                binarySearchPivotIdx(mid + 1, right)


        def binarySearchTarget(left: int, right: int) -> int:

            if (left > right):
                return -1

            # calculated mid
            mid = int((left + right) / 2)
            rotatedMid = int(mid + minIdx) % lenNums

            if (nums[rotatedMid] == target):
                return rotatedMid
            elif (nums[rotatedMid] < target):
                return binarySearchTarget((mid + 1), right)
            else:
                return binarySearchTarget(left, (mid - 1))


        binarySearchPivotIdx(0, lenNums - 1)

        return binarySearchTarget(0, lenNums - 1)

    
    def search(self, nums: List[int], target: int) -> int:
        return self.searchMine(nums, target)
# https://neetcode.io/problems/find-minimum-in-rotated-sorted-array

# binary search solutions mean to attempt to halve the problem set each iteration.

class Solution:
    def findMin(self, nums: List[int]) -> int:
        
        left = 0
        right = len(nums) - 1
        minVal = float('inf');

        while left <= right:
            mid = left + (right - left) // 2
            minVal = min(minVal, nums[mid])

            if (nums[mid] > nums[right]):
                # priority to go right
                left = mid + 1
            else:
                right = mid - 1

        return minVal


        # left = 0
        # right = len(nums) - 1
        # minVal = float('inf');

        # while left <= right:
        #     mid = (left + right) // 2
        #     minVal = min(minVal, nums[mid])

        #     if (nums[left] < nums[right]):
        #         # go left
        #         right = mid - 1

        #     else:
        #         # go right
        #         left = mid + 1

        # return minVal


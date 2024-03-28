"""
https://leetcode.com/problems/binary-search/description/
"""

class Solution:

    def binarySearchRec(self, nums: List[int], left: int, right: int, target: int) -> int:
        # recursive method
        # base case
        if (left <= right):

            # get the mid index to split the array by
            mid = left + floor((right - left) / 2)

            # check if matches the value of the target
            if (nums[mid] == target):
                return mid
            elif (nums[mid] > target):
                # search the left side
                return self.binarySearchRec(nums, left, mid - 1, target) 
            else:
                # search the right side
                return self.binarySearchRec(nums, mid + 1, right, target)
        else:
            return -1
    
    def binarySearchIt(self, nums: List[int], target: int) -> int:
        
        left = 0
        right = len(nums) - 1

        while (left <= right):
            mid = left + floor((right - left) / 2)

            if (nums[mid] == target):
                return mid
            elif (nums[mid] > target):
                # search left
                right = mid - 1
            else:
                # search right
                left = mid + 1

        return -1

    def search(self, nums: List[int], target: int) -> int:
        return self.binarySearchRec(nums, 0, len(nums) - 1, target)
        #return self.binarySearchIt(nums, target)

"""
recursive forward and base case is if at end and target not found

[-1,0,3,5,9,12]
target = 9

binarySearchRec -> int
left = 0
right = 5
mid = 2
[-1,0,{3},5,9,12]
nums[mid] < target, search right

    call binarySearchRec -> int and put on return stack
    left = 3
    right = 5
    mid = 4
    [-1,0,3,5,{9},12]
    match
    return index 4

return index 4
"""
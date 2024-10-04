# https://neetcode.io/problems/jump-game

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        goal = len(nums) - 1

        # starting from the end and going backwards allows for O(n), if start from beginning O(n^2) due to evaluating combinations at each index to see if it could reach the end.
        for i in range(len(nums) - 2, -1, -1):

            # >= because each index is 'max jump', 1 to 'max'
            # checking if the index + jump can reach or exceed the goal
            if (i + nums[i] >= goal):
                goal = i

        return goal == 0;


        # if not nums:
        #     return True

        # def jump(idx):
        #     if (idx == len(nums) - 1):
        #         return True
        #     elif (idx >= len(nums)):
        #         return False

            # 'max jump' means from 1 to the 'max' 
        #     for i in range(1, nums[idx] + 1):
        #         if jump(idx + i):
        #             return True

        #     return False

        # return jump(0)



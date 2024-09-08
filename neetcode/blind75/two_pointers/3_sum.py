# https://neetcode.io/problems/three-integer-sum

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if not nums:
            return nums

        res = []
        nums.sort() # sort so that all negatives and positive values are on the sides.

        for i in range(len(nums)):
            if (nums[i] > 0):
                # break since after 0, there will only be positive values so summing to 0 is impossible
                break

            if i > 0 and nums[i] == nums[i - 1]:
                # if the curr and prev value the same, it will result in a duplicate triplet if the right is also the same value, so skip this step.
                continue
            
            left = i + 1
            right = len(nums) - 1

            while left < right:
                diff = nums[i] + nums[left] + nums[right]
                if (diff > 0):
                    # to reach 0, needs less positive number
                    right -= 1
                elif (diff < 0):
                    # to reach 0, needs less negative number
                    left += 1
                else:
                    res.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1

                    # possible more triplets can be made with 'i', so skip over dup cases
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1

        return res
                
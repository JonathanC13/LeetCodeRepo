# https://neetcode.io/problems/house-robber-ii

class Solution:
    def rob(self, nums: List[int]) -> int:

        # Step 5. Iterative + 2 variables (bottom-up)
        if (len(nums) == 1):
            return nums[0]
        elif (len(nums) == 2):
            return max(nums[0], nums[1])

        def itr(start_idx, last_house_idx):
            dp_table = [0] * (len(nums));

            prev1 = 0
            prev2 = 0
            for i in range(start_idx, last_house_idx):
                temp = prev1
                
                if (i >= 2):
                    robbed = nums[i] + prev2
                else:
                    robbed = nums[i] + 0

                if (i >= 1):
                    not_robbed = prev1
                else:
                    not_robbed = 0

                prev1 = max(robbed, not_robbed);
                prev2 = temp
            
            return prev1
                      
        no_last_house = itr(0, len(nums)-1)
        last_house = itr(1, len(nums))
        return max(no_last_house, last_house)
        
        # Step 4. Iterative + memo (bottom-up)
        # if (len(nums) == 1):
        #     return nums[0]
        # elif (len(nums) == 2):
        #     return max(nums[0], nums[1])

        # def itr(start_idx, last_house_idx):
        #     dp_table = [0] * (len(nums));

        #     for i in range(start_idx, last_house_idx):

        #         if (i >= 2):
        #             robbed = nums[i] + dp_table[i - 2]
        #         else:
        #             robbed = nums[i] + 0

        #         if (i >= 1):
        #             not_robbed = dp_table[i-1]
        #         else:
        #             not_robbed = 0

        #         dp_table[i] = max(robbed, not_robbed);
            
        #     return max(dp_table)
                      
        # no_last_house = itr(0, len(nums)-1)
        # last_house = itr(1, len(nums))
        # return max(no_last_house, last_house)
        
        
        # Step 3. Recursive + memo (top-down).
        # if (len(nums) == 1):
        #     return nums[0]
        # elif (len(nums) == 2):
        #     return max(nums[0], nums[1])

        # def recur(idx, last_house_idx, dp_table):
        #     if (idx == last_house_idx):
        #         # if idx is the last house, it is valid to return the value
        #         return nums[idx]
        #     elif (idx < last_house_idx):
        #         return 0
        #     elif (dp_table[idx] > 0):
        #         return dp_table[idx];

        #     # rob, not rob
        #     rob = nums[idx] + recur(idx-2, last_house_idx, dp_table)
        #     not_rob = recur(idx-1, last_house_idx, dp_table)

        #     max_val = max(rob, not_rob)
        #     dp_table[idx] = max_val
        #     return max_val

        # dp_table = [0] * (len(nums))
        # with_last_house = recur(len(nums)-2, 0, dp_table) # since starting at len-2, last house that can be chosen is index 0
        
        # dp_table = [0] * (len(nums))   # must clear the dp_table since it has been filled with results with the last house possible
        # without_last_house = recur(len(nums)-1, 1, dp_table) # Since starting at the very end, the last house that can be chosen is index 1
        
        # return max(with_last_house, without_last_house)


        # Step 2. Recursive (top-down)

        # if (len(nums) == 1):
        #     return nums[0]
        # elif (len(nums) == 2):
        #     return max(nums[0], nums[1])
        # def recur(idx, last_house_idx):
        #     if (idx == last_house_idx):
        #         # if idx is the last house, it is valid to return the value
        #         return nums[idx]
        #     elif (idx < last_house_idx):
        #         return 0

        #     # rob, not rob
        #     rob = nums[idx] + recur(idx-2, last_house_idx)
        #     not_rob = recur(idx-1, last_house_idx)
        #     return max(rob, not_rob)

        # with_last_house = recur(len(nums)-2, 0) # since starting at len-2, last house that can be chosen is index 0
        # without_last_house = recur(len(nums)-1, 1) # Since starting at the very end, the last house that can be chosen is index 1
        # return max(with_last_house, without_last_house)

#  # https://leetcode.com/problems/house-robber/solutions/156523/from-good-to-great-how-to-approach-most-of-dp-problems
# step 1: Figure out recursive relation.
#     1. Rob current house i, means cannot rob i + 1 or i - 1. Gets the value of (i-2) + i
#       Need 2 evalutions where 1 is with that last house robbed and last house not robbed.
#     2. Do not, means get the value of the previous in dp_table

#     rob(i) = max(rob(i - 2) + nums[i], rob(i-1))

#     base cases: since circular
#     1. if (i < 0): return 0 // lower bound
#     2. if (i < lastPossibleHouse): return 0          // ignore house 0 and prev because of circular

# Step 2. Recursive (top-down)

# Step 3. Recursive + memo (top-down).

# Step 4. Iterative + memo (bottom-up)

# Step 5. Iterative + 2 variables (bottom-up)
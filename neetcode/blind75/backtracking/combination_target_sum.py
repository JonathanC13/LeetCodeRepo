# https://neetcode.io/problems/combination-target-sum

class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []

        if (not nums):
            return res

        # idx: always start combo from current idx
        # curr_sum: current value needed to equate to target
        # curr_combo: current combination of num attempting to equate to target.
        def backtracking(idx, curr_sum, curr_combo):
            if (curr_sum < 0):
                return
            elif (curr_sum == 0):
                res.append(curr_combo.copy())
            
            for i in range(idx, len(nums)):
                # Add to potential solution combo
                curr_combo.append(nums[i])
                # eval the combo
                backtracking(i, curr_sum - nums[i], curr_combo);
                # remove for next number
                curr_combo.pop()

            return

        backtracking(0, target, [])
        print(res)
        return res
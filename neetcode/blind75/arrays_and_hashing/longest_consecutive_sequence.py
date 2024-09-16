# https://neetcode.io/problems/longest-consecutive-sequence

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seq_dict = dict()

        # sort ascending
        nums.sort()
        max_seq = 0

        # for each int, check if the previous int exists in the seq_dict; if yes, add to dict with +1 else 1.
        for n in nums:
            seq_val = seq_dict.get(n-1, 0) + 1
            seq_dict[n] = seq_val
            max_seq = max(max_seq, seq_val)

        #print (seq_dict)
        # return max value
        return max_seq
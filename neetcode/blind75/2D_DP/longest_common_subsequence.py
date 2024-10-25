# https://neetcode.io/problems/longest-common-subsequence

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        len_text1 = len(text1)
        len_text2 = len(text2)

        dp_table = [([0] * (len_text1 + 1)) for _ in range(len_text2 + 1)]

        # their soln, starts from the end, it makes the dp_table index easier to glance at
        for r in range(len_text2 - 1, -1, -1):
            for c in range(len_text1 - 1, -1, -1):
                if (text2[r] == text1[c]):
                    dp_table[r][c] = dp_table[r + 1][c + 1] + 1
                else:
                    # since subsequence, propagate current longest subsequence
                    dp_table[r][c] = max(dp_table[r+1][c], dp_table[r][c+1])
        return dp_table[0][0]

        # my soln, starts from the beginning
        # first row and col will remain 0, because no match
        # for r in range(len_text2):
        #     for c in range(len_text1):
        #         if (text2[r] == text1[c]):
        #             # if letter matches add 1 to the top left diagonal value because it holds the longest subsequence up to that combination
        #             dp_table[r+1][c+1] = dp_table[r][c] + 1
        #         else:
        #             # if no match, need to propagate the current longest subsequence for later use due to subsequence is not contiguous
        #             dp_table[r+1][c+1] = max(dp_table[r+1][c], dp_table[r][c+1])

        # for r in range(len_text2 + 1):
        #     print(dp_table[r])

        # return dp_table[len_text2][len_text1]
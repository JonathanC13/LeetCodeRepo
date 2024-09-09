# https://neetcode.io/problems/longest-substring-without-duplicates

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0

        substr_index = (0, 0)
        length = 0
        occurance = dict()

        left = 0
        i = 0
        for right in range(len(s)):
            while s[right] in occurance:
                del occurance[s[left]]
                left += 1

            occurance[s[right]] = right
            
            if right - left + 1 > length:
                substr_index = (left, right)
                length = max(length, right - left + 1)

        print(s[substr_index[0]:substr_index[1] + 1])
        return substr_index[1] - substr_index[0] + 1
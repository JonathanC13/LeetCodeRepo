# https://neetcode.io/problems/word-break

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        
        dp = [False] * (len(s)+1)
        dp[len(s)] = True

        for idx in range(len(s) - 1, -1, -1):
            for word in wordDict:
                if (idx + len(word) <= len(s) and word == s[idx: idx + len(word)]):
                    # if has or does not have connection to forward word
                    dp[idx] = dp[idx + len(word)]

                if (dp[idx]):
                    # must break so that it is not overwritten by another word that does not have a forward connection
                    break
        print(dp)
        return dp[0]
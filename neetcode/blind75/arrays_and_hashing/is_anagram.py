# https://neetcode.io/problems/is-anagram

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        """
        x == y should be true according to the official documentation: "Dictionaries compare equal if and only if they have the same (key, value) pairs (regardless of ordering)
        """
        dict_s = dict()
        dict_t = dict()

        for idx in range(len(s)):
            dict_s[s[idx]] = 1 if (s[idx] not in dict_s) else dict_s[s[idx]] + 1
            dict_t[t[idx]] = 1 if (t[idx] not in dict_t) else dict_t[t[idx]] + 1

        return dict_s == dict_t

        # dict_s = dict()

        # # build dict of letters for string s
        # for c in s:
        #     if c in dict_s:
        #         dict_s[c] += 1
        #     else:
        #         dict_s[c] = 1

        # # subtract letter occurances from str t in dict_s
        # for c in t:
        #     if c not in dict_s:
        #         return False
        #     else:
        #         if dict_s[c] <= 0:
        #             return False
        #         else:
        #             dict_s[c] -= 1

        # # if str s and str t are anagrams, then all letters will have a value of 0
        # for val in dict_s.values():
        #     if val != 0:
        #         return False

        # return True
        
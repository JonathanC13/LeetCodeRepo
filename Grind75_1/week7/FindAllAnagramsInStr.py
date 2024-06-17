"""
https://leetcode.com/problems/find-all-anagrams-in-a-string/
"""

class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        
        len_s = len(s)
        len_p = len(p)

        if (len_p > len_s):
            return []
            
        dict_p = defaultdict(int)
        for i in p:
            dict_p[i] += 1

        dict_s = defaultdict(int)
        # initial substring freq dict, -1 since in window will add the last value
        for j in range(len_p - 1):
            dict_s[s[j]] += 1

        ret_list = []

        # sliding window
        for i in range(len_s - len_p + 1):
            
            # add freq of the new end value of the window
            dict_s[s[i + len_p - 1]] += 1

            # if dict_s has the same char freq as dict_p
            # https://stackoverflow.com/questions/4527942/comparing-two-dictionaries-and-checking-how-many-key-value-pairs-are-equal
            if (dict_s == dict_p):
                #print(s[i:i + len_p])
                ret_list.append(i)
            
            #remove the value that is leaving the window
            dict_s[s[i]] -= 1
            if (dict_s[s[i]] == 0):
                # must remove if 0, or the comparison with dict_p will not work
                dict_s.pop(s[i])

        return ret_list
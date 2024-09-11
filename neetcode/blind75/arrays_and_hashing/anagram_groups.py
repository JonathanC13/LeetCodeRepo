# https://neetcode.io/problems/anagram-groups

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list) # e.g. [('blue', [2, 4]), ('red', [1]), ('yellow', [1, 3])]

        for s in strs:
            keys = [0] * 26
            s = s.lower()
            for c in s:
                # fill counts for each char
                keys[ord(c) - ord('a')] += 1

            # the array counts for each char are the key so other words with the same counts will append to the value, which is a list
            res[tuple(keys)].append(s)

        return res.values()

        # res = []
        
        # while len(strs) > 0:
        #     dict_targ = dict()
        #     for c in strs[0]:
        #         if (c not in dict_targ):
        #             dict_targ[c] = 1
        #         else:
        #             dict_targ[c] = dict_targ[c] + 1

        #     anagram = []
        #     anagram.append(strs[0])
        #     strs[0] = None

        #     for i in range(1, len(strs)):
        #         dict_comp = dict()

        #         for c in strs[i]:
        #             if (c not in dict_comp):
        #                 dict_comp[c] = 1
        #             else:
        #                 dict_comp[c] = dict_comp[c] + 1

        #         if (dict_targ == dict_comp):
        #             anagram.append(strs[i])
        #             strs[i] = None

        #     res.append(anagram)

        #     temp = []
        #     for s in strs:
        #         if (s != None):
        #             temp.append(s)

        #     strs = temp

        # return res


# https://neetcode.io/problems/minimum-window-with-characters

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        
        # Store the characters of 't' into a set for faster look up and count
        dict_t = dict()
        for c in t:
            dict_t[c] = 1 + dict_t.get(c, 0)

        window = dict()
        l = 0

        have = 0
        need = len(dict_t)
        
        res = [-1, -1]
        resLen = float('infinity')

        for r in range(len(s)):
            c = s[r]
            window[c] = 1 + window.get(c, 0)

            if c in dict_t and window[c] == dict_t[c]:
                # requirements met for this character
                have += 1

            while have == need:
                # all requrements met, all t characters in substring
                if (r - l + 1) < resLen:
                    # only save shortest
                    res = [l, r]
                    resLen = r - l + 1

                # with the right fixed, move the left pointer to either; 1. find shorter substring within window. 2. until requirements not met.
                window[s[l]] -= 1    
                if s[l] in dict_t and window[s[l]] < dict_t[s[l]]:
                    have -= 1
                l += 1

        l, r = res
        return s[l: r + 1] if resLen != float('infinity') else ""


        

        


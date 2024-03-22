"""
https://leetcode.com/problems/valid-parentheses/description/
"""

import collections

class Solution:

    def isValid(self, s: str) -> bool:
        dictParenPairs = {'(':')', '[':']', '{':'}'}
        linkedList = collections.deque()
        
        for c in s:
            if c in dictParenPairs:
                linkedList.append(c)
            elif len(linkedList) == 0 or dictParenPairs[linkedList.pop()] != c:
                return False
            else:
                pass

        if len(linkedList) == 0:
            return True
        else:
            return False

    def isValidLol(self, s: str) -> bool:
        dictParenPairs = {'(':')', '[':']', '{':'}'}
        dictParenPairsRev = {')':'(', ']':'[', '}':'{'}

        linkedList = collections.deque()
        for c in s:
            if c in dictParenPairs:
                linkedList.append(c)
            elif c in dictParenPairsRev:
                if len(linkedList) == 0:
                    return False
                else:
                    try:
                        if linkedList.pop() != dictParenPairsRev[c]:
                            # wrong pair
                            return False
                        else:
                            pass
                    except:
                        return False
            else:
                pass

        if len(linkedList) == 0:
            return True
        else:
            return False

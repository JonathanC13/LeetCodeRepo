"""
https://leetcode.com/problems/valid-parentheses/description/
"""

import collections

class Solution:

    def isValid(self, s: str) -> bool:
        # s is to only give parenthesis characters

        # dictionary for valid pairs of parenthesis
        dictParenPairs = {'(':')', '[':']', '{':'}'}
        # linked list as a stack to keep track of order of parenthesis. LIFO
        linkedList = collections.deque()
        
        # Iterate the characters in string 's'
        for c in s:
            if c in dictParenPairs:
                # append open parenthesis to the stack since no restriction when they can appear.
                linkedList.append(c)
            elif len(linkedList) == 0 or dictParenPairs[linkedList.pop()] != c:
                # if linked list length is 0 and already has a closing parenthesis, return false
                # or
                # if the complement of the open parenthesis on the top of the stack does not match the current character, return false
                return False
            else:
                pass

        if len(linkedList) == 0:
            # if the length of the stack is 0, it indicates all parenthesis were correctly closed
            return True
        else:
            return False

    def isValidLol(self, s: str) -> bool:

        # two dicts so if string 's' contains characters other than parenthesis
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

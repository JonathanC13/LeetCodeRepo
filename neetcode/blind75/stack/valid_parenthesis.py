# https://neetcode.io/problems/validate-parentheses

class Solution:
    def isValid(self, s: str) -> bool:
        arr_open = ['(', '{', '[']
        dict_close = {')':'(', '}':'{', ']':'['}

        stack = []

        for c in s:
            if c in arr_open:
                stack.append(c)
            elif c in dict_close:
                if len(stack) == 0:
                    return False
                else:
                    pop = stack.pop()
                    if dict_close[c] != pop:
                        return False
                    # else good
        
        if stack:
            return False
        else:
            return True
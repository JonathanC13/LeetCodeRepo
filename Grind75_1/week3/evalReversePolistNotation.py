"""
https://leetcode.com/problems/evaluate-reverse-polish-notation/
"""

import operator

class Solution:

    # https://en.wikipedia.org/wiki/Reverse_Polish_notation
    # int(a/b) truncates toward 0 for python

    # 67 ms, 17.20 MB
    def evalRPNMine(self, tokens: List[str]) -> int:
        
        stack = deque()
        lenOfTok = len(tokens)

        # https://stackoverflow.com/questions/1740726/turn-string-into-operator
        ops = {
            '+' : operator.add,
            '-' : operator.sub,
            '*' : operator.mul,
            '/' : operator.truediv,  # use operator.div for Python 2
            '%' : operator.mod,
            '^' : operator.xor,
        }

        for x in range(lenOfTok):
            if (tokens[x] not in ops):
                # convert val to int
                stack.append(int(tokens[x]))
            else:
                # get the 2 values from the stack
                if (len(stack) < 2):
                    return -1
                else:
                    sec = stack.pop()
                    fir = stack.pop()
                    
                    stack.append(int(ops[tokens[x]](fir,sec)))
                
        # the last item in the stack is the final anwer
        return stack.pop()
        

    # 67 ms, 19.55 MB
    def evalRPNRecur(self, tokens: List[str]) -> int:
        
        stack = deque()
        lenOfToken = len(tokens)

        ops = {
            '+' : operator.add,
            '-' : operator.sub,
            '*' : operator.mul,
            '/' : operator.truediv,  # use operator.div for Python 2
            '%' : operator.mod,
            '^' : operator.xor,
        }

        def recurHelper(stack: collections.deque, idx: int) -> int:
            
            if (idx >= lenOfToken):
                return stack.pop()

            if (tokens[idx] not in ops):
                stack.append(int(tokens[idx]))
            else:
                if (len(stack) < 2):
                    return -1
                else:
                    sec = stack.pop()
                    fir = stack.pop()
                    stack.append(int(ops[tokens[idx]](fir, sec)))

            return recurHelper(stack, idx + 1)


        return recurHelper(stack, 0)

    
    def evalRPN(self, tokens: List[str]) -> int:
        #return self.evalRPNMine(tokens)
        return self.evalRPNRecur(tokens)

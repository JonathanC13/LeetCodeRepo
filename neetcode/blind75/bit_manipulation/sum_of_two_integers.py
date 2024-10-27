# https://neetcode.io/problems/sum-of-two-integers

class Solution:
    def getSum(self, a: int, b: int) -> int:
        
        
        def add(a, b):
            # if a or b is 0, no more bit operations to be done, return the value > 0 as the answer or 0 (false)
            # saves one loop if check either is 0, then return the one that is not 0
            # Originally, go until b (the carry) is 0 and the answer will always be in 'a'
            if (not a or not b):
                return a or b
            # XOR the bits for the intermediate sum, AND the bits and Shift 1 left for if there is a carry
            return add(a ^ b, (a & b) << 1)
        
        # handle if one value is negative
        if (a * b < 0):
            # re-arrange parameters for next operation, need to manipulate the negative value
            if (a > 0):
                return self.getSum(b, a)
            
            # 2s complement, converting the negative number to positive. if invert a and +1 == b, return 0
            if (add(~a, 1) == b):
                return 0

            # Must handle 'a' if 0 > ~a < b because e.g. -2, 3. -2 is ...1111 1110 and 3 is 0010. With this the carry will inifinitly carry left
            # E.g -4, 3 OK. -4 is ....1111 1100 and 3 is 0010. The adding will eventually end and result in the sum
            # 1. invert 2s comp both values, this causes a > b
            # 2. add a and b from step 1
            # 3. get 2s complement from step 2
            if (add(~a, 1) < b):
                return add(~add(add(~a, 1), add(~b,1)), 1)

        return add(a, b)

            
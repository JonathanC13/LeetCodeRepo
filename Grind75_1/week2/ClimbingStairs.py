"""
https://leetcode.com/problems/climbing-stairs/
"""

class Solution:
    
    # mine is not efficient
    def climbStairsTimeoutLOL(self, n: int) -> int:
        
        # base case. 0 steps left
        if (n <= 0):
            return 1

        distinct = 0

        if ((n - 2) >= 0):
            # if valid operation, add 1
            distinct = self.climbStairs(n - 2)

        if ((n - 1) >= 0):
            distinct = distinct + self.climbStairs(n - 1)

        # return the number of distinct options for the function call
        return distinct


    def climbStairsBetterThanMine(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1
        return self.climbStairs(n-1) + self.climbStairs(n-2)


    # I would have never thought of this
    def helper(self, n: int, memo: dict[int, int]) -> int:
        if n == 0 or n == 1:
            return 1
        if n not in memo:
            memo[n] = self.helper(n-1, memo) + self.helper(n-2, memo)
        return memo[n]


    def DPTable(self, n: int) -> int:

        # front boundary cases
        if (n == 1):
            return 1

        # initialize dynamic programming table to size 'n + 1' with 0s
        # n + 1 size to include the 0 index
        # n position will contain the final total of distinct ways to complete the staircase
        arrDp = [0] * (n + 1)
        arrDp[0] = 1
        arrDp[1] = 1

        for i in range(2, n + 1):
            # like fib.
            # e.g. for step 1 there is 1 way to get there
            #       for step 2 there are 2 ways to get there
            #       for step 3 there are 3 ways to get there (2 ways to get to 2 + 1 step = 3)
            arrDp[i] = arrDp[i - 1] + arrDp[i - 2]

        #for i in range(0, n + 1):
        #    print (str(i) + ':' + str(arrDp[i]) + ', ')

        return arrDp[n]

    
    def climbStairs(self, n: int) -> int:
        #memo = {}
        #return self.helper(n, memo)

        return self.DPTable(n)


# https://neetcode.io/problems/climbing-stairs

class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 3:
            return n;

        dp_table = [0] * (n+1);
        dp_table[1] = 1
        dp_table[2] = 2
        dp_table[3] = 3

        for i in range(4, n+1):
            dp_table[i] = dp_table[i-1] + dp_table[i-2]

        return dp_table[n];
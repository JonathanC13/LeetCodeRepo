"""
https://guides.codepath.com/compsci/DP-Table

First time learning about this.
"""

class Solution:
    def longestPalindrome(self, s: str) -> int:
        
        if (len(s) == 1):
            return 1

        # DP 2D table
        # dpTable = [[False * len(s)] * len(s)] # I am an idiot. * is copying the address of the object (list)
        dpTable = [[False] * len(s) for i in range(len(s))]
        #print(str(len(dpTable[0]))) # col
        #print(str(len(dpTable)))

        # known palindromes. The single letter with themselves.
        for pos in range(0, len(s)):
            dpTable[pos][pos] = True
        
        # array to save the indexes of the longest palindrome
        longestIdx = [0, 1]

        # loop for the remaining columns in the table
        for r in range(1, len(s)):
            # loop the rows
            for row in range(0, len(s) - r):
                # move col toward bottom right
                col = row + r
                if (r == 1):
                    # special case of being the 2nd char, compare with 1st char
                    boolPal = (s[row] == s[col])
                else:
                    # check if current(col) char is same as the row char
                    #   and if the prev chars match.
                    boolPal = (s[row] == s[col] and dpTable[row + 1][col - 1])

                if (boolPal == True):
                    # update 'longestIdx' if the next palindrome, which is longer
                    longestIdx = [row, col]

                # update the table
                dpTable[row][col] = boolPal

        # + 1 due to exclusive in slice
        print(s[longestIdx[0]:longestIdx[1] + 1])
        # + 1 to be inclusive
        return (longestIdx[1] + 1 - longestIdx[0])
                
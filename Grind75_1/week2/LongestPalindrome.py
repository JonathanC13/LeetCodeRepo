"""
https://leetcode.com/problems/longest-palindrome/
"""

class Solution:

    def longestPalindrome(self, s: str) -> int:
        dictChars = {}
        total = 0

        for c in s:
            if (c not in dictChars):
                dictChars[c] = 1
            else:
                # + 2 to account for the current occurance and the one we are removing.
                total = total + 2
                dictChars[c] = dictChars[c] - 1
                if (dictChars[c] == 0):
                    del dictChars[c]

        if (len(dictChars) != 0):
            # After all the even occurances of chars have been added, if there are left over chars just + 1 since 1 char can be placed in the middle and it will still result in a valid palindrome
            return total + 1
        else:
            return total


    def longestPalindromeFirstTry(self, s: str) -> int:
        dictChars = {}

        oddOccurVal = 0

        longestPalindromeLen = 0

        # save the chars in to the 'dictChars'
        for c in s:
            if (c in dictChars):
                dictChars[c] = dictChars[c] + 1
            else:
                dictChars[c] = 1
    
        # a palindrome contain all even number of occurances of a char with only 1 char that has an odd number of occurances.
        # add all the even occurances to the total
        # find and add the highest odd occurance to the total
        # substract 1 to all other odd occurances and then add to total
        for key, val in dictChars.items():
            print(str(key) + ':' + str(val))
            if (val % 2 == 0):
                longestPalindromeLen = longestPalindromeLen + val
            else:
                # odd
                if (val > oddOccurVal):
                    if (oddOccurVal != 0):
                        # if found new highest odd occurances, add to the total but -1 to 'use' the previous odd occurance char an even number of times in the palin.
                        longestPalindromeLen = longestPalindromeLen + val - 1
                    else:
                        # found first odd occurances
                        longestPalindromeLen = longestPalindromeLen + val

                    oddOccurVal = val
                else:
                    # if found odd, but not the highest so far, subtract 1 then add to the total
                    longestPalindromeLen = longestPalindromeLen + val - 1
            
        # add the longest occurances of the odd
        return longestPalindromeLen
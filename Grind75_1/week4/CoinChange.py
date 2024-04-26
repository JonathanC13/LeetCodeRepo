"""
https://leetcode.com/problems/coin-change/
"""

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        
        # dynamic programming table, bottom up approach
        # if want max num of coins in a combination for the amount change to -inf and use max when updating dpTable[x]
        # amount + 1 to include the final value as an index in the table.
        dpTable = [float("inf")] * (amount + 1)

        # starting value at amount 0 is 0 due to no combinations to sum to 0
        dpTable[0] = 0

        # want to get the coin combination, add overhead. List to keep track which coin was used for the minimum coin combination for each amount
        minCoinEach = [float("inf")] * (amount + 1)

        # for each amount in the table, determine the number of combinations from the coins that can sum to the amount.
        # exclude 0 since no coins would sum to it.
        for currSum in range(1, amount + 1):

            # each amount, loop the coins to see if each coin can sum to the amount
            for coin in coins:
                # must check index due to potential negative at the beginning
                idx = currSum - coin

                if (idx >= 0):
                    # dpTablep[idx] contains the number of coins to get that amount
                    # + 1 since by adding the current coin will result in the current amount
                    # Take the min since another coin combination uses less coins to get to this current amount
                    #dpTable[x] = min(dpTable[x], dpTable[idx] + 1)

                    # using If so I can track overhead of exact coins for the minimum coin combination
                    if ((dpTable[idx] != float("inf")) and ((dpTable[idx] + 1) < dpTable[currSum])):
                        dpTable[currSum] = dpTable[idx] + 1
                        minCoinEach[currSum] = coin


        if (dpTable[amount] == float("inf")):
            # indicates no combination of coins could sum to this amount
            return -1
        else:
            #print (minCoinEach)
            # get the coin combination
            currSum = amount
            while (currSum > 0):
                print(minCoinEach[currSum], end = " ")
                currSum = currSum - minCoinEach[currSum]

            # return the minimum number of coins for the amount
            return dpTable[amount]
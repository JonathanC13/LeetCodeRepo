"""
https://leetcode.com/problems/word-break/description/
"""

class Solution:

    # mine, timeout
    def wordBreakMine(self, s: str, wordDict: List[str]) -> bool:

        resList = []

        lenS = len(s)

        def DFS(currList: List[str], resList: List[str], sIdx: int) -> bool:

            if (sIdx >= lenS):
                resList.append(currList[:])
                return True

            
            for word in wordDict:
                sIdxLocal = sIdx
                cont = True

                currList.append(word)

                for letter in word:

                    if (sIdxLocal >= lenS):
                        cont = False
                        break
                    elif (letter != s[sIdxLocal]):
                        cont = False
                        break
                    else:
                        sIdxLocal = sIdxLocal + 1

                if (cont == False):
                    currList.pop()
                    continue
                else:
                    cont = DFS(currList, resList, sIdxLocal)

                if (cont == True):
                    return True

                currList.pop()

            return False


        res = DFS([], resList, 0)

        print (resList)

        return res


    def wordBreakDP(self, s: str, wordDict: List[str]) -> bool:
        
        lenS = len(s)
        # index 1 to lenS + 1 are the "breakable" indexes for string s
        dpTable = [False] * (lenS + 1)
        # index 0 is always "breakable"
        dpTable[0] = True

        # the longest word length in wordDict
        max_len_word = max(map(len, wordDict))

        potenWords = []

        """
        for each dpTable index, find if a word in wordDict continues from a previous "fitted"
        word and fits the current substring.
        """
        for i in range(1, lenS + 1):
            for j in range(i - 1, max(i - max_len_word - 1, -1), -1):
                # set range to max -1 due to skip words that are too long for the current substring of s
                if (dpTable[j] == True and s[j:i] in wordDict):
                    potenWords.append(s[j:i])
                    dpTable[i] = True
                    break


        # print all the words from dpTable, word break with the most words
        #print(dpTable)
        #print(potenWords)

        # to get one full solution word break set, iterate again to link Trues from end to beginning
        """
        if (dpTable[lenS]):
            wordBreakArr = []
            idx = len(dpTable) - 1
            while (idx > 0):
                for word in wordDict:
                    if (dpTable[idx - len(word)] and s[idx - len(word): idx] == word):
                        wordBreakArr.append(word)
                        idx = idx - len(word)
                        break

            print(wordBreakArr)
        """

        return dpTable[lenS]


    def wordBreakRec(self, s: str, wordDict: List[str]) -> bool:

        # recusive DFS with memorization
        wordSet = set(wordDict)
        memoSet = {}

        def DFS(memoSet: List[int], substr: str) -> bool:

            if (substr in memoSet):
                # already evaluated
                return memoSet[substr]
            elif (substr in wordSet):
                return True            

            for i in range(1, len(substr)):
                # for each prefix in substr check if in the wordSet and DFS for the remaining substr
                # post fix atleast 1 char, so end at len(substr) - 1
                if (substr[:i] in wordSet and DFS(memoSet, substr[i:])):
                    memoSet[substr] = True
                    return True

            # if all prefix cannot break, set false
            memoSet[substr] = False
            return False

        
        res = DFS(memoSet, s)
        # note: harder to get list of words that result in the successful word break
        print (memoSet)
        return res


    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        #return self.wordBreakMine(s, wordDict)
        #return self.wordBreakDP(s, wordDict)
        return self.wordBreakRec(s, wordDict)
"""
https://leetcode.com/problems/implement-trie-prefix-tree/
"""



# The Trie Node is an array of pointers for each lowercase char that point to the next Trie Node
class TrieNode:
    
    def __init__(self):
        end = ord('z') - ord('a') + 1
        self.trieNode = [None] * end
        self.wordEnd = False


class Trie:
    thisTrie = None

    asciiOffset = ord('a')

    def __init__(self):
        self.thisTrie = TrieNode()

    def insert(self, word: str) -> None:
        ptTrieNode = self.thisTrie
        lenWord = len(word)

        for i in range(lenWord):
            indx = ord(word[i]) - self.asciiOffset

            if (ptTrieNode.trieNode[indx] is None):
                # create new Trie Node and assign
                ptTrieNode.trieNode[indx] = TrieNode()
            

            # go to next TrieNode
            ptTrieNode = ptTrieNode.trieNode[indx]
            
        
        # when end of word, ensure that the wordEnd = True
        # just set to true
        ptTrieNode.wordEnd = True
        
    
    def searchGeneral(self, word: str, fullWord: bool) -> bool:
        ptTrieNode = self.thisTrie
        lenWord = len(word)

        for i in range(lenWord):
            indx = ord(word[i]) - self.asciiOffset

            if (ptTrieNode.trieNode[indx] is None):
                # does not have that char in the Trie, cannot complete word / prefix
                return False
            
            # move to next TrieNode
            ptTrieNode = ptTrieNode.trieNode[indx]

        
        if (fullWord == True):
            return ptTrieNode.wordEnd
        else:
            # if prefix exists, since it got here it does
            return True 


    def search(self, word: str) -> bool:
        return self.searchGeneral(word, True)

    def startsWith(self, prefix: str) -> bool:
        return self.searchGeneral(prefix, False)
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
"""
https://leetcode.com/problems/implement-trie-prefix-tree/
"""

class Node:
    def __init__(self, val = 0, wordEnd = False, nextTrieNode = None):
        self.val = val
        self.wordEnd = wordEnd
        self.nextTrieNode = nextTrieNode

class TrieNode:
    charHashmap = None
    def __init__(self):
        self.charHashmap = dict()

    def getTrieNode(self):
        return self.charHashmap


# Each Trie Node is a hash map with 'key' as the ascii decimal value of the lower case char
#   the value is a Node that contains the 'value', 'wordEnd', and 'nextTrieNode'
# Change from hash map to array with preloaded 25 elems all None.


class Trie:
    thisTrie = None

    def __init__(self):
        self.thisTrie = TrieNode().getTrieNode()
        

    def insert(self, word: str) -> None:
        ptTrieNode = self.thisTrie
        lenWord = len(word)
        for i in range(lenWord):
            charDec = ord(word[i])
            if (charDec not in ptTrieNode):
                # add new node for char if not exists
                ptTrieNode[charDec] = Node(charDec)

            if (i == lenWord - 1):
                # if on last char, set 'end' to True and break
                ptTrieNode[charDec].wordEnd = True
                break

            if (ptTrieNode[charDec].nextTrieNode is None):
                # not end of word and 'nextTrieNode' is None, add empty hash map
                ptTrieNode[charDec].nextTrieNode = TrieNode().getTrieNode()
            
            # move pointer to next TrieNode
            ptTrieNode = ptTrieNode[charDec].nextTrieNode
            
        
    def search(self, word: str) -> bool:
        return True

    def startsWith(self, prefix: str) -> bool:
        return True
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
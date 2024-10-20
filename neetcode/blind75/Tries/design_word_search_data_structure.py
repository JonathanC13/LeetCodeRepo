# https://neetcode.io/problems/design-word-search-data-structure

class TrieNode:
    def __init__(self):
        self.children = [None] * 26
        self.isEnd = False

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        trie_node = self.getRoot()

        for c in word:
            index = ord(c) - ord('a')

            if (trie_node.children[index] is None):
                trie_node.children[index] = TrieNode()

            trie_node = trie_node.children[index]

        trie_node.isEnd = True

    def search(self, word: str) -> bool:
        trie_node = self.getRoot()

        def dfs(node, word, w_index):
            if node is None:
                # no match
                return False
            elif w_index == len(word):
                # at end of word, check if marked end
                return node.isEnd
            elif self.isEmpty(node):
                # trie links terminated before end of input word
                return False
            
            if (word[w_index] == '.'):
                # if . then must go into each character
                for c in range(len(node.children)):
                    if (node.children[c] is not None):
                        if dfs(node.children[c], word, w_index + 1):
                            # if ret True, then it means path to found word exists. Propagate up
                            return True

                return False
            else:
                index = ord(word[w_index]) - ord('a')
                return dfs(node.children[index], word, w_index + 1)

        return dfs(trie_node, word, 0)

    def getRoot(self):
        return self.root

    def isEmpty(self, node):
        for c in node.children:
            if c is not None:
                return False

        return True
        

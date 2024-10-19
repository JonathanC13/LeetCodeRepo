# https://neetcode.io/problems/implement-prefix-tree

class TreeNode:
    def __init__(self):
        self.children = [None] * 26
        self.isEnd = False

class PrefixTree:

    def __init__(self):
        self.root = TreeNode()

    def insert(self, word: str) -> None:
        tree_node = self.getRoot()

        for c in word:
            index = ord(c) - ord('a')
            if tree_node.children[index] is None:
                # must add new TreeNode if the index not populated yet
                new_tree_node = TreeNode()
                tree_node.children[index] = new_tree_node
                
            # go to next tree node
            tree_node = tree_node.children[index]

        # at end, must set end of word
        tree_node.isEnd = True

    def search(self, word: str) -> bool:
        tree_node = self.getRoot()

        for c in word:
            index = ord(c) - ord('a')

            if (tree_node.children[index] is None):
                return False

            tree_node = tree_node.children[index]

        # at end, must check if end of word is True
        return tree_node.isEnd

    def startsWith(self, prefix: str) -> bool:
        tree_node = self.getRoot()

        for c in prefix:
            index = ord(c) - ord('a')

            if (tree_node.children[index] is None):
                return False

            tree_node = tree_node.children[index]

        # at end, must check if end of word is True
        return True

    def getRoot(self):
        return self.root

    def isEmpty(self, tree_node):
        for child in tree_node.children:
            if (child is not None):
                return False
        
        return True
        
        
# https://neetcode.io/problems/subtree-of-a-binary-tree

# A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:

        if (not root):
            return False
        if (not subRoot):
            return True

        if (self.checkSubTree(root, subRoot)):
            # if subtree exists
            return True

        # try with different node as the root
        return (self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot))

    def checkSubTree(self, root, subRoot):
        if (not root and not subRoot):
            return True
        elif (root and subRoot and root.val == subRoot.val):
            return self.checkSubTree(root.left, subRoot.left) and self.checkSubTree(root.right, subRoot.right)
        else:
            return False

        

"""
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        
        if (not preorder or not inorder):
            return None

        currNode = TreeNode(preorder[0])

        idx = 0
        """
        for i in range(len(inorder)):
            if (preorder[0] == inorder[i]):
                idx = i
                break
        """
        idx = inorder.index(preorder[0])

        currNode.left = self.buildTree(preorder[1:idx + 1], inorder[:idx])
        currNode.right = self.buildTree(preorder[idx + 1:], inorder[idx + 1:])
        

        return currNode
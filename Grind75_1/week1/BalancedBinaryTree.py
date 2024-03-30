"""
https://leetcode.com/problems/balanced-binary-tree/submissions/1217747863/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalancedCheck(self, root: Optional[TreeNode]) -> int:
        
        # recursive solution
        # base case
        if (root is None):
            return 0

        # get the height of the left subtree
        leftSubtreeHeight = self.isBalancedCheck(root.left)
        if (leftSubtreeHeight == -1):
            # found an imbalance, propagate -1 through the function stack
            return -1

        # get the height of the right subtree
        rightSubtreeHeight = self.isBalancedCheck(root.right)
        if (rightSubtreeHeight == -1):
            return -1

        # check if imbalance for a root node
        if (abs(leftSubtreeHeight - rightSubtreeHeight) > 1):
            return -1
        else:
            # + 1 to add this level.
            return max(leftSubtreeHeight, rightSubtreeHeight) + 1



    
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return self.isBalancedCheck(root) != -1
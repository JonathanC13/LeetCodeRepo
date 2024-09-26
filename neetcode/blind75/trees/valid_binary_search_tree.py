# https://neetcode.io/problems/valid-binary-search-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        
        def checkValidRange(curr, left_bound, right_bound):
            if not curr:
                return True
            elif (curr.val <= left_bound or curr.val >= right_bound):
                return False

            return checkValidRange(curr.left, left_bound, curr.val) and checkValidRange(curr.right, curr.val, right_bound)

        return checkValidRange(root, float('-inf'), float('inf'))
        
        


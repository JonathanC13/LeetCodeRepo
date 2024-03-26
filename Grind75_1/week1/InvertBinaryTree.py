"""
https://leetcode.com/problems/invert-binary-tree/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        
        # recursive solution
        # base case, return when no child found.
        if root is None:
            return root
        
        # recursively call to search the left child nodes
        self.invertTree(root.left)

        # recursively call to search the right child nodes
        self.invertTree(root.right)
        
        #swap child nodes
        temp = root.left
        root.left = root.right
        root.right = temp

        # return the parent, at the end returns the root
        return root

"""
2
1
    left = none, ret
    right = none, ret
    swap
    ret 1
3
    left = none, ret
    right = none, ret
    swap
    ret 3
swap
ret 2

2, 3, 1
"""
        

"""
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        
        # recursive solution
        # base case, if node is None
        if (root is None):
            return None

        if (p.val < root.val > q.val):
            # check left if both values are lesser than the root
            return self.lowestCommonAncestor(root.left, p, q)
        elif (p.val > root.val < q.val):
            # check right if both values are greater than the root
            return self.lowestCommonAncestor(root.right, p, q)
        else:
            # found the LCA
            return root

"""
root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, p = 4

lowestCommonAncestor(6, ...)
    since 2 < 6 and 4 < 6
    lowestCommonAncestor(2, ...)
        since 3 > 2 and 5 > 2
        lowestCommonAncestor(4, ...)
        No cond satisfied, ret root
    ret root
ret root
"""
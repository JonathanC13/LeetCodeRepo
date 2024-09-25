# https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if not root:
            return root

        if p.val < root.val and q.val < root.val:
            # go left
            return self.lowestCommonAncestor(root.left, p, q)
        elif p.val > root.val and q.val > root.val:
            # go right
            return self.lowestCommonAncestor(root.right, p, q)
        else:
            return root
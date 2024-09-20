# https://neetcode.io/problems/depth-of-binary-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:

        # Recursive DFS approach.

        # base case
        if (root is None):
            return 0

        # go left first
        left_depth = self.maxDepth(root.left) + 1

        # then right
        right_depth = self.maxDepth(root.right) + 1

        return max(left_depth, right_depth)
        
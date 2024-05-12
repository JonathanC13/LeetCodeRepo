"""
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:

    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        
        def helperDFS(root: 'TreeNode'):

            if (root == None or root == p or root == q):
                return root

            # search left first
            leftResult = helperDFS(root.left)

            # search right
            rightResult = helperDFS(root.right)
            
            if (leftResult is not None and rightResult is not None):
                # if both found, this current root is the LCA
                return root
            elif (leftResult is not None):
                # propagate found left up to state to the above nodes it was found
                # if by the end, since p and q are guarenteed to exist, this is the only found it is the LCA
                return leftResult
            elif (rightResult is not None):
                # propagate found right up
                return rightResult
            else:
                return None

        # if p and q are not guarenteed to be in the tree run a normal DFS to check if both exist before running the helperDFS to find the LCA.

        return helperDFS(root)
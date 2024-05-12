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
        
        def helperDFS(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode'):
            if (root is None or root == p or root == q):
                return root

            # search left children
            left = helperDFS(root.left, p, q)
            if (left is not None):
                return left

            # search right children
            right = helperDFS(root.right, p, q)

            return right

        
        # Get best candidate for LCA node and DFS to confirm
        queue = deque()

        queue.append(root)

        while (len(queue) != 0):
            leftFound = None
            rightFound = None

            currNode = queue.popleft()

        
            # run DFS on the left child to try to find p or q
            leftFound = helperDFS(currNode.left, p, q)

            # run DFS on the right child to try to find p or q
            rightFound = helperDFS(currNode.right, p, q)


            if (((currNode == q or currNode == p) and (leftFound is not None or rightFound is not None)) or (leftFound is not None and rightFound is not None)):
                return currNode
            elif (leftFound is not None and rightFound is None):
                # if found on left sub tree and not on right. Start next searh from left child
                queue.append(currNode.left)
            elif (leftFound is None and rightFound is not None):
                queue.append(currNode.right)
            else:
                # LCA does not exist
                return None
                
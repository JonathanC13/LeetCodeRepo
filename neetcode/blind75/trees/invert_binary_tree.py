# https://neetcode.io/problems/invert-a-binary-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return root;

        q = []
        q.append(root)

        # BFS
        while len(q) > 0:
            curr = q.pop(0)

            # swap the left and right children
            curr.left, curr.right = curr.right, curr.left

            if (curr.left):
                q.append(curr.left)

            if (curr.right):
                q.append(curr.right)

        return root
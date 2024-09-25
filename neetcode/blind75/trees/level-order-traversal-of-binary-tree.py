# https://neetcode.io/problems/level-order-traversal-of-binary-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        res = []

        # BFS
        q = list()
        q.append(root)

        num_children = len(q)

        while len(q) > 0:
            sublist = list()
            for i in range(num_children):
                curr = q.pop(0)

                sublist.append(curr.val)

                if (curr.left):
                    q.append(curr.left)

                if (curr.right):
                    q.append(curr.right)

            res.append(sublist)
            num_children = len(q)

        return res
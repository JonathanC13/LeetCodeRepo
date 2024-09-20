# https://neetcode.io/problems/same-binary-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        
        # recursive DFS
        # if p is None and q is None:
        #     return True
        # elif p and q and p.val == q.val:
        #     left = self.isSameTree(p.left, q.left)
        #     right = self.isSameTree(p.right, q.right)
        #     return (left and right)
        # else:
        #     return False

        # BFS
        qu_p = []
        qu_q = []

        qu_p.append(p)
        qu_q.append(q)

        while len(qu_p) > 0 and len(qu_q) > 0:
            pop_p = qu_p.pop(0)
            pop_q = qu_q.pop(0)

            if pop_p is None and pop_q is None:
                continue
            elif pop_p and pop_q and pop_p.val == pop_q.val:
                qu_p.append(pop_p.left)
                qu_q.append(pop_q.left)

                qu_p.append(pop_p.right)
                qu_q.append(pop_q.right)
            else:
                return False

        if len(qu_q) != 0 or len(qu_q) != 0:
            return False
        else:
            return True

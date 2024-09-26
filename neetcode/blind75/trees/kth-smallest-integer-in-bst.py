# https://neetcode.io/problems/kth-smallest-integer-in-bst

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        # recursive
        # curr_i = 0
        # val = None

        # # inorder traversal
        # def DFS(root):
        #     nonlocal curr_i
        #     nonlocal val

        #     if not root:
        #         return

        #     left = DFS(root.left)

        #     curr_i += 1
        #     if curr_i == k:
        #         val = root.val
        #         return

        #     right = DFS(root.right)

        # DFS(root)
        # return val

        # iterative
        stack = list()
        curr = root

        while curr or stack:
            while curr:
                stack.append(curr)
                curr = curr.left

            curr = stack.pop(len(stack) - 1)

            k -= 1
            if k == 0:
                return curr.val
                
            curr = curr.right

        return None
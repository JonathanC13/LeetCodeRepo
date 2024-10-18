# https://neetcode.io/problems/binary-tree-maximum-path-sum

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        max_sum = [root.val]

        def dfs(root, max_sum):
            if not root:
                return 0

            left_max = dfs(root.left, max_sum) # go to depth first.
            right_max = dfs(root.right, max_sum)

            left_max = max(left_max, 0) # max with 0 to eliminate negative values because dding any negative value does not benefit the soln of finding the max.
            right_max = max(right_max, 0)

            max_sum[0] = max(max_sum[0], root.val + left_max + right_max) # valid path root + left + right
            return root.val + max(left_max, right_max)  # only return a sum that is a valid path to the parent node, root + either left or right.

        dfs(root, max_sum)
        return max_sum[0]

        # My soln
        # def dfs(root, max_sum):
        #     if (root is None):
        #         return 0

        #     left_sum = dfs(root.left, max_sum) + root.val # sum with node only once
        #     right_sum = dfs(root.right, max_sum) + root.val # sum with node only once
        #     with_root = left_sum + right_sum - root.val # including the root
        #     just_root = root.val
        #     max_sum[0] = max(left_sum, right_sum, with_root, just_root, max_sum[0])   # global max

        #     return max(left_sum, right_sum, just_root) # return local max of the paths with nodes that only appear once (either goes left or right or root itself)

        # max_sum = [float('-inf')]
        # dfs(root, max_sum)
        # return max_sum[0]
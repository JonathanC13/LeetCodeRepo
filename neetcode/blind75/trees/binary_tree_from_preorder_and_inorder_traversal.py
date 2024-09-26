# https://neetcode.io/problems/binary-tree-from-preorder-and-inorder-traversal

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        
        if not preorder or not inorder:
            return None

        root = TreeNode(preorder[0])
        mid = inorder.index(preorder[0])

        root.left = self.buildTree(preorder[1: mid + 1], inorder[: mid])
        root.right = self.buildTree(preorder[mid + 1:], inorder[mid + 1:])

        return root

        # kill my thread
        # arr = list()
        # arr.append(preorder[0])
        # for i in range(len(preorder)):
            
        #     idx = inorder.index(preorder[i])
        #     left = idx - 1
        #     right = idx + 1

        #     if (left >= 0):
        #         arr.append(inorder[left])
        #     else:
        #         arr.append(None)

        #     if (right < len(inorder)):
        #         arr.append(inorder[right])
        #     else:
        #         arr.append(None)

        #     inorder[idx] = None

        
        # q = list()
        # root = TreeNode(arr[0])
        # q.append(root)

        # i = 1
        # while i < len(arr):
        #     curr = q.pop(0)

        #     if (left < len(arr)):
        #         if arr[i]:
        #             curr.left = TreeNode(arr[i])
        #             q.append(curr.left)
        #         i += 1

        #     if (right < len(arr)):
        #         if arr[i]:
        #             curr.right = TreeNode(arr[i])
        #             q.append(curr.right)
        #         i += 1

        # return root



            

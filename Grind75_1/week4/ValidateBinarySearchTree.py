"""
https://leetcode.com/problems/validate-binary-search-tree/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBSTMine(self, root: Optional[TreeNode]) -> bool:
        
        arrTrace = []
        idx = -1

        def helperDFS(root: Optional[TreeNode], arr: List[int]) -> bool:
            # DFS
            nonlocal idx
            if (root is None):
                return True

            validBST = True

            if (root.left is not None):
                # go down left child
                validBST = helperDFS(root.left, arr)
                if (not validBST):
                    return False

            # current node
            if (idx != -1):
                #debug                
                print(str(idx) + " - " + str(root.val) + " : " + str(arr[idx]))
            if (idx != -1 and root.val <= arr[idx]):
                # not valid BST since the array values should always be increasing when we traverse DFS
                return False
            else:
                arr.append(root.val)
                idx = idx + 1

            if (root.right is not None):
                # go down right right child
                validBST = helperDFS(root.right, arr)
                if (not validBST):
                    return False

            return validBST

        ret = helperDFS(root, arrTrace)
        print(arrTrace)
        return ret
            

    def isValidBSTDFSIter(self, root: Optional[TreeNode]) -> bool:
        stack = deque()

        # each value must be increasing from the prev node value
        prevNode = None

        while (len(stack) != 0 or root is not None):
            while (root is not None):
                # put all left child nodes onto the stack
                # want to evaluate the most left first
                stack.append(root)
                root = root.left

            # pop the top elem, which is the deepest left child
            root = stack.pop()
            
            if (prevNode is not None and root.val <= prevNode.val):
                # if prev has a value to compare and if current node value is less than prev node, it indicates this is not a BST
                return False
            else:
                # re-assign prev
                prevNode = root

                # check right child, if exists
                root = root.right
                
        return True


    def isValidBSTDFSRecur(self, root: Optional[TreeNode]) -> bool:
        prevVal = None

        def helper(root: Optional[TreeNode]) -> bool:
            nonlocal prevVal

            if (root is None):
                return True

            validBST = True

            # check left
            validBST = helper(root.left)

            if (not validBST):
                return False
            elif (prevVal is not None and root.val <= prevVal):
                return False
            else:    
                prevVal = root.val
            
            # check right
            validBST = helper(root.right)

            return validBST


        return helper(root)


    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        #return self.isValidBSTMine(root)
        #return self.isValidBSTDFSIter(root)
        return self.isValidBSTDFSRecur(root)
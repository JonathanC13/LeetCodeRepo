"""
https://leetcode.com/problems/diameter-of-binary-tree/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    maxLen = 0


    def diameterOfBinaryTreeRec(self, root: Optional[TreeNode]) -> int:

        if (root is None):
            return 0

        # get the max depth through the left child
        leftDepth = self.diameterOfBinaryTreeRec(root.left)

        rightDepth = self.diameterOfBinaryTreeRec(root.right)

        # check if depth of L + depth of R for the target node is greater than previously assigned
        self.maxLen = max(self.maxLen, leftDepth + rightDepth)

        # keeping track of deepest
        return max(leftDepth, rightDepth) + 1

    
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.diameterOfBinaryTreeRec(root)
        return self.maxLen

    # timed out on last test case. 
    def diameterOfBinaryTreeMine(self, root: Optional[TreeNode]) -> int:

        currNode = root

        longestPath = 0

        # stack to store the nodes that have been traverse, may have children, and not checked yet
        stack = []

        # inner function to find longest path where the currNode is the root and the longest path is the longest path through the left child + the longest path through the right child.
        def findLongestPath(root: Optional[TreeNode]) -> int:
            nonlocal longestPath

            if (root is None):
                return 0

            # find the longest path throught the left child of currNode
            leftPathLen = findLongestPath(root.left)

            # find the longest path throught the right child of currNode
            rightPathLen = findLongestPath(root.right)

            # if back to the originating node, set the longestPath if it is.
            if (root == currNode and (leftPathLen + rightPathLen) > longestPath):
                longestPath = leftPathLen + rightPathLen
            
            return max(leftPathLen, rightPathLen) + 1


        while True:
            # for the currNode, find the longest path.
            findLongestPath(currNode)

            if (currNode is not None):
                # traverse until a leaf node

                # save this node on the stack due we traversed it but needs more exploration
                stack.append(currNode)

                # go left first
                currNode = currNode.left

            elif(stack):
                # after fully traversing the left, check the stack for nodes where the right child can be explored
                currNode = stack.pop()

                currNode = currNode.right
            else:
                # no more nodes to explore
                break

        return longestPath
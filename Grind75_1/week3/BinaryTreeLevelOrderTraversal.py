"""
https://leetcode.com/problems/binary-tree-level-order-traversal/description/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        
        # BFS. Iterative solution
        if (root is None):
            return []

        # queue to keep track of the nodes of the tree. Front node is to be evaluated, children added to back to ensure they are evaluated after the current level is complete
        queue = deque()
        # build temp list for the current level
        tempList = []
        # final return list
        retList = []
        
        queue.append(root)

        # array to keep track how many child nodes left to evaluate for a level
        arrChildNodesPerLvl = [1]
        level = 0
        # keep track of the child nodes for the next level
        countOfChildNodes = 0

        while (len(queue)):
            # pop the first node to evaluate
            node = queue.popleft()
            # add to the temp list for this level
            tempList.append(node.val)

            if (node.left is not None):
                # left child if exists
                queue.append(node.left)
                countOfChildNodes = countOfChildNodes + 1

            if (node.right is not None):
                # right child if exists
                queue.append(node.right)
                countOfChildNodes = countOfChildNodes + 1

            # after the node is evaluated, reduce the count of nodes left to be evaluated at this level
            arrChildNodesPerLvl[level] = arrChildNodesPerLvl[level] - 1

            if (arrChildNodesPerLvl[level] == 0):
                # if 0, it means that no more nodes on this level
                
                # since level complete, add the tempList to retList
                retList.append(tempList)
                # clear tempList because it is moving to the next level
                tempList = []

                # increase level
                level = level + 1
                # add the number of child nodes that are on the next level to check
                arrChildNodesPerLvl.append(countOfChildNodes)
                # reset count
                countOfChildNodes = 0

        return retList
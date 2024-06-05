"""
https://leetcode.com/problems/binary-tree-right-side-view/description/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        
        # BFS

        if (root is None):
            return []

        resList = []

        q = deque()

        q.append(root)

        arrLevelChild = [1]
        currLevel = 0
        
        while (len(q) != 0 and root is not None):

            for i in range(arrLevelChild[currLevel]):
                currNode = q.popleft()

                if (i == 0):
                    resList.append(currNode.val)

                if (currNode.right is not None):
                    q.append(currNode.right)
                if (currNode.left is not None):
                    q.append(currNode.left)

            arrLevelChild.append(len(q))
            currLevel = currLevel + 1

        return resList

            
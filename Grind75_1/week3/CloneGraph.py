"""
https://leetcode.com/problems/clone-graph/
"""

"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    # 43 ms, 17 MB
    def cloneGraphDFS(self, node: Optional['Node']) -> Optional['Node']:
        
        if (node is None):
            return node

        # dictionary
        visited = {}

        def DFS(node: Optional['Node'], visited: List['Node']) -> Optional['Node']:

            if (node is None):
                return node

            # create new node with just the value
            newNode = Node(node.val)

            # add the curr node to visited. Key is the node value and val is the new node obj
            visited[node.val] = newNode

            # add it's neighbors to visited
            for neighbor in node.neighbors:
                if (neighbor.val not in visited):
                    # not visited means it is not created yet
                    # create then add to neighbors
                    newNode.neighbors.append(DFS(neighbor, visited))
                else:
                    newNode.neighbors.append(visited[neighbor.val])

            # this will return the head of the cloned graph
            return newNode

        return DFS(node, visited)

    # 36 ms, 17 MB
    def cloneGraphBFS(self, node: Optional['Node']) -> Optional['Node']:

        if (node is None):
            return node

        queue = deque()
        visited = {}

        newHead = Node(node.val)
        # key is the og node val, value is the new node obj
        visited[node.val] = newHead

        queue.append(node)

        while (len(queue)):
            currNode = queue.popleft()

            for neighbor in currNode.neighbors:
                if (neighbor.val not in visited):
                    newNode = Node(neighbor.val)
                    visited[neighbor.val] = newNode
                    # append to neighbors
                    visited[currNode.val].neighbors.append(newNode)

                    queue.append(neighbor)
                else:
                    visited[currNode.val].neighbors.append(visited[neighbor.val])

        return newHead


    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        return self.cloneGraphDFS(node)
        #return self.cloneGraphBFS(node)
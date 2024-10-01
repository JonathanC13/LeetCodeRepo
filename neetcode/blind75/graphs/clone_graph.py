# https://neetcode.io/problems/clone-graph

"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:

        if not node:
            return node

        # key: node from original graph, value: the copy
        created_nodes = dict()

        def copy(node):
            if node in created_nodes:
                return created_nodes[node]

            new_node = Node(node.val)

            created_nodes[node] = new_node
            for neighbor in node.neighbors:
                new_node.neighbors.append(copy(neighbor))

            return new_node
                
        return copy(node)
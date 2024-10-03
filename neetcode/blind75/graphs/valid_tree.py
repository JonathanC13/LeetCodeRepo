# https://neetcode.io/problems/valid-tree

class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        # Valid tree is no cycles and all nodes connected.

        if not n:
            return True

        adj_map = {i:[] for i in range(n)}     

        for n1, n2 in edges:
            # since undirected, add both
            adj_map[n1].append(n2)
            adj_map[n2].append(n1)
        
        visited = set()

        # dfs
        def dfs(node, prevNode):
            if (node in visited):
                # cycle exists.
                return False

            visited.add(node)
            for neigh in adj_map[node]:
                if neigh == prevNode:
                    # since undirected, if source node in neighbor skip.
                    continue
                if not dfs(neigh, node):
                    return False

            return True

        res = dfs(0, -1) and n == len(visited)
        return res

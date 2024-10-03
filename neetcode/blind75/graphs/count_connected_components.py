# https://neetcode.io/problems/count-connected-components

class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        # Connected components is number of disjointed sets

        if not n and not edges:
            return 0;
        elif (not edges):
            return n;

        adj_list = {i:[] for i in range(n)}

        for n1, n2 in edges:
            adj_list[n1].append(n2)
            adj_list[n2].append(n1)

        visited = set()
        count = 0

        def dfs(node, prevNode):
            if (node in visited):
                # cycle, so don't eval it's edges again
                return

            visited.add(node)
            for neigh in adj_list[node]:
                if (neigh == prevNode):
                    continue
                dfs(neigh, node)

            return

        for i in range(n):
            if (i in visited):
                # already connected, so skip
                continue
            else:
                # new source node, beginning of new island
                count += 1
                dfs(i, -1)

        return count

# A disjoint-set data structure is defined as one that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
class UnionFind:

    def __init__(self):
        self.f = {}

    def findParent(self, x: int) -> int:
        y = self.f.get(x, x)
        if x != y:
            y = self.f[x] = self.findParent(y)
        return y

    def union(self, x: int, y: int):

        self.f[self.findParent(x)] = self.findParent(y)

class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        dsu = UnionFind()
        for a, b in edges:
            dsu.union(a, b)
        return len(set(dsu.findParent(x) for x in range(n)))
    
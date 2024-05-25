"""
https://leetcode.com/problems/accounts-merge/
"""

class Solution:
    # Had to reference another user's soluton because I'm in the wrong field.
    # It's fun understanding how solutions work, but I am unsure if I will ever
    #   be able to create them myself.

    def DFS(self, graph: defaultdict(set), node: str, visited: set(), resultDFS: List[str]):
        # add the email to visited to indicate it has been merged already
        visited.add(node)

        # For each neighbor go check its unvisited neighbors recursively, then add the
        #   key node to the result list

        for neighbor in graph[node]:
            if (neighbor not in visited):
                self.DFS(graph, neighbor, visited, resultDFS)

        resultDFS.append(node)


    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        
        graph = collections.defaultdict(set)

        for acc in accounts:

            for email in acc[1:]:
                # create edges between pairs of emails
                graph[acc[1]].add(email)
                graph[email].add(acc[1])
        
        # print(graph.items())

        # track the nodes that were already visited
        visited = set()

        retList = []


        for acc in accounts:
            accName = acc[0]

            for email in acc[1:]:
                if (email not in visited):

                    resultDFS = []
                    self.DFS(graph, email, visited, resultDFS)
                    retList.append([accName] + sorted(resultDFS))

                # if all the emails from an account in the original list have been visited,
                #   it indicates that is has already been merged and will not be added
                #   to the result list.


        return retList
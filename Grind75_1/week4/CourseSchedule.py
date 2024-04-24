"""
https://leetcode.com/problems/course-schedule/description/
"""

class Solution:
    # https://www.geeksforgeeks.org/topological-sorting/

    # numCourses = # of vertices
    # prerequisites defines the edges

    def buildAdjacencyList(self, numCourses: int, prerequisites: List[List[int]]) -> List[List[int]]:
        adj = [[] for _ in range(numCourses)]

        for i in prerequisites:
            adj[i[0]].append(i[1])

        return adj

    # 93 ms, 18.20 MB
    def canFinishDFS(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        
        adjList = self.buildAdjacencyList(numCourses, prerequisites)
        visited = set()

        def checkCycleDFS(currVert: int, stack: collections.deque, visited: set) -> bool:
            if (currVert in visited):
                # means have checked before and could mean cycle, look deeper
                if (currVert in stack):
                    # indicates cycle, since DFS if the vertice is still on the stack it is connected
                    return True
                else:
                    # else if not a stack
                    return False
                
            # indicating this vertice's adj are being checked
            stack.append(currVert)
            # mark as visited to indicate to not check again
            visited.add(currVert)

            for adj in adjList[currVert]:
                # must check all adj even if visited, since for a cycle the the connecting node has been visited and still on the stack
                if (checkCycleDFS(adj, stack, visited)):
                    return True

            # pop since the current vertice's did not create a cycle
            stack.pop()
            return False

        
        for x in range(numCourses):
            stack = deque()
            if (x not in visited):
                # can skip visited starting nodes since if there was a cycle the previous path containing this node would have caught it
                if (checkCycleDFS(x, stack, visited)):
                    # if has a cycle, ret False to being able to complete courses
                    return False

        return True

    # https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/
    # 90 ms, 18.33 MB
    def canFinishBFS(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        queue = deque()

        adjList = self.buildAdjacencyList(numCourses, prerequisites)

        # Add all nodes with in-degree 0 to a queue
        inDegree = [0] * numCourses

        for a, b in prerequisites:
            # get total incoming for the vertices
            inDegree[b] = inDegree[b] + 1

        for x in range(numCourses):
            if (inDegree[x] == 0):
                queue.append(x)

        # /Add all nodes with in-degree 0 to a queue

        # final list in topological order
        listTopoOrd = []

        # While the queue is not empty
        while (len(queue)):
            # Remove a node from the queue
            currVert = queue.popleft()

            listTopoOrd.append(currVert)

            for adj in adjList[currVert]:
                # For each outgoing edge from the removed node, decrement the in-degree of the destination node by 1.
                inDegree[adj] = inDegree[adj] - 1

                # If the in-degree of a destination node becomes 0, add it to the queue
                # so to evaluate it's outgoing later
                if (inDegree[adj] == 0):
                    queue.append(adj)

        print(listTopoOrd, end = " ")

        # If the queue is empty and there are still nodes in the graph, the graph contains a cycle and cannot be topologically sorted.
        if (len(listTopoOrd) != numCourses):
            return False
        
        # The nodes in the queue represent the topological ordering of the graph
        return True


    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        return self.canFinishDFS(numCourses, prerequisites)
        #return self.canFinishBFS(numCourses, prerequisites)

"""
https://leetcode.com/problems/01-matrix/description/
"""

class Solution:

    # Direction vectors
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    lenOfRows = 0
    lenOfCols = 0

    # Function to check if a cell
    # is be visited or not
    def isValid(self, vis, row, col):
        
        # If cell lies out of bounds
        if (row < 0 or col < 0 or row >= self.lenOfRows or col >= self.lenOfCols):
            return False
    
        # If cell is already visited
        if ((row, col) in vis):
            return False
    
        # Otherwise
        return True

    # https://www.geeksforgeeks.org/breadth-first-traversal-bfs-on-a-2d-array/
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:

        self.lenOfRows = len(mat)
        self.lenOfCols = len(mat[0])

        # Stores indices of the matrix cells
        queue = deque()

        # Declare the visited set
        visited = set()

        # mark all 0 elements as visited
        for x in range(self.lenOfRows):
            for y in range(self.lenOfCols):
                if (mat[x][y] == 0):
                    # marked
                    visited.add((x, y))
                    # added to queue to later check its neighbors
                    queue.append((x, y))

        # BFS
        while (queue):
            
            x, y = queue.popleft()
            
            # check neighbors
            for direct in self.directions:
                adjx = x + direct[0]
                adjy = y + direct[1]
                
                if (self.isValid(visited, adjx, adjy)):
                    # Bottom-Up Approach (Tabulation)
                    mat[adjx][adjy] = mat[x][y] + 1
                    visited.add((adjx, adjy))
                    queue.append((adjx, adjy))

        return mat
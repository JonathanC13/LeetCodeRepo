"""
https://leetcode.com/problems/unique-paths/description/
"""

class Solution:

    # Time limit exceeded
    def uniquePathsMine(self, m: int, n: int) -> int:

        def DFS(row: int, col: int) -> int:

            if (row >= m or col >= n):
                return 0
            elif (row == m - 1 and col == n - 1):
                return 1
            
            # DFS right first
            right = DFS(row, col + 1)

            # then down
            down = DFS(row + 1, col)

            return right + down


        uniquePaths = DFS(0, 0)

        return uniquePaths


    def uniquePathsDP(self, m: int, n: int) -> int:

        dpTable = [[0] * n for _ in range(m)]
        dpTable[0][0] = 1
        for i in range(m):
            for j in range(n):
                # get num of paths to current index by adding the num of paths that 
                #   could get to the top and left indexes
                topPaths = 0
                leftPaths = 0

                if (i - 1 >= 0):

                    # add 1 for the path to this node
                    topPaths = dpTable[i-1][j]

                if (j - 1 >= 0):
                    leftPaths = dpTable[i][j - 1]

                dpTable[i][j] = max(dpTable[i][j], topPaths + leftPaths)

        #for i in range(m):
        #    print(dpTable[i])

        return dpTable[m-1][n-1]


    def uniquePaths(self, m: int, n: int) -> int:
        #return self.uniquePaths(m, n)
        return self.uniquePathsDP(m, n)
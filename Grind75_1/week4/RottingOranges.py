"""
https://leetcode.com/problems/rotting-oranges/submissions/1248651881/
"""

class Solution:

    def orangesRottingBFS(self, grid: List[List[int]]) -> int:
        # keep track of how many oranges rotted in the current minute
        numOfNewRotted = 0
        mins = 0

        rows = len(grid)
        cols = len(grid[0])

        dirs = [(0, -1), (-1, 0), (0, 1), (1, 0)]

        queue = deque()

        # queue up all initial rotten oranges
        for r in range(rows):
            for c in range(cols):
                if (grid[r][c] == 2):
                    queue.append((r, c))

        numOfNewRotted = len(queue)

        while (len(queue) != 0):
            curR, curC = queue.popleft()
            # decrement the number of oranges to check in the current minute
            numOfNewRotted = numOfNewRotted - 1

            for dirR, dirC in dirs:
                tarR = curR + dirR
                tarC = curC + dirC

                if (tarR >= 0 and tarR < rows and tarC >= 0 and tarC < cols and grid[tarR][tarC] == 1):
                    # if found an adjacent fresh orange, change to rotten
                    grid[tarR][tarC] = 2
                    queue.append((tarR, tarC))

            if (numOfNewRotted == 0):
                # all rotted oranges for the current minute have been evaluated.
                # incre mins
                mins = mins + 1

                # set num of new rotted to check in the new minute
                numOfNewRotted = len(queue)

        # decre 1 since the last orange to be rotted completes the grid
        if (mins != 0):
            mins = mins - 1

        # debug, check final grid
        #for r in range(rows):
        #    print(grid[r])

        # check for any fresh oranges, if yes then return -1.
        for r in range(rows):
            for c in range(cols):
                if (grid[r][c] == 1):
                    return -1

        return mins

    def orangesRotting(self, grid: List[List[int]]) -> int:
        return self.orangesRottingBFS(grid)
        # todo recursive soln
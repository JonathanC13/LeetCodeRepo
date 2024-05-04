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


    def orangesRottingDFS(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])

        if(rows == 0):
            return -1;

        # 0 for empty, 1 for fresh, so start at 2. At end -2 to get the actual minutes
        minutes = 2

        def helper(grid: List[List[int]], r: int, c: int, mins: int):
            
            if (r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == 0 or (grid[r][c] >= 2 and grid[r][c] < mins)):
                # out of bounds
                # empty cell
                # orange has already rotted from another orange. i.e. the target cell has a minute value lesser than the current minute being evaluated meaning this orange can be rotted earlier.
                return

            # place the minimum value for this specific orange to rot
            grid[r][c] = mins

            # check left, top, right, bot
            helper(grid, r, c - 1, mins + 1)
            helper(grid, r - 1, c, mins + 1)
            helper(grid, r, c + 1, mins + 1)
            helper(grid, r + 1, c, mins + 1)

            return

        # for each rotton orange, spread the rot
        for r in range(rows):
            for c in range(cols):
                if (grid[r][c] == 2):
                    # when a rotted orange is found, spread the rot and the value in the rotted orange is the minute that orange becomes rotted.
                    helper(grid, r, c, 2)

        for r in range(rows):
            print(grid[r])

        for r in range(rows):
            for c in range(cols):
                # the highest value in the grid is the minute that last possible orange was rotted.
                minutes = max(grid[r][c], minutes)
                if (grid[r][c] == 1):
                    # if there is still a fresh orange, ret -1
                    return -1

        

        return minutes - 2


    def orangesRotting(self, grid: List[List[int]]) -> int:
        #return self.orangesRottingBFS(grid)
        return self.orangesRottingDFS(grid)
        
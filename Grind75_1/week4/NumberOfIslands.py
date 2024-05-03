"""
https://leetcode.com/problems/number-of-islands/
"""


class Solution:

    def numIslandsRec(self, grid: List[List[str]]) -> int:
        # for each "land", 1, search left, top, right, and bottom for adjacent "land" tiles
        numOfIslands = 0
        rows = len(grid)
        cols = len(grid[0])

        # DFS
        def helper(grid: List[List[str]], x: int, y: int):
            if (0 > x or x >= rows or 0 > y or y >= cols or grid[x][y] == "0"):
                return

            # mark the tile has been visited and can use the same "water" value, "0"
            grid[x][y] = "0"

            # go left
            helper(grid, x, y - 1)

            # go up
            helper(grid, x - 1, y)

            # go right
            helper(grid, x, y + 1)

            # go down
            helper(grid, x + 1, y)

        for x in range(rows):
            for y in range(cols):
                # check each tile, if a "land" tile then determine the adjacent "land" tiles
                if (grid[x][y] == "1"):
                    # can increment numOfIslands because function helper(...) will turn all the tile and it's adjacent land tiles to "0" to indicate visited.
                    numOfIslands = numOfIslands + 1

                    helper(grid, x, y)

        for x in range(rows):
            print(grid[x])

        return numOfIslands

    
    def numIslandsIter(self, grid: List[List[str]]) -> int:
        numOfIslands = 0

        rows = len(grid)
        cols = len(grid[0])

        directions = [(0, -1), (-1, 0), (0, 1), (1, 0)]

        # BFS
        def helper(grid: List[List[str]], x: int, y: int):
            grid[x][y] = "0"

            queue = deque()
            queue.append((x, y))

            while (len(queue) != 0):
                tarX, tarY = queue.popleft()

                for dirX, dirY in directions:
                    chkX = tarX + dirX
                    chkY = tarY + dirY

                    if (chkX >= 0 and chkX < rows and chkY >= 0 and chkY < cols and grid[chkX][chkY] == "1"):
                        queue.append((chkX, chkY))
                        grid[chkX][chkY] = "0"


        for x in range(rows):
            for y in range(cols):
                if (grid[x][y] == "1"):
                    numOfIslands = numOfIslands + 1
                    helper(grid, x, y)
                    
                    
        for x in range(rows):
            print(grid[x])

        return numOfIslands


    def numIslands(self, grid: List[List[str]]) -> int:
        #return self.numIslandsRec(grid)
        return self.numIslandsIter(grid)
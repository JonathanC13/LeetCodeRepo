# https://neetcode.io/problems/count-number-of-islands

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        
        island_count = 0;
        if (not grid):
            return island_count

        # NESW
        directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

        # DFS all land tiles connected to the source tile while converting them to water tiles so that they are not re-visited.
        def DFS(source):
            nonlocal grid
            nonlocal directions

            # check bounds and if water tile
            if (source[0] < 0 or source[0] >= len(grid) or source[1] < 0 or source[1] >= len(grid[0]) or grid[source[0]][source[1]] == '0'):
                return

            # change tile to water so that it will not be visited again in the future.
            grid[source[0]][source[1]] = '0'

            for direction in directions:
                DFS((source[0] + direction[0], source[1] + direction[1]))

        # Must check each tile to determine if a land tile before checking it's connected land tiles.
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                # Visit all connected land tiles if land tile found.
                if (grid[r][c] == '1'):
                    island_count += 1
                    DFS((r,c))
        
        return island_count
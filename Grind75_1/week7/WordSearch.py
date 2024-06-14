"""
https://leetcode.com/problems/word-search/
"""

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        
        r = len(board)

        if (r == 0):
            return False

        c = len(board[0])
        lenW = len(word)

        visited = [[False] * c for _ in range(r)]

        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        def DFS(row:int, col:int, wordIdx: int) -> bool:

            if (row < 0 or row >= r or col < 0 or col >= c
                or visited[row][col] == True
                or word[wordIdx] != board[row][col]):
                return False
            elif (lenW - 1 == wordIdx and word[wordIdx] == board[row][col]):
                return True

            found = False
            # mark visited so that the tile cannot be used again in the solution
            visited[row][col] = True

            for ro, co in directions:
                # check in all directions
                found = DFS(row + ro, col + co, wordIdx + 1)
                
                if (found):
                    return found
            
            # after tile evaluation, mark it false so it can be used in another solution
            visited[row][col] = False
            return found


        found = False
        for x in range(r):
            for y in range(c):
                if (board[x][y] == word[0]):
                    # only start DFS if first letter matches
                    found = DFS(x, y, 0)
                    if (found):
                        return found

        return found
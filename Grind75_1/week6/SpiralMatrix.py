"""
https://leetcode.com/problems/spiral-matrix/
"""

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        
        rows = len(matrix)
        cols = len(matrix[0])

        visited = [[False] * cols for _ in range(rows)]

        dirs = [[0,1], [1,0], [0,-1], [-1,0]]

        resList = []

        r = 0
        c = -1
        dirIdx = 0

        for i in range (0, (rows * cols)):
            cnt = len(dirs)
            while (cnt >= 0):
                cnt = cnt - 1

                newR = r + dirs[dirIdx][0]
                newC = c + dirs[dirIdx][1]
                
                if (newR < 0 or newR >= rows or newC < 0 or newC >= cols or visited[newR][newC] == True):
                    if (dirIdx + 1 < len(dirs)):
                        dirIdx = dirIdx + 1
                    else:
                        dirIdx = 0
                    continue
                elif (visited[newR][newC] == False):
                    r = newR
                    c = newC
                    break
                    

            resList.append(matrix[r][c])
            visited[r][c] = True

        return resList
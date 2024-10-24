# https://neetcode.io/problems/count-paths

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        row = [1] * n

        # for each row, add the previous row 
        for i in range(m - 1):
            newRow = [1] * n
            # start at the col -1 of destination
            for j in range(n - 2, -1, -1):
                # add the value from the row above in the same col and j+1 (to dest)
                newRow[j] = row[j] + newRow[j + 1]
            row = newRow

        return row[0]


        # my soln
        # dp_table = [[-1] * n for _ in range(m)]
        # dp_table[0][0] = 1

        # for r in range(m):
        #     for c in range(n):
        #         left_c = c - 1
        #         up_r = r - 1

        #         if (left_c >= 0 and left_c < n):
        #             if (dp_table[r][c] == -1):
        #                 dp_table[r][c] = dp_table[r][left_c]
        #             else:
        #                 dp_table[r][c] += dp_table[r][left_c]

        #         if (up_r >= 0 and up_r < m):
        #             if (dp_table[r][c] == -1):
        #                 dp_table[r][c] = dp_table[up_r][c]
        #             else:
        #                 dp_table[r][c] += dp_table[up_r][c]

        # # for r in range(m):
        # #     print(dp_table[r])

        # return dp_table[m-1][n-1]
# https://neetcode.io/problems/set-zeroes-in-matrix

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        # essentially need to only zero the rows and columns that originally have the 0s and not based of the changed to 0s
        rows = len(matrix)
        cols = len(matrix[0])
        
        row_zero = False

        for r in range(rows):
            for c in range(cols):
                if matrix[r][c] == 0:
                    # if a zero is detected, it will 0 the col so set the first elem in the col to 0 as a marker for later to 0 the col
                    matrix[0][c] = 0
                    if r > 0:
                        # same for row, if 0 on that row, put a marker in the first elem in the row as a marker
                        matrix[r][0] = 0
                    else:
                        # means the 0 is in the first row
                        row_zero = True

        # filling the zeros based off the markers
        for r in range(1, rows):
            for c in range(1, cols):
                if (matrix[r][0] == 0 or matrix[0][c] == 0):
                    matrix[r][c] = 0

        # handle the first col marker
        if (matrix[0][0] == 0):
            for r in range(rows):
                matrix[r][0] = 0

        # handle first row marker
        if (row_zero):
            for c in range(cols):
                matrix[0][c] = 0


        #  my soln
        # directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        # for r in range(rows):
        #     for c in range(cols):
        #         if (matrix[r][c] == 0):
        #             for d in directions:
        #                 new_r = d[0] + r
        #                 new_c = d[1] + c
        #                 while (new_r >= 0 and new_r < rows and new_c >= 0 and new_c < cols):
        #                     if (matrix[new_r][new_c] != 0):
        #                         matrix[new_r][new_c] = -1   # mark for conversion later

        #                     new_r += d[0]
        #                     new_c += d[1]

        # # final clean up, convert all -1 to 0
        # for r in range(rows):
        #     for c in range(cols):
        #         if (matrix[r][c] == -1):
        #             matrix[r][c] = 0

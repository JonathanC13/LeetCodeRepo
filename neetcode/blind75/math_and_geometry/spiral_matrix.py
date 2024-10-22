# https://neetcode.io/problems/spiral-matrix

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        # note the matrix does not have to be n x n

        top = 0
        bot = len(matrix)

        left = 0
        right = len(matrix[0])

        res = []

        while left < right and top < bot:

            # top side
            for i in range(left, right):
                res.append(matrix[top][i])
            # as spiralling, clamp
            top += 1

            # right side
            for i in range(top, bot):
                res.append(matrix[i][right-1])
            right -= 1

            # handle special case of 1 column matrix
            if not (left < right and top < bot):
                break

            # bottom side
            for i in range(right-1, left-1, -1):
                res.append(matrix[bot-1][i])
            bot -= 1

            # left side
            for i in range(bot-1, top-1, -1):
                res.append(matrix[i][left])
            left += 1

        return res
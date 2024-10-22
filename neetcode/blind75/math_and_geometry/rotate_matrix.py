# https://neetcode.io/problems/rotate-matrix

class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        left = 0
        right = len(matrix) - 1

        # if right == left, no change needs and can end
        while (right > left):

            # number of rotations for this perimeter
            # e.g len = 3, left = 0, right = 2. To fully rotate this perimeter, need only 2 rotations
            for i in range(right - left):
                # temp save, choose topleft
                tempTL = matrix[left][left + i]

                # replace topleft with bottom left
                matrix[left][left + i] = matrix[right - i][left]

                # replace bottom left with bottom right
                matrix[right - i][left] = matrix[right][right - i]

                # replace bottom right with top right
                matrix[right][right - i] = matrix[left + i][right]

                # replace top right with the tempTL
                matrix[left + i][right] = tempTL

            # clamp to the next perimeter
            left += 1
            right -= 1

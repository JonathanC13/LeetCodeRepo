"""
https://leetcode.com/problems/flood-fill/description/
"""

class Solution:
    def floodFillRec(self, image: List[List[int]], sr: int, sc: int, color: int, startingColor: int):

        # recursive solution
        # base cases
        if (sr < 0 or sr >= len(image) or sc < 0 or sc >= len(image[0])):
            return
        elif (image[sr][sc] != startingColor or image[sr][sc] == color):
            return

        image[sr][sc] = color

        # checking left of current
        self.floodFillRec(image, sr, sc - 1, color, startingColor)

        # checking top of current
        self.floodFillRec(image, sr - 1, sc, color, startingColor)

        # checking right of current
        self.floodFillRec(image, sr, sc + 1, color, startingColor)

        # checking bottom of current
        self.floodFillRec(image, sr + 1, sc, color, startingColor)

        return


    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        
        self.floodFillRec(image, sr, sc, color, image[sr][sc])

        return image

"""
https://leetcode.com/problems/container-with-most-water/
"""

class Solution:

    # TLE, try again later
    def maxArea(self, height: List[int]) -> int:
        
        lenH = len(height)

        table = [[0] * lenH for _ in range(lenH)]

        maxArea = 0

        # always can get the area of the walls that are adjacent
        #adj = True
        #maxLocal = 0

        for i in range(lenH):
            for j in range(i + 1, lenH):

                # adj or current height can create container with "i" height
                # height * width
                table[i][j] = min(height[i], height[j]) * (j - i)
                maxArea = max(maxArea, table[i][j])


                #adj = False

            #adj = True
            #maxLocal = 0

        return maxArea
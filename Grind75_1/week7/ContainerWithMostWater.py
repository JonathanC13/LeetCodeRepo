"""
https://leetcode.com/problems/container-with-most-water/
"""

class Solution:

    # TLE: :(
    def maxAreaTabulate(self, height: List[int]) -> int:
        
        lenH = len(height)

        table = [[0] * lenH for _ in range(lenH)]

        maxArea = 0

        # always can get the area of the walls that are adjacent
        # oops, thought container could not contain greater heights inbetween. My skull is fogged up.
        #adj = True
        #maxLocal = 0

        # only need to calc half of table. O(N^2) ? so TLE
        for i in range(lenH):
            for j in range(i + 1, lenH):

                """
                if (!adj and height[j] <= maxLocal):
                    # if not directly adjacent height and current height is less than or equal to the local max height between the "i" height and curr, then skip because container cannot be created with "i"
                    continue
                """
                
                # adj or current height can create container with "i" height
                # height * width
                table[i][j] = min(height[i], height[j]) * (j - i)
                maxArea = max(maxArea, table[i][j])


                #adj = False

            #adj = True
            #maxLocal = 0

        return maxArea


    def maxAreaDoublePt(self, height: List[int]) -> int:

        # intuition, start 1 pointer at the beginning and 1 pointer at the end. Since area is H X L, then calculate area starting from the max L and work inwards
        # O(N)
        
        lenH = len(height)

        maxArea = 0
        
        # "pointers"
        left = 0
        right = lenH - 1

        while (left < right):
            leftH = height[left]
            rightH = height[right]

            # container height is limited by the shortest height
            maxArea = min(leftH, rightH) * (right - left)

            # move shortest height pointer since to maximize keep the tallest
            if (leftH <= rightH):
                left = left + 1
            else:
                right = right - 1

        return maxArea
    

    def maxArea(self, height: List[int]) -> int:
        #return self.maxAreaTabulate(height)
        return maxAreaDoublePt(height)

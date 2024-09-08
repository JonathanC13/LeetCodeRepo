# https://neetcode.io/problems/max-water-container

class Solution:
    def maxArea(self, heights: List[int]) -> int:
        if len(heights) < 2:
            return 0

        curr_max = 0
        left = 0
        right = len(heights) - 1

        while left < right:
            curr_max = max(curr_max, (right - left) * min(heights[left], heights[right]))

            # keep the tallest and most the shorter height pointer
            if (heights[left] < heights[right]):
                left += 1
            else:
                right -= 1

        return curr_max
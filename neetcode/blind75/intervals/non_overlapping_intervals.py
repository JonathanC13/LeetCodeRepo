# https://neetcode.io/problems/non-overlapping-intervals

class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        
        intervals.sort(key=lambda interval:interval[0])
        res = 0
        tailEnd = intervals[0][1]

        for start, end in intervals[1:]:
            if (start >= tailEnd):
                # no overlap, set new end int
                tailEnd = end
            else:
                # overlap.
                # removal count
                res += 1

                # new end should be the lowest int because it will have the least overlap potential
                tailEnd = min(tailEnd, end)
        
        return res
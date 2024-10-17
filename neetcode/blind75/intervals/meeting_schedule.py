# https://neetcode.io/problems/meeting-schedule

"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        # overlap is strictly < not =. e.g. (0, 8), (8,10) is not a conflict

        if not intervals:
            return True

        intervals.sort(key=lambda interval:interval.end)
        tailEnd = intervals[0].end

        for i in intervals[1:]:
            if (i.start >= tailEnd):
                # no conflict, assign new end time
                tailEnd = i.end
            else:
                # conflict, ret False
                return False
        
        return True
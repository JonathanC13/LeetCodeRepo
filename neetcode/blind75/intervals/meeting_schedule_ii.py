# https://neetcode.io/problems/meeting-schedule-ii

"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        if not intervals:
            return 0

        time = []

        for i in intervals:
            start, end = i.start, i.end
            time.append((start, 1))
            time.append((end, -1))

        # Python sorts tuples and lists like these lexicographically; compare the first element, and only if that doesn't differ, compare the second element, etc.
        time.sort(key=lambda t: (t[0], t[1]))
        # by sorting like this, if there is a conflict, there will be >= 2 t[1]s next to eachother. While if no conflict in that interval, a t[1] = 1 will be closed by a t[1] = -1 right after.

        print(time)

        count = 0
        max_days = 0

        for t in time:
            count += t[1]
            max_days = max(max_days, count)

        return max_days

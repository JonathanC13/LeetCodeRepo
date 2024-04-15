"""
https://leetcode.com/problems/insert-interval/description/
"""

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        
        start = 0
        end = len(intervals) - 1
        mid = 0

        if (end == -1):
            intervals.append(newInterval)
            return intervals

        while start <= end:
            mid = start + ((end - start) // 2)
            print(str(mid))
            if (newInterval[0] >= intervals[mid][0] and newInterval[0] <= intervals[mid][1]):
                break
            elif (newInterval[0] < intervals[mid][0]):
                # go left
                end = mid - 1

            elif (newInterval[0] > intervals[mid][0]):
                # go right
                start = mid + 1

            else:
                # starts match
                break

        # mid represents an exact start value match or the index +- 1 that it can insert at (need to check again).
        mergedInterval = []
        print('-' + str(mid))
        if (intervals[mid][0] <= newInterval[0] and intervals[mid][1] >= newInterval[0]):
            # if new interval start is within the interval at mid
            mergedInterval.append(intervals[mid][0])
        elif (newInterval[0] <= intervals[mid][0] and newInterval[1] >= intervals[mid][0]):
            # if interval start at mid is within the new interval
            mergedInterval.append(newInterval[0])

        elif (newInterval[1] < intervals[mid][1]):
            # if the end of the new interval is less than the interval at mid
            # insert and return
            intervals.insert(mid, newInterval)
            return intervals

        else:
            # start of new interval is greater than the end of interval at mid
            intervals.insert(min(len(intervals), mid + 1), newInterval)
            return intervals

        #
        newList = []

        # initial merged end value
        mergedInterval.append(max(intervals[mid][1], newInterval[1]))

        for i in range(0, len(intervals)):
            if (i < mid):
                # just the valid left intervals
                newList.append(intervals[i])
            elif (i == mid):
                newList.append(mergedInterval)
            elif (intervals[i][0] <= mergedInterval[1]):
                # if end of merged contains the start of the interval at i
                # take its end if larger
                mergedInterval[1] = max(mergedInterval[1], intervals[i][1])
            else:
                newList.append(intervals[i])


        return newList

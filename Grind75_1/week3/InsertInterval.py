"""
https://leetcode.com/problems/insert-interval/description/
"""

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        
        lenOfList = len(intervals)

        if (lenOfList == 0):
            intervals.append(newInterval)
            return intervals

        # track range of indexed that were merged
        left = lenOfList
        right = 0

        retList = []

        def merge(start: int, end: int):
            nonlocal newInterval
            nonlocal left
            nonlocal right
            nonlocal retList

            if (start > end):
                return

            mid = start + ((end - start) // 2)

            if ((newInterval[0] >= intervals[mid][0] and newInterval[0] <= intervals[mid][1])
                    or (newInterval[1] >= intervals[mid][0] and newInterval[1] <= intervals[mid][1])):
                # if the newInterval start is within the interval at mid
                #   or newInterval end is within the interval at mid
                newInterval[0] = min(newInterval[0], intervals[mid][0])
                newInterval[1] = max(newInterval[1], intervals[mid][1])
                left = min(left, mid)
                right = max(right, mid)
            elif (newInterval[0] <= intervals[mid][0] and newInterval[1] >= intervals[mid][1]):
                # if newInterval totally contains the interval at mid, no merge
                left = min(left, mid)
                right = max(right, mid)
            # else pass

            # check left mid to merge
            merge(start, mid - 1)

            # check right mid to merge
            merge(mid + 1, end)

            # fin

        merge(0, lenOfList - 1)
        print(str(left))
        print(str(right))
        print(newInterval)

        # slice out the merged intervals if merge happened
        if (left <= right):
            intervals = intervals[:left] + intervals[right + 1:]

        addedFlag = 0
        interIdx = 0
        lenOfList = len(intervals)

        while (interIdx < lenOfList):
            if (newInterval[1] < intervals[interIdx][0] and not addedFlag):
                retList.append(newInterval)
                addedFlag = 1
            else:
                retList.append(intervals[interIdx])
                interIdx = interIdx + 1

        if (not addedFlag):
            retList.append(newInterval)
                             

        return retList


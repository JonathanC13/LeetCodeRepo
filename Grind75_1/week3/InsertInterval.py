"""
https://leetcode.com/problems/insert-interval/description/
"""

class Solution:
    def insertMine(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        
        lenOfList = len(intervals)

        if (lenOfList == 0):
            intervals.append(newInterval)
            return intervals

        # track range of indexed that were merged
        left = lenOfList
        right = 0

        retList = []

        # recursive function to check each interval in intervals and merging if needed into newInterval
        # binary search to get to each elem
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

        # if newInterval is left over, add it at the end
        if (not addedFlag):
            retList.append(newInterval)
                             

        return retList


    def insertLinear(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:

        lenOfIntervals = len(intervals)
        i = 0
        retList = []

        while (i < lenOfIntervals and intervals[i][1] < newInterval[0]):
            # if interval end is less than the newInterval start, can just add
            retList.append(intervals[i])
            i = i + 1

        while (i < lenOfIntervals and intervals[i][0] <= newInterval[1]):
            # if interval start is less than the newInterval end
            newInterval[0] = min(newInterval[0], intervals[i][0])
            newInterval[1] = max(newInterval[1], intervals[i][1])
            i = i + 1

        # after merges, append to retList
        retList.append(newInterval)

        while (i < lenOfIntervals):
            # remainder of the list
            retList.append(intervals[i])
            i = i + 1

        return retList


    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        #return self.insertMine(intervals, newIntervals)
        return self.insertLinear(intervals, newInterval)
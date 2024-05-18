"""
https://leetcode.com/problems/merge-intervals/description/
"""

class Solution:

    def intervalMerger(self, arr: List[List[int]], iter1: int, currStart: int, currEnd: int) -> tuple():

        pop = False
        if (arr[iter1][0] >= currStart and arr[iter1][0] <= currEnd):
            # beginning of the interval is within the current interval
            pop = True
            
            currEnd = max(currEnd, arr[iter1][1])

        elif (arr[iter1][1] >= currStart and arr[iter1][1] <= currEnd):
            # end of the interval is within the current interval
            pop = True
            
            currStart = min(currStart, arr[iter1][0])

        elif (arr[iter1][0] < currStart and arr[iter1][1] > currEnd):
            # interval totally encapsulates current interval
            pop = True

            currStart = arr[iter1][0]

            currEnd = arr[iter1][1]

        return (currStart, currEnd, pop)


    # time exceeded, need to try again later
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        
        retList = []

        currStart = None
        currEnd = None

        idx = 0
        lenRet = len(retList)
        lenArr = len(intervals)

        while (idx < lenArr):
            # loop with current element
            curr = intervals.pop(idx)
            currStart = curr[0]
            currEnd = curr[1]

            lenArr = len(intervals)

            iter1 = 0
            # check all elements in case there is no order in the original list
            while (iter1 < lenArr):

                if (iter1 == idx):
                    iter1 = iter1 + 1
                    continue
                    
                resTuple = self.intervalMerger(intervals, iter1, currStart, currEnd)
                
                currStart = resTuple[0]
                currEnd = resTuple[1]

                if (resTuple[2] == True):
                    p = intervals.pop(iter1)
                    lenArr = len(intervals)
                else:
                    iter1 = iter1 + 1

            # also check retList to see if can merge
            iter1 = 0
            lenRet = len(retList)

            while (iter1 < lenRet):
                resTuple = self.intervalMerger(retList, iter1, currStart, currEnd)

                currStart = resTuple[0]
                currEnd = resTuple[1]

                if (resTuple[2] == True):
                    p = retList.pop(iter1)
                    lenRet = len(retList)
                else:
                    iter1 = iter1 + 1

            
            # finally append to retList
            retList.append([currStart, currEnd])


        return retList

        
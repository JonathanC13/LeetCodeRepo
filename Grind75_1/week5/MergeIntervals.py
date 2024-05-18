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


    # time exceeded
    def mergeMine1(self, intervals: List[List[int]]) -> List[List[int]]:
        
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


    def mergeElems(self, intervals, start: int, mid: int, end: int) -> None:

        """
        leftLen = mid - start + 1
        rightLen = end - mid

        leftLst = []
        rightLst = []

        for i in range(leftLen):
            leftLst.append(intervals[start + i])

        for i in range(rightLen):
            rightLst.append(intervals[mid + i + 1])
        """
        leftLst = intervals[start:mid + 1]
        rightLst = intervals[mid + 1: end + 1]

        leftLen = len(leftLst)
        rightLen = len(rightLst)

        leftIdx = 0
        rightIdx = 0
        mainIdx = start

        while (leftIdx < leftLen and rightIdx < rightLen):
            
            # eval start value in each interval
            if (leftLst[leftIdx][0] <= rightLst[rightIdx][0]):
                intervals[mainIdx] = leftLst[leftIdx]
                leftIdx = leftIdx + 1
            else:
                intervals[mainIdx] = rightLst[rightIdx]
                rightIdx = rightIdx + 1

            mainIdx = mainIdx + 1


        # remainder, either left or right will have some left over
        for i in range(leftIdx, leftLen):
            intervals[mainIdx] = leftLst[i]
            mainIdx = mainIdx + 1

        for i in range(rightIdx, rightLen):
            intervals[mainIdx] = rightLst[i]
            mainIdx = mainIdx + 1


    # Time worst: O(n log(n))
    def mergeSort(self, intervals, start: int, end: int):
        if (start >= end):
            # when at single element
            return

        mid = int((start + end) / 2)
        self.mergeSort(intervals, start, mid)
        self.mergeSort(intervals, mid + 1, end)
        self.mergeElems(intervals, start, mid, end)

    # very slow, but passed all test cases
    def mergeMine2(self, intervals: List[List[int]]) -> List[List[int]]:

        lenLst = len(intervals)

        self.mergeSort(intervals, 0, lenLst - 1)

        # now merge linearly
        retLst = []

        mainIdx = 0

        currStart = None
        currEnd = None

        while (mainIdx < lenLst):
            currStart = intervals[mainIdx][0]
            currEnd = intervals[mainIdx][1]

            iterIdx = mainIdx + 1
            # find other intervals to merge with
            while (iterIdx < lenLst):
                if (intervals[iterIdx][0] >= currStart and intervals[iterIdx][0] <= currEnd):
                    # beginning of the interval is within the current interval
                    currEnd = max(currEnd, intervals[iterIdx][1])


                elif (intervals[iterIdx][1] >= currStart and intervals[iterIdx][1] <= currEnd):
                    # end of the interval is within the current interval
                    currStart = min(currStart, intervals[iterIdx][0])

                elif (intervals[iterIdx][0] < currStart and intervals[iterIdx][1] > currEnd):
                    # interval totally encapsulates current interval
                    currStart = intervals[iterIdx][0]

                    currEnd = intervals[iterIdx][1]
                else:
                    # can break out if no merge since the list was sorted
                    break

                iterIdx = iterIdx + 1

            # skip mainIdx ahead over merged
            mainIdx = iterIdx
            # append to result list
            retLst.append([currStart, currEnd])

        return retLst

    # medium speed. Fast than mine due to python built in List sort is more efficient
    def mergeBuiltInSort(self, intervals: List[List[int]]) -> List[List[int]]:

        lenLst = len(intervals)

        # sort by starting value in each interval
        # Using python built in sort (uses Timsort) is greatly faster than pure mergesort
        intervals.sort(key = lambda interval : interval[0])
        print(intervals)

        # now merge linearly
        retLst = []

        mainIdx = 0

        currStart = None
        currEnd = None

        while (mainIdx < lenLst):
            currStart = intervals[mainIdx][0]
            currEnd = intervals[mainIdx][1]

            iterIdx = mainIdx + 1
            # find other intervals to merge with
            while (iterIdx < lenLst):
                if (intervals[iterIdx][0] >= currStart and intervals[iterIdx][0] <= currEnd):
                    # beginning of the interval is within the current interval
                    currEnd = max(currEnd, intervals[iterIdx][1])

                else:
                    # can break out if no merge since the list was sorted
                    break
                """ 
                # redundant since sorted with ascending start value of each interval
                elif (intervals[iterIdx][1] >= currStart and intervals[iterIdx][1] <= currEnd):
                    # end of the interval is within the current interval
                    currStart = min(currStart, intervals[iterIdx][0])

                elif (intervals[iterIdx][0] < currStart and intervals[iterIdx][1] > currEnd):
                    # interval totally encapsulates current interval
                    currStart = intervals[iterIdx][0]

                    currEnd = intervals[iterIdx][1]
                """
                

                iterIdx = iterIdx + 1

            # skip mainIdx ahead over merged
            mainIdx = iterIdx
            # append to result list
            retLst.append([currStart, currEnd])

        return retLst

        
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        #return self.mergeMine1(intervals)
        #return self.mergeMine2(intervals)
        return self.mergeBuiltInSort(intervals)
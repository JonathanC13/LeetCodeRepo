# https://neetcode.io/problems/find-median-in-a-data-stream

import heapq

class MedianFinder:

    def __init__(self):
        self.maxH = []  # for max heap, -1 * each value before insertion. smaller than median val
        self.minH = []  # heapq is default min heap. Larger than median val

    def addNum(self, num: int) -> None:
        # placing greater than current middle value on minH and less than current middle on maxH
        # only push onto min heap if there is a value and the num > min value
        # else onto maxH
        if self.minH and num > self.minH[0]:
            heapq.heappush(self.minH, num)
        else:
            heapq.heappush(self.maxH, -1*num)

        # need to balance since looking for median
        if (len(self.maxH) > len(self.minH) + 1):
            val = -1 * heapq.heappop(self.maxH) # heappop pops the min value in the heap
            heapq.heappush(self.minH, val)  # after inserting the min value from minH into minH it will bubble to the top to maintain 'median'

        if (len(self.minH) > len(self.maxH) + 1):
            val = heapq.heappop(self.minH)
            heapq.heappush(self.maxH, -1*val)   # added -1*val will bubble to top

    def findMedian(self) -> float:
        if (len(self.minH) > len(self.maxH)):
            # imbalanced, median is the top value in the minH
            return self.minH[0]
        elif (len(self.maxH) > len(self.minH)):
            # vice versa
            return -1*self.maxH[0]
        else:
            # if equal, the median is found by the avg of both top values
            return (self.minH[0] + (-1*self.maxH[0]))/2.0
        
        
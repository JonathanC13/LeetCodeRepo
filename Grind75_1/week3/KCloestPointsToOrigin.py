"""
https://leetcode.com/problems/k-closest-points-to-origin/description/
"""

import heapq

class Solution:
    def kClosestMine(self, points: List[List[int]], k: int) -> List[List[int]]:
        
        lenOfPoints = len(points)
        lstPointsDist = []

        # get all the distances for each point
        for i in range(lenOfPoints):
            lstPointsDist.append({'dist':sqrt(pow(points[i][0], 2) + pow(points[i][1], 2)), 'point':points[i]})

        # sort ascending by the distance
        lstPointsDist.sort(key = lambda lst : lst['dist'])
        #print(lstPointsDist)

        retList = []

        # get the k number of closest
        for i in range(k):
            retList.append(lstPointsDist[i]['point'])

        return retList


    def kClosestHeap(self, points: List[List[int]], k: int) -> List[List[int]]:

        heap = []

        for point in points:
            # multiple by -1 since heapq heappop and heappushpop will remove the smallest value, so the larger distance will now be the most negative.
            dist = (-1) * sqrt(pow(point[0], 2) + pow(point[1], 2))
            # https://docs.python.org/3/library/heapq.html
            if (len(heap) >= k):
                # it will sort by the first element of the tuple
                heapq.heappushpop(heap, (dist, point[0], point[1]))
            else:
                heapq.heappush(heap, (dist, point[0], point[1]))

        return [[x, y] for (dist, x, y) in heap]


    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
            #return self.kClosestMine(points, k)
            return self.kClosestHeap(points, k)
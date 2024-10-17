# https://neetcode.io/problems/insert-new-interval

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        
        res_list = []
        
        for i in range(len(intervals)):
            if (newInterval[1] < intervals[i][0]):
                # new interval end < the curr interval start. Means no more overlap; append the new interval and the rest of the intervals
                res_list.append(newInterval)
                res_list.extend(intervals[i:])
                return res_list
            elif (newInterval[0] > intervals[i][1]):
                # new interval start > interval end. no overlap and not insertion point yet; append current interval
                res_list.append(intervals[i])
            else:
                # merging
                newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]

        # if merged continued to the very end, need to append
        res_list.append(newInterval)
        return res_list


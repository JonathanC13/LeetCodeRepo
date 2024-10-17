# https://neetcode.io/problems/merge-intervals

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        
        # Let's sort the intervals by the start_i
        # so then we only have to loop the intervals once since merging is linear only forward for the loop
        
        # sort by start_i asc
        intervals.sort(key=lambda interval : interval[0])
        res_list = [intervals[0]]

        for start, end in intervals[1:]:
            # look at tail interval's end in res_list and attempt to merge forward with any start intervals that are <=
            tailIntervalEnd = res_list[-1][1]

            if tailIntervalEnd >= start:
                # merge when overlap
                res_list[-1][1] = max(res_list[-1][1], end)
            else:
                # append next interval to eval
                res_list.append([start, end])

        return res_list


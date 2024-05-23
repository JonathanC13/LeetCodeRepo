"""
https://leetcode.com/problems/time-based-key-value-store/
"""

# todo, try again for at least average speed


# lol. passes, but very slow compared to other solutions.
class TimeMap_Mine:

    # due to constraint: All the timestamps timestamp of set are strictly increasing,
    #   when appending, it will be in asc order of timestamp. 
    #   For get, can perform a binary search; it will either return the index where the 
    #   timestamp was found or the immediate prev

    # dict where key is the passed key
    #   value is a list of lists. nested list is [value, timestamp] 

    timeBasedDict = None

    def __init__(self):
        self.timeBasedDict = dict()
        

    def set(self, key: str, value: str, timestamp: int) -> None:
        if (key not in self.timeBasedDict):
            self.timeBasedDict[key] = []
        
        self.timeBasedDict[key].append([value, timestamp])


    # binary search
    def binSearch(self, lst: List[List[TypeVar]], target: int, start: int, end: int) -> int:

        if (start > end):
            if (end < 0):
                # possible for end to got negative if target is lower than first index value
                return 0

            # else will return the index of the value that is the immidiate previous
            #   since the target is not in the list
            return end

        mid = int((start + end) / 2)

        if (lst[mid][1] == target):
            return mid
        elif (lst[mid][1] > target):
            return self.binSearch(lst, target, start, mid - 1)
        else:
            return self.binSearch(lst, target, mid + 1, end)


    def get(self, key: str, timestamp: int) -> str:
        
        if (len(self.timeBasedDict) == 0 or (key not in self.timeBasedDict)):
            return ""
        
        idx = self.binSearch(self.timeBasedDict[key], timestamp, 0, len(self.timeBasedDict[key]) - 1)

        timeStmp = self.timeBasedDict[key][idx][1]

        # since binary search will return the idx where the target is or the last position checked, must check the timestamp value.
        if (timeStmp > timestamp):
            return ""
        else:
            return self.timeBasedDict[key][idx][0]


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
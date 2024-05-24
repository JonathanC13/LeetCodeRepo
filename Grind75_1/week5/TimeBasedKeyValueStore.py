"""
https://leetcode.com/problems/time-based-key-value-store/
"""


# lol. passes, but slow compared to other solutions. 657 ms
# To reduce runtime, check more edge cases so func get returns faster. 486 ms
class TimeMap:

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


    # binary search recursive slightly slower than iterative due to if target found
    #   it still needs to return the functions on the recursive stack
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


    # iterative binary search slightly faster since it returns immidiately when target found.
    def binSearchItr(self, lst: List[List[TypeVar]], target: int, start: int, end: int) -> int:
        
        while (start <= end):

            mid = int((start + end) / 2)

            if (lst[mid][1] == target):
                return mid
            elif (lst[mid][1] > target):
                end = mid - 1
            else:
                start = mid + 1

        if (end < 0):
            return 0
        else:
            return end 


    def get(self, key: str, timestamp: int) -> str:

        
        # edge cases
        if (len(self.timeBasedDict) == 0 or (key not in self.timeBasedDict)):
            return ""

        endArr = len(self.timeBasedDict[key]) - 1

        if (self.timeBasedDict[key][0][1] > timestamp):
            # check if first timestamp is larger than target
            return ""
        elif (self.timeBasedDict[key][endArr][1] < timestamp):
            # check if end is smaller than target, if true return it
            return self.timeBasedDict[key][endArr][0]

        
        # binary search for target or the prev valid timestamp
        idx = self.binSearchItr(self.timeBasedDict[key], timestamp, 0, len(self.timeBasedDict[key]) - 1)

        getTimeStmp = self.timeBasedDict[key][idx][1]


        # since binary search will return the idx where the target is or the last position checked, must check the timestamp value.
        if (getTimeStmp > timestamp):
            return ""
        else:
            return self.timeBasedDict[key][idx][0]


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
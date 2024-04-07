"""
Given an array, check if the values are in ascending order.
"""

from typing import List

def checkAscMain(list: List[int]) -> bool:
    lenOfList = len(list)
    prevVal = 1

    if (lenOfList != 0):
        prevVal = list[0]
    else:
        return True

    def checkAscRecur(currIdx: int) -> bool:
        nonlocal prevVal # when modifying nonlocal, use this keyword
        # base case
        if (currIdx >= lenOfList):
            return True
        elif (prevVal > list[currIdx]):
            return False
        
        prevVal = list[currIdx]

        return checkAscRecur(currIdx + 1)
    
    return checkAscRecur(0)
    
if __name__ == '__main__':
    list = [1, 2, 9, 10]
    print(checkAscMain(list))

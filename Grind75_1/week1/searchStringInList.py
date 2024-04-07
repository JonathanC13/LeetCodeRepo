"""
Given a list and a target string, find if the string is within the list.

Use recursion with the least amount of overhead.
To achieve lower overhead use an inner function:
    A function which is defined inside another function is known as inner function or nested function. Nested functions are able to access variables of the enclosing scope. Inner functions are used so that they can be protected from everything happening outside the function. This process is also known as Encapsulation

"""

import string
from typing import List


def findIfContain(list: List[str], target: str) -> bool:
    
    lenOfList = len(list)

    def recursiveSoln(currIdx: int) -> bool:

        # base cases
        if (currIdx >= lenOfList):
            return False
        elif (list[currIdx] == target):
            return True
        
        return recursiveSoln(currIdx + 1)
        
    return recursiveSoln(0)

if __name__ == '__main__': 
    testList = ['Hi', 'Bye', 'mama', 'mia']
    target = 'mia'
    print(findIfContain(testList, target))

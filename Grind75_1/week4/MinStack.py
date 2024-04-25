"""
https://leetcode.com/problems/min-stack/
"""

class Node:
    def __init__(self, val: int, min: int, next: 'Node'):
        self.val = val
        self.min = min
        self.next = next


class MinStack:
    headOfStack = None


    def __init__(self):
        pass


    def push(self, val: int) -> None:
        if (self.headOfStack is None):
            self.headOfStack = Node(val, val, None)
        else:
            # the nodes higher in the stack than the node with the min value have that min value repeating in the min property. While the nodes lower in the stack have the previous min value in their min property.
            newNode = Node(val, min(val, self.headOfStack.min), self.headOfStack)
            self.headOfStack = newNode


    def pop(self) -> None:
        self.headOfStack = self.headOfStack.next


    def top(self) -> int:
        return self.headOfStack.val
        

    def getMin(self) -> int:
        return self.headOfStack.min


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
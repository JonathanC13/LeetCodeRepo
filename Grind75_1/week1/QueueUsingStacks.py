"""
https://leetcode.com/problems/implement-queue-using-stacks/description/
"""

class MyQueue:

    """
    You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
    
    Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
    """
    deqMain = None
    deqUtil = None

    def __init__(self):
        # Treat the top of the stack the first of the queue
        self.deqMain = collections.deque()
        self.deqUtil = collections.deque()

    # push elem x to the back of deqMain
    def push(self, x: int) -> None:
        if (self.empty()):
            self.deqMain.append(x)
        else:
            # need to move all contents of deqMain to deqUtil
            # add the new value to deqMain and then pour deqUtil back in.
            for i in range(0, len(self.deqMain)):
                self.deqUtil.append(self.deqMain.pop()) # pops right most and then appends to right of deqUtil

            self.deqMain.append(x)

            # pour deqUtil back into deqMain
            for i in range(0, len(self.deqUtil)):
                self.deqMain.append(self.deqUtil.pop())


    def pop(self) -> int:
        # since we use the top of the stack as top of the queue, just pop first value of the stack
        return self.deqMain.pop()
        

    def peek(self) -> int:
        # since we use the top of the stack (most right of the deque) as the top of the queue, just return the most right value.
        return self.deqMain[len(self.deqMain) - 1]
        

    def empty(self) -> bool:
        if (len(self.deqMain) == 0):
            return True
        else:
            return False
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
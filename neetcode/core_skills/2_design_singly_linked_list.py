from typing import List


class Node:
    def __init__(self, val, next = None):
        self.val = val
        self.next = next

class LinkedList:
    
    def __init__(self):
        self.head = Node(-1)    # I forgot about a dummy head node. Removes a condition for removing the first node in the linked list.
    
    def get(self, index: int) -> int:
        iter = self.head.next
        idx = 0
        while (iter is not None):
            # iterate to target
            if (idx == index):
                return iter.val
            idx += 1
            iter = iter.next
        return -1

    def insertHead(self, val: int) -> int:
        new_node = Node(val, self.head.next)
        self.head.next = new_node

    def insertTail(self, val: int) -> None:
        new_node = Node(val)
        iter = self.head.next
        if (iter is not None):
            while (iter.next is not None):
                # iterate to end
                iter = iter.next

            iter.next = new_node
        else:
            # If linked list is empty
            self.head.next = new_node

    def remove(self, index: int) -> bool:
        iter = self.head
        prev_idx = 0
        while (prev_idx < index and iter is not None):
            # iterate to node previous to target
            prev_idx += 1
            iter = iter.next

        if (iter is None or iter.next is None):
            # out of bounds or the next item, the target, does not exist.
            return False
            
        remain = None
        if (iter.next is not None and iter.next.next is not None):
            remain = iter.next.next

        iter.next = remain
        return True

    def getValues(self) -> List[int]:
        iter = self.head.next
        arr = []
        while (iter is not None):
            arr.append(iter.val)
            iter = iter.next

        return arr
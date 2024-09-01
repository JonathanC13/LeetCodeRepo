# https://neetcode.io/problems/singlyLinkedList

from collections import List

class Node:
    def __init__(self, val, next = None):
        self.val = val
        self.next = next

class LinkedList:
    
    def __init__(self):
        # dummy node for simplifying removal of first node if required.
        self.head = Node(-1)
    
    def get(self, index: int) -> int:
        iter = self.head.next
        idx = 0 # excludes dummy

        while (idx < index and iter is not None):
            idx += 1
            iter = iter.next

        if (iter is None):
            return -1
        else:
            return iter.val
        
    def insertHead(self, val: int) -> None:
        new_node = Node(val)
        if (self.head.next is None):
            self.head.next = new_node
        else:
            new_node.next = self.head.next
            self.head.next = new_node

    def insertTail(self, val: int) -> None:
        iter = self.head
        
        # with dummy node, this is OK
        while (iter.next is not None):
            iter = iter.next

        new_node = Node(val)
        iter.next = new_node

    def remove(self, index: int) -> bool:
        iter = self.head
        idx = 0 # includes dummy

        while(idx < index and iter is not None):
            idx += 1
            iter = iter.next

        if (iter is None or iter.next is None):
            return False
        else:
            iter.next = iter.next.next  # 'jump' over removed node
            return True

    def getValues(self) -> List[int]:
        iter = self.head.next
        arr = []
        while (iter is not None):
            arr.append(iter.val)
            iter = iter.next

        return arr
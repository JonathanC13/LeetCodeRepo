class Node:
    def __init__(self, val, prev=None, next=None):
        self.val = val
        self.prev=prev
        self.next=next

class MyCircularDeque:

    def __init__(self, k: int):
        self.size = 0
        self.capacity = k
        self.head = Node(-1)
        self.tail = self.head

    def insertFront(self, value: int) -> bool:
        if (self.size >= self.capacity):
            return False
        else:
            new_node = Node(value, self.head)
            if (self.head.next is None):
                self.head.next = new_node
                self.tail = new_node
            else:
                new_node.next = self.head.next
                self.head.next = new_node
                if (new_node.next is not None):
                    new_node.next.prev = new_node
            self.size += 1
            return True

    def insertLast(self, value: int) -> bool:
        if (self.size >= self.capacity):
            return False
        else:
            new_node = Node(value, self.tail)
            self.tail.next = new_node
            self.tail = new_node
            self.size += 1
            return True

    def deleteFront(self) -> bool:
        if (self.head.next is None):
            return False
        else:
            # has nodes
            if (self.tail == self.head.next):
                # if node to delete is the tail node, point it to the head
                self.tail = self.head

            self.head.next = self.head.next.next
            if (self.head.next is not None):
                self.head.next.prev = self.head
            self.size -= 1
            return True

    def deleteLast(self) -> bool:
        if (self.tail == self.head):
            return False
        else:
            # has nodes
            self.tail = self.tail.prev   # back one node
            self.tail.next = self.tail.next.next    # 'jump' over node to be removed
            self.size -= 1
            return True

    def getFront(self) -> int:
        if (self.head.next is not None):
            return self.head.next.val
        else:
            return -1

    def getRear(self) -> int:
        if(self.head == self.tail):
            return -1
        else:
            return self.tail.val

    def isEmpty(self) -> bool:
        if(self.size == 0):
            return True
        else:
            return False

    def isFull(self) -> bool:
        if(self.size == self.capacity):
            return True
        else:
            return False

    def print(self) -> None:
        iter = self.head.next
        print('-----')
        while (iter is not None):
            print(f'{iter.val}', end=" ")
            iter = iter.next

        print()


# Your MyCircularDeque object will be instantiated and called as such:
# obj = MyCircularDeque(k)
# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()
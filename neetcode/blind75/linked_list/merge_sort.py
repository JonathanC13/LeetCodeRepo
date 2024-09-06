class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class MergeSort_rec:
    def __init__(self):
        pass
    
    def split(self, head):
        walk, run = head, head.next

        while run and run.next:
            walk = walk.next
            run = run.next.next

        mid = walk.next
        walk.next = None
        return mid

    def merge(self, left, right):
        if not left:
            return right
        elif not right:
            return left
        
        if left.val <= right.val:
            left.next = self.merge(left.next, right)
            return left
        else:
            right.next = self.merge(left, right.next)
            return right

    def merge_sort(self, head):
        if not head or not head.next:
            return head
        
        mid = self.split(head)

        # sort the halves
        head = self.merge_sort(head)    # left
        mid = self.merge_sort(mid)     # right

        # merge the sorted halves
        return self.merge(head, mid)

    def print(self, head):
        iter = head
        while iter:
            print(f'{iter.val}', end=', ')
            iter = iter.next
        print()

head = ListNode(9)
head.next = ListNode(8)
head.next.next = ListNode(5)
head.next.next.next = ListNode(2)

ms = MergeSort_rec()
ms.print(head)
head = ms.merge_sort(head)
ms.print(head)
print('-----')

head = None
ms.print(head)
head = ms.merge_sort(head)
ms.print(head)
print('-----')
head = ListNode(10)
ms.print(head)
head = ms.merge_sort(head)
ms.print(head)
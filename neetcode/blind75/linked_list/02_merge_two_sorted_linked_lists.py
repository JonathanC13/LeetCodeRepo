# https://neetcode.io/problems/merge-two-sorted-linked-lists

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1:
            return list2
        elif not list2:
            return list1
        
        self.head = ListNode(-1, None)  # dummy
        iter = self.head

        while list1 and list2:
            if list1.val <= list2.val:
                # add curr node to new linked list
                iter.next = list1
                # move list1 pointer to next node
                list1 = list1.next
            else:
                iter.next = list2
                list2 = list2.next

            iter = iter.next

        # left overs
        if list1:
            iter.next = list1
        else:
            iter.next = list2
        
        return self.head.next




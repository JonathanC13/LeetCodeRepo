# https://neetcode.io/problems/remove-node-from-end-of-linked-list

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if not head:
            return head

        # get opposite node to the nth
        dummy = ListNode(-1, head)
        iter1 = dummy
        iter2 = head

        while (n > 0):
            iter2 = iter2.next
            n -= 1
        
        # now walk both iter1 and iter2. iter1 will land on the node right before the one to be removed
        while iter2:
            iter1 = iter1.next
            iter2 = iter2.next

        # remove the node
        iter1.next = iter1.next.next

        return dummy.next
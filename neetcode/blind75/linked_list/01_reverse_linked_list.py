# https://neetcode.io/problems/reverse-a-linked-list

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head
        prev = None
        curr = head

        while curr:
            next = curr.next
            # reverse current node link to prev
            curr.next = prev

            # move pointers forward
            prev = curr
            curr = next

        # the head of the reversed list is the tail of the original
        return prev
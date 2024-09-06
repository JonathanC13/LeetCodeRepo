# https://neetcode.io/problems/reorder-linked-list

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
    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head:
            return None

        # get middle of linked list and save a pointer to the first node of the right partition
        slow = head
        fast = head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        right = slow.next
        slow.next = None    # disconnect from right partition

        # reverse right partition
        prev = None
        while right:
            temp = right.next
            right.next = prev

            prev = right
            right = temp

        # merge left and reversed right partition
        iter = head
        while prev:
            temp1 = iter.next
            temp2 = prev.next

            iter.next = prev
            prev.next = temp1

            iter = temp1
            prev = temp2
        
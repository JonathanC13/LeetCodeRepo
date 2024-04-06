"""
https://leetcode.com/problems/reverse-linked-list/description/
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:

    def reverseListItr(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        # use 3 pointers, 1 to keep track the target to reverse, 1 to keep track the prev node, and 1 to keep track of the next node.
        headRev = None

        while (head is not None):
            tempP = head.next
            head.next = headRev
            headRev = head
            head = tempP
            
        return headRev
        

    def reverseListRec(self, head: Optional[ListNode], newHead: Optional[ListNode]) -> Optional[ListNode]:

        if (head is None):
            return newHead

        tempP = head.next
        head.next = newHead

        return self.reverseListRec(tempP, head)


    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        #return self.reverseListItr(head)
        return self.reverseListRec(head, None)
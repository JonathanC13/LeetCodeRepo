"""
https://leetcode.com/problems/middle-of-the-linked-list/description/
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:

    
    def slowFastMethod(self, head: Optional[ListNode]) -> Optional[ListNode]:

        # slow will move 1 node and fast will move 2 nodes each iteration.
        # When fast is at the end or None then slow will be the middleNode
        slow = head
        fast = head.next

        while (fast is not None and fast.next is not None):
            slow = slow.next
            fast = fast.next.next

        if (fast is None):
            # perfect middle node
            return slow
        else:
            # (fast.next is None):
            # 2 middle nodes, choose right node
            return slow.next


    def slowFastMethod2(self, head: Optional[ListNode]) -> Optional[ListNode]:

        # slow will move 1 node and fast will move 2 nodes each iteration.
        # When fast is at the end or None then slow will be the middleNode
        slow = fast = head

        # if 2 middle nodes this will take the right node
        while (fast is not None and fast.next is not None):
            # if 2 middle node and problem desired the left node, terminate the
            #   loop early with fast.next is not None and fast.next.next is not None
        # while (fast.next is not None and fast.next.next is not None):
            slow = slow.next
            fast = fast.next.next

        return slow


    def middleNodeMine(self, head: Optional[ListNode]) -> Optional[ListNode]:
        maxIdx = -1
        middleIdx = 0
        middleNode = None
        
        def traverse(currNode: Optional[ListNode]) -> int:
            nonlocal maxIdx
            nonlocal middleIdx
            nonlocal middleNode

            if (currNode is None):
                return 0

            # get the length of the linked list
            maxIdx = maxIdx + 1

            # number of nodes 'from end'
            fromEnd = traverse(currNode.next)

            # determine the middle index on the last node and maintain the value with the use of max() due to the other functions lower on the stack 
            #   have a lower value
            middleIdx = max(middleIdx, ceil(maxIdx / 2))
            
            # While the function stack is backtracking the linked list nodes, when get to the middle node save it externally.
            if (maxIdx - fromEnd == middleIdx):
                middleNode = currNode

            # 'from end' count
            return fromEnd + 1

        traverse(head)

        return middleNode

    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        #return self.middleNodeMine(head)
        #return self.slowFastMethod(head)
        return self.slowFastMethod2(head)
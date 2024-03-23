"""
https://leetcode.com/problems/merge-two-sorted-lists/
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        retList = ListNode(0)
        retIter = retList
        
        if (list1 is None):
            return list2
        elif (list2 is None):
            return list1

        while (list1 is not None and list2 is not None):
            if (list1.val <= list2.val):
                retIter.next = list1
                list1 = list1.next
            else:
                retIter.next = list2                    
                list2 = list2.next
            retIter = retIter.next

        if (retIter is not None):
            if (list1 is not None):
                retIter.next = list1
            elif (list2 is not None):
                retIter.next = list2

        return retList.next
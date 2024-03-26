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

        # create new linked list with dummy head node to start
        retList = ListNode(0)
        # iterator pointer to first node
        retIter = retList
        
        # if one list is None, then just return the other since nothing to merge
        if (list1 is None):
            return list2
        elif (list2 is None):
            return list1

        # iterate both the linked lists and merge into retList
        while (list1 is not None and list2 is not None):
            if (list1.val <= list2.val):
                # if list1 pointer's node's value is less than equal to list2 pointer's node's value, link list1 node to retList, and then move list1 pointer forward.
                retIter.next = list1
                list1 = list1.next
            else:
                # else link list2 node to retList and then move list2 pointer forward.
                retIter.next = list2                    
                list2 = list2.next

            # move the retIter pointer forward to the node that was just added to retList.
            retIter = retIter.next

        # After iterating, either both list1 and list1 have the value None or one list still has nodes.
        if (list1 is not None):
            # if list1 still has at least 1 node, append the rest to retList
            retIter.next = list1
        elif (list2 is not None):
            # elif list2 still has at least 1 node, append the rest to retList
            retIter.next = list2

        return retList.next
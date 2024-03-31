"""
https://leetcode.com/problems/linked-list-cycle/
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:

    # dictionary method
    def hasCycleDict(self, head: Optional[ListNode]) -> bool:
        
        # store ListNode as the 'key' and self.next ListNode as the 'value' (not used)
        dictNodes = {}

        # iterator
        iter = head

        # iterate through the linked list, terminate if loop found (checking the dict) or if no loop it will terminate due to a self.next is None (while cond)
        while (iter is not None):
            if (iter in dictNodes):
                # found that the current node has already been visited.
                return True
            else:
                # add the ListNode to the dict
                dictNodes[iter] = iter.next

            # move the iterator forward
            iter = iter.next

        # if returning here, it indicates no loop
        return False

    # Floyd's Cycle-Finding Algorithm
    # https://yuminlee2.medium.com/floyds-cycle-detection-algorithm-b27ed50c607f#580b
    # O(1) constant memory, unlike the dict approach where you need to allocate more mem.
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        # essentially one pointer moves forward 1 node
        #   and another will moves forward by 2 nodes (twice as fast as the first pointer).
        # With this twice as fast, if there is a cycle the two pointer will eventually point to the same node.


        iterSlow = head
        iterFast = head

        while (iterFast is not None and iterFast.next is not None):
            # move the iterators
            iterSlow = iterSlow.next

            #if (iterFast.next is None):
            #    break
            iterFast = iterFast.next.next

            # compare what nodes both pointers are pointing to
            if (iterSlow == iterFast):
                # found cycle if both point to same node
                return True

        # no cycle
        return False
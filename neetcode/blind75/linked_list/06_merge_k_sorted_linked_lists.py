# https://neetcode.io/problems/merge-k-sorted-linked-lists

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists or len(lists) == 0:
            return None

        while len(lists) > 1:
            lists_merged = []
            for i in range(0, len(lists), 2):
                list1 = lists[i]
                list2 = lists[i + 1] if (i + 1) < len(lists) else None
                lists_merged.append(self.merge_lists(list1, list2))
            lists = lists_merged

        return lists[0]

    def merge_lists(self, left: Optional[ListNode], right: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(-1)
        iter = dummy

        while left and right:
            if left.val <= right.val:
                iter.next = left
                left = left.next
            else:
                iter.next = right
                right = right.next
            iter = iter.next

        iter.next = left if left else right

        return dummy.next

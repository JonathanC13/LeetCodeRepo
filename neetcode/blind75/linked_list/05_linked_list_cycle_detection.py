# https://neetcode.io/problems/linked-list-cycle-detection

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
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head:
            return head

        walk, run = head, head.next

        while run and run.next:
            if walk == run:
                return True
            
            # since run is x2 as fast as walk, if there is a cycle they will eventually meet.
            walk = walk.next
            run = run.next.next

        return False
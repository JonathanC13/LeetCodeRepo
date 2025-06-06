// https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a ListNode for the node to point to head of the odd nodes
create a ListNode for the node to point to head of the even nodes

iterate the linked list and append the node to the appropriate linked list

append the even Linked list to the odd linked list end

return oddDummy.next

- Time: O(n)
- Space: O(1)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) {
        return head
    }

    const oddDummy = new ListNode()
    const evenDummy = new ListNode()

    let odd = oddDummy
    let even = evenDummy

    while (head !== null) {
        let next = head.next
        odd.next = head
        odd = odd.next
        odd.next = null

        head = next
        if (head !== null) {
            next = head.next
            even.next = head
            even = even.next
            even.next = null
            head = next
        }
    }

    odd.next = evenDummy.next
    return oddDummy.next
};
// https://neetcode.io/problems/find-duplicate-integer

/*
- O(1) extra space, so cannot use a Set or Array to track what has appeared while iterating.

arr
    index = node
    value = reference to next. looking for duplicate ref, meaning cycle.

Use slow and fast pointers, since there is a duplicate the slow and fast will eventually meet.
Once they meet slow and fast point to the node that within the cycle.
    Initialize another pointer at the head and walk both newItr and slow2 until they meet, this is the duplicate node.
    Why? the meeting point is the START of the cycle and to be the start of a cycle, the node must be a duplicate to be referenced more than once in the Array.

    - This algo is called Floyd's Cycle Detection

    - Time: O(n)
    - Space: O(1)


* Notes: https://stackoverflow.com/questions/1536944/detecting-the-start-of-a-loop-in-a-singly-linked-link-list

Step1: Proceed in the usual way, you will use to find the loop, i.e. Have two pointers, increment one in single step and other in two steps, If they both meet in sometime, there is a loop.

Step2: Freeze one pointer where it was and increment the other pointer in one step counting the steps you make and when they both meet again, the count will give you the length of the loop (this is same as counting the number of elements in a circular link list).

Step3: Reset both pointers to the start of the link list, increment one pointer to the length of loop times and then start the second pointer. increment both pointers in one step and when they meet again, it will be the start of the loop (this is same as finding the nth element from the end of the link list).

the second step (and beginning of the third step) is provably unnecessary. If the root node is 'k' steps from the start of the loop, the collision point inside the loop will be exactly 'k' steps from the start of the loop also. The positions are deterministic. It's known as Floyd's algorithm.

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0
        let fast = 0

        while (true) {
            slow = nums[slow]
            fast = nums[nums[fast]]
            if (slow === fast) {
                break
            }
        }
        
        let slow2 = 0
        while (true) {  // while true since slow and slow2 could already be on the duplicate
            slow = nums[slow]
            slow2 = nums[slow2]
            if (slow === slow2) {
                return slow
            }
        }

        return -1
    }
}

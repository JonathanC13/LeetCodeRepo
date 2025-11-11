// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

/**
Note that it is the kth largest element in the sorted order, not the kth distinct element.

1. Assumptions:
    1. None.

2. Input validation:
    nums is an unsorted Array of Numbers
    k is a Number

3. time and space constraints:
    BTTC: O(n log k)  // iterate nums once * log k for each operation on the pri Q (k since max number of elements will be k)
    Space: O(k)

4. edge cases and some test cases
    edge cases:
    1. if (nums.length === 0 || nums.length < k) {return -1}
    test cases:
    1. 
        Input:
            nums = [2, 3, 1, 0, 6]
            k = 3
        Expected output
            2

5. visualize by drawing and manually solve
6. break into subproblems
    * min priority queue method

        maintain a min priority queue of size k
        while adding the values from nums, when the min pri Q size() > k, then dequeue the front element which is the smallest. At the end, the top will be the kth largest since all smaller values have been dequeued and the other values in the min pri Q are the k - 1 values larger than the top

        Time: O(n log(k))
        Space: O(k)

7. algos
    - Min priority Queue property of keeping the minimum value at the front

8. data structures
    - Priority queue
    - Array

9. Complexity
    Time: O(n * log(k))
    Space: O(k)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (nums.length === 0 || nums.length < k) {
        return -1
    }

    const minPriQ = new MinPriorityQueue()

    for (let i = 0; i < nums.length; i ++) {
        minPriQ.enqueue(nums[i])

        while (minPriQ.size() > k) {
            minPriQ.dequeue()
        }
    }

    return minPriQ.front()
};
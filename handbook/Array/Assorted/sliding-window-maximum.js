// https://leetcode.com/problems/sliding-window-maximum/description/

/**
1. Assumptions:
    - Numbers range from -infin < x < infin
    - Can have duplicates

2. input validation
    - nums instanceof Array, typeof k === 'Number'
    - nums.length === 0: return []
    - Content:
        - nums contains Numbers

3. time/space constraints
    - BTTC: O(n)    // one pass
    - Space: O(k)   // k size of window

4. some test cases and edge cases
    edge cases
    - if nums.length === 0: return []
    test cases
    1. nums = [1, 2, 3], k = 1  // expected = [1, 2, 3]
    2. nums = [3, -1, 2, 5, 4], k = 2   // expected = [3, 2, 5, 5]
    3. nums = [1, 2], k = 3 // expected = [2]

5. visualize by drawing and manually solve
6. break into subproblems
    create a max priQueue for the values in the window. Element of [value, index]
        sort by value in non-ascending, if same value sort by index in ascending
    create initial window of size k filling the max priQueue. 
    Get the first max value in this window

    l = 1, shift the window until left + k - 1>= nums.length
        while priQueue not empty and top element's index < l:
            pop since the max is outside of the window

        enqueue the [nums[r], r]

        windMax.push(priQ.top()[0])

7. Algorithm
    - sliding window

8. data structures
    - Input Array
    - Max Priority Queue

9. Complexity:
    - Time: O(n log(m)) // each priQueue operation is Log(m)    // m average number of elements in the Queue
    - Space: O(m)

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) {
        return []
    }

    const maxPriQ = new PriorityQueue((a, b) => {
        diff = b[0] - a[0]
        if (diff === 0) {
            return a[1] - b[1]
        }
        return diff
    })

    const windowMax = []
    for (let i = 0; i < k; i ++) {
        maxPriQ.enqueue([nums[i], i])
    }
    windowMax.push(maxPriQ.front()[0])

    for (let l = 1; l + k - 1 < nums.length; l ++) {
        while (maxPriQ.size() > 0 && maxPriQ.front()[1] < l) {
            maxPriQ.dequeue()
        }
        maxPriQ.enqueue([nums[l + k - 1], l + k - 1])

        windowMax.push(maxPriQ.front()[0])
    }

    return windowMax
};
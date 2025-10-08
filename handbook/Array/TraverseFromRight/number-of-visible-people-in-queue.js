// https://leetcode.com/problems/number-of-visible-people-in-a-queue/

/**
1. Assumptions
    - values in heights are 0 > heights[i] < infin

2. Validate inputs
    - type/instance
        heights instanceof Array
    - length
        if heights.length === 0: return []

3. Time/Space constaints?
    - Time: O(n)    // one pass
    - Space: O(n)

4. some test cases and edge cases
    edges cases:
    1. heights.length === 0: return []
    test cases:
    1. heights = []
    2. heights = [1, 3, 2, 1, 4, 1, 2]

5. visualize by drawing and manually solve
    - Brute force: Time: O(n^2)
        for each index, i
            let maxH = 0
            let canSee = 0
            for forward indexes, j = i + 1
                if (min(heights[i], heights[j]) > maxH) {
                    // no obstruction between i and j
                    canSee += 1
                }
                // update max which is the tallest potential obstruction inbetween i and next j
                maxH = max(maxH, heights[j])
        ans[i] = canSee

    - Time: O(n)    with Stack to maintain the can be seen from the left toward right. The obstructed heights that can be seen from heights[i] are removed since heights[i] obstructs them from the left toward right
    iterate from right to left
        canSee = 0
        while (stack is not empty && heights[i] > stack top height) {
            canSee += 1 // since lower height, can see it
            stack.pop
        }

        if (stack.length !== 0) {
            canSee += 1 // since can see this height that is taller, but obstructs heights after it.
        }
        
        ans[i] = canSee

6. into parts
    1. iterate the Array from right to left so that the Stack can maintain what heights can be seen from left toward right

7. Algorithm
    iterate right to left

8. Data structures
    - Input Array
    - Stack

9. Complexity
    - Time: O(n)
    - Space: O(n)
 */

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    if (heights instanceof Array === false || heights.length === 0) {
        return []
    }
    
    const n = heights.length
    const stack = new Array()
    const ans = new Array(n).fill(0)

    for (let i = n - 1; i >= 0; i --) {
        let canSee = 0
        while (stack.length > 0 && heights[i] > stack[stack.length - 1]) {
            canSee += 1
            stack.pop()
        }
        if (stack.length > 0) {
            canSee += 1
        }
        ans[i] = canSee
        stack.push(heights[i])
    }

    return ans
};

// console.log(canSeePersonsCount([10,6,8,5,11,9]))
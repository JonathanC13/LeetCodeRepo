// https://leetcode.com/problems/trapping-rain-water/

/**
1. Assumptions
    1. height only contains Numbers that are >= 0

2. Input validation
    1. height only contains Numbers that are >= 0

3. time and space constraints
    BTTC: O(n)
    Space: O(1) // O(1) for 2 pointer solution. O(2*n) for prefix and suffix solution

4. edge cases and some test cases
    edge cases
    1. if cannot make a container
        if (height.length < 3) {
            return 0
        }
    test cases
    1.
        inputs
            height = [0,1,0,2,1,0,1,3,2,1,2,1]
        expected output
            6

5. visualizy by drawing and manually solve
6. break into subproblems
    - prefix and suffix solution
        1. populate a prefix Array that stores the Max height seen going left to right
        2. populate a suffix Array that stores the Max height seen going right to left
        These two create the walls for that indexes water and the amount is calculated by: min(leftMax, rightMax) - height[i]

    - two pointer solution.
        1. Left pointer starts on left. Maintain a variable for the max seen from left
        2. Right pointer starts on right. Maintain a variable for the max seenf from right
        Choose which pointer to move based on Greedy keeping the taller height.
        if the new height for the pointer is >= current max
            assign new max
        else
            it is lower, therefore can evaluate how much water contained = min(leftMax, rightMax) - height[pointer]

7. algos
    - prefix and suffix
    or
    - two pointers

8. data structures
    - Array

9. Complexity
    Time: O(n)
    Space: O(1) // O(1) for 2 pointer solution. O(2*n) for prefix and suffix solution
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length < 3) {
        return 0
    }

    console.log(prefixSuffix(height))

    return twoPointers(height)
};

const twoPointers = (height) => {
    const n = height.length
    let res = 0

    let l = 0
    let leftMax = height[0]
    let r = n - 1
    let rightMax = height[n - 1]

    while (l < r) {
        if (height[l] < height[r]) {
            l += 1
            if (height[l] >= leftMax) {
                leftMax = height[l]
            } else {
                res += Math.min(leftMax, rightMax) - height[l]
            }
        } else {
            r -= 1
            if (height[r] >= rightMax) {
                rightMax = height[r]
            } else {
                res += Math.min(leftMax, rightMax) - height[r]
            }
        }
    }

    return res
}

const prefixSuffix = (height) => {
    let res = 0
    const n = height.length

    const left = new Array(n).fill(0)
    left[0] = height[0]
    const right = new Array(n).fill(0)
    right[n - 1] = height[n - 1]
    for (let i = 1; i < n; i ++) {
        left[i] = Math.max(height[i], left[i - 1])
        right[n - i - 1] = Math.max(height[n - i - 1], right[n - i])
    }

    for (let i = 1; i < n - 1; i ++) {
        res += Math.min(left[i], right[i]) - height[i]
    }

    return res
}
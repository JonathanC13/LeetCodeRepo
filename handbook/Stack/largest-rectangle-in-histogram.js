// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

/**
1. Assumptions
    1. heights contains Numbers that are >= 0

2. input validation
    1. heights contains Numbers that are >= 0

3. time and space constraints
    BTTC: O(n)
    Space: O(n)

4. edge cases and some test cases
    edge cases
    1. if heights.length === 0: return 0
    2. if heights.length === 1: return heights[0]
    test cases
    1.
        input
            heights = [2,1,5,6,2,3]
        expected output
            10

5. visualize by drawing and manually solve
6. break into subproblems
    monotonic stack
    if you need to keep track of smaller values use monotonic increasing and if you need to keep track of the larger values use decreasing
    Want to track the smaller values since the max rectangle height is the min height * (index - prev index)

    - prefix and suffix soln
        Create prefix and suffix Arrays where at i will hold the index the height at i can expand into.
            Prefix. The height at i expand to the left
            Suffix. The height at i expand to the right

        To determine the indexes in prefix and suffix, use increasing monotonic Stacks, if the height of the index on top of the stack is >= to the current height it will pop it.

        After iterate heights and the evaluate the area it can create:
            prefix[i] += 1; // need to adjust since the indexes on the left and right are the edges
            suffix[i] -= 1;
            rectangle = heights[i] * (suffix[i] - prefix[i] + 1)

    - Single monotonic Stack
        Can reduce to one monotonic Stack since while iterating left to right;
            1. while stack not empty and current height violate increasing monotonic need to:
                1. pop top, [val, idx]  // idx is how far left the val can expand
                2. evaluate rectangle it creates, maxArea = max(maxArea, val - (i - idx))   // i = current index
                3. start = i    // since the current height is < popped, start = i since it can expand left to that index

            push([heights[i], start])

        After the resulting mono Stack is strictly increasing, therefore by popping the remaining items:
            1. each expands from the [val, idx] to n, evaluate rectangle area

7. Algos
    - monotonic Stack maintenance

8. Data structures
    - Monotonic Stack

9. complexity
    2 stacks
    Time: O(n)  // 3 * n ~= n
    Space: O(n) // 2 * n ~= n

    1 stack
    Time: O(n)  // 2 * n
    Space: O(n)

 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (heights.length === 0) {
        return 0
    }
    if (heights.length === 0) {
        return heights[0]
    }

    console.log(twoStacks(heights))

    return oneStack(heights)
};

const oneStack = (heights) => {
    const n = heights.length

    const mono = new Array()
    let maxArea = 0

    for (let i = 0; i < n; i ++) {
        let start = i
        while (mono.length > 0 && mono[mono.length - 1][0] >= heights[i]) {
            const [val, idx] = mono.pop()

            maxArea = Math.max(maxArea, val * (i - idx))

            start = idx
        }

        mono.push([heights[i], start])
    }

    while (mono.length > 0) {
        const [val, idx] = mono.pop()

        maxArea = Math.max(maxArea, val * (n - idx))
    }

    return maxArea
}

const twoStacks = (heights) => {
    const n = heights.length
    const prefix = new Array(n).fill(-1)
    const suffix = new Array(n).fill(n)

    const leftMono = new Array()
    for (let i = 0; i < n; i ++) {
        while (leftMono.length > 0 && heights[leftMono[leftMono.length - 1]] >= heights[i]) {
            leftMono.pop()
        }

        if (leftMono.length !== 0) {
            prefix[i] = leftMono[leftMono.length - 1]
        }
        leftMono.push(i)
    }

    const rightMono = new Array()
    for (let i = n - 1; i >= 0; i --) {
        while (rightMono.length > 0 && heights[rightMono[rightMono.length - 1]] >= heights[i]) {
            rightMono.pop()
        }

        if (rightMono.length !== 0) {
            suffix[i] = rightMono[rightMono.length - 1]
        }
        rightMono.push(i)
    }

    let maxArea = 0
    for (let i = 0; i < n; i ++) {
        prefix[i] += 1
        suffix[i] -= 1
        maxArea = Math.max(maxArea, heights[i] * (suffix[i] - prefix[i] + 1))
    }

    return maxArea

}
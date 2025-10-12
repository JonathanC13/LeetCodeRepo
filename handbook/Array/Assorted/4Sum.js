// https://leetcode.com/problems/4sum/description/

/**
1. Assumptions:
    - values in any order but overall each combination must be unique

2. Input validation
    ...

3. Time/space constraints
    O(n^3)  // since to find the 2sum it is n, * find the 3sum it is n^2, 4Sum it is n^3. Therefore general is O(n^(k-1))
    O(n)    // recursive stack.

4. some test cases and edge cases
    edge cases
    - if nums.length < k: return []
    test casees
    - nums = [-1, 0, 1], target = 0 // expected = []
    - nums = [-5, -3, 0, 1, 2, 3, 5], target = 0    // expected = [[-5, 0, 2, 3], [-3, 0, 1, 2]]

5. visualize by drawing and manually solve
    the base case is the 2Sum problem where 2 pointers on left and right move to find the sum of target, fill res Array and return

    For K > 2
        iterate from index to end to choose the index,i, to use for this pointer, then call a search for the k-1 Sum from i+1 to end with the new target of target - nums[i] since we have chosen this value and try to find the k-1 sum results
        once returned, those results are in combination with the current value so append this value to each combination. Then push all these combinations into the overall result Array for return since this recursive call could have come from a K + 1 call.

6. break into subproblems
    0. if start index >= n: return res
    1. base case to find the 2 sum with 2 pointer

    2. if k > 2
        iterate from index given as valid to start to end
            skip over duplicate values

            ret = try this value in the combination to target. call recursively to solve the k-1 Sum with target - nums[i], index + 1 for the subproblem to start with

            if return has a combination, it means this value was valid
                for each combination in ret, append this value

            append ret into res

    return res

7. Algorithm
    - sort the Array
    - recursive backtracking

8. data structures
    - Input array
    - stack (the recursive stack)

9. Complexity
    Time: O(n^3)
    Space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    const kSum = function(nums, target, k, start) {
        const res = new Array()
        if (start >= nums.length) {
            return res
        }
        const n = nums.length

        if (k === 2) {
            let l = start
            let r = n - 1

            while (l < r) {
                const sum = nums[l] + nums[r]
                if (sum > target) {
                    r -= 1
                } else if (sum < target) {
                    l += 1
                } else {
                    res.push([nums[l], nums[r]])

                    l += 1
                    while (l < r && nums[l] === nums[l - 1]) {
                        l += 1
                    }
                }
            }
        } else {
            for (let i = start; i < n; i ++) {
                if (i > start && nums[i] === nums[i - 1]) {
                    continue
                }

                const ret = kSum(nums, target - nums[i], k - 1, i + 1)

                if (ret.length > 0) {
                    ret.map((e) => e.push(nums[i]))
                    res.push(...ret)
                }
            }
        }

        return res
    }

    nums.sort((a, b) => a - b)
    return kSum(nums, target, 4, 0)
};
// https://leetcode.com/problems/subsets-ii/

/**
1. Assumptions
    1. None

    Given:
        1. Numbers in the input Array nums may contain duplicates. The resulting subsets must not contain duplicate subsets, disregard order. E.g. [1, 2] === [2, 1]

2. Input validation
    - instance
        1. nums instanceof Array
    - Length
        1. if (nums.length === 0) {return []}
    - Content:
        1. nums only contains Numbers

3. Time and space constraints
    BTTC: O(n * 2^n)    // each n *, has 2 paths, + n log(n) for sort. Since n * 2^n much larger it is the time complexity
    Space: O(n) // n = nums.length. Max depth of the recursive stack is n

4. edge cases and some test cases
    edge cases
    1. if nums.length === 0: return []
    some test cases
    1. 
        Input
            nums = [1, 2, 2]
        Expected output
            [[], [2], [2, 2], [1], [1, 2], [1, 2, 2]]

5. visualize by drawing and manually solve
6. break into subproblems
    Sort the input Array in non-descending order, this is for duplicate subset handling.

    Recursive backtracking where for each index in nums there are two paths
        1. do not use the current value at index i in the subset
        2. use the current value at index i and forward indexes in the subset. e.g. i = 1. subsets: 1, 2 and 1, 3

        To ensure there is no duplicate subsets:
            1. The input Array nums is sorted.
            2. The next recursive call only chooses indexes from i + 1 of the current call.
            3. Since #1 and #2 maintains the order the subsets are constructed, the result is a Set of Strings and convert the subset to a String and add to the Set. The duplicates will be disregarded.

            When to return the result, iterate the Set and convert the Strings into Arrays.

        Base cases
        1. There are no more indexes in nums.
            if index i >= nums.length:
                add the subset to the result Set
                return

7. Algos
    - Recursive backtracking

8. Data structures
    - Recursive stack
    - Sets
    - Arrays
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if (nums.length === 0) {
        return []
    }

    nums.sort((a, b) => a - b)

    const resSet = new Set()
    rec(nums, 0, new Array(), resSet)

    const resArr = new Array()
    for (let v of resSet) {
        if (v.length === 0) {
            resArr.push([])
        } else {
            resArr.push(v.split(',').map((e) => {
                return Number(e)
            }))
        }
    }
    
    return resArr
};

const rec = (nums, i, subset, resSet) => {
    if (i >= nums.length) {
        resSet.add(subset.join(','))
        return
    }

    // 1. do not use
    rec(nums, i + 1, subset, resSet)

    // 2. use and iterate forward for other values for the subset
    for (let j = i; j < nums.length; j ++) {
        subset.push(nums[j])
        rec(nums, j + 1, subset, resSet)
        subset.pop()
    }

    return
}
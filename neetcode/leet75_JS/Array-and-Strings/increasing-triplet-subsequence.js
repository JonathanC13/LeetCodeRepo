// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75

/*
recursive dfs to find the longest increasing subsequence
    base case 1: if i === nums.length: return 0 // no more numbers to evaluate

    // 2 options
    1. not include current number
    2. if (current number > prev number)
        include current number

- Time: O(2^n)
- Space: O(n)
* Time limit exceeded

** looked at solution
Since triplet, create 2 variables initialized with max int that will record the lower bounds.
If the current number is less than or equal the first bound, set with current
else if the current number is less than or equal the second bound, set with current
else the current number is greater than both bounds, meaning that this is the 3rd increasing number in a subsequence. the first and second are not necessarily the numbers in the increasing subsequence but indicates that there were 2 lesser numbers that were increasing as well.

create 2 variables initialized with Pos infinity

iterate nums
    if nums[i] < first: first = nums[i]
    else if nums[i] < second: second = nums[i]
    else return true

return false

- Time: O(n)
- Space: O(1)
*/

var dfs = (nums, i, prev, subseq, longest) => {
    if (i === nums.length) {
        if (subseq.length > longest[0].length) {
            longest[0] = [...subseq]
        }
        return 0
    }

    const notUse = dfs(nums, i + 1, prev, subseq, longest)
    let use = 0
    if (nums[i] > prev) {
        subseq.push(nums[i])
        use = 1 + dfs(nums, i + 1, nums[i], subseq, longest)
        subseq.pop()
    }

    return Math.max(notUse, use)
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // const longest = new Array(1).fill(new Array())

    // const res = dfs(nums, 0, Number.NEGATIVE_INFINITY, [], longest)
    // console.log(longest)
    // return res >= 3 ? true : false

    let first = Number.POSITIVE_INFINITY
    let second = Number.POSITIVE_INFINITY

    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] <= first) {
            first = nums[i]
        } else if (nums[i] <= second) {
            second = nums[i]
        } else {
            return true
        }
    }

    return false
};
// https://leetcode.com/problems/summary-ranges/?envType=study-plan-v2&envId=top-interview-150

/*
It is asking for you to summarize continuous numbers into a range. For example, 0, 1 should be converted to 0->1. A more useful application would be 2,3,4,5,6,7,8,9,10 can be summarized to 2->10.
However, if you have 0,2, there is a gap in the range, so you should return "0", "2".
Example: 0, 2, 3, 4, 5, 6, 7, 8, 10, 20, 25, 26, 27
Turns to: 0, 2->8, 10, 20, 25->27
You can think of it in terms of how pages are referenced in bibliographies. Example: Python for Dummies. Pages: 1-4, 10 means pages 1 to 4 and page 10.

l = 0
iterate nums
    if r === nums.length - 1 || nums[r] !== nums[r + 1] - 1
        if l === r
            res.push(nums[r].toString())
        else
            res.push(nums[l] -> nums[r])
        l = r + 1

- Time: O(n)
- Space: O(n)   // output
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let l = 0

    const res = new Array()
    for (let r = 0; r < nums.length; r ++) {
        if (r === nums.length - 1 || nums[r] !== nums[r + 1] - 1) {
            if (l === r) {
                res.push(nums[l].toString())
            } else {
                res.push(nums[l].toString() + "->" + nums[r].toString())
            }

            l = r + 1
        }
    }

    return res
};
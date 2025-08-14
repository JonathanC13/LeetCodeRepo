// https://leetcode.com/problems/majority-element/description/

/*
create a variable for the candidate to the majority element, init nums[0]
create a counter for how many votes for - votes other as iterate, init 0

iterate i in nums
    if (nums[i] === candidate)
        votes += 1
    else
        votes -= 1

    if (votes === 0)
        need to switch candidates to nums[i]
        votes = 1, for this cand

at the end, the majority element will be the majority element, since guarenteed by the problem to exist.
This works since the majority element will 'out lasted' the subtracted votes by having accumulated more

- Time: O(n)
- Space: O(1)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 0) {
        return 0
    }

    let cand = nums[0]
    let votes = 0

    for (let i = 0; i < nums.length; i ++) {
        if (cand === nums[i]) {
            votes += 1
        } else {
            votes -= 1
        }

        if (votes === 0) {
            cand = nums[i]
            votes = 1
        }
    }

    // can check for sure if majority element by getting the number of occurances of cand in nums. if occur > nums.length/2: return cand else -1

    return cand
};
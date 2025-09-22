// https://leetcode.com/problems/find-the-duplicate-number/description/

/**
constant space

** XOR method.
    XOR each value with the other values, if the result is 0, that means both numbers are the same.

    - Time: O(n^2) // TLE
    - Space: O(1)

** Require a O(n) solution. slow fast pointer. Unrelated note, if start slow and fast on same node, for even number of nodes slow will end up on the "2nd" mid.
    
    // get into the cycle. when slow and fast meet they are in a node within the cycle
    start slow on nums[0]
    start fast on nums[nums[0]]
    while (nums[slow] !== nums[fast]) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }
    //

    // now find the entry node of the cycle. Set slow to 0, the entry point is where slow and fast meet when both move at the same pace.
    slow = 0    // start first node. remember, if slow starts at nums[0], which is 0, then the first move would make slow = nums[1] = 3. We want 0 so the first move is slow = nums[0] which = 1.
    while (slow !== fast)
        slow = nums[slow]
        fast = nums[fast]

    return slow

    - Time: O(n)
    - Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (nums.length <= 1) {
        return -1
    }

    let slow = nums[0]  // node val
    let fast = nums[nums[0]]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    slow = 0
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow

};
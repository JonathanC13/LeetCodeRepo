// https://leetcode.com/problems/two-sum/

/**
1. Assumptions
    - Exactly one solution. If there are many and must return them all then the complexity would be O(n^2) since need to use the for each index evaluate all forward indexes.

2. Input validation
    - nums instanceof Array, typeof target === Number
    - length
        1. if nums.length === 0: return []
    - content
        1. nums contains only Numbers

3. time/space constraints
    BTTC: O(n)  // one pass
    Space: O(n) // for O(n) time, need to use O(n) space. For O(1) space, Time would be O(n^2) where each index's value compares with the ahead values to evaluate if satisfy target sum

4. Edge cases and some test cases
    edge case
    1. if nums.length < 2: return []    // not enough elements
    test cases
    1. case 1: a single element is also the target
        nums = [2, 5, 3], target = 5
        expected = [0, 1]
    2. case 2: an element if exactly half of target to test do not use same element (index) twice
        nums = [3, 2, 5, 2]
        expected = [1, 3]

5. visualize by drawing and manually solve
6. break into subproblems
    Since desire an O(n) solution, use a Map to store the value the current index needs to satisfy the target sum. Space O(n).
    Map; key = target - elem val, value = curr index
    
    iterate the nums
        if the Map has nums[i] it means a previous index needs this nums[i] value to satisfy target
            return [Map.get(nums[i]), i]
        else
            add to the Map; key = target - nums[i], value = i

    return []

7. algo
    - Hash the key target - nums[i] and value i so that future indexes can lookup if there was a previous index that needs the current value to evaluate to target sum

8. datastructure
    - Hash table. In JS, a Map. By using Map.set(key, val), it hashes the key for us for O(1) lookup

9. Complexity
    - Time: O(n)
    - Space: O(n)   // potential the solution at the end.

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length < 2) {
        return []
    }

    const diffs = new Map()
    for (let i = 0; i < nums.length; i ++) {
        if (diffs.has(nums[i])) {
            return [diffs.get(nums[i]), i]
        } else {
            diffs.set(target - nums[i], i)
        }
    }

    return []
};
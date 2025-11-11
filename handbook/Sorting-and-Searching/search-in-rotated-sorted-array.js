// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/**
 * 1. Assumptions
 *  1. None. Original Array is sorted
 * 
 * 2. Input validation
 *  nums is an Array of Numbers
 *  target is a Number
 * 
 * 3. time and space constraints
 *  BTTC: O(log n)  // hint toward binary search
 *  Space: O(1) // binary search iterative is O(1). O(log n) for recursive
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return -1
 *  test cases
 *  1. rotated such that the left half is still in non-descending order
 *      inputs
 *          nums = [1, 2, 3, 4, 0]
 *          target = 2
 *      Expected output
 *          1
 *  2. rotated such that the left half is not in non-descending order
 *      inputs
 *          nums = [5, 0, 1, 2, 3, 4]
 *          target = 1
 *      Expected output
 *          2
 *  3. solution in right half
 *      inputs
 *          nums = [5, 0, 1, 2, 3, 4]
 *          target = 4
 *      Expected output
 *          5
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Since the constrain Time: O(log(n)) is given, it indicates binary search is needed to achieve it.
 *  Therefore must define the conditions to continue the search in the left or right half.
 * 
 *  while (l <= r) {
 *      get mid point
 *      if (nums[mid] === target) {
 *          return mid
 *      } else if left half is fully non-descending. Since originally sorted, can check this by if (nums[l] <= nums[mid]) {
 *          // now knowing the property of one side, can determine if the target may reside there
 *          if (nums[l] <= target && target < nums[mid]) {
 *              go left. r = mid - 1
 *          } else {
 *              go right. l = mid + 1
 *          }
 *      } else the left is not fully non-descending {
 *          if (nums[l] <= target || target < nums[mid]) {
 *              // e.g. tar = 1 and nums = [5, 6, 1, 2, 3, 4]
 *              go left. r = mid - 1
 *          } else {
 *              go right. l = mid + 1
 *          }
 *      }
 *  }
 * 
 *  return -1 if out of indexes to search
 * 
 * 7. Algos
 *  1. Binary search
 * 
 * 8. Data structures
 *  1. Arrays
 * 
 * 9. Complexity
 *  Time: O(log(n))
 *  Space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
        return -1
    }
    
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l
        if (nums[mid] === target) {
            return mid
        } else if (nums[l] <= nums[mid]) {
            // left is in non-descending order
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (nums[l] <= target || target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }

    return -1
};
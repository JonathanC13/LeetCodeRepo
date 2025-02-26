// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/*
Same as search in rotated sorted array but nums may have duplicates.

What modifications?
Will be harder to determine the arrangement of the each halve to decide which may contain the target.
e.g. [1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1] with target of 2.
    mid val will be 1 and the right val will be 1, from this cannot determine arrangement.
    How?
        It seems just to do a linear search to save the initial headache.
        Check if num left === num mid === num right. In this case, narrow the search window by moving the left ptr right until no dup OR right ptr left until no dup to set the next window bounds. Either works.

- Time: O(log n)
    Worst case: O(n) since starting from left if left, mid, right have the same value, it iterates to the other end.
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
       return false
   }

   let left = 0
   let right = nums.length - 1

   while (left <= right) {
       const mid = left + Math.floor((right - left) / 2)
       console.log(mid, nums.slice(left, right + 1))
       if (nums[mid] === target) {
           return true
       } else if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
           const leftVal = nums[left]
           while (left <= right && nums[left] === leftVal) {
               left += 1
           }
       } else if ((nums[mid] < nums[right] && target > nums[mid] && target <= nums[right]) ||
               (nums[mid] > nums[right] && (target <= nums[right] || target > nums[mid]))
           ) 
       {
           left = mid + 1
       } else {
           right = mid - 1
       }
   }

   return false
};
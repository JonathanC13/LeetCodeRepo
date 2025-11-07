// https://leetcode.com/problems/binary-search/

/**
Recursive
Time: O(log n)  // Since each step divides the problem set
Space: O(log n)

Iterative
    Time: O(log n)
    Space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    // recursive
    const binarySearch = (l, r) => {
        if (l > r) {
            return -1
        }
        const mid = Math.floor((r - l) / 2) + l
        if (nums[mid] === target) {
            return mid
        }

        // Since nums is sorted
        if (nums[mid] > target) {
            return binarySearch(l, mid - 1)
        } else {
            return binarySearch(mid + 1, r)
        }
    }

    // iterative
    const binItr = () => {
        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            const mid = Math.floor((r - l) / 2) + l
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return -1
    }

    console.log(binItr())
    return binarySearch(0, nums.length - 1)
};
// https://neetcode.io/problems/find-target-in-rotated-sorted-array

/*
/*
edge case 1: if nums.length === 0: return null
edge case 2: if nums.length === 1: return nums[0] === target

employ binary search to achieve a time compexity of O(log n)

since the Array is rotated, need to determine which half to continue the search based on the mid value and the ends of the current halves.

e.x. 1. No rotation, target = 4
    [1, 2, 3, 4, 5, 6]
    mid = 3
    if (mid value < target && right value >= target) {
        go right
    } else { go left }

e.x. 2. rotation of 1 (right), target right of mid, ex. 4
    [6, 1, 2, 3, 4, 5]
    mid = 2
    if (mid value < target && right value >= target) {
        go right
    } else { go left }

e.x. 2.1 rotation of 1 (right), target left of mid, ex. 1
    [6, 1, 2, 3, 4, 5]
    mid = 2
    if (mid value < target && right value >= target) {
        go right
    } else { go left }

e.x. 3 rotation of 4 (right), target right of mid, ex. 1
    [3, 4, 5, 6, 1, 2]
    mid = 5
    check if the halves are purely increasing or not
    if (nums[mid] < nums[r]) {
        // right is purely increasing
        if (target > nums[mid] && target <= nums[r]) {
            go right
        } else { go left }
    } else {
        // mid value higher
        if (target <= nums[r] || target > nums[mid]) {
            go right
        } else { go left}
    }

e.x. 3.1 rotation of 4 (right), target left of mid, ex. 4
    [3, 4, 5, 6, 1, 2]
    mid = 5
    if (mid value < target && right value >= target) {
        go right
    } else { go left }   

- Time: O(log n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length === 0) {
            return -1
        }
        if (nums.length === 1) {
            return nums[0] === target ? 0 : -1
        }

        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            console.log(nums.slice(l, r + 1))
            let mid = l + Math.floor((r - l) / 2)

            if (nums[mid] === target) {
                return mid
            }

            if (nums[mid] < nums[r]) {
                // right is purely increasing
                if (target > nums[mid] && target <= nums[r]) {
                    l = mid + 1
                } else { 
                    r = mid - 1
                }
            } else {
                // mid value higher
                if (target <= nums[r] || target > nums[mid]) {
                    l = mid + 1
                } else { 
                    r = mid - 1 
                }
            }
        }

        return -1
    }
}

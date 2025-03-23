// https://neetcode.io/problems/three-integer-sum

/*
edge case 1: if nums.length < 3: return []

sort the nums in non descending order, so this will place the duplicate value next to eachother and allows to smarter choosing of which pointer to move to try to achieve 0
    if curr sum < 0, need less negative so move left pointer +1
    else if curr sum > 0, need less positive so move right pointer -1

    - Time of sort (n log n)
    - Space: O(log n)

res = []
prevAnchor = null
iterate i = 0 to < nums.length.
    if (prevAnchor && prevAnchor === nums[i]) {
        // to avoid dups, move until not the same number
        continue
    }
    anchor = the nums[i] is used as the first value in the equation to = 0

    left = i + 1    // value of the 2nd number in the triplet
    right = nums.length - 1 // value of the 3rd number in the triplet

    while (left < right) {
        let currSum = anchor + nums[left] + nums[right]

        if (currSum === 0) {
            res.push([anchor, nums[left], nums[right]])

            // to ensure no duplicates, 
            // move the left pointer up until value is not the same as used in the soln found
            cont prevLeft = nums[left]
            while (left < right && nums[left] === prevLeft) {
                left += 1
            }

            // also then move the right pointer down
            let prevRight
            while (left < right && nums[right] === prevRight) {
                right -= 1
            }
        } else if (currSum < 0) {
            // need a less negative number in effor to achieve sum of 0
            left += 1
        } else {
            right -= 1
        }
    }

return res

- Time: O(n^2). sort = n log n, + iterate = n, * iterate pointers within = n
- Space: (log n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) {
            return []
        }

        nums.sort((a, b) => a - b)

        const res = []
        let prevAnchor = null
        for (let i = 0; i < nums.length; i ++) {
            if (nums[i] > 0) {
                // break early since will not be able to achieve sum of 0 since sorted in non descending order.
                break
            }
            if (prevAnchor !== null && prevAnchor === nums[i]) {
                continue
            }
            const anchor = nums[i]
            prevAnchor = anchor

            let l = i + 1
            let r = nums.length - 1
            while (l < r) {
                const currSum = anchor + nums[l] + nums[r]

                if (currSum === 0) {
                    res.push([anchor, nums[l], nums[r]])

                    const prevL = nums[l]
                    l += 1
                    while (l < r && nums[l] === prevL) {
                        l += 1
                    }

                    const prevR = nums[r]
                    r -= 1
                    while (l < r && nums[r] === prevR) {
                        r -= 1
                    }
                } else if (currSum < 0) {
                    l += 1
                } else {
                    r -= 1
                }
            }
        }
        
        return res
    }
}

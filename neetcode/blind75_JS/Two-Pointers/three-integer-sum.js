// https://neetcode.io/problems/three-integer-sum

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) {
            return []
        }

        let res = []
        nums.sort((a, b) => a-b)

        for (let i = 0; i < nums.length; i++) {
            let currVal = nums[i]

            if (currVal > 0) {
                // impossible to get sum of 0
                break;
            }
            if (i > 0 && currVal === nums[i-1]) {
                // if same value as the previous num, can skip because it would result in the same triplet if has solution
                continue
            }

            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                let currSum = currVal + nums[left] + nums[right]
                if (currSum > 0) {
                    right -= 1
                } else if(currSum < 0) {
                    left += 1
                } else {
                    res.push([currVal, nums[left], nums[right]])
                    left += 1
                    right -= 1
                    // may have more solutions, move the left pointer until value differs from previous so it will not result in duplicate solution
                    while (left < right && nums[left] === nums[left - 1]) {
                        left += 1
                    }
                }
            }
        }

        // res.map = stringify each array in the result array, it creates a new array so we place into a Set so that the duplicates are removed
        // Array.from on the set, since the items are stringified, to revert back to array of int use JSON.parse on each item. This produces 
        res = Array.from(new Set(res.map(JSON.stringify)), JSON.parse)

        return res
    }
}

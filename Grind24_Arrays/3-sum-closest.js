// https://leetcode.com/problems/3sum-closest/description/

/*
sort nums in non-descending order

closest = Pos infin
closestSum = 0
while (i < nums.length - 2)
    l = i + 1
    r = nums.length - 1
    while (l < r) {
        sum = nums[i] + nums[l] + nums[r]
        if (sum === target) {
            return target
        }
        
        if (closest > abs(target - sum){
            closestSum = sum
        }

        if (sum < target) {
            const prev = nums[l]
            l += 1
            while (l < r && nums[l] === prev)
                l += 1
        } else {
            const prev = nums[r]
            r -= 1
            while (l < r && nums[r] === prev)
                r -= 1
        }

    const prev = nums[i]
    i += 1
    while (i < nums.length - 2 && nums[i] === prev)
        i += 1
    }

return closest

- Time: O(n * !n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let closest = Number.POSITIVE_INFINITY
    let closestSum = 0
    let i = 0
    while (i < nums.length - 2) {
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === target) {
                return sum
            }
            
            if (Math.abs(sum - target) < closest) {
                closest = Math.abs(sum - target)
                closestSum = sum
            }

            if (sum < target) {
                const prev = nums[l]
                l += 1
                while (l < r && prev === nums[l]) {
                    l += 1
                }
            } else {
                const prev = nums[r]
                r -= 1
                while (l < r && prev === nums[r]) {
                    r -= 1
                }
            }
        }

        const prev = nums[i]
        i += 1
        while (i < nums.length - 2 && prev === nums[i]) {
            i += 1
        }
    }
    return closestSum
};
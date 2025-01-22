// https://neetcode.io/problems/trapping-rain-water

/*
brute
    - edge case 1: if (height.length < 3) { return 0 }

    water = 0

    for each index get the maxLeft and maxRight, then the water it can hold at that index is min(maxLeft, maxRight) - height[i].
    It gets the water at that column. If the min of maxLeft and maxRight is > height[i], then that column holds min(maxLeft, maxRight) - height[i]

    - Time: O(n^2)
    - Space: O(1)

two pointer
    create an Array for the prefix maxLeft
    create an Array for the suffix maxRight

    iterate the heights and the same index in prefix and suffix are the left and right bounds for the height at i
        water += min(prefix[i], suffix[i]) - height[i]

    - Time: O(n). n + n = 2n ~= n
    - Space: O(n). n + n + n = 3n ~= n
        
*/

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length < 3) {
            return 0
        }

        const brute = () => {
            const n = height.length
            let water = 0

            for (let i = 0; i < n; i ++) {
                let maxLeft = height[i]
                let maxRight = height[i]

                for (let j = i - 1; j >= 0; j --) {
                    maxLeft = Math.max(maxLeft, height[j])
                }

                for (let j = i + 1; j < n; j ++) {
                    maxRight = Math.max(maxRight, height[j])
                }

                water += Math.min(maxLeft, maxRight) - height[i]
            }

            return water
        }

        // return brute()

        const preSuff = () => {
            const n = height.length
            let water = 0

            const pre = new Array(n).fill(0)
            const suff = new Array(n).fill(0)

            let maxLeft = height[0]
            let maxRight = height[n - 1]
            for (let i = 0; i < n; i ++) {
                maxLeft = Math.max(maxLeft, height[i])
                pre[i] = maxLeft
                maxRight = Math.max(maxRight, height[n - i - 1])
                suff[n - i - 1] = maxRight
            }
            
            for (let i = 0; i < n; i ++) {
                water += Math.min(pre[i], suff[i]) - height[i]
            }

            return water
        }

        return preSuff()
    }
}

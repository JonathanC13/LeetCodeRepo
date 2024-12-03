// https://neetcode.io/problems/trapping-rain-water

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length < 2) {
            return 0
        }

        let res = 0

        let l = 0
        let r = height.length - 1
        let lMax = height[l]
        let rMax = height[r]

        while (l < r) {
            if (lMax < rMax) {
                l += 1
                lMax = Math.max(lMax, height[l])
                res += lMax - height[l]
            } else {
                r -= 1
                rMax = Math.max(rMax, height[r])
                res += rMax - height[r]
            }
        }
        return res
    }
}

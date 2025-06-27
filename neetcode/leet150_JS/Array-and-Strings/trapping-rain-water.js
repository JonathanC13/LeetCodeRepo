// https://leetcode.com/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-interview-150

/*
leftWall = 0
rightWall = 1
totalWater = 0

iterate left to right
    // find right wall that is greater or equal
    while (height[rightwall] < height[leftWall]) {
        rightWall += 1
    }

    // calculate how much water can be gathered
    from i iterate leftWall to < rightWall
        totalWater += max(min(height[leftWall], height[rightWall]) - height[i], 0)  // if negative, add 0

    move left wall to right
    right wall += 1

iterate right to left
    // finding left wall that is strictly greater

    move right wall to left
    left -= 1

- Time: O( > n)
- Space: O(1)

* Two pointers
left = 0
right = n - 1
leftMax = height[left]
rightMax = height[right]

Assume that the left and right heights are the current walls of the container, but evaluate amount of water trapped for each index moving toward the other wall

while l < r
    if the leftMax < rightMax
        move left += 1
        //evaluate if can contain some water from leftMax to rightMax
        if height[left] less than leftMax
            // water can be stored in between
            total += min(leftMax, rightMax) - height[left]
        else
            // cannot store water, but new wall
            leftMax = height[left]

    else    // right max is shorter
        move right -= 1
        if (height[right] < rightMax) {
            total += min(leftMax, rightMax) - height[right]
        } else {
            rightMax = height[right]
        }

- Time: O(n)
- Space: O(1)

*Prepopulate an Array for each index saves the [leftMax, rightMax]
result add all max(min(leftMax, rightMax) - height[i], 0)

e.g.
 public int trap(int[] height) {
        int n = height.length;
        int[] leftMax = new int[n], rightMax = new int[n];
        for (int i = 1; i < n; ++i)
            leftMax[i] = Math.max(height[i-1], leftMax[i-1]);
        for (int i = n-2; i >= 0; --i)
            rightMax[i] = Math.max(height[i+1], rightMax[i+1]);

        int ans = 0;
        for (int i = 0; i < n; ++i) {
            int waterLevel = Math.min(leftMax[i], rightMax[i]);
            if (waterLevel >= height[i]) ans += waterLevel - height[i];
        }
        return ans;
    }
*/

const me = (height) => {
    let l = 0
    let r = 1
    let total = 0

    const n = height.length

    while (r < n) {
        while (r < n && height[r] < height[l]) {
            r += 1
        }
        console.log(l, r)
        if (r < n) {
            for (let i = l + 1; i < r; i ++) {
                total += Math.max(0, Math.min(height[l], height[r]) - height[i])
            }
        }

        l = r
        r += 1
    }

    while (l >= 0) {
        while (l >= 0 && height[l] <= height[r]) {
            l -= 1
        }

        if (l >= 0) {
            for (let i = r - 1; i > l; i --) {
                total += Math.max(0, Math.min(height[l], height[r]) - height[i])
            }
        }

        r = l
        l -= 1
    }

    return total
}

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // return me(height)

    // two pointers soln
    const n = height.length
    let l = 0
    let r = n - 1
    let leftMax = height[l]
    let rightMax = height[r]
    let total = 0
    while (l < r) {
        if (leftMax < rightMax) {
            l += 1
            if (height[l] < leftMax) {
                total += Math.min(leftMax, rightMax) - height[l]
            } else {
                leftMax = height[l]
            }
        } else {
            r -= 1
            if (height[r] < rightMax) {
                total += Math.min(leftMax, rightMax) - height[r]
            } else {
                rightMax = height[r]
            }
        }
    }

    return total
};
// https://leetcode.com/problems/sqrtx/description/?envType=study-plan-v2&envId=top-interview-150

/**
binary search for the square root value
l = 0
r = Math.floor(x / 2)

while (l <= r)
    mid = Math.floor((r - l) / 2) + l

    sq = mid * mid
    if (sq <= x and x < (mid + 1) * (mid + 1)) {    // the true square root within this range.
        return mid
    } else if (sq > x) {
        r = mid - 1
    } else {
        l = mid + 1
    }

// if get here the l value is the rounded down nearest int
return l

- Time: O(log (n))
- Space: O(1)
    
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 0
  let r = Math.floor(x / 2)

  while (l <= r) {
    const mid = Math.floor((r - l) / 2) + l
    const sq = mid * mid
    console.log(l, r, mid)
    if (sq <= x && x < (mid + 1) * (mid + 1)) {
        return mid
    } else if (sq > x) {
        r = mid - 1
    } else {
        l = mid + 1
    }
  }

  return l
};
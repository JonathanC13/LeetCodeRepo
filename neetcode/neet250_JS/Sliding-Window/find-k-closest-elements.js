// https://leetcode.com/problems/find-k-closest-elements/

/*
- edge case 1: if k > arr.length: return []

create initial window
l = 0

maintain k window size.
iterate r = k to < arr.length
    // only move window if next value is 'closer' to x, else return
    if (Math.abs(arr[r] - x) < Math.abs(arr[l] - x) || (Math.abs(arr[r] - x) === Math.abs(arr[l] - x) && r < l)) {
        l += 1
    } else {
        return arr.slice(0, r)
    }
return arr.slice(l, arr.length)

- Time: O(n). n = arr.length
- Space: O(1). k window size
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    if (arr.length < k) {
        return []
    }

    let r = arr.length - 1

    for (let l = arr.length - 1 - k; l >= 0; l --) {
        if (Math.abs(arr[l] - x) < Math.abs(arr[r] - x) || (Math.abs(arr[l] - x) === Math.abs(arr[r] - x) && l < r)) {
            r -= 1
        } else {
            return arr.slice(l + 1, r + 1)
        }
    }
    
    return arr.slice(0, r + 1)
};
// https://leetcode.com/problems/first-bad-version/description/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
Binary search and maintain var that tracks the most left bad version
if bad version found
    earliestBad = mid
    go left in search for a bad version even earlier
else
    go right since mid and earlier are all good versions

- Time: O(log n)
- Space: O(1)
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let earliestBad = n
        let l = 0
        let r = n - 1
        while (l <= r) {
            const mid = Math.floor((r - l) / 2) + l

            if (isBadVersion(mid) === true) {
                earliestBad = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return earliestBad
    };
};
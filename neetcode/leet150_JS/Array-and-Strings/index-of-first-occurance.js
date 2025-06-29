// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

/*
left pointer = 0
right pointer = needle.length

while (r <= haystack.length)
    evaluate if needle is in haystack from [l, r)
    if true: return l

return -1

- Time: O(n/m)  // n = length of haystack. m = length of needle
- Space: O(1)

* can improve by moving until left finds the first letter of the needle
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) {
        return -1
    }

    let l = 0
    let r = needle.length
    while (r <= haystack.length && needle[0] !== haystack[l]) {
        l += 1
        r += 1
    }
    while (r <= haystack.length) {
        if (haystack.slice(l, r) === needle) {
            return l
        }

        l += 1
        r += 1

        while (r <= haystack.length && needle[0] !== haystack[l]) {
            l += 1
            r += 1
        }
    }

    return -1
};
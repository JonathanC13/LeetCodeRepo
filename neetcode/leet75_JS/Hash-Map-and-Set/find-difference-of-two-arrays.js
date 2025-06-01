// https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75

/*
iterate nums1 to put the values into a Set1
iterate nums2 to put the values into a Set2     // require both Array's values into Sets due to duplicates in both

iterate Set1
    if (Set2 has the value) {
        remove from Set1 and Set2
    }

res[0] Array = Array.from(Set1) // common values removed, so just convert
res[1] Array = Array.from(Set2)

return res

- Time: O(m + n)
- Space: O(m + n)

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set()
    for (let i = 0; i < nums1.length; i ++) {
        set1.add(nums1[i])
    }

    let set2 = new Set(nums2)

    for (let val of set1) {
        if (set2.has(val)) {
            set1.delete(val)
            set2.delete(val)
        }
    }
    const res = new Array(2).fill().map((e) => new Array())
    res[0] = Array.from(set1)
    res[1] = Array.from(set2)
    return res
};
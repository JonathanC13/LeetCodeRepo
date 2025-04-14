// https://neetcode.io/problems/top-k-elements-in-list

/*
edge case 1: if k >= nums.length: return nums

create a Map
    key: number
    val: frequency

iterate nums and incremement freq in Map

convert Map to Array and sort by val

for 0 to < k
    res.push()

return res

- Time: O(n log n)  // n for incremementing freq + n log n for sort = n log n
- Space: O(n)   // n for Map + log n for sort = n
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for (let i = 0; i < nums.length; i ++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        const arr = Array.from(map)
        arr.sort((a, b) => b[1] - a[1])

        const res = []
        for (let i = 0; i < k; i ++) {
            res.push(arr[i][0])
        }

        return res
    }
}

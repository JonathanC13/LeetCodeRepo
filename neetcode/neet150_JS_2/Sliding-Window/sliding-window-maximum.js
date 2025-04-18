// https://neetcode.io/problems/sliding-window-maximum

/*
create a Map for:
    key = number
    value = freq

insert values for the initial window and record the max

let l = 0
iterate the remaining nums, r from k to nums.length
    decrement the freq of nums[l] in the Map
    l += 1
    incrememnt the freq of nums[r]

    convert the Map to Array and then sort in non-ascending order
    max = Math.max(max, arr[0])

return max

- Time: O(n^2 * log n) // n to iterate nums, n log n to sort each time
- Space: O(k)


** Better heap
create a MaxHeap with element: [number, index]
    The index is stored because if the max is out of the window, it will be removed

- Time: O(n log n)  // n log n for operations like insert, delete
- Space: O(n)   
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const maxQ = new MaxPriorityQueue((n) => n[0])
        let maxes = new Array()

        for (let r = 0; r < nums.length; r ++) {
            maxQ.enqueue([nums[r], r])

            // if initial window complete and onward
            if (r >= k - 1) {
                // remove all maxes that are outside the current window
                while (maxQ.front()[1] <= r - k) {
                    maxQ.dequeue()
                }

                maxes.push(maxQ.front()[0])
            }
        }

        return maxes

    }

    // let max = Number.NEGATIVE_INFINITY
    // let maxes = new Array()
    // const windowMap = new Map()

    // for (let i = 0; i < k; i ++) {
    //     max = Math.max(max, nums[i])
    //     windowMap.set(nums[i], (windowMap.get(nums[i]) || 0) + 1)
    // }
    // maxes.push(max)

    // let l = 0
    // for (let r = k; r < nums.length; r ++) {
    //     windowMap.set(nums[l], windowMap.get(nums[l]) - 1)
    //     if (windowMap.get(nums[l]) === 0) {
    //         windowMap.delete(nums[l])
    //     }
    //     l += 1

    //     windowMap.set(nums[r], (windowMap.get(nums[r]) || 0) + 1)
        
    //     const arr = Array.from(windowMap.entries(), (e) => e[0])

    //     arr.sort((a, b) => b - a)
    //     maxes.push(arr[0])
    // }
    // return maxes
}

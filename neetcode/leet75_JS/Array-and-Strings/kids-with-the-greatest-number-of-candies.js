// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

/*

** made it more complicated than it should have been
create an Array hold the maximum candies excluding the index. Time: O(n)

iterate the candies, 
    eval if candies[i] + extra >= res[i]    ** Description missing greater or **equal** to max
        res[i] = true
    else
        res[i] = false

- Time: O(n).   // if use maxPriQue O(log n) + n
- Space: O(n)

** Simpler
iterate candies to find the max. O(n)
iterate candies to determine if candies[i] + extraCandies >= max
*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const res = new Array(candies.length).fill(false)
    let max = 0
    for (let i = 0; i < candies.length; i ++) {
        max = Math.max(max, candies[i])
    }

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            res[i] = true
        }
    }
    return res

    // LOL
    // const n = candies.length
    // const maxPriQ = new MaxPriorityQueue((e) => e[0])
    // for (let i = 0; i < n; i ++) {
    //     maxPriQ.enqueue([candies[i], i])
    // }
    // console.log(maxPriQ.front())

    // const res = new Array(n).fill(false)
    // for (let i = 0; i < n; i ++) {
    //     if (maxPriQ.front()[1] === i) {
    //         const popped = maxPriQ.dequeue()
    //         if (candies[i] + extraCandies >= maxPriQ.front()[0]) {
    //             res[i] = true
    //         }
    //         maxPriQ.enqueue(popped)
    //     } else if (candies[i] + extraCandies >= maxPriQ.front()[0]) {
    //         res[i] = true
    //     }
    // }

    // return res
};
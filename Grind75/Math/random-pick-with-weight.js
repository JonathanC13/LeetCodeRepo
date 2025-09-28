// https://leetcode.com/problems/random-pick-with-weight/description/

/**
Solution(w)
    iterate w to get the sum
    prev = 0
    for each index adjust the value to be the range of percent
        e.g. [1, 3]
        modified to be: [0 + 0.25, 0.25 + 0.75]
        

pickIndex
    rand = perform random() will result in [0, 1)
    index = 0
    perform binary search for the last index where the rand <= this.w[mid]
    if (rand <= this.w[mid]) {
        index = mid
        go left in attempt to find lower
    }

- Time: O(log n)    // n = w.length
- Space: O(1)
 */

/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.w = w
    let sum = 0
    for (let i = 0; i < this.w.length; i ++) {
        sum += this.w[i]
    }

    let prev = 0
    for (let i = 0; i < this.w.length; i ++) {
        this.w[i] = prev + this.w[i] / sum
        prev = this.w[i]
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const rand = Math.random()

    let l = 0
    let r = this.w.length - 1
    let index = 0
    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l

        if (rand < this.w[mid]) {
            index = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return index
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
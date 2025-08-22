// https://leetcode.com/problems/maximum-frequency-stack/description/

/**
create a Priority Queue
    element: [val, freq at time of insertion, time]
    sort by:
        freq at time of insertion desc, if tied with existing element then time desc
        *This ensures the top element is always the most freq and if has same the time desc will ensure the most recently added.

create a Map to track the curr freq
    key: val
    value: freq

- Time: O(n log(n)) // n for number of operations. log(n) is time for operation on priority queue
- Space: O(n)
    
 */

var FreqStack = function() {
    this.priQ = new PriorityQueue((a, b) => {
        const diff = b[1] - a[1]
        if (diff === 0) {
            return b[2] - a[2]
        }
        return diff
    })
    this.freq = new Map()
    this.time = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    if (!this.freq.has(val)) {
        this.freq.set(val, 0)
    }
    this.freq.set(val, this.freq.get(val) + 1)

    const v = [val, this.freq.get(val), this.time]
    this.time += 1

    this.priQ.enqueue(v)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const popped = this.priQ.dequeue()
    this.freq.set(popped[0], this.freq.get(popped[0]) - 1)
    return popped[0]
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
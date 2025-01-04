// https://neetcode.io/problems/find-median-in-a-data-stream

class MedianFinder {
    constructor() {
        this.lowEq = new MaxPriorityQueue()
        this.high = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {

        if (this.lowEq.size() === 0 || num <= this.lowEq.front()) {
            this.lowEq.enqueue(num)
        } else {
            this.high.enqueue(num)
        }
        
        // rebalance
        if (this.lowEq.size() - this.high.size() > 1) {
            this.high.enqueue(this.lowEq.dequeue())
        } else if (this.high.size() - this.lowEq.size() > 1) {
            this.lowEq.enqueue(this.high.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.lowEq.size() > this.high.size()) {
            return this.lowEq.front()
        } else if (this.high.size() > this.lowEq.size()) {
            return this.high.front()
        } else {
            return (this.lowEq.front() + this.high.front()) / 2.0
        }
    }
}

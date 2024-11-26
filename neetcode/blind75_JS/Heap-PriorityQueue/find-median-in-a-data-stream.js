// https://neetcode.io/problems/find-median-in-a-data-stream

class MedianFinder {
    constructor() {
        this.maxPQ = new PriorityQueue((a, b) => {return a - b}) // for values less than the median
        this.minPQ = new PriorityQueue((a, b) => {return a - b}) // for values greater than the median
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.minPQ && num > this.minPQ.front()) {
            this.minPQ.enqueue(num)
        } else {
            this.maxPQ.enqueue(num * -1)
        }

        if (this.maxPQ.size() > this.minPQ.size() + 1) {
            this.minPQ.enqueue(this.maxPQ.dequeue() * -1)
        } else if (this.minPQ.size() > this.maxPQ.size() + 1) {
            this.maxPQ.enqueue(this.minPQ.dequeue() * -1)
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxPQ.size() > this.minPQ.size()) {
            return this.maxPQ.front() * -1
        } else if (this.minPQ.size() > this.maxPQ.size()) {
            return this.minPQ.front()
        } else {
            return ((this.maxPQ.front() * -1) + this.minPQ.front()) / 2
        }
    }
}

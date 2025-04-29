// https://neetcode.io/problems/find-median-in-a-data-stream

/*
create a MaxQ to store the values </= median
create a MinQ to store the values >/= median

addNum
    if both Qs are empty
        can insert into any, currently will choose maxQ and base next conditions on it.
    else if val < maxQ.front()
        enqueue into maxQ since smaller value, therefore < prev median
    else {
        enqueue into minQ
    }

    must rebalance since the median is both sides are at most 1 size different
    if (maxQ.size() > minQ.size() + 1) {
        minQ.enqueue(maxQ.dequeue())
    } else if (minQ.size() > maxQ.size() + 1) {
        maxQ.enqueue(minQ.dequeue())
    }

    - Time: O(log n)

findMedian
    if (maxQ.size() === minQ.size()) {
        return (maxQ.front() + minQ.front()) / 2
    } else {
        return maxQ.size() > minQ.size() ? maxQ.front() : minQ.front()
    }

    - Time: O(1)

overall space: O(n)
*/

class MedianFinder {
    constructor() {
        this.maxQ = new MaxPriorityQueue()
        this.minQ = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.maxQ.size() === 0 && this.minQ.size() === 0) {
            this.maxQ.enqueue(num)
        } else if (num < this.maxQ.front()) {
            this.maxQ.enqueue(num)
        } else {
            this.minQ.enqueue(num)
        }

        if (this.maxQ.size() > this.minQ.size() + 1) {
            this.minQ.enqueue(this.maxQ.dequeue())
        } else if (this.minQ.size() > this.maxQ.size() + 1) {
            this.maxQ.enqueue(this.minQ.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxQ.size() === this.minQ.size()) {
            return (this.maxQ.front() + this.minQ.front()) / 2
        } else {
            return this.maxQ.size() > this.minQ.size() ? this.maxQ.front() : this.minQ.front()
        }
    }
}

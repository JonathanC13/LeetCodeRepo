// https://neetcode.io/problems/find-median-in-a-data-stream

/*
create a MinPriQ to hold the values that are greater than the median
create a MaxPriQ to hold the values that are less than the median
- Space: O(1)

func addNum(num)
    // place the incoming number in the approriate queue
    if (maxPriQ.size() === 0 || num > minPriQ.front()) {
        enqueue into minPriQ
    } else (num <= maxPriQ.front()) {
        maxPriQ.enqueue
    }

    // balance the Queues so that the medians will be at the front of the queue that is longer (for odd n) or the mean of both fronts (for even n)
    if (maxPriQ.size() > minPriQ.size() + 1) {
        minPriQ.enqueue(maxPriQ.dequeue())
    } else if (minPriQ.size() > maxPriQ.size() + 1) {
        maxPriQ.enqueue(minPriQ.dequeue())
    } // else is balanced

    - Time: O(log n)
    - Space: O(1)

func findMedian
    if maxPriQ.size() > minPriQ.size()
        return maxPriQ.front()
    else if maxPriQ.size() < minPriQ.size()
        return minPriQ.front()
    else
        return (maxPriQ.front() + minPriQ.front()) / 2

    - Time: O(1)
    - Space: O(1)
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
        if (this.maxQ.size() === 0 || num > this.minQ.front()) {
            this.minQ.enqueue(num)
        } else {
            this.maxQ.enqueue(num)
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
        if (this.maxQ.size() > this.minQ.size()) {
            return this.maxQ.front()
        } else if (this.maxQ.size() < this.minQ.size()) {
            return this.minQ.front()
        } else {
            return (this.maxQ.front() + this.minQ.front()) / 2
        }
    }
}

// https://neetcode.io/problems/find-median-in-a-data-stream

/*
constructor
    initialize a MinPriQueue to hold the values greater than the median
    initialize a MaxPriQueue to hold the values less than the median

addNum
    pick one of the Qs to add to by default
    if maxQ.size() === 0
        maxQ.enqueue(num)
    else if num < maxQ.front()
        maxQ.enqueue(num)
    else
        minQ.enqueue(num)

    // balance since median is the middle value, if odd then one Q will be 1 element more and if even they will have the same number of elements.
    if (maxQ.size() > minQ.size() + 1) {
        minQ.enqueue(maxQ.dequeue())
    } else if (minQ.size() > maxQ.size() + 1) {
        maxQ.enqueue(minQ.dequeue())
    }

    - Time: O(log(n))   // 3 * log(n)  // 1 for enqueue, 1 for dequeue, 1 for enqueue

findMedian
    if (maxQ.size() === 0 && minQ.size() === 0) {
        return null
    }
    if (maxQ.size() === minQ.size()) {
        return (maxQ.front() + minQ.front()) / 2
    } else if (maxQ.size() > minQ.size()) {
        return maxQ.front()
    } else {
        return minQ.front()
    }

    - Time: O(1)

- Total Time: O(m * log(n)), m is the number of operations
*/

class MedianFinder {
    constructor() {
        this.minQ = new MinPriorityQueue()
        this.maxQ = new MaxPriorityQueue()
    }
    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.maxQ.size() === 0) {
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
        if (this.maxQ.size() === 0 && this.minQ.size() === 0) {
            return null
        }

        if (this.maxQ.size() === this.minQ.size()) {
            return (this.maxQ.front() + this.minQ.front()) / 2
        } else if (this.maxQ.size() > this.minQ.size()) {
            return this.maxQ.front()
        } else {
            return this.minQ.front()
        }
    }
}

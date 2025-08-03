// https://leetcode.com/problems/find-median-from-data-stream/description/?envType=study-plan-v2&envId=top-interview-150

/**
constructor
    create a min priority queue to store the values greater than the median
    create a max priority queue to store the values less than the median

    - Time: O(1)
    - Space: O(1)

func addNum (num)
    if minPri empty or num > minPri front()
        minPri.enqueue(num)
    else
        maxPri.enqueue(num)

    // must rebalance since objective is to get the median
    if (minPri.size() > maxPri.size() + 1)
        pop = minPri.dequeue
        maxPri.enqueue(pop)
    else if (maxPri.size() > minPri.size() + 1)
        pop = maxPri.dequeu
        minPri.enqueue(pop)

    - Time: O(log n)
    - Space: O(1)

func findMedian
    if minPri.size() > maxPri.size()
        return minPri.front()
    else if (maxPri.size() > minPri.size()) 
        return maxPri.front()
    else
        return (minPri.front() + maxPri.front()) / 2

    - Time: O(1)
    - Space: O(1)

Overall with stream
- Time: O(n log(n))
- Space: O(n)
 */

var MedianFinder = function() {
    this.minPri = new MinPriorityQueue()
    this.maxPri = new MaxPriorityQueue()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.minPri.size() === 0 || this.minPri.front() <= num) {
        this.minPri.enqueue(num)
    } else {
        this.maxPri.enqueue(num)
    }

    if (this.minPri.size() > this.maxPri.size() + 1) {
        this.maxPri.enqueue(this.minPri.dequeue())
    } else if (this.maxPri.size() > this.minPri.size() + 1) {
        this.minPri.enqueue(this.maxPri.dequeue())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.minPri.size() > this.maxPri.size()) {
        return this.minPri.front()
    } else if (this.maxPri.size() > this.minPri.size()) {
        return this.maxPri.front()
    } else {
        return (this.minPri.front() + this.maxPri.front()) / 2
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
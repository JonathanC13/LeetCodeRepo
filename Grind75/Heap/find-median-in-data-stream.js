// https://leetcode.com/problems/find-median-from-data-stream/description/

/**
create a max heap for the values that are on the lower side of the median
create a min heap for the values that are on the higher side of the median

addNum
    if max heap is not empty AND num <= max Heap top
        enqueue into max heap
    else 
        enqueue into min heap   // as default.

    // balance since looking for median
    if (maxheap.size() > minheap.size() + 1) {
        const deq = maxheap.dequeue
        minheap.enqueue(deq)
    } else if (minheap.size() > maxheap.size() + 1) {
        maxheap.enqueue(minheap.dequeue())
    }

    - Time: O(log n)

findMedian
    if maxheap.size() > minheap.size()
        return maxheap.front()
    else if maxheap.size() < minheap.size()
        return minheap.front()
    else
        return (maxheap.front() + minheap.front()) / 2
    
    - Time: O(1)

Total
    - Time: O(n log n)
    - Space: O(n)
 */

var MedianFinder = function() {
    this.maxH = new MaxPriorityQueue()
    this.minH = new MinPriorityQueue()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.maxH.size() > 0 && num <= this.maxH.front()) {
        this.maxH.enqueue(num)
    } else {
        this.minH.enqueue(num)
    }

    if (this.maxH.size() > this.minH.size() + 1) {
        this.minH.enqueue(this.maxH.dequeue())
    } else if (this.minH.size() > this.maxH.size() + 1) {
        this.maxH.enqueue(this.minH.dequeue())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxH.size() > this.minH.size()) {
        return this.maxH.front()
    } else if (this.maxH.size() < this.minH.size()) {
        return this.minH.front()
    } else {
        return (this.maxH.front() + this.minH.front()) / 2
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
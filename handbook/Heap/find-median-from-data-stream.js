// https://leetcode.com/problems/find-median-from-data-stream/

/**
1. Assumptions
    1. findMedian only called when there are values. But run check anyways

2. input validation
    1. num
        - Data type: Number

3. time and space constraints
    addNum
        BTTC: O(log(m)) // m = number of elements in a Heap
        Space: O(n) // n = total elements from data stream

    findMedian
        BTTC: O(1)
        Space: O(1)

4. edge cases and some test cases
    edge cases
    1. findMedian called without any values from data stream: return null
    test cases
    1. odd number of values, so there is a median value
        input
            stream = ["2, 4, 3"]
        expected output
            3
    2. even number of values, must take the mean of the two middle values
        input
            stream = ['3', '2']
        expected output
            2.5
    3. duplicate median values
        input
            stream = ['2', '3', '3', '5']
        expected output
            3

            lesser = [2], greater = [3, 3]
            then input 5 into greater
            lesser = [2], greater = [3, 3, 5], rebalance occurs
            lesser = [2, 3], greater = [3, 5]. mean = (3 + 3) / 2 = 3

5. visualize by drawing and manually solve
6. break into subproblems
    maintain a max pri Q for the values that are lower than the median
    maintain a min pri Q for the values that are greater than the median
    with these two, findMedian can determine the median in Time: O(1)

7. algos
    - priority Queue operations

8. data structures
    - Heaps for priority queues

9. complexity
    addNum
        BTTC: O(log(m)) // m = number of elements in a Heap
        Space: O(n) // n = total elements from data stream

    findMedian
        BTTC: O(1)
        Space: O(1)

 */


var MedianFinder = function() {
    this.lesser = new MaxPriorityQueue()
    this.greater = new MinPriorityQueue()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // determine which heap to enqueue
    if (this.lesser.size() > 0 && num <= this.lesser.front()) {
        this.lesser.enqueue(num)
    } else if (this.greater.size() > 0 && num >= this.greater.front()) {
        this.greater.enqueue(num)
    } else {
        // both empty, arbitrary choose where to enqueue.
        this.lesser.enqueue(num)
    }

    // balance since want median at front
    if (this.lesser.size() > this.greater.size() + 1) {
        this.greater.enqueue(this.lesser.dequeue())
    } else if (this.greater.size() > this.lesser.size() + 1) {
        this.lesser.enqueue(this.greater.dequeue())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.lesser.size() === 0 && this.greater.size() === 0) {
        return null
    } else if (this.lesser.size() > this.greater.size()) {
        return this.lesser.front()
    } else if (this.greater.size() > this.lesser.size()) {
        return this.greater.front()
    } else {
        return (this.lesser.front() + this.greater.front()) / 2
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
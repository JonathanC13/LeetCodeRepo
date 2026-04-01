// https://neetcode.io/problems/find-median-in-a-data-stream/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. addNum
 *      1. num
 *          - typeof num === 'number'
 * 
 * 3. time and space constraints
 *  BTTC: O(n log(n))
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if findMedian() called with no elements
 *      return 0
 * 
 *  test cases
 *  1. odd number of elements when findMedian() called
 *      inputs
 *          nums = [5, 1, 7]
 *      expected output
 *          5
 *  2. even number of elements
 *      inputs
 *          nums = [1,6,4,10]
 *      expected output
 *          5
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. addNum
 *  create min Heap for the values > median
 *  create max Heap for the values < median
 * 
 *  if max heap not empty and num < top
 *      enqueue into max heap
 *  else
 *      enqueue into min heap
 * 
 *  since want median balance
 *  if max heap size > min heap size + 1    // 2 greater
 *      move top max heap to min heap
 *  else if min heap size > max heap size + 1
 *      move top min heap to max heap
 * 
 *  2. findMedian
 *      if max heap size > min heap size
 *          return max heap top
 *      else if max heap < min heap size
 *          return min heap top
 *      else
 *          return mean of max heap and min heap
 * 
 * 7. algos
 *  - priority queue operations
 * 
 * 8. data structures
 *  - Heaps
 * 
 * 9. complexity
 *  Time: O(n log(n))   // each priority queue operation is log(n). * n for total nums
 *  Space: O(n)
 * 
 */

class MedianFinder {
    constructor() {
        this.maxPriQ = new MaxPriorityQueue()
        this.minPriQ = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.maxPriQ.size() > 0 && this.maxPriQ.front() >= num) {
            this.maxPriQ.enqueue(num)
        } else {
            this.minPriQ.enqueue(num)
        }

        if (this.maxPriQ.size() > this.minPriQ.size() + 1) {
            this.minPriQ.enqueue(this.maxPriQ.dequeue())
        } else if (this.minPriQ.size() > this.maxPriQ.size() + 1) {
            this.maxPriQ.enqueue(this.minPriQ.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxPriQ.size() > this.minPriQ.size()) {
            return this.maxPriQ.front()
        } else if (this.maxPriQ.size() < this.minPriQ.size()) {
            return this.minPriQ.front()
        } else {
            return ((this.minPriQ.front() - this.maxPriQ.front()) / 2) + this.maxPriQ.front()
        }
    }
}

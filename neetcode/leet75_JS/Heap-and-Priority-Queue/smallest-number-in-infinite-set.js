// https://leetcode.com/problems/smallest-number-in-infinite-set/description/?envType=study-plan-v2&envId=leetcode-75

/*
constructor
    create an addBack Set to store the values that have been added by calling func addBack
    create a Min Pri Que to store the values that have been added by calling func addBack
    create a variable for the current number the infinite set is on.

    - Space: O(n + m)   // n = size of min pri Queue, m for size of Set

popSmallest
    if min pri queue is not empty
        pop = dequeue
        remove from addBackSet
        return pop
    else
        currNum += 1
        return currNum - 1

    - Time: O(log n)    // n is size of min pri queue. for dequeue

addBack
    if (val < currNum && not in addBackSet)
        add to addBackSet
        enqueue into min pri queue
    // else nothing since already exists

    - Time: O(log n)    // for insert

*/

var SmallestInfiniteSet = function() {
    this.minQu = new MinPriorityQueue()
    this.addBackSet = new Set()
    this.currNum = 1
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.minQu.size() > 0) {
        const pop = this.minQu.dequeue()
        this.addBackSet.delete(pop)
        return pop
    } else {
        this.currNum += 1
        return this.currNum - 1
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.currNum && !this.addBackSet.has(num)) {
        this.addBackSet.add(num)
        this.minQu.enqueue(num)
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
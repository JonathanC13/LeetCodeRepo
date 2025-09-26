// https://leetcode.ca/all/362.html

const { Deque } = require('@datastructures-js/deque');

/**
 * 
 * Design a hit counter which counts the number of hits received in the past 5 minutes.
 * Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.
 * It is possible that several hits arrive roughly at the same time.
 * 
 * Since the hits arrive in order, create a Queue to store the hits and while the front of the queue, the oldest hits, time value is > 5 min old dequeue them.
 */

class HitCounter {
    constructor() {
        this.queue = new Deque()
        this.threshold = 5 * 60 // 5 min * 60 s
    }

    maintainValidElems(timestamp) {
        // timestamp indicates current time, therefore remove all hits that are older than current time (timestamp) - 5 mins
        while (this.queue.size() > 0 && this.queue.front() <= timestamp - this.threshold) {
            this.queue.popFront()
        }
    }

    /**
     * 
     * @param {Number} timestamp 
     */
    hit = function(timestamp) {
        this.maintainValidElems(timestamp)

        this.queue.pushBack(timestamp)
    }

    getHits(timestamp) {
        this.maintainValidElems(timestamp)
        console.log(this.queue.size())
        return this.queue.size()
    }
}

const hitCounter = new HitCounter();

// hit at timestamp 1.
hitCounter.hit(1);

// hit at timestamp 2.
hitCounter.hit(2);

// hit at timestamp 3.
hitCounter.hit(3);

// get hits at timestamp 4, should return 3.
hitCounter.getHits(4);

// hit at timestamp 300.
hitCounter.hit(300);

// get hits at timestamp 300, should return 4.
hitCounter.getHits(300);

// get hits at timestamp 301, should return 3.
hitCounter.getHits(301);
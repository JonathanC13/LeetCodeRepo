/**
Design Hit Counter — Problem Description

You need to build a class that tracks how many “hits” occur within the past 5 minutes (i.e., the last 300 seconds).

Implement two operations:

1. hit(timestamp)

Records a hit happening at the given time.

timestamp is a positive integer representing the time in seconds.

Timestamps are provided in strictly increasing order.

2. getHits(timestamp)

Returns the number of hits that occurred in the previous 300 seconds, counting from timestamp (inclusive).

In other words, count hits where
timestamp - 299 <= hit_time <= timestamp.

Constraints & Notes

    1. Only hits within the latest 300-second window should be counted.

    2. The number of operations can be large, so your design should be efficient in both time and memory.

    3. The timestamps are guaranteed to increase across calls.
 * 
 * 
 * 1. Assumptions
 *  1. Timestamp always increasing for subsequent calls
 *  2. Can use a Deque
 * 
 * 2. input validation
 *  1. Timestamp is a positive Number and greater than previous call's Number (can compare with most recent enqueue Timestamp)
 * 
 * 3. time and space constraint
 *  hitCounter
 *      Space: O(n) // n = number of hits within now and timestamp - 299
 * 
 *  hit(timestamp)
 *      BTTC: O(1)
 *      Space: O(1)
 * 
 *  getHits(timestamp)
 *      BTTC: O(1)
 *      Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. n/a
 *  test cases
 *  1. 
 *      Inputs
 *          [hitCounter, hit, hit, hit, getHits, getHits, hit, getHits]
 *          [null, 0, 100, 299, 299, 300, 350, 600]
 *      Expected output
 *          [null, null, null, null, 3, 2, null, 1]
 * 
 * 5. visualize by drawing and manually solve
 * 6. sub into subproblems
 *  Since timestamp is ever increasing and static 300 seconds needed, maintain a queue where the new timestamp is enqueued to the end and when hit or getHits is called; dequeue timestamps from front that are < timestamp - 299
 * 
 * 7. algos
 *  - Queue operations
 * 
 * 8. Data structures
 *  - Queue
 * 
 * 9. complexities
 *  hitCounter
 *      Space: O(n) // n = number of hits within now and timestamp - 299
 * 
 *  hit(timestamp)
 *      BTTC: O(1)
 *      Space: O(1)
 * 
 *  getHits(timestamp)
 *      BTTC: O(1)
 *      Space: O(1)
 */

const { Deque } = require('@datastructures-js/deque');

class HitCounter {
    constructor() {
        this.qu = new Deque()
        this.window = 300
    }

    dequeueExpired = (timestamp) => {
        while (this.qu.size() > 0 && this.qu.front() <= timestamp - this.window) {
            this.qu.popFront()
        }
    }

    hit = (timestamp) => {
        this.dequeueExpired(timestamp)
        this.qu.pushBack(timestamp)
    }

    getHits = (timestamp) => {
        this.dequeueExpired(timestamp)
        return this.qu.size()
    }
}

const driver = (ops, params) => {
    if (ops.length !== params.length || ops.length === 0) {
        return []
    }

    const res = new Array()

    if (ops[0] !== "HitCounter") {
        return []
    }
    const hitCounterObj = new HitCounter()
    res.push(null)

    for (let i = 1; i < ops.length; i ++) {
        switch(ops[i]) {
            case "hit":
                hitCounterObj.hit(params[i])
                res.push(null)
                break
            case "getHits":
                res.push(hitCounterObj.getHits(params[i]))
                break
            default:
                return []
        }
    }

    return res
}

/*
 *      Inputs
 *          [hitCounter, hit, hit, hit, getHits, getHits, hit, getHits]
 *          [null, 0, 100, 299, 299, 300, 350, 600]
 *      Expected output
 *          [null, null, null, null, 3, 2, null, 1]
 */

console.log(driver(['HitCounter', 'hit', 'hit', 'hit', 'getHits', 'getHits', 'hit', 'getHits'], [null, 0, 100, 299, 299, 300, 350, 600]))

console.log(driver(["HitCounter", "hit", "hit", "hit", "getHits", "hit", "getHits", "getHits"], [[], [1], [2], [3], [4], [300], [300], [301]]))
// expected: [null, null, null, null, 3, null, 4, 3]
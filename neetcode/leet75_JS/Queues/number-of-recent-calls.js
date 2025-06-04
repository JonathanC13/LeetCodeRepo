// https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a Queue using an array, the front will be the end and the back is the beginning
    so front is the oldest request and the back is the newest

func ping
    enqueue(t) 

    while (queue.length > 0 && queue.front < t - 3000)
        dequeue since request is out of range

    return queue.length

- Time: O(n)    // n = number of requests
- Space: O(n)   // n = number of requests
*/


var RecentCounter = function() {
    this.qu = new Array()
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.qu = [t, ...this.qu]

    while (this.qu.length > 0 && this.qu[this.qu.length - 1] < t - 3000) {
        this.qu.pop()
    }
    
    return this.qu.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
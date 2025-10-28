// https://leetcode.com/problems/all-oone-data-structure/

/** Try again with Map and doubly linked list like LRU problem.
1. Assumptions
    1. None

2. input validation
    1. typeof key === 'String'

3. time/space constraints
    Each function must run average Time: O(1)

4. edge cases and some test cases
    edge cases
    1. getMaxKey() called when empty. Expected: ""
    2. getMinKey() called when empty. Expected: ""
    test cases
    1. 
        Inputs
            ops = ["AllOne","inc","inc","getMaxKey","getMinKey","inc","getMaxKey","getMinKey"]
            pars = [[],["hello"],["hello"],[],[],["leet"],[],[]]
        Output
            [null, null, null, "hello", "hello", null, "hello", "leet"]

5. visualize by drawing and manually solve
6. break into subproblems
    Create buckets and the index is the count of the String
    The datastructure stored at each index is a Set of Strings with that count

    For functions inc(key) and dec(key) to have average Time O(1), maintain a Map with key: String, value: count.
    For functions getMaxKey() and getMinKey() to have Time O(1) maintain a variable to keep the max and a variable for the min.
    
    When inc(key) occurs
        if (map not has key)
            map.set(key, 0)

        cnt = map.get(key)
        // remove from current bucket
        arr[cnt].delete(key)
        // update min if needed
        if (cnt + 1 < this.min || (this.min === cnt && this.arr[cnt].size() === 0)) {
            min = cnt + 1
        }

        // update max if needed
        if cnt + 1 > max
            max = cnt + 1
        
        cnt += 1
        arr[cnt].add(key)
        map.set(key, cnt)

7. algos
    - Hashing

8. datastructures
    - Array
    - Hash table

9. complexity
    Time: O(1) average for all functions
    Space: O(n + m) // n = unique Strings in Map, m = max count
 */

var AllOne = function() {
    this.map = new Map()
    this.buckets = new Array(1).fill().map((e) => new Set())
    this.min = 0
    this.max = 0
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if (!this.map.has(key)) {
        this.map.set(key, 0)
    }

    let cnt = this.map.get(key)
    // remove from current bucket
    this.buckets[cnt].delete(key)
    cnt += 1
    if (cnt >= this.buckets.length) {
        this.buckets.push(new Set())
    }
    // update min if needed
    if (cnt < this.min || (this.min === cnt - 1 && this.buckets[cnt - 1].size === 0)) {
        // || prev min has no Strings therefore min increases
        this.min = cnt
    }

    // update max if needed
    if (cnt > this.max) {
        this.max = cnt
    }
    
    
    this.buckets[cnt].add(key)
    this.map.set(key, cnt)
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if (!this.map.has(key)) {
        return
    }

    let cnt = this.map.get(key)
    // remove from current bucket
    this.buckets[cnt].delete(key)
    cnt -= 1
    // update min if needed
    if (cnt < this.min) {
        this.min = cnt
    }

    // update max if needed
    if (cnt + 1 === this.max && this.buckets[cnt + 1].size === 0) {
        // prev max has no Strings, therefore max decreases
        this.max = cnt
    }
    
    if (cnt > 0) {
        this.buckets[cnt].add(key)
        this.map.set(key, cnt)
    } else {
        this.map.delete(key)
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    console.log('max', this.max, this.buckets, this.map)
    if (this.max === 0) {
        return ""
    }
    return Array.from(this.buckets[this.max])[0]
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    console.log('min', this.min, this.buckets, this.map)
    if (this.min === 0) {
        return ""
    }
    return Array.from(this.buckets[this.min])[0]
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
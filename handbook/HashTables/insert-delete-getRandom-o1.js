// https://leetcode.com/problems/insert-delete-getrandom-o1/description/

/**
1. Assumptions
    1. getRandom() only called when at least one element in the RandomizedSet

2. input validation
    - typing
        - typeof val === 'Number'
    - length
        N/A
    - content
        val is a Number

3. time/space constraints
    Each function average Time: O(1)

4. edge cases and some test cases
    edge cases
    - N/A
    some test cases
    1. insert value, insert same value, getRandom, remove the value, remove the same value
        inputs
            operations = ["RandomizedSet", "insert", "insert", "getRandom", "remove", "remove"]
            data = [[], 1, 1, [], 1, 1]
        output
            expected = [null, true, false, 1, true, false]
    2. insert two different values, getRandom, getRandom, insert another value, remove first value, getRandom
        inputs
            operations = ["RandomizedSet", "insert", "insert", "getRandom", "getRandom", "insert", "remove", "getRandom"]
            data = [[], 1, 2, [], [], 3, 1, []]
        output
            expected = [null, true, true, val, val, true, true, val]

5. visualize by drawing and manually solve
6. break into subproblems
    func insert(val)
        - to ensure this function is Time O(1), use a Map to store the input val as the key
    
    func remove(val)
        - also uses the same Map for remove to ensure Time O(1)

    func getRandom()
        - since a Map cannot be indexed for Time O(1), use redundancy and create an Array to house the values as well. This also means the Map will have; key: val, value: index in Array. Therefore to remove an existing value, swap the end value with the val's index, update the Map value (index) of the swapped, and then pop() the end off.
        - to get a random index in the Array, call Math.floor(Math.random() * arr.length)   // this will ensure same probability

7. aglo
    - Hashing
    - Array indexing

8. data structures
    - Hash table (Map)
    - Arrays

9. Complexity
    Time: O(1) all functions
    Space: O(n) // n = max size overall.
 */


var RandomizedSet = function() {
    this.map = new Map()
    this.arr = new Array()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false
    }

    this.map.set(val, this.arr.length)
    this.arr.push(val)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false
    }

    const targIdx = this.map.get(val)
    this.arr[targIdx] = this.arr[this.arr.length - 1]   // replace target index with end value
    this.map.set(this.arr[targIdx], targIdx)    // update swapped in value's index in Map

    this.arr.pop()
    this.map.delete(val)

    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const idx = Math.floor(Math.random() * this.arr.length)
    return this.arr[idx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
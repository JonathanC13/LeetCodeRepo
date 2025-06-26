// https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Map
    key: val
    value: index in Array

create an Array to hold the current keys in the Map

maintain size of the Array so that to know the end of it.

func insert
    if map.has(val): return false

    add val to map with:
        key: val
        value: size

    if (size < array.length)
        replace val in the arr
    else
        push val into the array
    size += 1

    return true

    - Time: O(1)

func remove
    if !map.has(val): return false

    access map to find index for the val
    replace the removed val at index with the end value in the Array from index size - 1
    size -= 1
    only update replaced val index in map if i < size, otherwise:
        1. the size === 0, so therefore do not add to map
        2. the replacement was the last value at index size - 1, since removed do not add
    return true

    - Time: O(1)

func getRand
    const randIdx = Math.floor(Math.random() * (this.size - 0) + 0)  // (max - min) + min    // max exclusive
    return this.arr[randIdx]

    - Time: O(1)
*/

var RandomizedSet = function() {
    this.map = new Map()
    this.arr = new Array()
    this.size = 0
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false
    }

    this.map.set(val, this.size)
    if (this.size < this.arr.length) {
        this.arr[this.size] = val
    } else {
        this.arr.push(val)
    }
    this.size += 1
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        const i = this.map.get(val)
        this.map.delete(val)
        this.arr[i] = this.arr[this.size - 1]
        this.size -= 1
        if (i < this.size) {
            this.map.set(this.arr[i], i)
        }
        return true
    }

    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randIdx = Math.floor(Math.random() * (this.size - 0) + 0)  // (max - min) + min    // max exclusive
    return this.arr[randIdx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
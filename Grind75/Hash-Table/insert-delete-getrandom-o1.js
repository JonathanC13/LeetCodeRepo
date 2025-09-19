// https://leetcode.com/problems/insert-delete-getrandom-o1/description/

/**
for Time O(1) insert and removal, use a Map datastructure
    key: val
    value: index in Arr

for getRandom to ensure that each item in the current Map has equal probability:
    1. Dynamic Array and keep seperate var for the current valid length where [0, current valid length) are valid items to choose from
    2. Insert
        if (current valid length < Arr.length)
            overwrite, since the elements from lastIndex are invalid
        else
            need to push and not just overwrite. Allocate more memory

        currLen += 1

    3. Delete
        From the Map, get the remove value's value, which is the index in the Arr
        swap the Arr[current valid length - 1] and Arr[idx]
        delete remove value from Map
        update the swapped value in Map with new index

        curr len -= 1

    - The Arr makes Time: O(1)


 */

var RandomizedSet = function() {
    this.valMap = new Map()
    this.accessArr = new Array()
    this.currLen = 0
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.valMap.has(val)) {
        return false
    } else {
        this.valMap.set(val, this.currLen)

        if (this.currLen < this.accessArr.length) {
            this.accessArr[this.currLen] = val
        } else {
            this.accessArr.push(val)
        }
        this.currLen += 1
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.valMap.has(val)) {
        const idx = this.valMap.get(val)

        if (idx < this.currLen - 1) {
            // since if the same index, no need to swap and update the swapped value's index since it will be deleted.
            const swapVal = this.accessArr[this.currLen - 1]
            this.accessArr[this.currLen - 1] = this.accessArr[idx]
            this.accessArr[idx] = swapVal

            this.valMap.set(swapVal, idx)
        }

        this.valMap.delete(val)
        this.currLen -= 1
        return true
    } else {
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randIdx = Math.floor(this.currLen * Math.random())

    return this.accessArr[randIdx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
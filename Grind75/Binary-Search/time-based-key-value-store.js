// https://leetcode.com/problems/time-based-key-value-store/description/



var TimeMap = function() {
    this.mp = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.mp.has(key)) {
        this.mp.set(key, new Array())
    }
    this.mp.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.mp.has(key)) {
        return ""
    }

    const arr = this.mp.get(key)
    let l = 0
    let r = arr.length - 1

    let val = ""
    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l

        if (arr[mid][1] <= timestamp) {
            val = arr[mid][0]
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return val
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
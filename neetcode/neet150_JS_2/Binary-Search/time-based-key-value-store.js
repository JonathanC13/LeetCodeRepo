// https://neetcode.io/problems/time-based-key-value-store

/*
Map item:
    key = key
    value = Array of [timestamp, value]

Set
    - Time: O(1)
Get
    - Time: O(log n)

- Space: O(m * n)   // m = number of keys, n = total number of Set operations
*/

class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {

        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, new Array())
        }
        this.keyStore.get(key).push([timestamp, value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let val = ""
        if (!this.keyStore.has(key)) {
            return val
        }

        let arr = this.keyStore.get(key)
        let l = 0
        let r = arr.length - 1

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            
            if (arr[mid][0] === timestamp) {
                return arr[mid][1]
            } else if (arr[mid][0] < timestamp) {
                val = arr[mid][1]   // only save the timestamp that is < target timestamp so if the target is not found, the immediate < is returned after.
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return val
    }
}

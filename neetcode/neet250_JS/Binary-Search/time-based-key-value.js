// https://neetcode.io/problems/time-based-key-value-store

/*
map elem
    Key: [[timestamp, value], [timestamp, value]]

Note: For all calls to set, the timestamps are in strictly increasing order.

method 'set'
    if key does not exist, insert key: []

    push [timestamp, value] into the map with the key

    - Time: O(1)
    - Space: O(1)

method 'get'
    if (key does not exist): return ""

    perform binary search of the key's value, which is an Array of [timestamp, value]
        when a elem timestamp is <= timestamp, record it in res

    return res

    - Time: O(log n)
    - Space: O(1)

Class
- Space: O(keys * values)
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
            this.keyStore.set(key, [])
        }

        this.keyStore.get(key).push([timestamp, value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return ""
        }

        let left = 0
        let right = this.keyStore.get(key).length - 1
        let mid = 0
        let res = ''    // better to save the best candidate seen while searching
        while (left <= right) {
            mid = left + Math.floor((right - left) / 2)

            if (timestamp === this.keyStore.get(key)[mid][0]) {
                return this.keyStore.get(key)[mid][1]
            } else if (timestamp < this.keyStore.get(key)[mid][0]) {
                right = mid - 1
            } else {
                // timestamp > mid timestamp. save mid sicne it is that most recent that is lesser than the desired timestamp.
                res = this.keyStore.get(key)[mid][1]
                left = mid + 1
            }
        }
        return res

        // Since no exact found, only return the value if the timestamp is less than the desired one.
        // The final mid will be either the timestamp less than the desired or the last greater one. Iterate backwards for the first lesser one.
        // if (this.keyStore.get(key)[mid][0] < timestamp) {
        //     return this.keyStore.get(key)[mid][1]
        // } else {
        //     while (mid > 0 && this.keyStore.get(key)[mid][0] > timestamp) {
        //         mid = mid - 1
        //     }
        //     return (this.keyStore.get(key)[mid][0] < timestamp) ? this.keyStore.get(key)[mid][1] : "" 
        // }
    }
}

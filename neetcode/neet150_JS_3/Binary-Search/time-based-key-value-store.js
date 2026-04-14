// https://neetcode.io/problems/time-based-key-value-store/question

/**
 * 1. Assumptions
 *  1. Given: set calls have timestamps that are strictly increasing
 * 
 * 2. input validation
 *  1. key
 *      - typeof key === 'string'
 *  2. value
 *      - typeof value === 'number'
 *  3. timestamp
 *      - typeof timestamp === 'number'
 * 
 * 3. time and space constraints
 *  BTTC: O(log(m)) // m = max number of values in a key
 *  Space: O(n * m) // n = # of keys, m = max number of values in a key
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. get(key, timestamp) and key does not exist in structure
 *      return ""
 * 
 *  test cases
 *  1. has exact timestamp match
 *      inputs
 *          ["init", 'set', ['a', 'val1', 1], 'set', ['a','val2',2], 'set', ['a','val3',3], 'get', ['a',3]]
 *      expected output
 *          [..., val3]
 *  2. does not have the exact timestamp so return the value with timestamp < target timestamp
 *      inputs
 *          ["init", 'set', ['a', 'val1', 1], 'set', ['a','val2',3], 'set', ['a','val3',4], 'get', ['a',2]]
 *      expected output
 *          [..., val1]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Since key based, for Time: O(1) access use a Map()
 *  Since timestamps are strictly increasing, the Map's keys values are Arrays to perform binary search for the target timestamp
 *      lastValid = -1 to save the index of timestamp < target timestamp
 *      if find timestamp at m === target: return value at timestamp
 *      else if timestamp at m < target: lastValid = m; need to search in higher value range l = m + 1
 *      else r = m - 1
 * 
 * 7. algos
 *  - Binary search
 * 
 * 8. data structures
 *  - Hash Map
 *  - Array
 * 
 * 9. complexity
 *  Time: O(log(m))
 *  Space: O(log(n * m))
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
        this.keyStore.get(key).push([value, timestamp])
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

        let arr = this.keyStore.get(key)
        let l = 0
        let r = arr.length - 1
        let lastValid = -1
        while (l <= r) {
            const m = Math.floor((r - l) / 2) + l
            if (arr[m][1] === timestamp) {
                return arr[m][0]
            } else if (arr[m][1] < timestamp) {
                lastValid = m
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return lastValid === -1 ? "" : arr[lastValid][0]
    }
}

// https://neetcode.io/problems/time-based-key-value-store

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
        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key) || []

        let left = 0
        let right = arr.length - 1
        let result = ''
        
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)
            
            if (timestamp === arr[mid][1]) {
                return arr[mid][0]
            }

            if (timestamp > arr[mid][1]) {
                result = arr[mid][0]
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return result
    }
}

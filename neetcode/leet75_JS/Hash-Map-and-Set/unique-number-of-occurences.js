// https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a Map to store:
    key = value
    val = frequency

iterate the arr to update the frequency of the value

create an Array of arr.length + 1, fill with null

iterate the Map
    if the freqArr[freq] !== null: return false
    else: freqArr[freq] = value

return true

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freqMap = new Map()

    for (let i = 0; i < arr.length; i ++) {
        if (!freqMap.has(arr[i])) {
            freqMap.set(arr[i], 0)
        }

        freqMap.set(arr[i], freqMap.get(arr[i]) + 1)
    }

    const freqArr = new Array(arr.length + 1).fill(null)
    for (let [k, v] of freqMap.entries()) {
        if (freqArr[v] !== null) {
            return false
        }
        freqArr[v] = k
    }

    return true
};
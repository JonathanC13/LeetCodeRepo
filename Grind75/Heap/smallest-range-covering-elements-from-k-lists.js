// https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/

/**

** soln 1: deterime range and remove the min value from the list that contains it in effort for a smaller range in the next interval.
    res = [neg infin, pos infin]
    cont = true
    while (true)
        interval = [pos infin, neg infin]
        let minValList = 0  // track the list with the min value for the interval. This is because in effort to find the smallest range, remove the min value to potentially shorten the next range.
        iterate the lists in nums, i
            if (nums[i].length === 0) {
                // not possible to create another interval to contain at least one value from each interval
                cont = false
                break
            }

            // get the interval for the values at index 0
            interval[0] = Math.min(interval[0], nums[i][0])
            if (nums[i][0] < interval[0]) {
                minValList = i
                interval[0] = nums[i][0]
            }
            interval[1] = Math.max(interval[1], nums[i][0])
            
        if (cont === false) {
            break
        }

        if (interval[1] - interval[0] < res[1] - res[0]) {
            res = interval copy
        }

        nums[minValList] = nums[minValList].slice(1)    // remove the min value

    return res

    - Time: O(n * m)    // n = nums.length, m = avg length of lists // TLE
    - Space: O(1)

** soln 2   
    // need to reduce the number of comparisons.

    // O(a log(a)) // a = all values
    inserts all lists into min Pri Queue
        elem: [val, listIdx]

    // O(a log(a)) // a = all values
    create Array with all the elements dequeued from min Pri Queue. Result is a sorted in non-descending order
        elem: [val, listIdx]

    create a Map for need, iterate lists
        key: listIdx
        val: 1

    create a Map for have. init empty

    let need = needMap.size()
    let have = 0

    res = [neg infin, pos infin]

    let l = 0
    // find windows that have all the lists, then reduce the window.
    // O(a)
    for (r = 0 to r < allSorted.length)
        if (haveMap not have allSorted[r][1] 'index') {
            add to map with val 0
        }

        if (needMap has allSorted[i][1] 'index' AND needMap allSorted[i][0] 'val' === haveMap allSorted[i][0] 'val')
            have += 1

            while (l <= r && have === need) {
                // the window has all the lists included.
                if (allSorted[r][0] - allSorted[l][0] < res[1] - res[0]) {
                    res[0] = allSorted[l][0]
                    res[1] = allSorted[r][1]
                }

                haveMap reduce count for allSorted[l][1]
                if (needMap has allSorted[l][1] AND haveMap allSorted[i][0] 'val' < needMap allSorted[i][0] 'val') {
                    have -= 1
                }
                l += 1
            }

    - Time: O(a + a log(a)) // a = all values
    - Space: O(a)
 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    // sort solution
    const minPriQ = new PriorityQueue((a, b) => {
        return a[0] - b[0]
    })

    const needMap = new Map()
    const haveMap = new Map()

    for (let i = 0; i < nums.length; i ++) {
        needMap.set(i, 1)
        haveMap.set(i, 0)
        for (let j = 0; j < nums[i].length; j ++) {
            minPriQ.enqueue([nums[i][j], i])
        }
    }

    let need = needMap.size
    let have = 0

    const arr = new Array()
    while (minPriQ.size() > 0) {
        arr.push(minPriQ.dequeue())
    }

    const res = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]
    let l = 0
    for (let r = l; r < arr.length; r ++) {
        haveMap.set(arr[r][1], haveMap.get(arr[r][1]) + 1)

        if (needMap.get(arr[r][1]) === haveMap.get(arr[r][1])) {
            have += 1

            while (l <= r && have === need) {
                if (arr[r][0] - arr[l][0] < res[1] - res[0]) {
                    res[0] = arr[l][0]
                    res[1] = arr[r][0]
                }

                haveMap.set(arr[l][1], haveMap.get(arr[l][1]) - 1)
                if (haveMap.get(arr[l][1]) < needMap.get(arr[l][1])) {
                    have -= 1
                }
                l += 1
            }
        }
    }

    return res
};

const rangeSoln = function(nums) {
    // **Create range at every 0th index soln. TLE
    let res = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]
    let cont = true
    while (cont) {
        let interval = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
        let minValList = 0

        for (let i = 0; i < nums.length; i ++) {
            if (nums[i].length === 0) {
                cont = false
                break
            }

            if (nums[i][0] < interval[0]) {
                minValList = i
                interval[0] = nums[i][0]
            }
            interval[1] = Math.max(interval[1], nums[i][0])
        }

        if (cont === false) {
            break
        }
        
        if (interval[1] - interval[0] < res[1] - res[0]) {
            res = Array.from(interval)
        }
        nums[minValList] = nums[minValList].slice(1)
    }

    return res
}
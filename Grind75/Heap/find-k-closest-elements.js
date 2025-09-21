// https://leetcode.com/problems/find-k-closest-elements/

/**

** heap solution
    create a priQ
        elem: [val, diff]
        sorting:
            descending diff so that the furthest is at the front

    iterate i in arr
        val = arr[i]

        if (priQ.size() < k) {
            // has space to just enqueue
            priQ.enqueue([val, Math.abs(val - x)])
        } else {
            // full, determine if new val replaces front or discarded.
            // since Array is sorted in ascending order, don't need to check if difference is equal take the value that is smallest.
            front = priQ.front()
            if (Math.abs(val - x) < front diff) {
                // new val is closer
                priQ.dequeue()
                priQ.enqueue([val, Math.abs(val - x)])
            }
        }

    dequeue all in res
    sort res in ascending order

    - Time: O(n log k + n log n)
    - Space: O(k)

** sliding window solution
    maintain sliding window of size k

    let r = arr.length - 1

    for (let l = arr.length - 1 - k; l >= 0; l --) {    // going backwards is easier when diff <= keep going left to take the value a < b
        if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
            r -= 1
        } else {
            return arr.slice(l + 1, r + 1)
        }
    }
    
    return arr.slice(0, r + 1)

    - Time: O(n)    // must iterate entire Array since once window filled, the x could be further right. 
    - Space: O(1)
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    //return heapSoln(arr, k, x)
    return windowSoln(arr, k, x)
};

const windowSoln = function(arr, k, x) {
    let r = arr.length - 1

    for (let l = arr.length - 1 - k; l >= 0; l --) {
        if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
            r -= 1
        } else {
            return arr.slice(l + 1, r + 1)
        }
    }
    
    return arr.slice(0, r + 1)

}

const heapSoln = function(arr, k, x) {
    const priQ = new PriorityQueue((a, b) => {
        return b[1] - a[1]
    })

    for (let i = 0; i < arr.length; i ++) {
        const val = arr[i]
        const diff = Math.abs(val - x)
        if (priQ.size() < k) {
            priQ.enqueue([val, diff])
        } else {
            const front = priQ.front()
            if (diff < front[1]) {
                priQ.dequeue()
                priQ.enqueue([val, diff])
            } else if (diff > front[1]) {
                break
            }
        }
    }

    const res = new Array()
    while (priQ.size() > 0) {
        res.push(priQ.dequeue()[0])
    }

    console.log(res)
    res.sort((a, b) => a - b)
    return res
}
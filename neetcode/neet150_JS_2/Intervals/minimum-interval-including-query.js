// https://neetcode.io/problems/minimum-interval-including-query

/*
left_i <= queries[j] <= right_i

* brute force would be:
    1. sort the intervals by start in non-descending
    2. while the query value within range of the interval, record min length. When out of range push min length to res Array or push -1 if i === intervals.length
    Time: O(n * queries)
    Space: O(queries)

* prepopulate lengths for numbers of intervals
    1. create a Map to store:
        key: number in an interval
        value: the min length of an interval it belongs to.
    2. iterate intervals, get the length of that interval (right - left + 1), for each number in that range of intervals (inclusive) store/update the min Length
    3. iterate the queries, O(1) Time into the Map for the min length
    Time: O(n * longest interval)
    Space: O(n * longest interval)

* min Heap
Heap operations are O(log n)
    1. Create a min heap that will sort based on the length of the interval
        elem: [length, interval]
    2. iterate intervals, get the length and push into the min heap
    3. Create aux Array for intervals that do not satisfy the query. Create res Array
    4. iterate the queries, 
        while front intervals does not satisfy the query 
            push into aux Array
        if min Heap not empty
            push front elem's length into res
        else
            push -1
        iterate aux Array and insert all

    Time: O(n log n)   // ops (log n), * n if all queries have no interval res
    Space: O(n)
        
*/

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        // return this.prepop(intervals, queries)
        return this.minHeap(intervals, queries)
    }

    minHeap(intervals, queries) {
        const minH = new MinPriorityQueue((a) => a[0])
        for (let i = 0; i < intervals.length; i ++) {
            minH.enqueue([intervals[i][1] - intervals[i][0] + 1, intervals[i]])
        }

        console.log(minH._heap._heap._nodes)

        const res = new Array()
        const aux = new Array()
        for (let i = 0; i < queries.length; i ++) {
            while (minH.size() !== 0 && !(minH.front()[1][0] <= queries[i] && queries[i] <= minH.front()[1][1])) {
                aux.push(minH.dequeue())
            }
            if (minH.size() === 0) {
                res.push(-1)
            } else {
                res.push(minH.front()[0])
            }

            while (aux.length !== 0) {
                minH.enqueue(aux.pop())
            }
        }

        return res
    }

    prepop(intervals, queries) {
        const map = new Map()
        for (let i = 0; i < intervals.length; i ++) {
            const len = intervals[i][1] - intervals[i][0] + 1
            for (let j = intervals[i][0]; j <= intervals[i][1]; j ++) {
                map.set(j, Math.min((map.get(j) || Number.POSITIVE_INFINITY), len))
            }
        }

        const res = new Array()
        for (let i = 0; i < queries.length; i ++) {
            res.push(map.get(queries[i]) || -1)
        }

        return res
    }
}

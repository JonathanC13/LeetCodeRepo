// https://leetcode.com/problems/maximum-profit-in-job-scheduling/

/**
recursive back tracking with memo
    main
        sort startTimes in non-descending order so that choosing the next job in combination is only forward
            Also reorder the endTimes and profit
                This is a classic "parallel arrays" problem. The simplest way is to tie all arrays together using indices, sort by the first array, and then rearrange the others accordingly.
        memo is a Map and will hold the max profit from that time forward
        maintain record of max profit seen

    rec
        base case 1: no more jobs
        if i === n
            return 0

        if (memo.has(prevEnd)) {
            // this means the max profit from a job combination that started >= prevEnd has already been calculated.
            return memo.get(prevEnd)
        }

        // 2 paths
        // 1. skip the current job
        let maxProf = rec(i + 1, prevEnd)

        // 2. find valid jobs to start  // to reduce time complexity, use binary search to find closest next valid job that can run.
        iterate the jobs starting from i, since start times are sorted in non-descending order
            if the prevEnd <= the current job start time, get the path's profit
                // record possible new max prof for this job onward.
                maxProf = max(maxProf, rec(i + 1, endTimes[j])) + profit[j])

        update global max
        update memo with max(maxProf, memo.get(startTime[i]) || 0)  // remember that memo keeps the max profit of valid combo jobs from key onward.
        return maxProf  // only return max profit so that the combination profit is additive

- Time: O(n log n)    // without memo. O(n * 2^n), 2^n is each n has 2 paths to evaluate, * n since need to perform for each n
- Space: O(n)
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    // Step 1: Create indices
    let indices = startTime.map((_, i) => i);
    // Step 2: Sort indices based on arr1
    indices.sort((i, j) => startTime[i] - startTime[j]);

    // Step 3: Reorder all arrays
    startTime = indices.map(i => startTime[i]);
    endTime = indices.map(i => endTime[i]);
    profit = indices.map(i => profit[i]);

    const n = startTime.length
    const memo = new Map()   // Use map since don't want to find the max end time. Just use map to link intervals
    let max = [0]

    const res = rec(startTime, endTime, profit, 0, n, memo)
    console.log(memo)
    return memo.get(0)
};

const rec = function(startTime, endTime, profit, i, n, memo) {
    if (i === n) {
        // no more jobs to choose from
        return 0
    }
    if (memo.has(i)) {
        // console.log('hit')
        return memo.get(i)
    }

    // start at end
    let maxProf = rec(startTime, endTime, profit, i + 1, n, memo)
    

    // determine next job to start considering in the path. Since there may be many inbetween this job and the next valid, to reduce the time use binary search to find the closest suitable job where the startTime >= this endTime
    let l = i + 1
    let r = n - 1
    let next = n    // if no valid next jobs, it will go to n which is base case for no more jobs.
    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l
        if (startTime[mid] >= endTime[i]) {
            next = mid
            // try to find even closer
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    maxProf = Math.max(maxProf, rec(startTime, endTime, profit, next, n, memo) + profit[i])   // add current profit to the max found at jobs that start on or after endTime of this job.
        
    memo.set(i, maxProf)    // changed to index forward, the max profit the binary search will find the closest next job to schedule so now the Map does not have to maintain the actual times: maxProfit
    return maxProf
}
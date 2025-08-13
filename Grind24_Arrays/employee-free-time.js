/**
 * The employee free time problem involves finding the intervals when all employees are available, given their individual work schedules. Each employee's schedule is a list of non-overlapping, sorted time intervals representing their work periods. The task is to identify and return the time periods (intervals) where no employee is working, also sorted
 * 
 * Input:
 * A list of employee schedules. Each schedule is a list of intervals, where each interval is represented by a start time and an end time (e.g., [1, 3] represents an interval from time 1 to time 3). The intervals within each schedule are non-overlapping and sorted in ascending order of start time. 
 * 
 * Output:
 * A list of intervals representing the common free time for all employees. These intervals should also be non-overlapping and sorted in ascending order. 
 * 
 * Example:
 * If one employee's schedule is [[1, 3], [6, 7]] and another employee's schedule is [[2, 4]], the common free time would be [[4, 6], [7, infinity]]. Note that if the problem specifies a maximum time, then the second interval might be [7, max_time]. 
 * 
 * Goal:
 * To efficiently determine the time periods where no employee is working, given the constraints of sorted, non-overlapping intervals within each employee's schedule.
 * 
 * **
 * for all intervals, push into Array (times) with [start, 1] and [end, -1]
 * sort by [0] in non-descending and if tie then [1] in non-descending, so to prioritize closing of interval
 * 
 * res = new Array()
 * newInterval = new Array()
 * newInterval.push(0)  // for the initial interval
 * count += 1
 * 
 * iterate i in times
 *      count += times[i][1]
 *      if times[i][1] === 1 && count === 1  // indicates end of "free" interval if increment to 1
 *          if newInterval[0] !== times[i][0]
 *              newInterval.push(times[i][0])
 *              res.push(newInterval)
 *      else if (count === 0)   // indicates can open new "free" interval
 *          newInterval = [times[i][0]]
 * 
 * return res
 * 
 * - Time: O(m + n log(n))  // m is times.length
 * - Space: O(m) 
 * 
 */

/**
 * 
 * @param {*} schedules 
 * @param {*} max_time 
 * 
 * merge method
 * merge all intervals and then record all gaps
 * 
 * - Time: O(n log(n))
 * - Space: O(n)
 */
const employeeFreetime2 = function(schedules, max_time) {
    const intervals = new Array()
    for (let i = 0; i < schedules.length; i ++) {
        intervals.push(...schedules[i])
    }
    
    intervals.sort((a, b) => a[0] - b[0])

    // merge all intervals
    const merged = new Array()
    let i = 0
    while (i < intervals.length) {
        const newInterval = intervals[i]
        let j = i + 1
        while (j < intervals.length && intervals[j][0] < newInterval[1]) {    // interval start < merging interval end.
            newInterval[0] = Math.min(newInterval[0], intervals[j][0])
            newInterval[1] = Math.max(newInterval[1], intervals[j][1])
            j += 1
        }

        merged.push(newInterval)
        i = j
    }
    console.log(merged)

    const res = new Array()
    for (let i = 0; i < merged.length - 1; i ++) {
        if (merged[i][1] !== merged[i + 1][0]) {
            res.push([merged[i][1], merged[i + 1][0]])
        }
    } 
    return res
}

/**
 * 
 * @param {*} schedules 
 * @param {*} max_time 
 * @returns 
 * 
 * - Time: O(m + n log(n))  // m is times.length
 * - Space: O(m) 
 */
const employeeFreetime = function(schedules, max_time) {
    const times = new Array()

    for (let i = 0; i < schedules.length; i ++) {
        for (let j = 0; j < schedules[i].length; j ++) {
            times.push([schedules[i][j][0], 1])
            times.push([schedules[i][j][1], -1])
        }
    }
    times.sort((a, b) => {
        const diff = a[0] - b[0]
        if (diff === 0) {
            return a[1] - b[1]
        }
        return diff
    })

    console.log(times)

    let count = 0
    const res = new Array()
    let newInterval = new Array()
    newInterval.push(0)

    for (let i = 0; i < times.length; i ++) {
        count += times[i][1]

        if (times[i][1] === 1 && count === 1) {
            if (newInterval[0] !== times[i][0]) {
                newInterval.push(times[i][0])
                res.push(newInterval)
                
            }
            newInterval = new Array()
        } else if (count === 0) {
            // newInterval = [times[i][0]]
            newInterval.push(times[i][0])
        }
    }

    if (newInterval.length !== 0) {
        newInterval.push(max_time)
        res.push(newInterval)
    }

    return res
}

const max_time = 24
const schedules = [[[1, 3], [6, 7]], [[2, 4],[7,10]]]
const res = employeeFreetime(schedules, max_time)
console.log("employeeFreetime: ", res)
console.log("-----")
const res2 = employeeFreetime2(schedules, max_time)
console.log("employeeFreetime2: ", res2)

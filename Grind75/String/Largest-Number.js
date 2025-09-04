// https://leetcode.com/problems/largest-number/description/

/**

// wrong lol
To create the largest number always pick the number that has the largest prefix digits
    compare each digit, once one digit is greater than the other number's digit choose the higher. If one number runs out of digits, choose that one.

create a priority Queue where it is sorted by the first digit descending

res = ''
while (priQ.size() > 0) {
    const deq = priQ.dequeue().toString()
    res += deq
}

return res

- Time: O(n log n)  // log(n) for pri Q operations. n for the number of nums
- Space: O(n)
// //wrong lol

// wow
The solution of the problem rests on observing that if AB > BA. Then we have ACB > BCA for any C. 
Merge sort using int(left[i]+right[j]) < int(right[j]+left[i]) as a comparator

e.g. [3,30,34]  . expected: 34 3 30
merge:
    1. Number("3" + "30") compare Number("30" + "3")
        if <
            merged[i] = right[j]    // put the larger first
        else
            then merged[i] = left[i]

        end: [3, 30]

    2. merging: [3, 30] and [34]
        2.1. ("3" + "34") < ("34" + "3")
            merged[i] = right[j]    // [34]
        2.2. since j >= right.length. push rest of left

        end: [34, 3, 30]    = String of 34 3 30. Correct

- Time: O(n log(n)) // merge sort = n log(n), n = number of nums
- Space: O(n)

 */

const merge = function(nums, l, r, mid) {
    // populate temporary arrays since overwriting sorted in nums
    const nl = mid - l + 1
    const nr = r - mid
    const left = new Array(nl)
    const right = new Array(nr)

    for (let i = 0; i < nl; i ++) {
        left[i] = nums[l + i].toString()
    }
    for (let i = 0; i < nr; i ++) {
        right[i] = nums[mid + i + 1].toString()
    }

    // merge into nums
    let i = 0   // for left
    let j = 0   // for right
    let k = l   // for nums
    while (i < nl && j < nr) {
        if (Number(left[i] + right[j]) < Number(right[j] + left[i])) {
            nums[k] = right[j]
            j += 1
        } else {
            nums[k] = left[i]
            i += 1
        }
        k += 1
    }

    while (i < nl) {
        nums[k] = left[i]
        i += 1
        k += 1
    } 
    
    while (j < nr) {
        nums[k] = right[j]
        j += 1
        k += 1
    }
}

const mergeSort = function(nums, l, r) {
    if (l >= r) {
        return 
    }

    const mid = Math.floor((r - l) / 2) + l
    mergeSort(nums, l, mid)
    mergeSort(nums, mid + 1, r)

    merge(nums, l, r, mid)
}

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    mergeSort(nums, 0, nums.length - 1)
    const numStr = nums.join('')
    if (Number(numStr) === 0) {
        return "0"
    } else {
        return numStr
    }

    /* //wrong lol
    let res = ''
    const priQ = new PriorityQueue((a, b) => {
        const aStr = a.toString()
        const bStr = b.toString()
        const len = Math.min(aStr.length, bStr.length)
        let i = 0
        while (i < len) {
            if (aStr[i] !== bStr[i]) {
                return bStr[i] - aStr[i]
            }
            i += 1
        }

        return a.length < b.length ? -1 : 1 // -1 is ascedning, a before b. 1 is descending, b before a
    })

    for (let num of nums) {
        priQ.enqueue(num)
    }

    while (priQ.size() > 0) {
        res += priQ.dequeue().toString()
    }

    return res
    */
};
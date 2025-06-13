// https://leetcode.com/problems/maximum-subsequence-score/description/?envType=study-plan-v2&envId=leetcode-75

/*

** Attempt 1
backtracking dfs (nums1, nums2, k, currSum, nums1Set, nums2Min, i, maxProd)
    // nums1Set saves the indexes currently used in the subsequence
    // nums2Min will save the min val of nums2 based on the val. Element of: [index, val]

    base case 1: if k === 0
        maxProd[0] = Math.max(maxProd[0], currSum * nums2Min.front()[1])
        return

    base case 2: if i >= nums1.length
        return

    //2 options
    1. do not use current index

    2. use current index
        nums2Min.enqueue([i, nums2[i]])
        nums1Set.add(i)
        while(nums2Min.size() > 0 && !nums1Set.has(nums2Min.front()[0]) {
            dequeue()
        }
        dfs(nums1, nums2, k - 1, currSum + nums1[i], nums2Min, i + 1, maxProd)
        nums1Set.delete(i)

    return 

- Time: O(n * 2^k)
- Space: O(n)
- TLE

** attempt 2 TLE
enqueue all elements [nums1[i], i] into a Max priority Queue

iterate nums2 so to treat the nums2 at i as the min value of the subsequence
    create aux array to hold dequeued
    currSum = nums1[i]  // since nums2 at i is the min value of the subsequeue, must use the value in nums1[i]
    // look for the highest k - 1 values in nums1
    j = 0
    while (maxQu.size() > 0 && j < k - 1) {
        const popped = maxQu.dequeue()
        if (popped index !== current nums2 index) { // if not already used and nums2[popped] > nums2[i], since nums2[i] must be the smallest
            currSum += popped[0]
            j += 1
        } 
        aux.push(popped)
    }

    // enqueue all used
    for (let z = 0; z < aux.length; z ++) {
        maxQu.enqueue(aux[z])
    }

    if (j === k - 1) {
        maxScore = Math.max(maxScore, currSum * nums2[i])
    }

return maxScore

- Time: O(n*k * log n)  // for each n, get k - 1 from max pri queue. Each operation on pri qu is log n. n is the size of the queue
- Space: O(n)

** Attempt 3: 
Sort nums2 and nums1 in order of nums2 in non-descending order
create a min Pri Queue to store top k largest values of nums 1

iterate nums2.  since in non-descending order, the value in nums 2 is the min value to multiply the sum by
    enqueue nums1[i]
    currSum += nums1[i]

    if (qu.size() > k) {
        popped = qu.dequeue()
        currSum -= popped
    }
    if (qu.size() === k) {
        maxScore = max(maxScore, currSum * nums2[i])
    }

- Time: O(n log k)
- Space: O(k)
*/

const dfs = (nums1, nums2, k, currSum, nums1Set, nums2Min, i, maxProd) => {
    if (k === 0) {
        console.log(currSum, nums1Set, nums2Min.front(), currSum * nums2Min.front()[1])
        maxProd[0] = Math.max(maxProd[0], currSum * nums2Min.front()[1])
        return
    }
    if (i >= nums1.length) {
        return
    }

    dfs(nums1, nums2, k, currSum, nums1Set, nums2Min, i + 1, maxProd)

    nums2Min.enqueue([i, nums2[i]])
    nums1Set.add(i)
    while (nums2Min.size() > 0 && !nums1Set.has(nums2Min.front()[0])) {
        nums2Min.dequeue()
    }
    dfs(nums1, nums2, k - 1, currSum + nums1[i], nums1Set, nums2Min, i + 1, maxProd)
    nums1Set.delete(i)

    return
}

const at2 = (nums1, nums2, k) => {
    let maxScore = Number.NEGATIVE_INFINITY
    const maxQu = new MaxPriorityQueue((e) => e[0])

    for (let i = 0; i < nums1.length; i ++) {
        maxQu.enqueue([nums1[i], i])
    }

    for (let i = 0; i < nums2.length; i ++) {
        const aux = new Array()
        let currSum = nums1[i]
        let j = 0
        while (maxQu.size() > 0 && j < k - 1) {
            const popped = maxQu.dequeue()
            if (popped[1] !== i && nums2[popped[1]] > nums2[i]) {
                currSum += popped[0]
                j += 1
            }
            aux.push(popped)
        }
        
        if (j === k - 1) {
            maxScore = Math.max(maxScore, currSum * nums2[i])
        }

        for (let z = 0; z < aux.length; z ++) {
            maxQu.enqueue(aux[z])
        }
    }

    return maxScore
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    // attempt 1: TLE
    // const maxProd = [Number.NEGATIVE_INFINITY]
    //dfs(nums1, nums2, k, 0, new Set(), new MinPriorityQueue((e) => e[1]), 0, maxProd)
    //return maxProd[0]

    // attempt 2: TLE
    // return at2(nums1, nums2, k)

    // attempt 3
    let maxScore = 0
    const pairs = new Array()
    for (let i = 0; i < nums1.length; i ++) {
        pairs.push([nums1[i], nums2[i]])
    }
    pairs.sort((a, b) => {return b[1] - a[1]})
    
    const minQu = new MinPriorityQueue()
    let currSum = 0
    for (let i = 0; i < pairs.length; i ++) {
        currSum += pairs[i][0]
        minQu.enqueue(pairs[i][0])
        
        if (minQu.size() > k) {
            const popped = minQu.dequeue()
            currSum -= popped
        }

        if (minQu.size() === k) {
            maxScore = Math.max(maxScore, currSum * pairs[i][1])
        }
    }

    return maxScore
};
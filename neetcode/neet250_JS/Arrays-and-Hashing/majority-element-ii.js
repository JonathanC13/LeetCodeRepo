//https://leetcode.com/problems/majority-element-ii/

/*
Initial method
    Create a map to store all the freq, if a freq > n/3 then push to res array

    Time: O(n)
    Space: O(n)

    8ms. mem 52.52

Boyer-Moore Majority vote
    There can be at most k - 1 major element in an array if the major element appears more than ⌊n / k⌋ times.
    At most 2 elements can appear more than n/3 times.
    
    maintain 2 candidates and their counts

    iterate nums
        // 1. match one of the candidates
        if (firstCand === nums[i]) {
            firstCnt += 1
        } else if (secondCand === nums[i]) {
            secondCnt += 1
        }
        // case 2. replace candidate that is at count 0
        else if (firstCnt === 0) {
            firstCand = nums[i]
            firstCnt = 1
        } else if (secondCnt === 0) {
            secondCand = nums[i]
            secondCnt = 1
        }
    
        // case 3. match none of the current candidates
        else {
            firstCnt -= 1
            secondCnt -= 1
        }

    const res = []
    const cand = [firstCand, secondCand]
    for (let i = 0; i < cand.length; i ++) {
        if (cand[i] === Number.NEGATIVE_INFINITY) {
            continue
        }
        let cnt = 0
        for (let j = 0; j < nums.length; j ++) {
            if (nums[j] === cand[i]) {
                cnt += 1
            }
            if (cnt > nums.length / 3) {
                res.push(cand[i])
                break
            }
        }
    }

    return res

    Time: O(n). n + 2*n ~= n
    Space: O(1). 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // return hash(nums)
    return majVote(nums)
};

var majVote = function(nums) {
    let firstCand = Number.NEGATIVE_INFINITY
    let firstCnt = 0
    let secondCand = Number.NEGATIVE_INFINITY
    let secondCnt = 0

    for (let i = 0; i < nums.length; i ++) {
        // case . match one of the candidates
        if (firstCand === nums[i]) {
            firstCnt += 1
        } else if (secondCand === nums[i]) {
            secondCnt += 1
        }
        // case . replace candidate that is at count 0
        else if (firstCnt === 0) {
            firstCand = nums[i]
            firstCnt = 1
        } else if (secondCnt === 0) {
            secondCand = nums[i]
            secondCnt = 1
        }
        // case 3. match none of the current candidates
        else {
            firstCnt -= 1
            secondCnt -= 1
        }
    }

    const res = []
    
    let firstSum = 0
    let secSum = 0
    for (let i = 0; i < nums.length; i ++) {
        if (firstCand === nums[i]) {
            firstSum += 1
        }
        if (secondCand === nums[i]) {
            secSum += 1
        }
    }

    if (firstSum > nums.length/3) {
        res.push(firstCand)
    }
    if (secSum > nums.length/3) {
        res.push(secondCand)
    }

    return res
}

var hash = function(nums) {
    const freq = new Map()
    const res = new Set()

    for (let i = 0; i < nums.length; i ++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
        if ((freq.get(nums[i]) || 0) > nums.length / 3) {
            res.add(nums[i])
        }
    }

    return Array.from(res)
}
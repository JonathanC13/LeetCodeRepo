// https://leetcode.com/problems/subarray-sum-equals-k/

/*
sliding window solution
    left pointer as the start of the subarray
    right pointer to move and get sum
    cnt = 0

    for (let l = 0; l < nums.length; l ++) {
        let localSum = 0
        for (let r = l; r < nums.length; r ++) {
            localSum += nums[r]
            if (localSum === k) {
                cnt += 1
                // do not break, keep going since further in the subarray is equal k again
            }
        }
    }

    return cnt

    Time: O(n^2)
    Space: O(1)


preSum and Map
    ** I can't wrap my head around this....

    Let’s suppose k=5 and current sum is 15. If i calculate sum-k which is 10. And map contains 10. It means the subarray sum at that point is 10 and at curr index is 15. Means that the sum from the index of 10 to index of 15 is 5.

    create emtpy Map for the preSum at each index
    initial key, val is 0: 1. So that when preSum - k === 0, the key 0 exists and returns 1 which is added to the result

    1. Hashmap<sum[0,i - 1], frequency>
    2. sum[i, j] = sum[0, j] - sum[0, i - 1]    --> sum[0, i - 1] = sum[0, j] - sum[i, j]
        k           sum      hashmap-key     -->  hashmap-key  =  sum - k
    3. now, we have k and sum.  
        As long as we can find a sum[0, i - 1], we then get a valid subarray
        which is as long as we have the hashmap-key,  we then get a valid subarray
    4. Why don't map.put(sum[0, i - 1], 1) every time ?
        if all numbers are positive, this is fine
        if there exists negative number, there could be preSum frequency > 1

    Time: O(n)
    Space: O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    //return sliding(nums, k)
    return preMap(nums, k)
};

var preMap = function(nums, k) {
    const preSum = new Map()
    preSum.set(0, 1)

    let cnt = 0
    let sum = 0
    for (let i = 0; i < nums.length; i ++) {
        sum += nums[i]  // get the preSum

        // if the ..
        if (preSum.has(sum - k)) {
            cnt += preSum.get(sum - k)
        }

        preSum.set(sum, (preSum.get(sum) || 0) + 1)
    }

    return cnt
}

var sliding = function(nums, k) {
    let cnt = 0
    for (let l = 0; l < nums.length; l ++) {
        let localSum = 0
        for (let r = l; r < nums.length; r ++) {
            localSum += nums[r]
            if (localSum === k) {
                cnt += 1
                // do not break, keep going since further in the subarray is equal k again
            }
        }
    }

    return cnt
}
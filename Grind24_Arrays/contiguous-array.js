// https://leetcode.com/problems/contiguous-array/

/**
- brute
iterate i in nums // i is the start of the pattern
    if longest > end - i + 1
        break   // since impossible to find longer
    iterate j in nums from i to end
        count 0s
        count 1s
        if 0s === 1s
            update longest

return longest
    
Time: O(n^2)        // TLE
Space: O(1)


- recursive dfs with memo
**
i: int. start index of window
j: int. end index of window
zeroes: int. 0s in window
ones: int. 1s in window
memo: 2D Array. saves longest seen
**
    base case 1:
        if (i > j || i >= nums.length || j >= nums.length)
            return 0
        
    base case 2:
        if (memo[i][j] !== -1) {
            return memo[i][j]
        }
    
    exZeroes = zeroes
    exOnes = ones
    if (nums[j] === 0) {
        exZeroes += 1
    } else {
        exOnes += 1
    }
    longest = 0
    if (exZeroes === exOnes)
        longest = j - i + 1

    //try to extend the longest subarray
    extend = dfs(..., exZeroes, exOnes, i, j + 1)
    longest = Math.max(longes, extend)

    // shorten the window may produce a sequence, only if j - i > longest. Do not continue if impossible to produce longer sequeuence
    shorten = 0
    if (j - i > longest) {
        if (nums[i] === 0) {
            zeroes -= 1
        } else {
            ones -= 1
        }
        shorten = dfs(..., zeroes, ones, i + 1, j)
    }

    longest = Math.max(longest, shorten)
    memo[i][j] = longest
    return memo[i][j]

- Time: O(2^n)
- Space: O(n^2) // Out of memory


- https://leetcode.com/problems/contiguous-array/solutions/99655/python-o-n-solution-with-visual-explanation/
in Map/Array, must intialize 0 with 0 since it will represent valid sequence from beginning to current index
    The other indexes

- Time: O(n)
- Space: O(n)   // for map, can reduce a little with Array, if the index is not -2 do not replace, but need to offset index with + nums.length since sum can be negative
 */

// TLE
const brute = (nums) => {
    let longest = 0
    for (let i = 0; i < nums.length; i ++) {
        if (nums.length - i + 1 < longest) {
            break
        }

        let zeroes = 0
        let ones = 0

        for (let j = i; j < nums.length; j ++) {
            if (nums[j] === 0) {
                zeroes += 1
            } else {
                ones += 1
            }

            if (zeroes === ones) {
                longest = Math.max(longest, j - i + 1)
            }
        }
    }

    return longest
}

const dfs = function(nums, i, j, zeroes, ones, memo) {
    if (i > j || i >= nums.length || j >= nums.length) {
        return 0
    }
    // if (memo[i][j] !== -1) {
    //     return memo[i][j]
    // }
    const key = `${i},${j}`
    if (memo.has(key)) {
        return memo.get(key)
    }

    let exZ = zeroes
    let exO = ones
    if (nums[j] === 0) {
        exZ += 1
    } else {
        exO += 1
    }
    let longest = 0
    
    if (exZ === exO) {
        longest = j - i + 1
    }

    const extend = dfs(nums, i, j + 1, exZ, exO, memo)
    longest = Math.max(longest, extend)

    let shorten = 0
    if (j - i > longest) {
        if (nums[i] === 0) {
            zeroes -= 1
        } else {
            ones -= 1
        }
        shorten = dfs(nums, i + 1, j, zeroes, ones, memo)
    }

    // memo[i][j] = Math.max(longest, shorten)
    // return memo[i][j]

    memo.set(key, Math.max(longest, shorten))
    return memo.get(key)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // TLE
    // return brute(nums)

    // Out of memory
    // const memo = new Array(nums.length).fill().map((e) => new Array(nums.length).fill(-1))  // Array out of mem, use Map to reduce size
    // const memoMap = new Map()
    // const res = dfs(nums, 0, 0, 0, 0, memoMap)
    // // console.log(memoMap)
    // return res

    //prefix
    const n = nums.length
    const dp = new Array((n * 2) + 1).fill(-2)
    dp[n] = -1  // init at -1 to include first value

    let longest = 0
    let sum = 0
    for (let i = 0; i < n; i ++) {
        if (nums[i] === 0) {
            sum -= 1
        } else {
            sum += 1
        }
        if (dp[sum + n] === -2) {
            dp[sum + n] = i
        } else {
            longest = Math.max(longest, i - dp[sum + n])
        }
    }
    // console.log(dp)
    return longest
};
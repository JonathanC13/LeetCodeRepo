// https://leetcode.com/problems/interleaving-string/description/?envType=study-plan-v2&envId=top-interview-150

/*
each recursive call
    base case 1: if index of s3 >= s3.length
        return index of s1 === s1.length && index of s2 === s2.length.  // if s3 at end, return true if s1 and s2 are all used up

    key = {i, j, k}
    base case 2: if (memo.has(key)) // if this combination already lead to failure, do not retry path
        return key

    // 2 potential paths
    fin = false
    1. if char in s1 at i === char in s3 at k
        fin = continue with i + 1, k + 1

    if fin === true
        return true
    
    2. if char in s2 at j === char in s3 at k
        fin = continue with j + 1, k + 1

    return fin

- Time: O(s1.length * s2.length)    // 2^(s1.length + s2.length) if not using dp
- Space: O(s1.length * s2.length)
*/

const dfs = function(s1, s2, s3, i, j, k, memo, currSeq, finalSeq) {
    if (k === s3.length) {
        if (i === s1.length && j === s2.length) {
            finalSeq.push(...currSeq)
            return true
        }
        return false
    }
    const key = `{${i},${j},${k}}`
    if (memo.has(key)) {
        console.log('hit')
        return memo.get(key)
    }

    let fin = false
    if (i < s1.length && s1[i] === s3[k]) {
        currSeq.push(['s1', i])
        fin = dfs(s1, s2, s3, i + 1, j, k + 1, memo, currSeq, finalSeq)
        currSeq.pop()
    }
    if (fin === true) {
        return true
    }
    if (j < s2.length && s2[j] === s3[k]) {
        currSeq.push(['s2', j])
        fin = dfs(s1, s2, s3, i, j + 1, k + 1, memo, currSeq, finalSeq)
        currSeq.pop()
    }
    memo.set(key, fin)
    return fin
}

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false
    }

    const finalSeq = new Array()
    const memo = new Map()
    const res = dfs(s1, s2, s3, 0, 0, 0, memo, new Array(), finalSeq)
    console.log(finalSeq)
    return res
};
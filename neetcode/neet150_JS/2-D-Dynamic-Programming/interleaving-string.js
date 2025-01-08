// https://neetcode.io/problems/interleaving-string

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        // return this.dfsNoDP(0, 0, 0, s1, s2, s3, '')

        const dp = new Map() // key = '(i, j, k)'. value: true/false. saves if the combo can result in end do not have to continue down the path again
        return this.dfsDP(0, 0, 0, s1, s2, s3, '', dp)
    }

    dfsDP (i, j, k, s1, s2, s3, currLeaved, dp) {
        if (dp.has(`(${i}, ${j}, ${k})`)) {
            return dp.get(`(${i}, ${j}, ${k})`)
        }

        if (currLeaved !== s3.slice(0, k)) {
            console.log(currLeaved)
            return false
        }

        if (i >= s1.length && j >= s2.length && k >= s3.length) {
            console.log('len ', currLeaved)
            // s1 and s2 must be fully used and the final currLeaved equals the s3 String.
            return currLeaved === s3 ? true : false
        }

        // two options, continue with same String or switch to other. n * 2^n
        // s1 || s2
        const s1side = i < s1.length ? this.dfsNoDP(i + 1, j, k + 1, s1, s2, s3, currLeaved + s1[i]) : false
        const s2side = j < s2.length ? this.dfsNoDP(i, j + 1, k + 1, s1, s2, s3, currLeaved + s2[j]) : false
        dp.set(`(${i}, ${j}, ${k})`, s1side || s2side)

        return dp.get(`(${i}, ${j}, ${k})`)
    }

    dfsNoDP (i, j, k, s1, s2, s3, currLeaved) {
        if (currLeaved !== s3.slice(0, k)) {
            console.log(currLeaved)
            return false
        }

        if (i >= s1.length && j >= s2.length && k >= s3.length) {
            console.log('len ', currLeaved)
            // s1 and s2 must be fully used and the final currLeaved equals the s3 String.
            return currLeaved === s3 ? true : false
        }

        // two options, continue with same String or switch to other. n * 2^n
        // s1 || s2
        const s1side = i < s1.length ? this.dfsNoDP(i + 1, j, k + 1, s1, s2, s3, currLeaved + s1[i]) : false
        const s2side = j < s2.length ? this.dfsNoDP(i, j + 1, k + 1, s1, s2, s3, currLeaved + s2[j]) : false
        return s1side || s2side
    }
}

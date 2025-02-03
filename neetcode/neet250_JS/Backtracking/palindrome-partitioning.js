// https://neetcode.io/problems/palindrome-partitioning

/*
- edge case 1: if s.length === 0; return [[]]

recursively iterate String s and at each character there are 2 options:
    1. discontinue the substring
    2. continue the substring

- Time: O(n * 2^n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        if (s.length === 0) {
            return [[]]
        }

        const res = []
        const partition = []
        this.dfs(s, res, partition, 0, 0)
        return res
    }

    dfs(s, res, partition, j, i) {
        if (i >= s.length) {    // no more chars to include in the substring
            if (i === j) {  // means no more substring to check if palin
                res.push([...partition])
            }
            return
        }

        if (this.checkPalin(s, j, i)) {
            partition.push(s.slice(j, i + 1))
            this.dfs(s, res, partition, i + 1, i + 1)
            partition.pop()
        }

        // continue substring
        this.dfs(s, res, partition, j, i + 1)

        return
    }



    checkPalin(s, left, right) {
        while(left < right) {
            if (s[left] !== s[right]) {
                return false
            }
            left += 1
            right -= 1
        }

        return true
    }
}

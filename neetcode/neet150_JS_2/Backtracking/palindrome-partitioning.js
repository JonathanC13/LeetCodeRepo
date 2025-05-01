// https://neetcode.io/problems/palindrome-partitioning

/*

recursive dfs, track left and right index
    base case 1: // means entire String s has been partitioned.
        if (l === r && r === s.length) {
            res add partitions
            ret
        }
    base case 2:    r is at the end of s, but still try to expand to find substring that is palindromic, since cannot get any more chars return.
        if (r === s.length) {
            return
        }

    if palindrome with left and right, continue partitioning
        add to partitions Array
        move to start of next substring, l = r + 1, r = r + 1
        remove from partitions Array for next substring set
    
    // increase the length of the substring that will be checked if palindromic
    this.dfs(l, r = r + 1)

- Time: O(n * 2^n)    // n = s length. 2 paths of: 1. this substring is palin. 2. expand substring partition to check if palin
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = new Array()

        this.dfs(s, 0, 0, new Array(), res)
        return res
    }

    dfs(s, left, right, partitions, res) {
        if (left === right && right === s.length) {
            res.push([...partitions])
            return
        }
        if (right === s.length) {
            return
        }

        if (this.palin(s.slice(left, right + 1))) {
            partitions.push(s.slice(left, right + 1))
            this.dfs(s, right + 1, right + 1, partitions, res)
            partitions.pop()
        }

        this.dfs(s, left, right + 1, partitions, res)
    }

    palin(s) {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            if (s[l] !== s[r]) {
                return false
            }

            l += 1
            r -= 1
        }

        return true
    }
}

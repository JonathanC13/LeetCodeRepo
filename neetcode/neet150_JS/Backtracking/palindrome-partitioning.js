// https://neetcode.io/problems/palindrome-partitioning

class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        if (s.length === 0) {
            return ''
        }

        const res = []
        const subset = []
        this.DFS(s, subset, res, 0)
        return res
    }

    DFS(s, subset, res, start) {
        if (start >= s.length) {
            res.push([...subset])
            return
        }

        // search if palindrome ahead with this char as the starting char. add to subset the smallest palindrome to largest that can be found.
        for (let j = start; j < s.length; j ++) {
            if (s[start] === s[j]) {
                let p1 = start
                let p2 = j
                let palin = true

                while (p1 < p2) {
                    if (s[p1] !== s[p2]) {
                        palin = false
                        break
                    }

                    p1 += 1
                    p2 -= 1
                }

                if (palin) {
                    subset.push(s.slice(start, j+1))
                    this.DFS(s, subset, res, j + 1)
                    subset.pop()    // when done
                }
            }
        }

        return
    }
}

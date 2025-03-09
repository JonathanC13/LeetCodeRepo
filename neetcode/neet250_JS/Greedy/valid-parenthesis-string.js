// https://neetcode.io/problems/valid-parenthesis-string

/*
use a deque as a stack to track the open brackets
use a deque as a stack to track the stars

for each char in s
    if '(' enqueue index i into openS
    else if '*' enqueue index i into starS
    else 
        // ')'
        if openS.size() > 0, dequeue an open bracket    // try to use an open bracket first over the star
        else if starS.size() > 0, dequeue a star
        else
            return false. cannot close

at the end there may be left over opens and stars, need to check that the remaining opens can be closed
while (openS.size() > 0 && starS.size() > 0) {
    if openS.popBack() > starS.popBack()
        return false    // open brack index greater than the star's so the star cannot close it.
}

return openS.size() === 0   // return true if all opens were closed

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        if (s.length === 0) {
            return true
        }

        const openS = new Deque()
        const starS = new Deque()

        for (let i = 0; i < s.length; i ++) {
            if (s[i] === '(') {
                openS.pushBack(i)
            } else if (s[i] === '*') {
                starS.pushBack(i)
            } else {
                if (openS.size() > 0) {
                    openS.popBack()
                } else if (starS.size() > 0) {
                    starS.popBack()
                } else {
                    return false
                }
            }
        }

        while (openS.size() > 0 && starS.size() > 0) {
            if (openS.popBack() > starS.popBack()) {
                return false
            }
        }

        return openS.size() === 0
        
    }
}

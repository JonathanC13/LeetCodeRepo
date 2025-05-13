// https://neetcode.io/problems/valid-parenthesis-string

/*
create a Stack for Open parentheses, store element of value 'index'
create a Stack for the Stars, store element of value 'index'

iterate s
    if (
        push index into Open Stack
    else if *
        push index into Star Stack
    else
        try to use Open Stack first since, * is more powerful
        if Open.size() > 0
            Open.popBack()
        else if Star.size() > 0
            Star.popBack()
        else {
            return false
        }

must check if the remaining Stars can close the remaining Opens if any
if (Open.size() === 0) {
    return true
} else {
    while Open.size() > 0 {
        if Star.size() === 0 || Star.back() < Open.back() { // the Star's index must be higher to close the Open, if not then ret false
            return false
        }
        Stack.popBack
        Open.popBack  
    }
}

- Time: O(S.length)
- Space: O(S.length)

*/

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const openStack = new Array()
        const starStack = new Array()

        for (let i = 0; i < s.length; i ++) {
            if (s[i] === '(') {
                openStack.push(i)
            } else if (s[i] === '*') {
                starStack.push(i)
            } else {
                if (openStack.length > 0) {
                    openStack.pop()
                } else if (starStack.length > 0) {
                    starStack.pop()
                } else {
                    return false
                }
            }
        }

        if (openStack.length === 0) {
            return true
        } else {
            while (openStack.length > 0) {
                if (starStack.length === 0 || starStack.pop() < openStack.pop()) {
                    return false
                }
            }
            return true
        }
    }
}

// https://leetcode.com/problems/simplify-path/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Stack with an Array to hold the simplified path.

i = 0
while i < path.length   
    iterate i while path[i] === '/'     // rule: consecutive slash is a single '/' and it a seperator in the path
    
    let l = i
    while path[i] !== '/'
        get the substring from l to < new i

    sliced = slice(l, i)
    if (sliced === '.')
        continue
    else if (sliced === '..')
        if (stack.length !== 0)
            stack.pop()
    else
        // valid directory str
        stack.push(sliced)

final = ''
while stack.length !== 0
    final = "/" + stack.pop() + final

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if (path.length === 0) {
        return ''
    }

    const stack = new Array()
    let i = 0
    while (i < path.length) {
        while (i < path.length && path[i] === '/') {
            i += 1
        }
        if (i >= path.length) {
            break
        }
        
        let l = i
        while (i < path.length && path[i] !== '/') {
            i += 1
        }
        
        const sliced = path.slice(l, i)
        if (sliced === '.') {
            continue
        } else if (sliced === '..') {
            if (stack.length !== 0) {
                stack.pop()
            }
        } else {
            stack.push(sliced)
        }
    }

    if (stack.length === 0) {
        return '/'
    }

    let simplified = ''
    while (stack.length !== 0) {
        simplified = '/' + stack.pop() + simplified
    }

    return simplified
};
// https://leetcode.com/problems/simplify-path/

/*
create Stack with Array

iterate the path String: while (i < path.length)
    while (path[i] === '/'){
        must treat all grouped '/' as '/' so move i until char is !== '/'
    }
    
    get the String while (i < path.length) OR the current '/' and next '/'
    j = i + 1
    while (j < path.length && path[j] !== '/')
        j += 1

    sub = path.slice(i, j)

    if (sub === '..') {
        // went up in directory
        stack.pop()
    } else if (sub !== '.' && sub !== '') {
        stack.push(sub)
    }

    i = j
    

return '/' + stack.join('/')

Time: O(n)
Space: O(n)
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = Array()

    let i = 0
    while (i < path.length) {
        while (i < path.length && path[i] === '/') {
            i += 1
        }

        let j = i + 1
        while (j < path.length && path[j] !== '/') {
            j += 1
        }

        const sub = path.slice(i, j)
        if (sub === '..') {
            stack.pop()
        } else if (sub !== '.' && sub !== '') {
            stack.push(sub)
        }
        i = j
    }
    // console.log(stack)
    return '/' + stack.join('/')
};
// https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a Stack using an Array



iterate the String s
    if char === '*':
        if (stack.length > 0)
            stack.pop()
    else
        stack.push(char)

return stack.join('')

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = new Array()

    for (let i = 0; i < s.length; i ++) {
        if (s[i] === '*' && stack.length > 0) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('')
};
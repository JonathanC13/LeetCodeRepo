// https://leetcode.com/problems/matchsticks-to-square/

/*
- edge case 1: if matchsticks.length < 4: return false

To make a square, there are 4 sides of equal length.

On the backtrack, want to adjust the smaller numbers first. So sort in non-ascending order

iterate the matchsticks to get the sum and then /4 to get the target len
res = []    // each elememt is [currLen, [sticks]]

track the index of the matchstick in each recursive call

Recursive

each recursive call
    - base case 1: 
        if i >= sticks  // no more sticks to evaluate
            for (let i = 0; i < k; i ++){
                if (res[i][0] !== target) {
                    return false
                }
            }
            return true
        
        
    since 4 sides, k = 4
    iterate i 0 to k
        //for each side, try to see if the current stick can fit into the side <= target
        if (res[i][0] + matchsticks[j] <= target) {
            res[i][0] += matchsticks[j]
            res[i][1].push(matchsticks[j])
            if (this.formSquare(matchsticks, res, target, used)) {
                return true
            }
            res[i][0] -= matchsticks[j]
            res[i][1].pop()
        }
    
    return false

- Time: O(n * 4^n). n matchsticks * k side ^ n
- Space: O(n)
*/

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    const k = 4

    if (matchsticks.length < k) {
        return false
    }
    matchsticks.sort((a, b) => {return b - a})
    let target = 0
    for (let i = 0; i < matchsticks.length; i ++) {
        target += matchsticks[i]
    }
    target /= k
    
    const res = new Array(k).fill().map((e) => {return [0, new Array()]})
    const canMake = formSquare(matchsticks, 0, res, target, k)
    console.log(res)
    return canMake
};

var formSquare = function(matchsticks, i, res, target, k) {
    
    if (i >= matchsticks.length) {
        for (let i = 0; i < k; i ++) {
            if (res[i][0] !== target) {
                return false
            }
        }

        return true
    }

    for (let j = 0; j < k; j ++) {
        if (res[j][0] + matchsticks[i] <= target) {
            res[j][0] += matchsticks[i]
            res[j][1].push(matchsticks[i])
            if (formSquare(matchsticks, i + 1, res, target, k)) {
                return true
            }
            res[j][1].pop()
            res[j][0] -= matchsticks[i]
        }
    }

    return false
}
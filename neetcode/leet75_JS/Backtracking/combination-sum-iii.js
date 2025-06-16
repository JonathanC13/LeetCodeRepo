// https://leetcode.com/problems/combination-sum-iii/description/?envType=study-plan-v2&envId=leetcode-75

/*
recursive dfs   (k, n, i, combos, combo)
    base case 1:
        if n === 0 and k === 0
            combos.push(combo)
            return

    base case 2:
        if n <= 0 || k <= 0
            return

    for (i to 9)    // use numbers for i since cannot repeat
        combo.push(i)
        dfs(k - 1, n - i, i + 1, combos, combo)
        combo.pop()

    return

- Time: O(9^k)
- Space: O(k)
*/

const dfs = (k, n, i, combos, combo) => {
    if (n === 0 && k === 0) {
        combos.push([...combo])
        return
    }

    if (n <= 0 || k <= 0) {
        return
    }

    for (let j = i; j <= 9; j ++) {
        combo.push(j)
        dfs(k - 1, n - j, j + 1, combos, combo)
        combo.pop()
    }

    return
}

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const combos = new Array()
    dfs(k, n, 1, combos, [])
    return combos
};
// https://leetcode.com/problems/lemonade-change/

/*
iteration bottom up, greedy approach where you pay the change with the greatest available bills first

- Time: O(n * m) . n = bills.length, m = bill denominations
- Space: O(1)
*/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let changeMap = new Map([[20, 0], [10, 1], [5, 2]])
    let change = [[20, 0], [10, 0], [5, 0]]

    for (let i = 0; i < bills.length; i ++) {
        
        // save the change
        change[changeMap.get(bills[i])][1] += 1

        let changeOwed = bills[i] - 5
        
        // iterate available bills in change
        for (let j = 0; j < change.length; j ++) {
            while (change[j][1] > 0 && changeOwed - change[j][0] >= 0) {
                
                change[j][1] -= 1
                changeOwed -= change[j][0]
            }

            if (changeOwed === 0) {
                break
            }
        }
        // console.log(changeOwed)
        if (changeOwed !== 0) {
            return false
        }
    }

    return true
};
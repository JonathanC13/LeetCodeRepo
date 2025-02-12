// https://leetcode.com/problems/open-the-lock/
/*
- Time: O(). 10^4
- Space: O(). 10^4
*/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if (target === "0000") {
        return 0
    }

    const deadendsSet = new Set(deadends)

    if (deadendsSet.has(target) || deadendsSet.has("0000")) {
        return -1
    }

    const visited = new Set()
    const qu = new Deque()
    qu.pushBack(["0000", 0])

    while(qu.size() > 0) {
        const [currCombo, moves] = qu.popFront()

        if (currCombo === target) {
            return moves
        }

        // push every combination based off the popped
        for (let i = 0; i < 4; i ++) {
            // curr position up
            let newCombo = currCombo.slice(0,i) + nextNumber(Number(currCombo[i]), 1).toString() + currCombo.slice(i + 1)
            if (!visited.has(newCombo) && !deadendsSet.has(newCombo)) {
                visited.add(newCombo)
                qu.pushBack([newCombo, moves + 1])
            }

            // curr position down
            newCombo = currCombo.slice(0,i) + nextNumber(Number(currCombo[i]), -1).toString() + currCombo.slice(i + 1)
            if (!visited.has(newCombo) && !deadendsSet.has(newCombo)) {
                visited.add(newCombo)
                qu.pushBack([newCombo, moves + 1])
            }
        }
    }

    return -1
};

var nextNumber = function(num, change) {
    num += change
    if (num > 9) {
        return 0
    } else if (num < 0) {
        return 9
    } else {
        return num
    }
}

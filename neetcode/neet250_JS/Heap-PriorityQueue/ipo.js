// https://leetcode.com/problems/ipo/

/*
keep track of the max capital achieved as we will take projects until k chosen or do not have the capital to continue to k
    wMax = w

create an Arr with the elements [profits[i], capital[i]]
create a MaxPriQ to sort by the profits, enqueue all the Arr elements

create Arr for the intermediate projects that require too much captial to start
i = 0
while (i < k && MaxPriQ.size() > 0) {
    let projPicked = MaxPriQ.dequeue()
    while (projPicked[1] > w && MaxPriQ.size() > 0) {
        // since cannot start, save for later in Arr
        Arr.push(projPicked)
        // pick the next
        projPicked = MaxPriQ.dequeue()
    }

    // enqueue if any projPicked had too high capital
    while Arr.size() > 0
        MaxPriQ.enqueue(Arr.pop())

    if projPicked[1] <= w
        // add the projPicked profit to our capital
        w += projPicked[0]
        w_max = Math.max(w_max, w)
    else
        break;  // since cannot start another project

    i += 1
}

return w_max

- Time: O(n log n)
- Space: O(n)
*/

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const arr = []
    for (let i = 0; i < profits.length; i ++) {
        arr.push([profits[i], capital[i]])
    }

    const maxQ = MaxPriorityQueue.fromArray(arr, (proj) => proj[0])
    const holdProj = []

    let wMax = w
    let i = 0
    while (i < k && maxQ.size() > 0) {
        let projPicked = maxQ.dequeue()
        while (projPicked[1] > w && maxQ.size() > 0) {
            holdProj.push(projPicked)
            projPicked = maxQ.dequeue()
        }

        while (holdProj.length > 0) {
            maxQ.enqueue(holdProj.pop())
        }

        if (projPicked[1] <= w) {
            w += projPicked[0]
            wMax = Math.max(wMax, w)
        } else {
            break
        }

        i += 1
    }

    return wMax
};
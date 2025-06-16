// https://leetcode.com/problems/total-cost-to-hire-k-workers/description/?envType=study-plan-v2&envId=leetcode-75

/*
** clarification:
P.S: while reading the question, just replace candidates with n. It'll make the question very clear

Use/ Meaning of Candidates here

candidates refers to 2 set of people - one from start and other from last of costs array.

And from these two sets we have to choose our lowest cost worker.

Eg:-
[17,12,10,2,7,2,11,20,8], k = 3, candidates = 4

candidates - 1st : - 17, 12, 10, 2  // 4 from the front
- last - 2, 11, 20, 8               // 4 from the back

Choose only one worker in each session among these two sets (use min heap) of candidates and after choosing update the candidates sets accordingly (using one pointer for each set).

Among these 2 sets choose lowest cost. If equal then choose the one with smallest index.

Here -> Choose 2 with index 3

Next:->

Here First candidates set will be updated. // if not overlapping with the other half, add the worker to the set.
Candidates - 1st: 17, 12, 10, 7
- Last: 2, 11, 20, 8


**
maintain 2 min priority queues
    1. fill with workers from front
    2. fill with workers from back
    if l === r, that worker goes into the front group

for k sessions
    choose the lowest value from the top of the two min queues, if same value choose from the front group since guarenteed to have lower index

    after choosing, refill the group with another worker if available from overall pool

return totalCost

- Time: O(c + k log c)    // c, to initially fill queues. +, k = number of times to operate on the queues. c = candidates. log c is the time for operations on minPriorityQueue
- Space: O(c)   // 2 * c ~= c
*/

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    // const front = new PriorityQueue((a, b) => 
    // {
    //     const diff = a[0] - b[0]
    //     if (diff === 0) {
    //         return a[1] - b[1]
    //     }
    //     return diff
    // })

    const front = new MinPriorityQueue()
    const back = new MinPriorityQueue()

    let l = 0
    let r = costs.length - 1

    while (l <= r && l < candidates) {
        // front.enqueue([costs[l], l])
        front.enqueue(costs[l])
        if (l !== r) {
            back.enqueue(costs[r])
            r -= 1
        }

        l += 1
    }

    // start choosing
    let totalCost = 0
    for (let i = 0; i < k; i ++) {
        const frontTop = front.size() > 0 ? front.front() : Number.POSITIVE_INFINITY
        const backTop = back.size() > 0 ? back.front() : Number.POSITIVE_INFINITY

        if (frontTop < backTop || frontTop === backTop) {
            totalCost += frontTop
            front.dequeue()
            if (l <= r) {
                front.enqueue(costs[l])
                l += 1
            }
        } else if (frontTop > backTop) {
            totalCost += backTop
            back.dequeue()
            if (l <= r) {
                back.enqueue(costs[r])
                r -= 1
            }
        }
    }

    return totalCost

};
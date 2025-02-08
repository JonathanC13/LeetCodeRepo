// https://leetcode.com/problems/find-the-town-judge/

/*
1. The town judge trusts nobody.
    * Their adjacency list is empty
    * Degree will not -1 for an outgoing

2. Everybody (except for the town judge) trusts the town judge.
    * The degree (number of directed links to node - outward) of the judge should be n-1 since all incoming

Arr for personDegree, 1 to n fill with 0
iterate trusts
    +1 to the degree of the destination and -1 outgoing

iterate personDegree
    if degree === n
        return i

- Time: O(n).
- Space: O(n)
*/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 0) {
        return -1
    }

    let personDegrees = new Array(n + 1).fill(0)

    for (let i = 0; i < trust.length; i ++) {
        personDegrees[trust[i][0]] -= 1
        personDegrees[trust[i][1]] += 1
    }

    for (let i = 1; i < personDegrees.length; i ++) {
        if (personDegrees[i] === n - 1) {
            return i
        }
    }

    return -1
};
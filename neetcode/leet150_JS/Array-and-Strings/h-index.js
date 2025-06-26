// https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

/*
h <= total papers, in this case citations.length
h <= max citied

https://en.wikipedia.org/wiki/H-index

The h-index is the largest h such that h articles have at least h citations each. For example, if an author has five publications, with 9, 7, 6, 2, and 1 citations (ordered from greatest to least), then the author's h-index is 3, because the author has three publications with 3 or more citations. However, the author does not have four publications with 4 or more citations.

Clearly, an author's h-index can only be as great as their number of publications. For example, an author with only one publication can have a maximum h-index of 1 (if their publication has 1 or more citations). On the other hand, an author with many publications, each with only 1 citation, would also have an h-index of 1.

Sort the citations in order of non-ascending so that the minimizing factor is the number of publications and not citations starting low
publications = citations.length
currH = 0
iterate citations
    if (citations[i] > i) {
        currH += 1
        // currH = min(currH, citations[i])
    }

return currH

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a)
    let currH = 0
    const pubs = citations.length
    for (let i = 0; i < pubs; i ++) {
        if (citations[i] > i) {
            currH += 1
            // currH = Math.min(currH, citations[i])
        }
    }

    return currH
};
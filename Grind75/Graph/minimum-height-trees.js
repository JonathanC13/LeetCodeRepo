// https://leetcode.com/problems/minimum-height-trees/

/**
leaf pruning until there are 1 or 2 nodes remaining, these are the roots of the Min height trees

create adjList:
    index: node number
    value: Set of connected

leafSet = new Set()
iterate the adjList
    if the node has degree of 1
        add to leafSet

while n > 2:
    // prune the leaves
    n = n - leafSet.size
    newLeaves = new Set()

    iterate leafSet
        since undirected, go to connected node and remove itself
        if the connected node's degree (size) becomes 1, it is now a leaf add to newLeaves

    leafSet = newLeaves // the next leaves to prune if n > 2

return Array.from(newLeaves)    // the remaining leaves are the root(s) of the MHT

- Time: O(n + e)
- Space: O(n + e)

 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {

    const adjList = new Array(n).fill().map((e) => new Set())
    for (let [n1, n2] of edges) {
        adjList[n1].add(n2)
        adjList[n2].add(n1)
    }

    let leafSet = new Set()
    for (let i = 0; i < adjList.length; i ++) {
        if (adjList[i].size <= 1) {
            leafSet.add(i)
        }
    }

    while (n > 2) {
        n = n - leafSet.size
        const newLeaves = new Set()

        for (let leaf of leafSet) {
            const setIter = adjList[leaf].keys();
            const connected = setIter.next().value

            adjList[connected].delete(leaf)
            if (adjList[connected].size === 1) {
                newLeaves.add(connected)
            }
        }
        leafSet = newLeaves
    }

    return Array.from(leafSet)
};
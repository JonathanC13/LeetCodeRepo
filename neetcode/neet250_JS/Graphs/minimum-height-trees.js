// https://leetcode.com/problems/minimum-height-trees/description/

/*

idea is to start the BFS from all the leaves of the tree and topologically traverse until <= 2 nodes left in the qu which will be the roots of the minumum trees that can be generated.
- Since undirected graph, the leaves only have adjList[i].length === 1
- when get the current node, remove itself from the adjList[neigh] to unlink it. If this results in the adjList[neigh].length to === 1 then it has become a leaf, enqueue it.

I ACTUALLY CANNOT UNDERSTAND WHY TO REMOVE NEIGHBOR FROM ITS OWN ADJLIST AS A LEAF.

create adjList
create queue for BFS, elem is i
for each node that has adjList length of 1, enqueue into queue

BFS
while (n > 2)
    n = n - qu.size()   // the current leaves removed
    for the current leaves in the queue
        popped = popFront
        
        for neighbors
            remove this popped node from the adjList[neigh] to unlink

            if the adjList[neigh] === 1 means new leaf
                enqueue neigh

    

while qu.size() > 0
    res.push

return res


- Time: O(n). n nodes
- Space: O(n + e).  n + e for adjlist, + n for queue for BFS, + n for heights, + n for res
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) {
        return [0]
    }

    const adjList = new Array(n).fill().map((e) => {return new Array()})

    for (let i = 0; i < edges.length; i ++) {
        adjList[edges[i][0]].push(edges[i][1])
        adjList[edges[i][1]].push(edges[i][0])
    }
    
    const leaves = new Deque()
    for (let i = 0; i < adjList.length; i ++) {
        if (adjList[i].length === 1) {
            leaves.pushBack(i)
        }
    }
    
    while (n > 2) {
        const leavesSize = leaves.size()
        n = n - leavesSize
        // let nxt_leaves = [];
        for (let i = 0; i < leavesSize; i ++) {
            const leave = leaves.popFront()
		    // remove leaf node and itself in related nodes
            // const neigh = adjList[leave].pop();
            for (let j = 0; j < adjList[leave].length; j ++) { // don't need to iterate all neighbors since tree leaf only has one
                // remove leaf node and itself in related nodes
                const neigh = adjList[leave].pop();
                adjList[neigh] = adjList[neigh].filter((node) => node !== leave)
                // save new leaf node
                if (adjList[neigh].length === 1) {
                    leaves.pushBack(neigh);
                }
            }
        }
        // leaves = nxt_leaves;
        
    }
    
    const res = []
    while (leaves.size() > 0) {
        res.push(leaves.popFront())
    }

    return res
};

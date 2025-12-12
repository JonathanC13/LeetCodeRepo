// https://leetcode.com/problems/clone-graph/description/

/**
1. Assumptions
    1. None

2. input validation
    1. node is a _Node and the graph is connected

3. time and space constraints
    BTTC: O(V + E)  // must traverse each vertices and edges
    Space: O(V + E) // cloned graph contains all vertices and edges

4. edge cases and some test cases
    edge cases
    1. if node === null: return null
    test cases
    1. 
        input
            node = 1
            graph's adjacency list [[2,4],[1,3],[2,4],[1,3]]
        expected output
            cloned is the same
            graph's adjacency list [[2,4],[1,3],[2,4],[1,3]]

5. visualize by drawing and manually solve
6. break into subproblems
    BFS or DFS will work

    maintain a Map where the key is the vertex's value and value is the _Node reference. This is so that if the _Node for the value has already been created, just push to neighbors.

    BFS
        create a queue
        create a clone, add to Map node: clone, enqueue node

        while qu.size() > 0
            curr = qu.dequeue()

            currClone = get the clone from Map

            iterate the neighbors of curr
                neighClone = null
                if neigh not in Map
                    neighClone = create cloned neigh
                    add to Map
                    since new and not yet processed, enqueue to qu
                else
                    neighClone = get from Map
                    // does not need to be enqueued since its existence in Map indicates it has been processed and its neighbors added already

                currClone add neighClone to neighbors

        return Map.get(node.val)

    DFS
        base case 1
        if currNode exists in Map
            return Map.get(currNode) // for the cloned

        create cloned of currNode and add to Map

        iterate the neighbors of currNode
            currClone.neighbors.push(DFS(neigh, Map))

        return currClone

7. Algos
    - BFS and DFS

8. data structures
    - Adjacency Array representing a Graph

9. Complexity
    Time: O(V + E)
    Space: O(V + E)
 */

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (node === null) {
        return null
    }

    // return BFS(node)
    const cloneMap = new Map()
    return DFS(node, cloneMap)
};

const DFS = (node, cloneMap) => {
    if (cloneMap.has(node)) {
        return cloneMap.get(node)
    }

    const clone = new _Node(node.val)
    cloneMap.set(node, clone)

    for (let neigh of node.neighbors) {
        clone.neighbors.push(DFS(neigh, cloneMap))
    }

    return clone
}

const BFS = (node) => {

    const cloneMap = new Map()

    const qu = new Deque()
    const clone = new _Node(node.val)
    cloneMap.set(node, clone)
    qu.pushBack(node)

    while (qu.size() > 0) {
        const currNode = qu.popFront()
        const currClone = cloneMap.get(currNode)

        for (let i = 0; i < currNode.neighbors.length; i ++) {
            const neigh = currNode.neighbors[i]
            let neighClone = null
            if (cloneMap.has(neigh)) {
                neighClone = cloneMap.get(neigh)
            } else {
                neighClone = new _Node(neigh.val)
                cloneMap.set(neigh, neighClone)
                qu.pushBack(neigh)
            }

            currClone.neighbors.push(neighClone)
        }
    }

    return cloneMap.get(node)
}
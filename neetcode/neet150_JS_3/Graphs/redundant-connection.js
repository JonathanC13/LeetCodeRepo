// https://neetcode.io/problems/redundant-connection/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. edges
 *      - edges instanceof Array
 *      - elements are Array of length 2 and Number
 * 
 * 3. time and space constraints
 *  BTTC: O(V + E)
 *  Space: O(V + E)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. ...
 * 
 *  test cases
 *  1. multiple answer, so remove last
 *      inputs
 *          edges = [[1,2],[1,3],[3,4],[2,4]]
 *      expected output
 *          [2,4]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Kahn topological to prune leaves first
 *  Create AdjList and incremenet incoming edges for each node, since undirected lowest is 1
 *  enqueue all nodes with 1 incoming
 * 
 *  while qu is not empty
 *      node = dequeue
 *      for neigh
 *          decrement incoming to each neigh since pruning node
 *          if incoming === 1: enqueue
 * 
 *  The remaining nodes with incoming > 1 are involved in a cycle
 *  iterate the input edges from end to find if both nodes' incoming > 1, this is the most right edge to remove for non-cyclical graph.
 * 
 * 7. algos
 *  - Kahn topological
 * 
 * 8. data structures
 *  - graphs
 * 
 * 9. complexity
 *  Time: O(V + E)
 *  Space: O(V + E)
 */

class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length
        const adjList = new Array(n + 1).fill().map((e) => new Array())
        const inbound = new Array(n + 1).fill(0)

        for (let [e1, e2] of edges) {
            adjList[e1].push(e2)
            adjList[e2].push(e1)

            inbound[e1] += 1
            inbound[e2] += 1
        }

        const qu = new Deque()
        for (let i = 0; i < inbound.length; i ++) {
            if (inbound[i] === 1) {
                qu.pushBack(i)
            }
        }

        while(qu.size() > 0) {
            const node = qu.popFront()
            for (let neigh of adjList[node]) {
                inbound[neigh] -= 1
                if (inbound[neigh] === 1) {
                    qu.pushBack(neigh)
                }
            }
        }

        for (let i = n - 1; i >= 0; i --) {
            if (inbound[edges[i][0]] > 1 && inbound[edges[i][1]] > 1) {
                return edges[i]
            }
        }

        return []
    }
}

// https://neetcode.io/problems/clone-graph/question

/**
 * 1. Assumptions
 *  1. Graph is connected
 * 
 * 2. input validation
 *  1. node
 *      - node instanceof Node
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n = # of nodes
 *  Space: O(n) // n copy
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if node === null: return null
 * 
 *  test cases
 *  1. Graph with no loop
 *      inputs = [
 *          [2],
 *          [1,3,4],
 *          [2],
 *          [2]
 *      ]
 * 
 *  2. Graph with loop
 *      inputs = [
 *          [2],
 *          [1,3],
 *          [2,1]
 *      ]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 * 
 *  create a Map for the already created nodes so they are not re-created and also acts as visited
 *      - key = old node reference
 *      - val = new node reference
 * 
 *  recursively traverse the original graph
 *      base case 1:
 *      if created.has(node)
 *          return created.get(node)    // returns the new copy of original node
 * 
 *      create the copy
 *      created.set(node, newNode)
 * 
 *      iterate the neighbors of node
 *          newNode.neighbors.push(rec(neigh, created))
 * 
 *      return newNode
 * 
 * 7. algos
 *  - graph traversal
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Graphs
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node === null) {
            return null
        }

        const created = new Map()
        
        return this.dfs(node, created)
    }

    dfs(node, created) {
        if (created.has(node)) {
            return created.get(node)
        }

        const newNode = new Node(node.val)
        created.set(node, newNode)

        for (let neigh of node.neighbors) {
            newNode.neighbors.push(this.dfs(neigh, created))
        }

        return newNode
    }
}

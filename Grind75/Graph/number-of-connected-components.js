// https://neetcode.io/problems/count-connected-components?list=neetcode250

/**
 * create adjList
 * 
 * create processed Array, so when counting the number of connected components, if it not already processed it is an additional connected component.
 * 
 * iterate the nodes
 *  if (node not in processed)
 *      components += 1
 *      rec(...)    // to mark all connected to this node in processed
 * 
 * return components
 * 
 * Time: O(n + e)
 * Space: O(n + e)
 * 
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjList = new Array(n).fill().map((e) => new Array())
        for (let [n1, n2] of edges) {
            adjList[n1].push(n2)
            adjList[n2].push(n1)
        }

        const processed = new Array(n).fill(false)

        let components = 0
        for (let i = 0; i < n; i ++) {
            if (processed[i] === false) {
                components += 1
                this.rec(adjList, i, -1, processed)
            }
        }

        return components
    }

    rec(adjList, i, parent, processed) {
        if (processed[i] === true) {
            return
        }

        processed[i] = true

        for (let neigh of adjList[i]) {
            this.rec(adjList, neigh, i, processed)
        }

        return
    }
}

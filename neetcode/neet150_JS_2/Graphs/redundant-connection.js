// https://neetcode.io/problems/redundant-connection

/*

Since undirected, the initial nodes to enqueue have in-degree of 1.
    While Q is not empty remove the leaves and substract the incoming to its neighbors. enqueue any that become 1.
    
    iterate the in degree Array from the end, and if any nodes are > 1, those represent the cycle.
        This will pick the last added edge that creates the cycle.

- Time: O(V + E)
- Space: O(V + E)


** another method is basic cycle detection, but each iteration of edges, add to the adjList and perform the cycle detection.
This way, as the graph it built left to right it checks if a cycle is introduced.

- Time: O(E * (V + E)). edges.length * dfs
- Space: O(V + E)
*/

class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const inDeg = new Array(edges.length + 1).fill(0)
        const adjList = new Array(edges.length + 1).fill().map((e) => new Array())
        for (let i = 0; i < edges.length; i ++) {
            inDeg[edges[i][0]] += 1
            inDeg[edges[i][1]] += 1
            adjList[edges[i][0]].push(edges[i][1])
            adjList[edges[i][1]].push(edges[i][0])
        }

        const qu = new Queue()
        for (let i = 0; i < inDeg.length; i ++) {
            if (inDeg[i] === 1) {
                qu.enqueue(i)
            }
        }

        while (qu.size() > 0) {
            const node = qu.dequeue()

            for (let i = 0; i < adjList[node].length; i ++) {
                inDeg[adjList[node][i]] -= 1
                if (inDeg[adjList[node][i]] === 1) {
                    qu.enqueue(adjList[node][i])
                }
            }
        }

        for (let i = edges.length - 1; i >= 0; i --) {
            const [e1, e2] = edges[i]
            if (inDeg[e1] > 1 && inDeg[e2] > 1) {
                return edges[i]
            }
        }

        return []
    }
}

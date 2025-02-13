// https://neetcode.io/problems/redundant-connection

/*
The number of nodes is edges.length because n = edges - 1 for connected no cycle graph, and then by adding 1 edge creates a cycle, therefore n = edges.length

Use a Disjoint-union-set ("union find") data structure.
Add the edges in order, if a cycle appears: xJoint === yJoint return the edge

return []

// without path compression and rank
- Time: O(n + e)
- Space: O(n). parent array

// with path compression and rank
- Time: O(~1) since it can access the parent immediately
*/

class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length
        const parent = new Array(n + 1)
        const rank = new Array(n + 1)
        for (let i = 0; i <= n; i ++) {
            parent[i] = i
        }

        for (let i = 0; i < edges.length; i ++) {
            if (this.union(parent, rank, edges[i])) {
                return edges[i]
            }
        }
        
        return []
    }

    unionFind(parent, i) {
        // without path compression
        // if (parent[i] !== i) {
        //     // find parent
        //     return this.unionFind(parent, parent[i])
        // }

        // return i
        //

        // with path compression. When popping from stack after finding the ultimate parent, it will set the intermediate nodes to the ultimate parent
        /* e.g. 
            i = 5
            node = parent[i = 5]. = 3

                return parent[i = 5] = unionFind(node = 3)

            return ult parent
        */
        
        const node = parent[i]
        if (parent[node] !== node) {
            return parent[node] = this.unionFind(parent, node)
        }

        return node
    }

    union(parent, rank, edge) {
        const xJoint = this.unionFind(parent, edge[0])
        const yJoint = this.unionFind(parent, edge[1])

        if (xJoint === yJoint) {
            // cycle exists
            return true
        }

        // without rank
        // parent[yJoint] = xJoint
        //

        // with rank
        if (rank[xJoint] > rank[yJoint]) {
            parent[yJoint] = xJoint
        } else if (rank[xJoint] < rank[yJoint]) {
            parent[xJoint] = yJoint
        } else {
            // can choose any
            parent[yJoint] = xJoint
            rank[xJoint] += 1
        }

        return false
    }



}

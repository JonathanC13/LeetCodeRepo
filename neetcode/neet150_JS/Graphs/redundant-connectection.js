class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        if (edges.length === 0) {
            return []
        }

        // DFS
        // return this.dfsMethod(edges)

        // Kahn algo
        const n = edges.length
        const qu = new Deque()
        const adjList = Array(n + 1).fill().map((e) => {return Array(0)})
        const degree = Array(n + 1).fill(0)

        for (let [n1, n2] of edges) {
            adjList[n1].push(n2)
            adjList[n2].push(n1)

            degree[n1] += 1
            degree[n2] += 1
        }

        for (let i = 0; i < degree.length; i ++) {
            if (degree[i] === 1) {
                qu.pushBack(i)
            }
        }

        while (!qu.isEmpty()) {
            const node = qu.popFront()
            degree[node] -= 1

            for (let neigh of adjList[node]) {
                degree[neigh] -= 1

                if (degree[neigh] === 1) {
                    qu.pushBack(neigh)
                }
            }
        }

        for (let i = n - 1; i >= 0; i --) {
            const [n1, n2] = edges[i]
            if (degree[n1] >= 2 && degree[n2] !== 0) {
                return [n1, n2]
            }
        }

        return []
    }

    /**
     * DFS
     */
    dfsMethod(edges) {
        const n = edges.length
        const adjList = Array(n + 1).fill().map((e) => {return Array(0)})
        const visited = Array(n + 1).fill(false)
        const cycleNodes = new Set()
        const cycleStart = [-1]

        for (let [n1, n2] of edges) {
            adjList[n1].push(n2)
            adjList[n2].push(n1)
        }

        this.dfs(edges[0][0], -1, adjList, visited, cycleNodes, cycleStart)

        for (let i = n - 1; i >= 0; i --) {
            let [n1, n2] = edges[i]
            if (cycleNodes.has(n1) && cycleNodes.has(n2)) {
                return [n1, n2]
            }
        }

        return []
    }

    dfs(node, parent, adjList, visited, cycleNodes, cycleStart) {
        if (visited[node]) {
            cycleStart[0] = node
            return true
        }

        visited[node] = true

        for (let neigh of adjList[node]) {
            if (neigh === parent) {
                continue
            }

            if (this.dfs(neigh, node, adjList, visited, cycleNodes, cycleStart)) {
                if (cycleStart[0] !== -1) {
                    // cycle detected, backtrack and save all nodes until back at cycle origin.
                    cycleNodes.add(node)
                }
                if (node === cycleStart[0]) {
                    // returned at origin
                    cycleStart[0] = -1
                }
                return true
            }
        }

        return false
    }
}

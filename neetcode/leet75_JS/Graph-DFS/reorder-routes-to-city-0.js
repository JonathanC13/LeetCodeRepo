// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/?envType=study-plan-v2&envId=leetcode-75
/*
iterate connections and create undirected adjacency list for traversal and an adjList to check actual orientation

create pathChange = [0]

dfs from 0, for each neigbor pointing away from the current node needs to be reversed

return pathChange[0]

*dfs(adjList, i, visited, pathChange)
    if base case 1: visited i === true: return

    visited i = true

    for (let nei = 0; nei < adjList[i].length; nei ++) {
        if (adjList[i][nei] already visited) {  // checking if nei already visited because that direction's path already checked
            continue
        }
        if (pathDir[i].has(nei))    // if path pointing away
            pathChange[0] += 1
        dfs(adjList, adjList[i][nei], visited, pathChange)
    }

    return

- Time: O(V + E)
- Space: O(V + E)
*/

const dfs = (adjList, pathDir, i, visited, pathChanges) => {
    if (visited.has(i)) {
        return
    }

    visited.add(i)

    for (let nei = 0; nei < adjList[i].length; nei ++) {
        if (visited.has(adjList[i][nei])) {
            continue
        }
        if (pathDir[i].has(adjList[i][nei])) {
            pathChanges[0] += 1
        }
        
        dfs(adjList, pathDir, adjList[i][nei], visited, pathChanges)
    }

    return
}

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    if (n <= 1) {
        return 0
    }
    const visited = new Set()
    const adjList = Array.from(new Array(n), (e) => new Array())
    const pathDir = Array.from(new Array(n), (e) => new Set())
    for (let i = 0; i < connections.length; i ++) {
        adjList[connections[i][0]].push(connections[i][1])
        adjList[connections[i][1]].push(connections[i][0])

        pathDir[connections[i][0]].add(connections[i][1])
    }

    const pathChanges = [0]

    dfs(adjList, pathDir, 0, visited, pathChanges)
    
    return pathChanges[0]
};
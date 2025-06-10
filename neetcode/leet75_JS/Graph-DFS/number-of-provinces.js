// https://leetcode.com/problems/number-of-provinces/description/?envType=study-plan-v2&envId=leetcode-75

/*
create an adjacency list, instead of 1 and 0, put the index of the city

created visited Array
provinces = 0

iterate isConnected
    if (index not visited)
        call dfs to mark all connected into visited
        provinces += 1

return provinces

- Time: O(V + E)
- Space: O(V + E)
*/

const dfs = (adjList, i, visited) => {
    if (visited[i] === true) {
        return
    }

    visited[i] = true
    for (let neigh = 0; neigh < adjList[i].length; neigh ++) {
        dfs(adjList, adjList[i][neigh], visited)
    }

    return
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length
    const visited = new Array(n).fill(false)
    let provinces = 0

    const adjList = new Array(n).fill().map((e) => new Array())
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < isConnected[i].length; j ++) {
            if (isConnected[i][j] === 1) {
                adjList[i].push(j)
            }
        }
    }
    // console.log(adjList)

    for (let i = 0; i < n; i ++) {
        if (visited[i] === false) {
            provinces += 1
            dfs(adjList, i, visited)
        }
    }

    return provinces
};
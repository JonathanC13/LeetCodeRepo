// https://leetcode.com/problems/evaluate-division/?envType=study-plan-v2&envId=leetcode-75

/*
create adjMap with the original equations and the inverse
    key = source
    val = Array of [dest, weight]
(source / dest) = weight

iterate queries
    if (adjMap not have q[0] or q[1]) {
        res[i] = -1.0
    } else {
        return dfs(adjMap, src, dest)
    }

*dfs(adjMap, src, dst)
    
    iterate neighbors
        if (adjMap.get(src)[nei][0] === dest) {
            return adjMap.get(src)[nei][1]  // return the weight
        }
        const res = dfs(adjMap, nei, dst)
        if (res !== -1) {
            return res * adjMap.get(src)[nei][1]    // all multiply since division already calculated (a/b) * (b/c) * (c/d) = w1 * w2 * w3
        }

    return -1.0 // if not route found to dest

- Time: O(q * (v + e))
- Space: O((v + e))
*/

const dfs = (adjMap, src, dst, visited) => {
    if (!adjMap.has(src) || visited.has(src)) {
        return -1.0
    }

    visited.add(src)

    for (let i = 0; i < adjMap.get(src).length; i ++) {
        const nei = adjMap.get(src)[i]
        if (nei[0] === dst) {
            return nei[1]
        }
        const res = dfs(adjMap, nei[0], dst, visited)
        if (res !== -1.0) {
            return nei[1] * res
        }
    }

    visited.delete(src)

    return -1.0
}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const adjMap = new Map()

    for (let i = 0; i < equations.length; i ++) {
        if (!adjMap.has(equations[i][0])) {
            adjMap.set(equations[i][0], new Array())
        }
        adjMap.get(equations[i][0]).push([equations[i][1], values[i]])

        if (!adjMap.has(equations[i][1])) {
            adjMap.set(equations[i][1], new Array())
        }
        adjMap.get(equations[i][1]).push([equations[i][0], 1/values[i]])
    }
    console.log(adjMap)

    const res = new Array(queries.length).fill(-1.0)
    for (let i = 0; i < queries.length; i ++) {
        if (!adjMap.has(queries[i][0]) || !adjMap.has(queries[i][1])) {
            continue
        } else if (queries[i][0] === queries[i][1]) {
            res[i] = 1 
        } else {
            const visited = new Set()
            res[i] = dfs(adjMap, queries[i][0], queries[i][1], visited)
        }
    }

    return res
};
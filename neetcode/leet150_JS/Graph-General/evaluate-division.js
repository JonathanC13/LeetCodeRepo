// https://leetcode.com/problems/evaluate-division/?envType=study-plan-v2&envId=top-interview-150

/*
main
    create a class to hold
        1. the denominator char
        2. the value of edge from source to this node

    create an undirected adjacency Map since a / b = 2 can also be b / a = 1/2 when flipped

    create res array of length queires.length fill with -1.0
    create visited Set so node's are not revisited 

    iterate each query
        visited.clear()     // need to clear each time since in dfs it does not remove node when exhausting a node's connections since need to keep if another node tries to use it again, it will also result in not reaching the destination.
        if adjMap has query source:
            dfs(adjMap, visited, 1, node, dst, res, i)

recursive dfs (node, adjMap, visited, prod, dst, res, resI)
    if (node === null || visited.has(node)) {
        return false
    }
    if (node === dst)
        res[i] = prod
        return true

    visited.add(node)

    iterate the node's connections
        if (dfs(adjMap.get(node)[i].char, visited, prod * adjMap.get(node)[i].val, dst, res, resI) === true) 
            return true // found path from src to dst, do not need to continue

    return false

- Time: O((n + e) * q)
- Space: O(n + e)
*/

class EdgeNode {
    constructor(char, val) {
        this.char = char
        this.val = val
    }
}

const dfs = (adjMap, visited, node, dst, prod, res, resI) => {
    if (node === null || visited.has(node)) {
        return false
    }
    if (node === dst) {
        res[resI] = prod
        return true
    }

    visited.add(node)
    for (let i = 0; i < adjMap.get(node).length; i ++) {
        if (dfs(adjMap, visited, adjMap.get(node)[i].char, dst, prod * adjMap.get(node)[i].val, res, resI) === true) {
            return true
        }
    }

    return false
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
        const c1 = equations[i][0]
        const c2 = equations[i][1]
        const v = values[i]

        if (!adjMap.has(c1)) {
            adjMap.set(c1, new Array())
        }
        adjMap.get(c1).push(new EdgeNode(c2, v))

        if (!adjMap.has(c2)) {
            adjMap.set(c2, new Array())
        }
        adjMap.get(c2).push(new EdgeNode(c1, 1 / v))
    }

    const visited = new Set()
    const res = new Array(queries.length).fill(-1.0)

    for (let i = 0; i < queries.length; i ++) {
        visited.clear()
        if (adjMap.has(queries[i][0])) {
            dfs(adjMap, visited, queries[i][0], queries[i][1], 1, res, i)
        }
    }

    return res
};
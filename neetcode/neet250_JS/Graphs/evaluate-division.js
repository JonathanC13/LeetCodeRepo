// https://leetcode.com/problems/evaluate-division/

/*
create a Map for the variables and adjLists for each equation
e.g. a/b = 2.0, then a: [[2.0, b]] which means there is a path to b, if dest found the answer is found.

- Time: O((n + e) * q). (n variables + e equations) * queries
- Space: O(n + e)
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const varsSet = new Map()
    for (let i = 0; i < equations.length; i ++) {
        if (!varsSet.has(equations[i][0])) {
            varsSet.set(equations[i][0], new Array())
        }
        varsSet.get(equations[i][0]).push([values[i], equations[i][1]])

        if (!varsSet.has(equations[i][1])) {
            varsSet.set(equations[i][1], new Array())
        }
        varsSet.get(equations[i][1]).push([1 / values[i], equations[i][0]])
    }
    
    const res = []
    // For the queries DFS from the queries[0] to the queries[1] while building the answer. If queries[1] not found, return -1
    for (let i = 0; i < queries.length; i ++) {
        if (!varsSet.has(queries[i][0]) || !varsSet.has(queries[i][1])) {
            res.push(-1)
            continue
        }
        let cost = 1
        const visited = new Set()
        res.push(dfs(varsSet, queries[i][0], queries[i][1], cost, true, visited))
    }

    return res
};

var dfs = function(varsSet, node, dest, cost, first, visited) {
    if (!first && node === dest) {
        return cost
    }
    if (visited.has(node)) {
        return -1
    }

    visited.add(node)
    // iterate the edges of the current node for path to look for dest
    for (let i = 0; i < varsSet.get(node).length; i ++) {
        const pathCost = dfs(varsSet, varsSet.get(node)[i][1], dest, cost * varsSet.get(node)[i][0], false, visited)
        if (pathCost !== -1) {
            return pathCost
        }

    }

    visited.delete(node)

    return -1

}
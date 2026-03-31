// https://neetcode.io/problems/foreign-dictionary/question

/**
 * 1. Assumptions
 *  1. Given
 *      1. words sorted lexigraphically on their language, but possible the order of letters invalid
 *      2. characters are lowercase English
 * 
 * 2. input validation
 *  1. words
 *      - words instanceof Array
 *      - words.length > 0
 *      - words element's are String
 * 
 * 3. time and space constraints
 *  BTTC: O(n * m)  // n = words.length, n = maximum number of characters in a word
 *  Space: O(k + e) // k = unique characters, e = edges
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if words.length === 1: return words[0]
 * 
 *  test cases
 *  1. invalid order, NOT possible since given that words is lexigrahpically sorted.
 *      inputs
 *          words = ['z','o','z']
 *      expected output
 *          ''
 *  2. valid order
 *      inputs
 *          words = ['aa', 'aab','bc','c']
 *      expected output
 *          'abc' 
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create an AdjList of length 26 fill with null
 *  iterate every character in each word
 *      initiate Array for each char in AdjList if !== null
 * 
 *  record the edges
 *  iterate each word i and i + 1
 *      if (words[i].length <= words[i+1].length && i is a prefix of i + 1)
 *          continue since no edge information can be gained
 * 
 *      iterate the chars in word i and i + 1 for the first different character
 *          when different
 *              adjList[words[i][j]].push(words[i+1][j]) since if lexigraphically ordered [i][j] comes before [i+1][j]
 *              break
 * 
 *  to get the order of letters, topological sort the characters.
 *  If there is a loop, then the original words was not lexigraphically sorted
 * 
 * 7. algos
 *  - topological sort of graph with Kahn. Can be done with DFS topological stack (push the last node onto topo stack first)
 * 
 * 8. data structures
 *  - Graph
 * 
 * 9. complexity
 *  - Time: O(n * m)
 *  - Space: O(k + e)
 */

class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        if (words.length === 1) {
            return words[0]
        }

        const adjList = new Array(26).fill(null)
        const inbound = new Array(26).fill(null)    // for topologicl sort
        let uniqueChars = 0 // to check if cycle, if lex sort cannot visit all chars then a cycle exists.
        for (let w of words) {
            for (let c of w) {
                const ord = c.charCodeAt(0) - 'a'.charCodeAt(0)
                if (adjList[ord] === null) {
                    adjList[ord] = new Array()
                    inbound[ord] = 0
                    uniqueChars += 1
                }
            }
        }

        for (let i = 0; i < words.length - 1; i ++) {
            if (words[i].length <= words[i + 1].length && words[i] === words[i + 1].slice(0, words[i].length)) {
                continue
            }

            // if given words not lexi sorted. words[i + 1] is a prefix of words[i]
            if (words[i].length > words[i + 1].length && words[i].slice(0, words[i + 1].length) === words[i + 1]) {
                return ''
            }

            for (let j = 0; j < words[i].length; j ++) {
                if (words[i][j] !== words[i + 1][j]) {
                    const ord1 = words[i].charCodeAt(j) - 'a'.charCodeAt(0)
                    const ord2 = words[i + 1].charCodeAt(j) - 'a'.charCodeAt(0)
                    adjList[ord1].push(ord2)
                    inbound[ord2] += 1
                    break
                }
            }
        }

        // topologicl sort
        const qu = new Deque()
        for (let i = 0; i < inbound.length; i ++) {
            if (inbound[i] === 0) {
                qu.pushBack(i)
            }
        }

        let order = ''
        while (qu.size() > 0) {
            const idx = qu.popFront()
            // only in queue if inbound is 0, add to order
            order += String.fromCharCode(idx + 'a'.charCodeAt(0))

            // visit all edges and decrement inbound
            for (let nei of adjList[idx]) {
                inbound[nei] -= 1
                if (inbound[nei] === 0) {
                    qu.pushBack(nei)
                }
            }
        }

        if (order.length !== uniqueChars) {
            return ''
        }

        return order

        // DFS topo
        // adjList is a Map()
        // const topoStack = new Array()
        // const visited = new Set()
        // const processed = new Set()
        // for (let [k, v] of adjList) {
        //     if (!processed.has(k)) {
        //         if (DFS(k, adjList, visited, processed, topoStack) === false) {
        //             return ""
        //         }
        //     }
        // }
        // console.log(topoStack)
        // let res = ""
        // // from the top are ordered by the node's inbounds in non-ascending order (most at bottom)
        // while (topoStack.length > 0) {
        //     res += topoStack.pop()
        // }
        // return res.length !== visited.size ? "" : res
    }
}

const DFS = (node, adjList, visited, processed, topoStack) => {
    if (processed.has(node)) {
        return true
    }
    if (visited.has(node)) {
        return false    // cycle detected
    }
    visited.add(node)

    for (let neigh of adjList.get(node)) {
        if (DFS(neigh, adjList, visited, processed, topoStack) === false) {
            // propagate cycle detected
            return false
        }
    }

    processed.add(node) // node fully processed, last destination therefore first onto stack.
    topoStack.push(node)
    return
}

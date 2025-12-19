// https://neetcode.io/problems/foreign-dictionary/question

/**
 * words in lexicographical order. Like "a", "aa", "ab"
 * 
 * 1. Assumptions
 *  1. the words are sorted lexicographically based on the rules of this new language. This statement is violated by the tester! They provide a test case such as ["abc", "ab"] which is invalid sorted lexicographically
 * 
 * 2. input validation
 *  1. words is an Array of Strings
 * 
 * 3. time and space constraints
 *  BTTC: O(words * max letters of word + V + Edges)    // V max is 26 letters
 *  Space: O(V + E)    // adjList
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. words.length === 0: return ""
 *  test cases
 *  1. valid order of characters
 *      inputs
 *          words = ["z", "zz", "zo", "a"]
 *      expected output
 *          "zoa"
 *  2. invalid order. The Array of words is NOT lexicographically ordered corrected, so that the order of letters has a cycle meaning the order is nonsensical.
 *      inputs
 *          words = ["z", "o", "z"]
 *      expected output
 *          ""  // z->o and o->z
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  since need to determine order, use topological sort
 *  
 *  build the adjList
 *  iterate pairs from left to right
 *      if word1 len > word2 and word2 is a prefix of word1
 *          return ""   // The assumption is violated where "the words are sorted lexicographically based on the rules of this new language."
 *      else if word1 is a prefix of word2
 *          continue
 * 
 *      iterate the pair of words' letters 
 * 
 *          if (word1[i] !== word2[i]) {
 *              if word2[i] not exist in adjList[word1[i]] list {
 *                  // first different letter, order can be determined for these letters.
 *                  adjList[word1[i]].push(word2[i])
 * 
 *                  incoming for word2[i] + 1
 *              }
 *              break
 *          } // else same prefix so far
 *              
 * 
 *  DFS or Kahn Topo for the letter order
 * 
 * 7. algos
 *  - topologicl sort with DFS / Kahn topo algo
 * 
 * 8. data structures
 *  - Arrays
 *  - Map
 *  - Abstract graph
 * 
 * 9. Complexity
 *  Time: O(words * max letters + V + E)
 *  Space: O(V + E)
 */

class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        if (words.length === 0) {return ""}

        const adjList = new Map()   // even though 26 letters, Map is easier to use
        const incoming = new Map()  // for Kahn

        // need to add all the used letters
        for (let word of words) {
            for (let c of word) {
                if (!adjList.has(c)) {
                    adjList.set(c, new Set())
                }
                if (!incoming.has(c)) {
                    incoming.set(c, 0)
                }
            }
        }

        for (let i = 0; i < words.length - 1; i ++) {
            const word1 = words[i]
            const word2 = words[i + 1]

            if (word1.length > word2.length && word1.slice(0, word2.length) === word2) {
                return ""
            } else if (word1 === word2.slice(0, word1.length)) {
                continue
            }

            for (let j = 0; j < word1.length; j ++) {
                if (word1[j] !== word2[j]) {
                    if (!adjList.get(word1[j]).has(word2[j])) {
                        // outgoing
                        adjList.get(word1[j]).add(word2[j])
                        
                        incoming.set(word2[j], incoming.get(word2[j]) + 1)
                    }
                    break
                }
            }
        }
        console.log(adjList)

        return KahnTopo(adjList, incoming)

        const topoStack = new Array()
        const visited = new Set()
        const processed = new Set()
        for (let [k, v] of adjList) {
            if (!processed.has(k)) {
                if (DFS(k, adjList, visited, processed, topoStack) === false) {
                    return ""
                }
            }
        }
        console.log(topoStack)
        let res = ""
        while (topoStack.length > 0) {
            res += topoStack.pop()
        }
        return res.length !== adjList.size ? "" : res
    }
}

const KahnTopo = (adjList, incoming) => {
    console.log(incoming)
    const qu = new Deque()
    let res = ""
    for (let [node, inc] of incoming) {
        if (inc === 0) {
            res += node
            qu.pushBack(node)
        }
    }

    while (qu.size() > 0) {
        const node = qu.popFront()

        for (let neigh of adjList.get(node)) {
            incoming.set(neigh, incoming.get(neigh) - 1)
            if (incoming.get(neigh) === 0) {
                res += neigh
                qu.pushBack(neigh)
            }
        }
    }
    console.log(res.length, adjList.size, res)
    return res.length === adjList.size ? res : ""
}

const DFS = (node, adjList, visited, processed, topoStack) => {
    if (processed.has(node)) {
        return true
    }
    if (visited.has(node)) {
        return false
    }
    visited.add(node)

    for (let neigh of adjList.get(node)) {
        if (DFS(neigh, adjList, visited, processed, topoStack) === false) {
            return false
        }
    }

    processed.add(node)
    topoStack.push(node)
    return true
}

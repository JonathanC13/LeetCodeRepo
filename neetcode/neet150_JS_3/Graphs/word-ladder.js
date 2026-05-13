// https://neetcode.io/problems/word-ladder/question

/**
 * 1. Assumptions
 *  1. endWord in wordList
 * 
 * 2. input validation
 *  1. beginWord.length === endWord.length and wordList's element are Strings of same length
 * 
 * 3. time and space constraints
 *  BTTC: O(V + E + m*n^2)    // n^2 to create adjMap since each word,n, needs to compare each character,m
 *  Space: O(V + E)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if beginWord === endWord: return 1
 * 
 *  test cases
 *  1. can transform
 *      inputs
 *          beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sag","dag","dot"]
 *      expected output
 *          4
 *  2. cannot transform
 *      inputs
 *          beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sat","dag","dot"]
 *      expected output
 *          0
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  push beginWord into wordList
 *  Create AdjMap for each word it can transform to, undirected.
 * 
 *  res = []
 *  
 *  enter with beginWord
 *  dfs/bfs until endWord found, 
 *      1. ignore source word since undirected
 *      2. needs visited to avoid cycling
 * 
 * 7. algos
 *  - DFS / BFS graph
 * 
 * 8. data structures
 *  - Graph
 * 
 * 9. complexity
 *  Time: O(m*n^2)
 *  Space: O(V + E)
 */

class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (beginWord === endWord) {
            return 0
        }

        wordList.push(beginWord)
        const adjMap = new Map()
        for (let i = 0; i < wordList.length; i ++) {
            const w = wordList[i]

            if (!adjMap.has(w)) {
                adjMap.set(w, new Array())
            }

            for (let j = i + 1; j < wordList.length; j ++) {
                const w2 = wordList[j]
                if (!adjMap.has(w2)) {
                    adjMap.set(w2, new Array())
                }

                let diff = 0
                for (let k = 0; k < w.length; k ++) {
                    if (w[k] !== w2[k]) {
                        diff += 1

                        if (diff > 1) {
                            break
                        }
                    }
                }

                if (diff === 1) {
                    adjMap.get(w).push(w2)
                    adjMap.get(w2).push(w)
                }
            }
        }
        // console.log(adjMap)

        // const res = [[]]
        // const visited = new Set()
        // this.dfs(beginWord, endWord, adjMap, visited, new Array(), res)
        // // console.log(res[0])
        // return res[0].length

        return this.bfs(beginWord, endWord, adjMap)
    }

    bfs(beginWord, endWord, adjMap) {
        const visited = new Set()
        const qu = new Deque()
        qu.pushBack([beginWord, 1])
        visited.add(beginWord)

        while (qu.size() > 0) {
            const [w, depth] = qu.popFront()
            if (w === endWord) {
                return depth
            }

            for (let neigh of adjMap.get(w)) {
                if (!visited.has(neigh)) {
                    qu.pushBack([neigh, depth + 1])
                    visited.add(neigh)
                }
            }
        }

        return 0
    }

    dfs(word, endWord, adjMap, visited, curr, res) {
        if (visited.has(word)) {
            return
        }
        if (word === endWord) {
            curr.push(word)
            if (res[0].length === 0 || curr.length < res[0].length) {
                res[0] = [...curr]
            }
            curr.pop()
            return
        }

        visited.add(word)
        curr.push(word)
        for (let neigh of adjMap.get(word)) {
            this.dfs(neigh, endWord, adjMap, visited, curr, res)
        }
        curr.pop()
        visited.delete(word)
        return
    }
}

// https://leetcode.com/problems/word-ladder/

/**
main
    create adjMap
        key: word
        values: Array of words that only change by a single letter

    since beginWord may or may not be in wordList, push beginWord into wordList

    iterate wordList
        const word1 = wordList[i]
        iterate wordList
            const word2 = wordList[j]
            if (word1 === word2) {
                continue
            }

            let change = 0
            iterate k = 0 to 3 (length of word)
                if (word1[k] !== word2[k]) {
                    change += 1
                }
                if (change > 1) {
                    break
                }

            if (change === 1) {
                if (!adjMap.has(word1)) {
                    adjMap.set(word1, new Array())
                }
                if (!adjMap.has(word2)) {
                    adjMap.set(word2, new Array())
                }

                adjMap.get(word1).push(word2)
                adjMap.get(word2).push(word1)
            }

    // conduct BFS since need shortest path and all edges have the same weight
    create queue
    enqueue the beginWord
    shortest = 1    // for the beginWord

    create visited Set since if a word has already been visited it's already on the potentially shortest path, no need to re-tread

    while (qu.size() > 0) {
        shortest += 1   // the neighbors add 1 to the sequence
        quSize = qu.size()

        // eval all words on this level
        for (let i = 0; i < quSize.length; i ++) {
            pop = qu.popFront()
            // traverse all neighbors
            for (let neigh of adjMap.get(pop)) {
                if (visited.has(neigh)) {
                    continue
                }

                if (neigh === endWord) {
                    return shortest
                }

                visited.add(neigh)
                qu.pushBack(neigh)
            }
        }
    }

    return 0    // could not reach endWord


    // from the beginWord recursively traverse paths until endWord or no more paths // dfs
    //return shortest === Pos infin ? 0 : shortest


// wrong TLE
* {Map} adjMap
* {String} w
* {String} endWord
* {Set} visited
rec
    base case 1:
    if (visited.has(w) === true)
        return POS infin

    if (w === endWord) {
        return 1    // return 1 because this word is included in the word ladder length
    }

    shortest = Pos infin
    visited.add(w)

    // traverse paths connected to neighbors
    for (let neigh of adjList[w]) {
        shortest = min(shortest, rec(adjMap, neigh, endWord, visited) + 1)
    }

    visited.delete(w)

    return shortest


- Time: O(3*n^2)
- Space: O(n * 3)

 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const visited = new Set()
    const adjMap = new Map()
    wordList.push(beginWord)

    for (let word1 of wordList) {
        for (let word2 of wordList) {
            if (word1 === word2) {
                continue
            }

            let change = 0
            for (let k = 0; k < word2.length; k ++) {
                if (word1[k] !== word2[k]) {
                    change += 1
                }
                if (change > 1) {
                    break
                }
            }

            if (!adjMap.has(word1)) {
                adjMap.set(word1, new Array())
            }
            if (!adjMap.has(word2)) {
                adjMap.set(word2, new Array())
            }

            if (change === 1) {
                adjMap.get(word1).push(word2)
                adjMap.get(word2).push(word1)
            }
        }
    }
    //console.log(adjMap)

    const qu = new Deque()
    qu.pushBack(beginWord)
    let shortest = 1

    while (qu.size() > 0) {
        shortest += 1
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const w = qu.popFront()
            for (let neigh of adjMap.get(w)) {
                if (visited.has(neigh)) {
                    continue
                }

                if (neigh === endWord) {
                    return shortest
                }
                visited.add(neigh)
                qu.pushBack(neigh)
            }
        }
    }

    return 0

    //const res = rec(adjMap, beginWord, endWord, visited)
    //return res === Number.POSITIVE_INFINITY ? 0 : res
};

const rec = function(adjMap, w, endWord, visited) {
    if (visited.has(w) === true) {
        return Number.POSITIVE_INFINITY
    }
    if (w === endWord) {
        return 1
    }

    let shortest = Number.POSITIVE_INFINITY
    visited.add(w)

    for (let neigh of adjMap.get(w)) {
        shortest = Math.min(shortest, rec(adjMap, neigh, endWord, visited) + 1)
    }

    visited.delete(w)
    return shortest
}
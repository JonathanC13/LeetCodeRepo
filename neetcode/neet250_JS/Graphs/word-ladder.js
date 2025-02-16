// https://neetcode.io/problems/word-ladder

/*
- edge case 1: if beginWord === endWord: return 1
- edge case 2: if !array.includes(endWord): return 0

create directional graph. Fill an AdjList in a Map; key: word, val [word]
Add beginWord into the wordList
to fill the adjList, for each word at each char replace with a wildcard like '*', if does not exist in Map add the pattern since new pattern else add the word to the array.
iterate the words i
    iterate j, 0 to word length
        place '*' at j position in the word
        add to adjList

create a queue with Deque
enqueue the [beginWord, 0]
const visited = new Set()

while qu.size() > 0 {
    const [word, change] = qu.popFront()

    if (word === endWord) {
        return change
    }
    visited.add(word)

    for the word length
        get the neighbors of each pattern
        // enqueue the words it can change to.
        const neighbors = Map.get(pattern)
        for (let i = 0; i < neighbors.length; i ++) {
            if (visited.has(neighbors[i])) {
                continue
            }

            qu.pushBack([neighbors[i], change + 1])
        }
}

return 0

- Time: O(n*word length^2). n*word.word length for adjList. + n elems in queue * word length^2.   n * word length^2 because for each word (n) -> get the patterns (length) -> enqueue the pattern neighbors (length)
- Space: O(n + transfrom to edges)

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
            return 1
        }
        if (!wordList.includes(endWord)) {
            return 0
        }

        wordList.push(beginWord)
        const adjList = new Map()
        for (let i = 0; i < wordList.length; i ++) {
            for (let j = 0; j < wordList[i].length; j ++) {
                const pattern = wordList[i].slice(0, j) + '*' + wordList[i].slice(j + 1)
                if (!adjList.get(pattern)) {
                    adjList.set(pattern, new Array())
                }

                adjList.get(pattern).push(wordList[i])
            }
        }

        const visited = new Set()
        const qu = new Deque()
        qu.pushBack([beginWord, 1]) // starts at 1 already
        visited.add(beginWord)

        while (qu.size() > 0) {
            const [word, change] = qu.popFront()
            if (word === endWord) {
                return change
            }

            for (let i = 0; i < word.length; i ++) {
                const pattern = word.slice(0, i) + '*' + word.slice(i + 1)

                const neighbors = adjList.get(pattern)
                for (let j = 0; j < neighbors.length; j ++) {
                    if (visited.has(neighbors[j])) {
                        continue
                    }

                    visited.add(neighbors[j])
                    qu.pushBack([neighbors[j], change + 1])
                }
            }
        }

        return 0
    }
}

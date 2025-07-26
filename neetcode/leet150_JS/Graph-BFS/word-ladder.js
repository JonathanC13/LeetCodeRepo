// https://leetcode.com/problems/word-ladder/description/?envType=study-plan-v2&envId=top-interview-150

/*
edge case 1: if beginWord === endWord: return 0

push beginWord into wordList, incase does not exist already

create an undirected AdjMap for each word in wordList
- Time: O(n*n*word.length)
- Space: O(n + e)

changes = 0
create queue
enqueue begin word
create visited to mark already checked words
while (qu is not empty)
    quSize = qu size
    iterate quSize
        pop = dequeue

        iterate adjMap.get(pop) words
            if (neigh === endWord) {
                return changes + 1
            }

            if (neigh not visited)
                add neigh to visited
                enqueue neigh

return -1

- Time: O(n*n*word.length + n + e)
- Space: O(n + e)

*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (beginWord === endWord) {
        return 0
    }
    wordList.push(beginWord)
    const adjMap = new Map()
    for (let i = 0; i < wordList.length; i ++) {
        if (adjMap.has(wordList[i]) === false) {
            adjMap.set(wordList[i], new Array())
        }
        
        for (let j = i + 1; j < wordList.length; j ++) {
            if (wordList[i] === wordList[j]) {
                continue    // if beginWord appears twice
            }

            if (adjMap.has(wordList[j]) === false) {
                adjMap.set(wordList[j], new Array())
            }

            let diff = 0
            for (let k = 0; k < wordList[j].length; k ++) {
                if (wordList[i][k] !== wordList[j][k]) {
                    diff += 1
                }
                if (diff > 1) {
                    break
                }
            }

            if (diff === 1) {
                adjMap.get(wordList[i]).push(wordList[j])
                adjMap.get(wordList[j]).push(wordList[i])
            }
        }
    }

    let changes = 1
    const qu = new Deque()
    qu.pushBack(beginWord)
    const visited = new Set()
    while (qu.size() > 0) {
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const pop = qu.popFront()

            for (let j = 0; j < adjMap.get(pop).length; j ++) {
                const nei = adjMap.get(pop)[j]
                if (nei === endWord) {
                    return changes + 1
                }

                if (visited.has(nei) === false) {
                    visited.add(nei)
                    qu.pushBack(nei)
                }
            }
        }
        changes += 1
    }
    return 0
};
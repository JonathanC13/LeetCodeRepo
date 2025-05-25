// https://neetcode.io/problems/word-ladder

/*
note: the end word is included in the wordList

create an undirected graph represented by an adjacency Map
for beginWord and each word in wordList, the neighbors are the words that change by only 1 letter.
Time: O(n^2)

recursive dfs
    if (currWord === endWord) {
        return 1    
    }
    visited add curr
    minChange = Pos infin
    for (neighbors)
        minChange = min(minChange, 1 + this.dfs(neighbor))

    visited remove curr
    return minChange

- Time: O(n^2 + V + E) // n^2 + V + E
- Space: O(n^2)

* for min problems, better to use BFS
*/

class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (!wordList.includes(endWord)) {
            return 0
        }

        const adjMap = new Map()
        wordList.push(beginWord)
        for (let i = 0; i < wordList.length; i ++) {
            if (!adjMap.has(wordList[i])) {
                adjMap.set(wordList[i], [])
            }
            // for (let j = 0; j < wordList.length; j ++) {
            for (let j = i + 1; j < wordList.length; j ++) {
                
                // if (wordList[i] === wordList[j]) {
                //     continue
                // }
                let count = 0
                for (let k = 0; k < wordList[i].length; k ++) {
                    if (wordList[i][k] !== wordList[j][k]) {
                        count += 1
                    }
                    if (count > 1) {
                        break
                    }
                }

                if (count === 1) {
                    adjMap.get(wordList[i]).push(wordList[j])
                    if (!adjMap.has(wordList[j])) {
                        adjMap.set(wordList[j], [])
                    }
                    adjMap.get(wordList[j]).push(wordList[i])
                }
            }
        }
        console.log(adjMap)
        const visited = new Set()
        // const res = this.dfs(adjMap, beginWord, endWord, visited)
        const res = this.bfs(adjMap, beginWord, endWord, visited)
        return res === Number.POSITIVE_INFINITY ? 0 : res
    }

    bfs(adjMap, beginWord, endWord, visited) {
        const qu = new Queue()
        visited.add(beginWord)
        for (let i = 0; i < adjMap.get(beginWord).length; i ++) {
            visited.add(adjMap.get(beginWord)[i])
            qu.enqueue(adjMap.get(beginWord)[i])
        }
        let minChanges = 1

        while (qu.size() > 0) {
            const neighSize = qu.size()
            minChanges += 1
            for (let i = 0; i < neighSize; i ++) {
                const word = qu.dequeue()
                if (word === endWord) {
                    return minChanges
                } else {
                    for (let j = 0; j < adjMap.get(word).length; j ++) {
                        if (visited.has(adjMap.get(word)[j])) {
                            continue
                        }
                        qu.enqueue(adjMap.get(word)[j])
                    }
                }
            }
        }

        return 0
    }

    dfs(adjMap, currWord, endWord, visited) {
        if (currWord === endWord) {
            return 1
        }
        if (visited.has(currWord)) {
            return Number.POSITIVE_INFINITY
        }

        visited.add(currWord)
        let minChanges = Number.POSITIVE_INFINITY
        for (let i = 0; i < adjMap.get(currWord).length; i ++) {
            minChanges = Math.min(minChanges, 1 + this.dfs(adjMap, adjMap.get(currWord)[i], endWord, visited))
        }

        visited.delete(currWord)
        return minChanges
    }
}

// https://neetcode.io/problems/word-ladder

class Node {
    constructor(str) {
        this.str = str
        this.subs = new Set()
        this.neigh = []
    }
}

class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (!wordList.includes(endWord) || beginWord === endWord) {
            return 0
        }

        // Mine, uses extra space.
        // this.mine(beginWord, endWord, wordList)

        const len = beginWord.length
        const stateMap = new Map()
        const adjMap = new Map()
        wordList.push(beginWord)
        for (let word of wordList) {
            stateMap.set(word, [])
            for (let i = 0; i < len; i ++) {
                const pattern = word.slice(0,i) + '*' + word.slice(i+1)
                stateMap.get(word).push(pattern)

                if (!adjMap.has(pattern)) {
                    adjMap.set(pattern, [])
                }

                adjMap.get(pattern).push(word)
            }
        }

        const visited = new Set()
        const qu = new Deque()
        let currLevel = 1

        qu.pushBack(beginWord)
        visited.add(beginWord)

        while (!qu.isEmpty()) {
            const quSize = qu.size()

            for (let i = 0; i < quSize; i ++) {
                const currW = qu.popFront()
                if (currW === endWord) {
                    return currLevel
                }

                for (let pattern of stateMap.get(currW)) {
                    for (let neigh of adjMap.get(pattern)) {
                        if (!visited.has(neigh)) {
                            qu.pushBack(neigh)
                            visited.add(neigh)
                        }
                    }
                }
            }
            currLevel += 1
        }

        return 0
        
    }

    mine(beginWord, endWord, wordList) {
        

        // iterate each word to create its Node
        const nodes = []
        nodes.push(this.createNode(beginWord))
        for (let word of wordList) {
            nodes.push(this.createNode(word))
        }
        // nodes.push(this.createNode(endWord)) // the endWord has to exist in the wordList
        
        // create the edges starting from the begin word
        const qu = new Deque()
        const visited = new Set()

        visited.add(nodes[0])
        qu.pushBack(nodes[0])
        
        while (!qu.isEmpty()) {
            const currN = qu.popFront()

            for (let n of nodes) {
                if (n === currN) {
                    continue
                }
                if (!visited.has(n)) {
                    visited.add(n)
                    qu.pushBack(n)
                }

                for (let sub of n.subs) {
                    if (currN.subs.has(sub)) {
                        currN.neigh.push(n)
                        break
                    }
                }

            }
        }

        // BFS or DFS to look for endWord and return minimum number of words (nodes)
        // BFS
        visited.clear()
        qu.clear()

        visited.add(nodes[0])
        qu.pushBack([nodes[0], 1])  // node, depth
        while(!qu.isEmpty()) {
            const [currN, depth] = qu.popFront()
            // console.log(currN)

            for (let neigh of currN.neigh) {
                if (neigh.str === endWord) {
                    return depth + 1
                }

                if (!visited.has(neigh)) {
                    visited.add(neigh)
                    qu.pushBack([neigh, depth + 1])
                }
            }
        }

        return 0
    }

    createNode(str) {
        const node = new Node(str)
        for (let i = 0; i < str.length; i ++) {
            node.subs.add(str.slice(0,i) + '*' + str.slice(i + 1)) // front portion, replace char with *, back portion
        }
        return node
    }
}

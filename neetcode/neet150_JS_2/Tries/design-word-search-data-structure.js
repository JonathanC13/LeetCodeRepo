// https://neetcode.io/problems/design-word-search-data-structure

/*
addWord:
    - Time: O(n)
    - Space : O(t)  // t new Nodes

search
    Since can have '.', each char position with '.' has 26 paths
    - Time: Avg O(n) // worst case; n * 26^n
    - Space: O(n)
*/

class Node {
    constructor() {
        this.next = new Array(26).fill(null)
        this.endWord = false
    }
}

class WordDictionary {
    constructor() {
        this.parent = new Node()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let itr = this.parent
        for (let i = 0; i < word.length; i ++) {
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (itr.next[code] === null) {
                itr.next[code] = new Node()
            }

            itr = itr.next[code]
        }

        itr.endWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let itr = this.parent
        return this.searchDFS(itr, word, 0)
    }

    searchDFS(itr, word, i) {
        if (itr === null) {
            return false
        }
        if (i === word.length) {
            return itr.endWord
        }

        if (word[i] === '.') {
            for (let j = 0; j < itr.next.length; j ++) {
                if (this.searchDFS(itr.next[j], word, i + 1)) {
                    return true
                }
            }
        } else {
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (this.searchDFS(itr.next[code], word, i + 1)) {
                return true
            }
        }

        return false
    }
}

// https://neetcode.io/problems/design-word-search-data-structure

class Node {
    constructor() {
        this.next = new Array(26).fill(null)
        this.endWord = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new Node()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let itr = this.root

        for (let i = 0; i < word.length; i ++) {
            const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (itr.next[ord] !== null) {
                itr = itr.next[ord]
                continue
            }

            const newNode = new Node()
            itr.next[ord] = newNode
            itr = itr.next[ord]
        }

        itr.endWord = true

        // Time: O(n)   n = length of word
        // Space: O(t)  t = number of new nodes created
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.search2(word, 0, this.root)
    }

    search2(word, idx, node) {
        // Time: O(n)
        // Space: O(t + n)  // t is the total number of nodes.
        // console.log(word, idx , node ? 'true': 'false')
        if (node === null) {
            return false
        }
        if (idx === word.length) {
            return node.endWord
        }

        if (word[idx] === '.') {
            for (let i = 0; i < node.next.length; i ++) {
                if (node.next[i] !== null) {
                    if (this.search2(word, idx + 1, node.next[i])) {
                        return true
                    }
                } 
            }
        } else {
            const ord = word.charCodeAt(idx) - 'a'.charCodeAt(0)
            return this.search2(word, idx + 1, node.next[ord])
        }

        return false
    }
}

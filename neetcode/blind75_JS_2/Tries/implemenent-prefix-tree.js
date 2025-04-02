// https://neetcode.io/problems/implement-prefix-tree

class Node {
    constructor() {
        this.next = new Array(26).fill(null)
        this.endWord = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new Node()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let itr = this.root

        for(let i = 0; i < word.length; i ++) {
            const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
            // if exists
            if (itr.next[ord] !== null) {
                itr = itr.next[ord]
                continue
            }

            // add
            const newNode = new Node()
            itr.next[ord] = newNode
            itr = itr.next[ord]
        }

        itr.endWord = true

        // Time: O(n). n = length of word
        // Space: O(t). // new nodes that were created
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let itr = this.root

        for(let i = 0; i < word.length; i ++) {
            const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (itr.next[ord] === null) {
                return false
            }

            itr = itr.next[ord]
        }

        return itr.endWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let itr = this.root

        for(let i = 0; i < prefix.length; i ++) {
            const ord = prefix.charCodeAt(i) - 'a'.charCodeAt(0)
            if (itr.next[ord] === null) {
                return false
            }

            itr = itr.next[ord]
        }

        return true
    }
}

// https://neetcode.io/problems/implement-prefix-tree

class TrieNode {
    constructor() {
        this.children = Array(26).fill(null)
        this.isEnd = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currNode = this.root

        for (let c of word) {
            const ord = c.charCodeAt(0) - 'a'.charCodeAt(0)
            if (currNode.children[ord] === null) {
                currNode.children[ord] = new TrieNode()
            }

            currNode = currNode.children[ord]
        }
        
        currNode.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let currNode = this.root

        for (let c of word) {
            const ord = c.charCodeAt(0) - 'a'.charCodeAt(0)
            if (currNode.children[ord] === null) {
                return false
            }
            currNode = currNode.children[ord]
        }

        return (currNode.isEnd)
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let currNode = this.root

        for (let c of prefix) {
            const ord = c.charCodeAt(0) - 'a'.charCodeAt(0)
            if (currNode.children[ord] === null) {
                return false
            }
            currNode = currNode.children[ord]
        }

        return true
    }
}

// https://neetcode.io/problems/design-word-search-data-structure

class TrieNode {
    constructor() {
        this.children = Array(26).fill(null)
        this.isEnd = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
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
        return this.searchDFS(word, this.root)
    }

    searchDFS(word, currNode) {
        if (currNode === null) {
            return false
        }
        if (word.length === 0) {
            return currNode.isEnd
        }
        
        if (word[0] === '.'){
            // must check all children that are not null
            for (let c of currNode.children) {
                if (this.searchDFS(word.slice(1), c)) {
                    return true
                }
            }
        } else {
            const ord = word[0].charCodeAt(0) - 'a'.charCodeAt(0)
            if (this.searchDFS(word.slice(1), currNode.children[ord])) {
                return true
            }
        }

        return false
    }
}


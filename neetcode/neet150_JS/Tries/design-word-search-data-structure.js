// https://neetcode.io/problems/design-word-search-data-structure

class TrieNode {
    constructor() {
        this.nextChar = Array(26).fill(null)
        this.isEnd = false
    }
}

class WordDictionary {
    constructor() {
        this.head = new TrieNode()
    }

    ordChar(c) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0)
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let ptr = this.head

        for (let i = 0; i < word.length; i ++) {
            const charOrd = this.ordChar(word[i])
            if (ptr.nextChar[charOrd] === null) {
                ptr.nextChar[charOrd] = new TrieNode()
            }

            ptr = ptr.nextChar[charOrd]
        }
        ptr.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let ptr = this.head
        return this.dfs(word, 0, ptr)
    }

    dfs(word, idx, ptr) {
        if (idx >= word.length) {
            return ptr.isEnd
        }

        if (word[idx] === '.') {
            for (let i = 0; i < ptr.nextChar.length; i ++) {
                if (ptr.nextChar[i] !== null) {
                    if (this.dfs(word, idx + 1, ptr.nextChar[i])) {
                        return true
                    }
                } 
            }
        } else {
            let charOrd = this.ordChar(word[idx])
            if (ptr.nextChar[charOrd] === null) {
                return false
            } else {
                if (this.dfs(word, idx + 1, ptr.nextChar[charOrd])) {
                    return true
                }
            }
        }

        return false
    }
}

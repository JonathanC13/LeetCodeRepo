// https://neetcode.io/problems/design-word-search-data-structure/question

/**
 * 1. Assumptions
 *  1. characters are lower cases English, therefore static 26 chars
 * 
 * 2. input validation
 *  - word
 *      - typeof word === 'string'
 * 
 * 3. time and space constraints
 *  addWord
 *      BTTC: O(n)  // n = word.length
 *      Space: O(n)
 *  search
 *      BTTC: O(n * 26^n)   // for each char *, 26 options if '.' ^n for remaining chars
 *      Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  search
 *      edge cases
 *      1. if word.length === 0: return true
 * 
 *  test cases
 *  1. add word 1, add word 2 that uses word 1 as prefix, add word 3 that uses word 1, search word 1, search word 2, search word that does not exist, search word 1 with a '.', search with '.' no match
 *      inputs
 *          operations  = ['init', add, add, add, search, search, search, search, search]
 *          operands    = [null, apple, applepie, appleseed, apple, applepie, app, apple.eed, apple..p]
 *      expected output
 *          null, null, null, null, true, true, false, true, false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Add every word into a Trie so when searching it is linear through the nodes and when searching a '.' it will check every existing character outgoing from the node
 * 
 * 7. algos
 *  - Trie operations
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Trie
 * 
 * 9. complexity
 *  addWord
 *      Time: O(n)
 *      Space: O(n)
 *  search
 *      Time: O(n * 26^n)
 *      Space: O(1)
 *  
 * 
 */

class TrieNode {
    constructor() {
        this.next = new Array(26).fill(null)
        this.endWord = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
        this.root.endWord = true
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let itr = this.root
        for (let i = 0; i < word.length; i ++) {
            const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (itr.next[ord] === null) {
                itr.next[ord] = new TrieNode()
            }

            itr = itr.next[ord]
        }

        itr.endWord = true
        return
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        const dfs = (itr, i, word) => {
            if (itr === null) {
                return false
            }
            if (i === word.length) {
                return itr.endWord
            }
            
            if (word[i] !== '.') {
                const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
                console.log(word[i])
                return dfs(itr.next[ord], i + 1, word)
            } else {
                for (let j = 0; j < itr.next.length; j ++) {
                    if (itr.next[j] !== null && dfs(itr.next[j], i + 1, word) === true) {
                        return true
                    }
                }
            }

            return false
        }

        let itr = this.root
        return dfs(itr, 0, word)
    }
}

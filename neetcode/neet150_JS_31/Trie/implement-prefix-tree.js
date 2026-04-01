// https://neetcode.io/problems/implement-prefix-tree/question

/**
 * 1. Assumptions
 *  1. characters a lower cases English
 * 
 * 2. input validation
 *  1. word
 *      - typeof word === 'string'
 *  2. prefix
 *      - typeof prefix === 'string'
 * 
 * 3. time and space constraints
 *  - insert
 *      BTTC: O(n)
 *      Space: O(n)
 * 
 *  - search
 *      BTTC: O(n)
 *      Space: O(1)
 * 
 *  - startsWith
 *      BTTC: O(n)
 *      Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  insert
 *      edge cases
 *      1. if word.length === 0: return
 * 
 *  search
 *      edge cases
 *      1. if word.length === 0: return true
 * 
 *  startsWith
 *      edge cases
 *      1. if prefix.length === 0: return true
 * 
 *  test cases
 *  1. insert word 1, insert word 2 that is a prefix of word 1, insert word 3 that uses word 1 as a prefix. Search for all three words, search for invalid, a prefix of word 1, and then an invalid startsWith
 *      inputs
 *          operations = ["Trie", 'insert', 'helloworld', 'insert', 'hello', 'insert', 'hellowordtoday', 'search', 'hello', 'search', 'hello', 'search', 'helloworldtoday', 'search', 'hellow', 'startsWith', 'hellow', 'startsWith', 'hollow']
 *      expected output
 *          null, null, null, null, true, true, true, false, true, false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Each Trie Node contains:
 *      1. an Array of 26 that represents the characters that come after this node
 *      2. Flag if this node is the end of a Word, the character is sourced from the parent that led to this node.
 * 
 * 7. algos
 *  - Trie construction and traversal
 * 
 * 8. data structures
 *  - Trie
 * 
 * 9. complexity
 *  insert
 *      Time: O(n)
 *      Space: O(n)
 *  search
 *      Time: O(n)
 *      Space: O(1)
 *  startsWith
 *      Time: O(n)
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

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
        this.root.endWord = true    // make blank a valid word
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let itr = this.root // need seperator iterator for the Trie since must maintain reference to the root
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

    searchUtil(str, prefixFlag) {
        let itr = this.root

        for (let i = 0; i < str.length; i ++) {
            const ord = str.charCodeAt(i) - 'a'.charCodeAt(0)

            if (itr.next[ord] === null) {
                return false
            }

            itr = itr.next[ord]
        }

        return prefixFlag === true ? true : itr.endWord
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.searchUtil(word, false)
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.searchUtil(prefix, true)
    }
}

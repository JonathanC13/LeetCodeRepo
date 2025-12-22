// https://leetcode.com/problems/implement-trie-prefix-tree/

/**
1. Assumptions
    1. word contains only lowercase English characters

2. input validation
    1. word
        - typeof word === 'string'
        - regex = /^$[a-z]*$/

3. time and space constraints
    insert
        BTTC: O(n)  // n = word.length
        Space: O(n) // max n nodes in Trie created

    search
        BTTC: O(n)  // must confirm each character in Trie
        Space: O(1)

    startsWith
        BTTC: O(n)  // must confirm each character in Trie
        Space: O(1)

4. edge cases and some test cases
    edge cases
    1. insert '': return
    2. search '': return true
    3. startWith '': return true
    test cases
    1. 
        inputs
            ops = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
            parms =[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
        expected output
            [null, null, true, false, true, null, true]

5. visualize by drawing and manually solve
6. break into subproblems
    TrieNode
        neigh = new Array(26).fill(null)
        endWord = false // The parent neigh index is the char this Node represents, if endWord = true a complete word ends here.

7. algos
    - Trie construction and searching

8. Data structures
    - Trie

9. complexity
    insert
        BTTC: O(n)  // n = word.length
        Space: O(n) // max n nodes in Trie created

    search
        BTTC: O(n)  // must confirm each character in Trie
        Space: O(1)

    startsWith
        BTTC: O(n)  // must confirm each character in Trie
        Space: O(1)

 */

class TrieNode {
    constructor() {
        this.next = new Array(26).fill(null)
        this.endWord = false
    }
}

var Trie = function() {
    this.root = new TrieNode()
    this.root.endWord = true    // if want to include '' in the Trie
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let itr = this.root

    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)

        if (itr.next[ord] === null) {
            itr.next[ord] = new TrieNode()
        }

        itr = itr.next[ord]
    }

    // on the last char's TrieNode, mark endWord = true
    itr.endWord = true
    return
};

Trie.prototype.searchGen = function(word, prefixFlag) {
    let itr = this.root

    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)

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
Trie.prototype.search = function(word) {
    return this.searchGen(word, false)
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchGen(prefix, true)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
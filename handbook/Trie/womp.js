// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

/**
1. Assumptions
    1. only lowercase English characters, this simplifies the TrieNode next character by making the next data structure constant size.

2. input validation
    1. addWord
        - word
            - word is a String
            - only lower case English characters. regex = '/^[a-z]*$/
    2. search
        - word is a String
        - lower case English and '.' character. regex = '/^[a-z.]*$'

3. time and space constraints
    add
        BTTC: O(n)  // check the word's characters
        Space: O(m) // m = created TrieNodes
    search
        BTTC: O(n * 26^n)   // when there is a '.', must explore every next char. In other words each char (n) has 26 paths = 26^n, * n at each char
        Space: O(n) // max recursive depth is word.length

4. edge cases and some test cases
    edge cases
    1. search '': return true
    test cases
    1. add word, search prefix, exact, and longer
        inputs
            op = ['WordDictionary', 'addWord', 'search', 'search', 'search']
            parms = [null, 'apple', 'app', 'apple', 'apples']
        expected output
            [null, null, false, true, false]

    2. search '.' has no match
        inputs
            op = ['WordDictionary', 'addWord', 'search']
            parms = [null, 'apple', 'apple.']
        expected output
            [null, null, false]
    3. search where '.' has multiple paths
        inputs
            op = ['WordDictionary', 'addWord', 'addWord', 'search']
            parms = [null, 'appleoranges', 'appleseed', 'apple.seed']
        expected output
            [null, null, null, true]

5. visualize by drawing and manaully solve
6. break into subproblems
    The WordDictionary is implemeneted with a Trie so that when searching for a word, each character attempts to match a node. This results in Time O(n). With the inclusion of '.', a TrieNode's next is utilized to explore all the paths available, this increases the Time to O(n * 26^n)

    For '.', use DFS to explore and once a match of the entire word hits, return

7. algos
    - Trie operations
    - DFS recursion

8. data structures
    - Trie

9. complexity
    add
        BTTC: O(n)  // check the word's characters
        Space: O(m) // m = created TrieNodes
    search
        BTTC: O(n * 26^n)   // when there is a '.', must explore every next char. In other words each char (n) has 26 paths = 26^n, * n at each char
        Space: O(n) // max recursive depth is word.length

 */

class TrieNode {
    constructor() {
        this.next = new Array(26).fill(null)
        this.endWord = false
    }
}

var WordDictionary = function() {
    this.root = new TrieNode()
    this.root.endWord = true
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {

    const DFS = (node, word, i) => {
        if (node === null) {
            return false
        }
        if (i === word.length) {
            return node.endWord
        }

        if (word[i] !== '.') {
            const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
            return DFS(node.next[ord], word, i + 1)
        } else {
            for (let j = 0; j < node.next.length; j ++) {
                if (node.next[j] !== null && DFS(node.next[j], word, i + 1) === true) {
                    return true
                }
            }
        }

        return false
    }

    let itr = this.root
    return DFS(itr, word, 0)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
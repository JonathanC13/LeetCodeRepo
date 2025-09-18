// https://leetcode.com/problems/implement-trie-prefix-tree/description/

/**
Insert:
    - Time: O(n)    // n = word.length
    - Space: O(m)   // m = created nodes. Could share with existing

Search:
    - Time: O(n)
    - Space: O(1)
 */

class TrieNode {
    constructor() {
        this.next = new Array(26).fill(null)
        this.isEnd = false
    }
}

var Trie = function() {
    this.root = new TrieNode()
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

    itr.isEnd = true
};

Trie.prototype.traverse = function(word, fullWord) {
    let itr = this.root

    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)

        if (itr.next[ord] === null) {
            return false
        }
        itr = itr.next[ord]
    }

    return fullWord === true ? itr.isEnd : true
}

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.traverse(word, true)
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.traverse(prefix, false)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
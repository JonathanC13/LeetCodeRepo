// https://leetcode.com/problems/implement-trie-prefix-tree/description/?envType=study-plan-v2&envId=leetcode-75

/*
create TrieNode to store:
    The array of the next chars
    If this char is the end of a word

Class Trie
    Trie
        create root TrieNode

    insert(word)
        create pointer to the root TrieNode

        iterate word
            if the char does not exist in the current TrieNode next Array
                create new TrieNode and assign

            update pointer to next char's TrieNode

        Once at the final TrieNode, set isEnd to true

        - Time: O(n)    // n = length of word
        - Space: O(m)   // m = new TrieNodes that were created.

    searchGeneral(word, startsWith)
        create pointer to the root

        iterate the word
            if TrieNode for the char does not exist
                return false

            update pointer to next char's TrieNode

        if startsWith === false ? return if isEnd is true : else return true

        - Time: O(n)    // n = length of word
        - Space: O(1)

*/

class TrieNode {
    constructor(isEnd = false) {
        this.next = new Array(26).fill(null)
        this.isEnd = isEnd
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

Trie.prototype.searchGeneral = function(word, startsWith) {
    let itr = this.root

    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)

        if (itr.next[ord] === null) {
            return false
        }

        itr = itr.next[ord]
    }

    return startsWith === true ? true : itr.isEnd
}

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.searchGeneral(word, false)
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchGeneral(prefix, true)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
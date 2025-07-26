// https://leetcode.com/problems/implement-trie-prefix-tree/description/?envType=study-plan-v2&envId=top-interview-150

/*
create the node Obj
    neigh = Array of 26 indexed for lower case english chars
    isEnd = if this node is the end of a word. e.g. this node is referenced to 'a' in prev neigh Array, if isEnd === true, then the word ends with 'a'
--
Trie
    create root node

insert
    create pointer to root
    iterate the word
        convert word[i] to ordinal value. ascii of word[i] - 97
        if the current node neigh at word[i] does not exist
            create node
            set node at neigh[word[i]]

        itr = neigh[word[i]]

    itr.endWord = true

    - Time: O(word.length)
    - Space: O(word.length or newly created nodes)

searchGeneral(word, pre=false) {
    itr = root
    iterate word
        convert word[i] to ordinal value. ascii of word[i] - 97
        if (neigh at word[i] === null)
            return false

        itr = neigh[word[i]]

    return pre === true ? true : itr.endWord    // if only looking for prefix return true since got to end of word

    - Time: O(word.length)
    - Space: O(1)
}
*/

class TrieNode {
    constructor() {
        this.neigh = new Array(26).fill(null)
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
        if (itr.neigh[ord] === null) {
            itr.neigh[ord] = new TrieNode()
        }
        itr = itr.neigh[ord]
    }

    itr.isEnd = true
};

Trie.prototype.searchGeneral = function(word, pre = false) {
    let itr = this.root
    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
        if (itr.neigh[ord] === null) {
            return false
        }
        itr = itr.neigh[ord]
    }
    
    return pre || itr.isEnd
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
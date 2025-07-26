// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/?envType=study-plan-v2&envId=top-interview-150

/*
Use Prefix Trie

search is a recursive dfs
    base case 1: if itr === null: return false
    base case 2: if i === word.length: return itr.isEnd

    if (word[i] === '.')
        must iterate every neigh that is not null and dfs
    else
        continue with word[i]

    return false

    - Time: O(26^n) // if . then potential for the index to have 26 paths
    - Space: O(n)
*/

class TrieNode {
    constructor() {
        this.neigh = new Array(26).fill(null)
        this.isEnd = false
    }
}

var WordDictionary = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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

WordDictionary.prototype.searchDFS = function(word, i, itr, indexes) {
    if (itr === null) {
        return false
    }
    if (i === word.length) {
        console.log(indexes)
        return itr.isEnd
    }

    if (word[i] === '.') {
        for (let j = 0; j < itr.neigh.length; j ++) {
            if (this.searchDFS(word, i + 1, itr.neigh[j], indexes + ',' + i.toString()) === true) {
                return true
            }
        }
    } else {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
        return this.searchDFS(word, i + 1, itr.neigh[ord], indexes + ',' + ord.toString())
    }

    return false
}

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    // console.log('-------------------------------')
    let itr = this.root
    return this.searchDFS(word, 0, itr, '')
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
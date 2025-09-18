// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

/**
addWord
    Time: O(n)
    Space: O(m) // m = new nodes added to Trie

search
    Time: O(n * 26^n)   // 26^n since if a '.' character, then check every character path.
    Space: O(n)
 */

class TrieNode {
    constructor() {
        this.next = new Array(26).fill(null)
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
        if (itr.next[ord] === null) {
            itr.next[ord] = new TrieNode()
        }
        itr = itr.next[ord]
    }

    itr.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.searchRec(word, 0, this.root)
};

WordDictionary.prototype.searchRec = function(word, i, itr) {
    if (itr === null) {
        return false
    }

    if (i === word.length) {
        return itr.isEnd
    }

    if (word[i] !== '.') {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
        if (itr.next[ord] === null) {
            return false
        } else {
            return this.searchRec(word, i + 1, itr.next[ord])
        }
    } else {
        // since '.', need to branch on all next that are not null to find if word is in dictionary
        for (let j = 0; j < itr.next.length; j ++) {
            if (itr.next[j] !== null && this.searchRec(word, i + 1, itr.next[j]) === true) {
                return true
            }
        }

        return false
    }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
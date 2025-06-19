// https://leetcode.com/problems/search-suggestions-system/?envType=study-plan-v2&envId=leetcode-75

/*
create a Trie and store the products in it. 
    - Time: O(n * m)    // n = length of products, * m = longest word
    - Space: O(l)       // l = total nodes created.

For each character entered, must rebuild the suggestion list.
    - Time: O(a * k * l)    // a = length of searchWord, * k = max 3 suggestions, * l = nodes
    - Space: O(a * l)
*/

class TrieNode {
    constructor(isEnd = false) {
        this.next = new Array(26).fill(null)
        this.isEnd = isEnd
    }
}

const insertIntoTrie = (word, root) => {
    let itr = root
    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
        if (itr.next[ord] === null) {
            itr.next[ord] = new TrieNode()
        }

        itr = itr.next[ord]
    }

    itr.isEnd = true
}

const dfs = (node, word, suggestions, k) => {
    if (node === null) {
        return
    }
    if (node.isEnd === true && k[0] > 0) {
        k[0] -= 1
        suggestions.push(word)
    }

    for (let i = 0; i < node.next.length; i ++) {
        if (k[0] <= 0) {
            break
        }
        if (node.next[i] !== null) {
            const char = String.fromCharCode(i + 'a'.charCodeAt(0))
            dfs(node.next[i], word + char, suggestions, k)
        }
    }
    return
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const root = new TrieNode()

    for (let i = 0; i < products.length; i ++) {
        insertIntoTrie(products[i], root)
    }

    const res = new Array(searchWord.length).fill().map((e) => new Array())
    const k = [3]
    let itr = root
    for (let i = 0; i < searchWord.length; i ++) {
        k[0] = 3
        const ord = searchWord.charCodeAt(i) - 'a'.charCodeAt(0)
        if (itr.next[ord] === null) {
            break
        }
        itr = itr.next[ord]
        const suggestions = new Array()
        dfs(itr, searchWord.slice(0, i + 1), suggestions, k)
        res[i] = [...suggestions]
    }
    
    return res
};
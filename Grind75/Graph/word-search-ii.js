// https://leetcode.com/problems/word-search-ii/description/

/**
main
    create a Trie to store all the words so that while checking a cell if that char continues a word, the Trie's pointer is in position.
    - Time: O(n * s)    // n = words in words, s = longest word
    - Space: O(m)   // m all Trie nodes

    create visited Array for current path
    res = new Set()
    iterate the rows
        iterate the cols
            create pointer to root of Trie
            // search for complete words with this as starting cell
            rec(...)  

    return Array.from(res)

* {String[][]} board
* {TrieNode} itr  ; Trie pointer
* {Number[][]} directions
* {Number} r
* {Number} c
* {Number} rows
* {Number} cols
* {String} currWord
* {Set} res
rec 
    base case 1 for Trie
    if (itr === null) {
        return
    }

    // check if word is endWord
    if (itr.endWord === true) {
        res.add(currWord)
    }

    base case 1 for board
    if (nr or nc out of bounds or visited[r][c] === true) {
        return
    }

    ord = board[nr][nc].charCodeAt(0) - 'a'.charCodeAt(0)
    base case 2
    if (itr[ord] === null)
        return

    visited[r][c] = true

    // since this cell valid to exist in Trie, add to currWord and more iterator
    // char added after endWord check since the endWord flag is not for the current board cell char
    currWord += board[r][c]
    itr = itr[ord]


    // traverse neighbors
    for (let [dr, dc] of directions)

        rec(board, itr, directions, nr, nc, rows, cols, currWord)

    visited[r][c] = false

    return

- Time: O(r * c * s)    // s = longest word
- Space: O(m)   //m = TrieNodes
 */

class TrieNode {
    constructor() {
        this.neigh = new Array(26).fill(null)
        this.endWord = false
    }
}

const insertIntoTrie = (word, root) => {
    let itr = root

    for (let i = 0; i < word.length; i ++) {
        ord = word.charCodeAt(i) - 'a'.charCodeAt(0)

        if (itr.neigh[ord] === null) {
            itr.neigh[ord] = new TrieNode()
        }

        itr = itr.neigh[ord]
    }

    itr.endWord = true
    return
}

const buildTrie = (words) => {
    const root = new TrieNode()

    for (let w of words) {
        insertIntoTrie(w, root)
    }

    return root
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const root = buildTrie(words)

    const res = new Set()
    const rows = board.length
    const cols = board[0].length
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            let itr = root
            rec(board, itr, dirs, r, c, rows, cols, visited, '', res)
        }
    }

    return Array.from(res)
};

const rec = function(board, itr, dirs, r, c, rows, cols, visited, currWord, res) {
    if (itr === null) {
        return
    }
    
    if (itr.endWord === true) {
        res.add(currWord)
    }

    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true) {
        return
    }

    const ord = board[r][c].charCodeAt(0) - 'a'.charCodeAt(0)
    if (itr.neigh[ord] === null) {
        return
    }

    visited[r][c] = true

    currWord += board[r][c]
    itr = itr.neigh[ord]

    for (let [dr, dc] of dirs) {
        rec(board, itr, dirs, r + dr, c + dc, rows, cols, visited, currWord, res)
    }

    visited[r][c] = false

    return
}
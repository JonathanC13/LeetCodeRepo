// https://leetcode.com/problems/word-search-ii/description/?envType=study-plan-v2&envId=top-interview-150

/*
main
    create a Trie so that when determining if the current cell's character is in a word, it is Time: O(1)

    create res Set
    create visited 2D Array of m * n fill with false

    iterate rows
        iterate cols
            ord = board[r][c].charCodeAt(0) - 'a'
            if (itr.neigh[ord] !== null) {
                dfs(...)
            }

    return res

recursive dfs backtracking
    base case 1:
        if itr === null
            return
    
    if itr.isEnd === true
        res.add(str)
        // it then continues in case a word continues from this.

    
    base case 2:
        if row or col out of bounds || visited = true
            return

    ord = board[r][c].charCodeAt(0) - 'a'
    base case 3:
        if itr.neigh[ord] === null
            return

    visited[r][c] = true

    for directions
        dfs(in new r and c)

    visited[r][c] = false

- Time: O(r * c)
- Space: O(r * c)

*/

class TrieNode {
    constructor() {
        this.neigh = new Array(26).fill(null)
        this.isEnd = false
    }
}

const insertTrie = function(word, root) {
    let itr = root
    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
        if (itr.neigh[ord] === null) {
            itr.neigh[ord] = new TrieNode()
        }
        itr = itr.neigh[ord]
    }
    itr.isEnd = true
}

const dfs = (board, itr, r, c, rows, cols, visited, directions, str, res) => {
    if (itr === null) {
        return
    }
    
    if (itr.isEnd === true) {
        // console.log('hit')
        res.add(str)
    }

    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true) {
        return
    }
    const ord = board[r][c].charCodeAt(0) - 'a'.charCodeAt(0)
    if (itr.neigh[ord] === null) {
        return
    }

    visited[r][c] = true
    itr = itr.neigh[ord]

    for (let [dr, dc] of directions) {
        dfs(board, itr, r + dr, c + dc, rows, cols, visited, directions, str + board[r][c], res)
    }

    visited[r][c] = false
    return
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const res = new Set()
    const rows = board.length
    const cols = board[0].length
    const visited = Array.from(new Array(rows), (e) => {return new Array(cols).fill(false)})

    const root = new TrieNode()
    for (let i = 0; i < words.length; i ++) {
        insertTrie(words[i], root)
    }

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    let itr = root
    // console.log(itr.neigh)
    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            dfs(board, itr, r, c, rows, cols, visited, directions, '', res)
        }
    }

    return Array.from(res)
};
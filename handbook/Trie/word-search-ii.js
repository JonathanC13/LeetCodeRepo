// https://leetcode.com/problems/word-search-ii/

/**
1. Assumptions
    1. Characters are all lowercase Enlgish characters

2. input validation
    board and words only contain lowercase English characters
    regex = '\^[a-z&\'

3. time and space constraints
    BTTC: O(r * c * 4^(r + c))  // each cell, r * c, has * 4 paths ^ (r+c) since only use cell once on path
    Space: O(r * c)

4. edge cases and some test cases
    edge cases
    1. if words.length === 0: return []
    test cases
    1.
        inputs
            board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
            words = ["oath","pea","eat","rain"]
        expected output
            ["eat","oath"]
    2. a word is a prefix of another
        inputs
            board = [["o","a","a","n"],["i","t","a","e"],["n","h","k","r"],["g","f","l","v"]]
            words = ["oath","pea","eat","rain", "eating"]
        expected output
            ["eat","oath","eating"]

5. visualize by drawing and manually solve
6. break into subproblems

    Create a Trie with all the Strings in words, this is so that each cell in board can start from root and traverse linearly when exploring adjacent cells

    utilize depth first searh for the path to find a complete word. When endWord = true, append word into res Set

7. algos
    - Depth first search
    - Trie operations

8. data structures
    - Matrix
    - Trie

9. complexity
    BTTC: O(r * c * 4^(r + c))  // each cell, r * c, has * 4 paths ^ (r+c) since only use cell once on path
    Space: O(r * c)
 */

class TrieNode {
    constructor() {
        this.next = new Array(26).fill(null)
        this.endWord = false
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    if (words.length === 0) {
        return []
    }

    const rows = board.length
    const cols = board[0].length
    const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))
    const res = new Set()
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    const root = new TrieNode()
    for (let w of words) {
        insert(root, w)
    }

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            DFS(board, r, c, rows, cols, dirs, visited, root, '', res)
        }
    }

    return Array.from(res)
};

const insert = (root, w) => {
    let itr = root
    for (let i = 0; i < w.length; i ++) {
        const ord = w.charCodeAt(i) - 'a'.charCodeAt(0)

        if (itr.next[ord] === null) {
            itr.next[ord] = new TrieNode()
        }

        itr = itr.next[ord]
    }

    itr.endWord = true
    return
}

const DFS = (board, r, c, rows, cols, dirs, visited, node, foundWord, res) => {
    // if cell character does not exist in TrieNode next then cannot continue this path
    const ord = board[r][c].charCodeAt(0) - 'a'.charCodeAt(0)
    if (node.next[ord] === null) {
        return
    }

    // it does exist, path continues
    visited[r][c] = true
    foundWord += board[r][c]
    if (node.next[ord].endWord === true) {
        res.add(foundWord)
        // recursive step continues since this word could be a prefix of another
    }
    
    for (let [dr, dc] of dirs) {
        const nr = r + dr
        const nc = c + dc
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && visited[nr][nc] === false) {
            DFS(board, nr, nc, rows, cols, dirs, visited, node.next[ord], foundWord, res)
        }
    }

    visited[r][c] = false
    return

    
}
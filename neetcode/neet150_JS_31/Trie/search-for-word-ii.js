// https://neetcode.io/problems/search-for-word-ii/question

/**
 * 1. Assumptions
 *  1. each character on the board and in words is lowercase English
 *  2. no duplicate words in result
 *  3. Given:
 *      1. for the current word a cell can only used once
 * 
 * 2. input validation
 *  1. board
 *      - board instanceof Array
 * 
 *  2. words
 *      - words instanceof Array
 * 
 * 3. time and space constraints
 *  BTTC: O(r * c * 4^n)    // each cell *, 4 paths ^ average length of word to continue path
 *  Space: O(m) // m = nodes in Trie
 * 
 * 4. edge cases and some test cases
 *  test cases
 *  1. provide word 1 and word 2 that uses word 1 as a prefix
 *      inputs
 *          board = [
 *              ["a","b","c","d"],
 *              ["s","a","a","t"],
 *              ["a","c","k","e"],
 *              ["a","c","d","n"]]
 *          words = ["bat","cat","back","backend","stack"]
 *      expected output
 *          [back, backend, cat]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Add every word in words into a Trie
 *  result data structure is a Set due to duplicates could be found.
 *  start at every cell
 *      recursively backtrack search for words
 *      - Base case 1
 *          if node === null || r or c out of bounds or cell already visited: return
 * 
 *      mark visited for the current path
 *      if the character in this cell exist in .next of the current TrieNode
 *          if .next[ord].endWord === true: push currWord + board[r][c] to res
 *      explore the 4 directions from the current r, c and traverse Trie from the current character at r,c
 * 
 * 7. algos
 *  - Trie Operations
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Trie
 * 
 * 9. complexity    
 *  Time: O(r * c * 4^n)
 *  Space: O(m)
 */

class TrieNode {
    constructor() {
        this.next = new Array(26).fill(null)
        this.endWord = false
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const rows = board.length
        const cols = board[0].length
        const dirs = [[0,1],[1,0],[0,-1],[-1,0]]
        const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))
        const res = new Set()

        const root = new TrieNode()
        for (let i = 0; i < words.length; i ++) {
            this.addWord(root, words[i])
        }

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                this.rec(board, rows, cols, r, c, dirs, visited, root, res, '')
            }
        }
        return Array.from(res)
    }

    addWord(root, word) {
        let itr = root
        for (let c of word) {
            const ord = c.charCodeAt(0) - 'a'.charCodeAt(0)
            if (itr.next[ord] === null) {
                itr.next[ord] = new TrieNode()
            }
            itr = itr.next[ord]
        }

        itr.endWord = true
        return
    }

    rec(board, rows, cols, r, c, dirs, visited, node, res, currWord) {
        if (node === null) {
            return
        }
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true) {
            return
        }

        visited[r][c] = true
        const ord = board[r][c].charCodeAt(0) - 'a'.charCodeAt(0)
        if (node.next[ord] !== null && node.next[ord].endWord === true) {
            res.add(currWord + board[r][c])
        }

        for (let [dr, dc] of dirs) {
            const nr = dr + r
            const nc = dc + c
            this.rec(board, rows, cols, nr, nc, dirs, visited, node.next[ord], res, currWord + board[r][c])
        }

        visited[r][c] = false
        return
    }
}

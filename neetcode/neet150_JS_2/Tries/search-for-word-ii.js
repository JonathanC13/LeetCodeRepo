// https://neetcode.io/problems/search-for-word-ii

/*
* brute force would be for each char, iterate every word in 'words' to find which words are being continued.

* Create a Trie with the words so that the cell's char's index can be accessed in O(1) to check if it continues word(s).
- Time: O(r * c * 4^t)    // n * longest string = to create Trie. + r * c = to search each cell. It will only be r * c * 4^t since the Trie limits the exploration.
- Space: O(t). t = total nodes in the Trie
*/

class Node {
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
        const parent = new Node()
        for (let w = 0; w < words.length; w ++) {
            let itr = parent
            for (let i = 0; i < words[w].length; i ++) {
                const code = words[w].charCodeAt(i) - 'a'.charCodeAt(0)
                if (itr.next[code] === null) {
                    itr.next[code] = new Node()
                }
                itr = itr.next[code]
            }
            itr.endWord = true
        }

        const rows = board.length
        const cols = board[0].length
        const visited = Array.from(new Array(rows), (e) => new Array(cols).fill(false))
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const wordsFound = new Set()

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                this.dfs(board, rows, cols, r, c, visited, directions, parent, wordsFound, '')
            }
        }

        return Array.from(wordsFound)
    }

    dfs(board, rows, cols, r, c, visited, directions, node, wordsFound, currWord) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true || node === null) {
            return
        }

        const code = board[r][c].charCodeAt(0) - 'a'.charCodeAt(0)
        if (node.next[code] === null) {
            return
        } else {
            currWord += board[r][c]
            node = node.next[code]
        }

        if (node.endWord) {
            wordsFound.add(currWord)
        }

        visited[r][c] = true

        for (let [dr, dc] of directions) {
            this.dfs(board, rows, cols, r + dr, c + dc, visited, directions, node, wordsFound, currWord)
        }

        visited[r][c] = false
    }
}

// https://neetcode.io/problems/search-for-word-ii

/*
iterate the words and construct a Trie. This enables O(1) look up if the char exists in a word or not.
    - Time: O(n) for each word
    - Space: O(t)   created nodes for new paths

dfs search starting at each cell and then 4 directions
    - Time: O(r * c * 4^(r * c))
    - Space: O(r * c)
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
        const root = new TrieNode()

        for (let i = 0; i < words.length; i ++) {
            this.insertWord(root, words[i])
        }
        
        const rows = board.length
        const cols = board[0].length

        const visited = Array.from(new Array(rows), (v) => {return new Array(cols).fill(false)})
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const res = new Set()

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                this.dfs(board, rows, cols, r, c, directions, visited, root, [], res)
            }
        }

        return Array.from(res)
    }

    dfs(board, rows, cols, r, c, directions, visited, node, word, res) {
        // console.log(word)
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true || node === null) {
            return
        }

        const ord = board[r][c].charCodeAt(0) - 'a'.charCodeAt(0)
        if (node.next[ord] === null) {
            return
        }

        visited[r][c] = true
        word.push(board[r][c])

        node = node.next[ord]
        if (node.endWord === true) {
            res.add(word.join(''))
        }

        for (let [dr, dc] of directions) {
            const nr = dr + r
            const nc = dc + c
            this.dfs(board, rows, cols, nr, nc, directions, visited, node, word, res)
        }

        word.pop()
        visited[r][c] = false
        return
    }

    insertWord(root, word) {
        let itr = root

        for (let i = 0; i < word.length; i ++) {
            const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (itr.next[ord] !== null) {
                itr = itr.next[ord]
                continue
            }

            const newNode = new TrieNode()
            itr.next[ord] = newNode
            itr = itr.next[ord]
        }

        itr.endWord = true
    }


}

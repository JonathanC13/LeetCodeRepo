// https://neetcode.io/problems/search-for-word-ii

class TrieNode {
    constructor() {
        this.nextChar = Array(26).fill(null)
        this.isEnd = false
        this.refs = 0
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const head = new TrieNode()
        this.addWords(head, words)

        const rows = board.length
        const cols = board[0].length

        const visited = Array(rows).fill().map((e) => {return Array(cols).fill(false)})
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        const res = new Set()

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                const charOrd = this.ordChar(board[r][c])
                if (head.nextChar[charOrd] !== null) {
                    this.dfs(res, '', board, r, c, rows, cols, visited, head, directions)
                }
                console.log(visited)
            }
        }

        return Array.from(res)
    }

    dfs(res, currWord, grid, r, c, rows, cols, visited, ptr, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || ptr.nextChar[this.ordChar(grid[r][c])] === null) {
            return
        }

        visited[r][c] = true
        currWord += grid[r][c]
        

        const prev = ptr
        ptr = ptr.nextChar[this.ordChar(grid[r][c])]
        if (ptr.isEnd) {
            res.add(currWord)
            
            ptr.refs -= 1
            ptr.isEnd = false   // used the word.
            if (ptr.refs === 0) {
                prev.nextChar[this.ordChar(grid[r][c])] = null
                visited[r][c] = false
                return
            }
        }

        for (let [dr, dc] of directions) {
            this.dfs(res, currWord, grid, dr + r, dc + c, rows, cols, visited, ptr, directions)
        }

        visited[r][c] = false
    }

    addWords(head, words) {
        let ptr = head

        for (let i = 0; i < words.length; i ++) {
            ptr = head
            for (let j = 0; j < words[i].length; j ++) {
                const charOrd = this.ordChar(words[i][j])
                if (ptr.nextChar[charOrd] === null) {
                    ptr.nextChar[charOrd] = new TrieNode()
                }
                ptr = ptr.nextChar[charOrd]
                ptr.refs += 1
            }
            ptr.isEnd = true
        }

        // console.log(this.searchWord(head, 'hf'))
    }

    searchWord(head, word) {
        let ptr = head

        for (let c of word) {
            if (ptr.nextChar[this.ordChar(c)] === null) {
                return false
            } else {
                ptr = ptr.nextChar[this.ordChar(c)]
            }
        }
        console.log(ptr.refs)
        return ptr.isEnd
    }

    ordChar(c) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0)
    }
}

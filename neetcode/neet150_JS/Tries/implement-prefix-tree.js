// https://neetcode.io/problems/implement-prefix-tree

class TreeNode {
    constructor() {
        this.nextChar = new Array(26).fill(null)
        this.isEnd = false          // remember that the isEnd is true in the nextChar's TreeNode, not the one it is currently in. e.g. 'a'. head [Node, ..., end = F] - index 0 -> [..., end = T]
    }
}

class PrefixTree {
    constructor() {
        // keep reference to head of the prefixTree
        this.head = new TreeNode()
    }


    getOrd(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0)
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        // set a pointer to the this.head
        let ptr = this.head

        // for a prefixTree, if the char exists, follow to next TreeNode, else need to populate with new TreeNode
        for (let i = 0; i < word.length; i ++) {
            const ordChar = this.getOrd(word[i])
            if (ptr.nextChar[ordChar] !== null) {
                // next node exists
                ptr = ptr.nextChar[ordChar]
            } else {
                // need to create
                const newNode = new TreeNode()
                ptr.nextChar[ordChar] = newNode
                ptr = newNode
            }
        }

        // after the last letter is processed, the ptr is at the TreeNode that represents the end. 
        ptr.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let ptr = this.head

        for (let i = 0; i < word.length; i ++) {
            const ordChar = this.getOrd(word[i])
            if (ptr.nextChar[ordChar] === null) {
                return false
            } else {
                ptr = ptr.nextChar[ordChar]
            }
        }

        return ptr.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let ptr = this.head

        for (let i = 0; i < prefix.length; i ++) {
            const ordChar = this.getOrd(prefix[i])
            if (ptr.nextChar[ordChar] === null) {
                return false
            } else {
                ptr = ptr.nextChar[ordChar]
            }
        }
        // if can get to the end, then the prefix exists because it doesn't have to be a full word that was previously inserted
        return true
    }
}

// https://neetcode.io/problems/implement-prefix-tree

/*
*Remember that the endWord flag is on the Node created for the char

1st (parent). [A, B]
2nd. A node created: endWord = True, therefore the word is 'A'

insert
    - Time: O(n)    // n = length of word
    - Space: O(t)   // t new Nodes

search
    - Time: O(n)
    - Space: O(1)

startsWith
    - Time: O(n)
    - Space: O(1)
*/

class Node {
    constructor() {
        this.next = new Array(26).fill(null)   // lower case English letters
        this.endWord = false
    }
}

class PrefixTree {
    constructor() {
        this.parent = new Node()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        // iterator starts at parent
        let itr = this.parent

        for (let i = 0; i < word.length; i ++) {
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0) 
            if (itr.next[code] === null) {
                itr.next[code] = new Node()
            }

            itr = itr.next[code]
        }

        itr.endWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let itr = this.parent

        for (let i = 0; i < word.length; i ++) {
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0) 
            if (itr.next[code] === null) {
                return false
            }

            itr = itr.next[code]
        }

        return itr.endWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let itr = this.parent

        for (let i = 0; i < prefix.length; i ++) {
            const code = prefix.charCodeAt(i) - 'a'.charCodeAt(0)
            
            if (itr.next[code] === null) {
                return false
            }
            
            itr = itr.next[code]
        }
        
        return true
    }
}

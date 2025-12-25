// https://leetcode.com/problems/word-break/description/

/**
Recursive Backtracking with memo solution
    memo = new Array(s.length + 1).fill(null)
    memo[s.length] = true
    
    recursion
        base cases
            1. if i > s.length: return false
            2. if memo[i] !== null: return memo[i]

        // recursion until the end to setup backtracking
        rec(s, wordDict, i + 1)

        iterate each word
            if i + word.length <= s.length && s.slice(i, i + word.length) === word && rec(s, wordDict, i + word.length) === true:
                memo[i] = true
                return true

        memo[i] = false
        return false
                

Trie Solution, which also uses the recursive solution but makes searching if the substring in s exists in wordDict straightforward.
1. Assumptions
    1. Characters are only lowercase English characters

2. input validation
    1. s
        - s is a String
        - s.length > 0

    2. wordDict
        - Array of Strings

3. time and space constraints
    BTTC: O(n * m^n)  // for each n *, has m depth paths for n
    Space: O(n + m) // m = chars of Trie for the wordDict

4. edge cases and some test cases
    edge cases
    1. if s.length === 0
        return true
    2. if wordDict.length === 0
        return false

    test cases
    1. 
        inputs
            s = "leetcode", wordDict = ["leet","code"]
        expected output
            true
    2. 
        inputs
            s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
        expected output
            false

5. visualize by drawing and manually solve
6. break into subproblems
    Add all words from wordDict into a Trie

    memo = new Array(s.length + 1).fill(null)
    memo[s.length] = true

    recursive backtracking
        recursion
        base cases
            1. if i > s.length: return false
            2. if memo[i] !== null: return memo[i]

        // recursion until the end to setup backtracking
        rec(s, wordDict, i + 1)

        let itr = root
        while (i < s.length && itr !== null)
            checking if substring exists

            if (itr.endWord === true && rec(s, i + 1, ...) === true)
                memo[i] = true
                return true

            // if false, keep traversing Trie

        memo[i] = false
        return false

7. algos
    - Trie operations
    - recursive backtracking
    - memoization

8. data structure
    - Trie
    - memo

9. complexity
    BTTC: O(n * m^n)  // for each n *, has m depth paths for n
    Space: O(n + m) // m = chars of Trie for the wordDict
 */

class TrieNode {
    constructor() {
        this.next = new Array(26).fill(null)
        this.endWord = false
    }
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (s.length === 0) {
        return true
    }
    if (wordDict.length === 0) {
        return false
    }

    const n = s.length
    const memo = new Array(n + 1).fill(null)
    memo[n] = true

    const root = new TrieNode()

    for (let word of wordDict) {
        insertWord(root, word)
    }
    
    const res = backtracking(root, s, 0, memo)
    // console.log(memo)
    return res
};

const backtracking = (root, s, i, memo) => {
    if (i > s.length) {
        return false
    }
    if (memo[i] !== null) {
        return memo[i]
    }

    backtracking(root, s, i + 1, memo)

    let itr = root
    for (let j = i; j < s.length; j ++) {
        const ord = s.charCodeAt(j) - 'a'.charCodeAt(0)
        itr = itr.next[ord]

        if (itr === null) {
            break
        }

        if (itr.endWord === true && backtracking(root, s, j + 1, memo)) {
            memo[i] = true
            return true
        }
    }

    memo[i] = false
    return false
}

const insertWord = (root, word) => {
    let itr = root

    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)

        if (itr.next[ord] === null) {
            itr.next[ord] = new TrieNode()
        }

        itr = itr.next[ord]
    }

    itr.endWord = true
    return
}

const search = (root, word) => {
    let itr = root

    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)

        if (itr.next[ord] === null) {
            return false
        }
        itr = itr.next[ord]
    }

    return itr.endWord
}
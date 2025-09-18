// https://leetcode.com/problems/word-break/description/

/**
** Trie solution.
    main
        Insert the words in wordDict into a Trie

    * i
    * root
    rec
        base case 1:
        if i === s.length:
            return true

        itr = root  // start at root since looking for new word that fits

        iterate j in s from to end
            ord of s[j]
            if (itr.next[ord] === null) {
                break
            }

            itr = itr.next[ord]

            // if word isEnd, try to connect another word continuing from j + 1
            if itr.isEnd === true && rec(j + 1, ...) === true
                // found connecting words until end
                return true

            // continue loop for more words (node with isEnd === true) until no more chars in Trie

        return false

    - Time: O(n * m^n)    // n = s.length, m = wordDict.length. potential that every word can start at index i    // will TLE
    - Space: O(n + k)   // n = all nodes in Trie

- Add recursive backtracking and memo to reduce Time to O(n)
    const memo = new Array(s.length).fill(null) // every index indicates if from that i forward can get to end.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    return TrieSoln(s, wordDict)
};

// Trie Soln
class TrieNode {
    constructor() {
        this.next = new Array(26).fill(null)
        this.isEnd = false
    }
}

const insert = function(word, root) {
    let itr = root

    for (let i = 0; i < word.length; i ++) {
        const ord = word.charCodeAt(i) - 'a'.charCodeAt(0)

        if (itr.next[ord] === null) {
            itr.next[ord] = new TrieNode()
        }
        itr = itr.next[ord]
    }

    itr.isEnd = true
}

const TrieSoln = function(s, wordDict) {
    const root = new TrieNode()

    for (let i = 0; i < wordDict.length; i ++) {
        insert(wordDict[i], root)
    }

    const memo = new Array(s.length).fill(null)

    const res = recTrie(s, 0, root, memo)
    // console.log(memo)
    return res
}

const recTrie = function(s, i, root, memo) {
    if (i === s.length) {
        return true
    }
    if (memo[i] !== null) {
        return memo[i]
    }

    recTrie(s, i + 1, root, memo)

    let itr = root

    for (let j = i; j < s.length; j ++) {
        const ord = s.charCodeAt(j) - 'a'.charCodeAt(0)
        if (itr.next[ord] === null) {
            break
        }

        itr = itr.next[ord]

        if (itr.isEnd === true && recTrie(s, j + 1, root, memo) === true) {
            // don't need to check other words once first word that contributes to combination that gets to end is found.
            memo[i] = true
            return true
        }
    }
    memo[i] = false
    return false
}
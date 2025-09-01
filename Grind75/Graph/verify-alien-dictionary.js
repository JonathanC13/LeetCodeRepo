// https://neetcode.io/problems/verifying-an-alien-dictionary?list=neetcode250

/**
 * *sorted lexicographically: Alphabetical order is a specific kind of lexicographical ordering, the given "order" String
 * 
 * create an Array for the characters in "order"
 *      index: character index  = char ascii - 97
 *      value: index in "order" (e.g. 0, 1, 2, ...). the lower means it should appear first
 * 
 * iterate i in words from 0 to words.length -1
 *      // compare words in pairs since when one pair is validated, the i + 1 word is the barrier for the next word to satisfy it is in order
 *      word1 = words[i]
 *      word2 = words[i + 1]
 *      
 *      iterate j the length of word1 because, in lexicographical order, if all the chars are the same the word that is shorter comes first
 *          // if there is no char at word2 at j, then it means that word2 should be before word1. Therefore words is not in lex order
 *          // if the char in word1 is > than char in word2, it means word1 should come after word2. Therefore words is not in lex order
 *          if (j >= word2.length || charMap.get(word1[j]) > charMap.get(word2[j]))
 *              return false         
 * 
 *          // the moment char in word1 is < char in word2, it is in valid order
 *          if (charMap.get(word1[j]) < charMap.get(word2[j])) {
 *              break
 *          }
 * 
 *          // otherwise, the chars are the same, so move to the next index to compare
 * 
 * 
 * return true
 * 
 * - Time: O(n * m)  // n/2 for pairs * avg word size
 * - Space: O(1)   // 26 ~= 1
 */

class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const alienAscii = new Array(26).fill(0)
        for (let i = 0; i < order.length; i ++) {
            alienAscii[order.charCodeAt(i) - 'a'.charCodeAt(0)] = i
        }

        for (let i = 0; i < words.length - 1; i ++) {
            const word1 = words[i]
            const word2 = words[i + 1]

            for (let j = 0; j < word1.length; j ++) {
                if (j >= word2.length || alienAscii[word1.charCodeAt(j) - 'a'.charCodeAt(0)] > alienAscii[word2.charCodeAt(j) - 'a'.charCodeAt(0)]) {
                    return false
                }

                if (alienAscii[word1.charCodeAt(j) - 'a'.charCodeAt(0)] < alienAscii[word2.charCodeAt(j) - 'a'.charCodeAt(0)]) {
                    break
                }
            }
        }

        return true
    }
}

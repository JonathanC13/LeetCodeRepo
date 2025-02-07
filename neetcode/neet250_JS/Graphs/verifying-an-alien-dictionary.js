// https://leetcode.com/problems/verifying-an-alien-dictionary/

/*
Basically , the words list is a dictionary (ex - oxford dictionary) and the order is provided (ranking of alphabets) , we need to check whether the dictionary is correct i.e. the words need to be in order provided.

- edge case 1: if words.length < 2: return true

iterate the order and place them in a Map with the ranking.

compare the current word with its next
    if (word[i][0] === word[i + 1][0]) {
        // need to check next chars
        let less = false
        get the shortest word
        iterate 0 to len
            if (word[i][j] > word[i + 1][j]) {
                return false
            } else if (word[i][j] < word[i + 1][j]) {
                less = true
                break
            } 
            // else equal, continue checking.

        // if got to end, either all chars equal or a char in word[i] was less than word[i + 1]
        if (less) {
            continue
        } else {
            // equal chars
            if (word[i].length > word[i + 1].length) {
                return false
            }
        }
    } else if (word[i][0] > word[i + 1][0]) {
        return false
    } else {
        continue
    }

return true
    
- Time: O(n * m). each word * word length
- Space: O(1). 26 for the Map for the order
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    if (words.length < 2) {
        return true
    }

    const ordMp = new Map()
    for (let i = 0; i < order.length; i ++) {
        ordMp.set(order[i], i)
    }

    for (let i = 0; i < words.length - 1; i ++) {
        if (ordMp.get(words[i][0]) < ordMp.get(words[i + 1][0])) {
            continue
        } else if (ordMp.get(words[i][0]) > ordMp.get(words[i + 1][0])) {
            return false
        } else {
            let less = false
            const len = words[i].length < words[i + 1].length ? words[i].length : words[i + 1].length
            for (let j = 1; j < len; j ++) {
                if (ordMp.get(words[i][j]) < ordMp.get(words[i + 1][j])) {
                    less = true
                    break
                } else if (ordMp.get(words[i][j]) > ordMp.get(words[i + 1][j])) {
                    return false
                }
            }

            if (less) {
                continue
            } else {
                if (words[i].length > words[i + 1].length) {
                    return false
                }
            }
        }
    }

    return true
};
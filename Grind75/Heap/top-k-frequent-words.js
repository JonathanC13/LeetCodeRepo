// https://leetcode.com/problems/top-k-frequent-words/

/**
create priority queue
    elem: [string, freq]
    sorting func
        if a freq === b freq
            return a.toLowerCase().localeCompare(b.toLowerCase()))  // if -1 then a comes before b. asc. If not allowed to use localeCompare, create function that compares char by char.
                // if chars equal: continue
                // if i >= word2.length: return 1  // meaning word2 comes before word1. word2 is a prefix of word1
                // else if charCode a < charCode b: return -1
                // else if charCode a > charCode b: return 1

                // if all w1 char exhausted return -1 since a is a prefix of b

        return b freq - a freq  // if 1 then b before a. desc

create a map for the String's frequencies
    key: String
    value: frequency

populate priority queue with the mapped words

res = new Array()

while k > 0 && priQ.size() > 0
    res.push(priQ.dequeue()[0]) // extract the String

return res

- Time: O(n log n)  // n + n log n + k log(n)   // n = words.length
- Space: O(n)
 */

const lexiCompare = function(w1, w2) {
    for (let i = 0; i < w1.length; i ++) {
        if (i >= w2.length || w1.charCodeAt(i) > w2.charCodeAt(i)) {
            return 1
        } else if (w1.charCodeAt(i) < w2.charCodeAt(i)) {
            return -1
        }
    }

    return -1
}

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freq = new Map()
    for (let i = 0; i < words.length; i ++) {
        if (!freq.has(words[i])) {
            freq.set(words[i], 0)
        }
        freq.set(words[i], freq.get(words[i]) + 1)
    }

    const priQ = new PriorityQueue((a, b) => {
        if (a[1] === b[1]) {
            return lexiCompare(a[0], b[0])
        }
        return b[1] - a[1]
    })

    for (let [k, v] of freq) {
        priQ.enqueue([k, v])
    }

    const res = new Array()

    while (priQ.size() > 0 && k > 0) {
        res.push(priQ.dequeue()[0])
        k -= 1
    }

    return res
};
// https://neetcode.io/problems/foreign-dictionary?list=neetcode250

/*

create an AdjMap
    key: char that is lex lower
    values: Set of chars that are lex higher

iterate pairs of words
    word1 = words[i]
    word2 = words[i + 1]

    iterate chars in word1
        if (j >= word2.length) {
            // invalid lex order due to same prefix but word2 terminated first
            return ''   
        }

        if (w1[j] !== w2[j]) {
            if (!adjMap.get(w1[j]).has(w2[j])) {    // only add if did not previously exist
                adjMap.get(w1[j]).add(w2[j])
                incoming.set(w2[j], incoming.get(w2[j]) + 1)    // incoming can be determined while building adjacency list
            }
            break
        }

// determine lex order of all the chars
topological traverse
create incoming = new Array(26)

iterate [key, edges] adjMap
    iterate out of edges
        const i = out.charCodeAt(0) - '97'
        incoming[i] += 1

create visited length 26
create queue to process the lowest lex (no incoming edges) first
iterate incoming and enqueue all chars with 0 incoming

order = ''

white (qu.size() > 0) {
    const i = qu.popFront()
    const char = String.fromCharCode(i + '97')
    order += char

    traverse edges where the chars are lex higher
    for (let edges of adjMap.get(char)) {
        const j = char.charCodeAt(0) - '97'
        if (visited[j] === true)
            // already placed in the order
            continue

        incoming[j] -= 1
        if (incoming[j] === 0) {
            qu.pushBack(j)
        }
    }
}

return order

- Time: O(n * m + n + e) // n * m(avg word size) to compare words and build adjMap, + n + e to build order
- Space: O(n + e)
*/

class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adjMap = new Map()
        const incoming = new Map()
        // need to add all the used chars to the adjMap first if not then the resulting order will be missing chars used due to no clear lex order
        for (let word of words) {
            for (let c of word) {
                if (!adjMap.has(c)) {
                    adjMap.set(c, new Set())
                }
                if (!incoming.has(c)) {
                    incoming.set(c, 0)
                }
            }
        }

        for (let i = 0; i < words.length - 1; i ++) {
            const w1 = words[i]
            const w2 = words[i + 1]

            let minLen = Math.min(w1.length, w2.length);
            if (w1.length > w2.length && w1.slice(0, minLen) === w2.slice(0, minLen)) {
                return '';
            }

            for (let j = 0; j < w1.length; j ++) {

                if (w1[j] !== w2[j]) {
                    if (!adjMap.get(w1[j]).has(w2[j])) {    // only add if did not previously exist
                        adjMap.get(w1[j]).add(w2[j])
                        incoming.set(w2[j], incoming.get(w2[j]) + 1)    // incoming can be determined while building adjacency list
                    }
                    break
                }
            }
        }
        //console.log(adjMap)
        // const incoming = new Array(26).fill(-1)
        // use a Set of the incoming, so don't have to handle chars that were not used
        // for (let [key, edges] of adjMap.entries()) {
            // const i = key.charCodeAt(0) - 'a'.charCodeAt(0)
            // if (incoming[i] === -1) {
            //     incoming[i] = 0
            // }
            
            // for (let out of edges) {
                // const j = out.charCodeAt(0) - 'a'.charCodeAt(0)
                // if (incoming[j] === -1) {
                //     incoming[j] = 0
                // }

                // incoming.set(out, incoming.get(out) + 1)
            // }
        // }
        
        // const visited = new Array(26).fill(false)
        let order = ''
        const qu = new Deque()
        // for (let i = 0; i < incoming.length; i ++) {
        //     if (incoming[i] === 0 && adjMap.has(String.fromCharCode(i + 'a'.charCodeAt(0)))) {
        //         qu.pushBack(i)
        //     }
        // }
        for (let [key, inc] of incoming.entries()) {
            if (inc === 0) {
                qu.pushBack(key)
            }
        }

        while (qu.size() > 0) {
            const key = qu.popFront()
            // const char = String.fromCharCode(i + 'a'.charCodeAt(0))
            order += key

            for (let edge of adjMap.get(key)) {
                // const j = edge.charCodeAt(0) - 'a'.charCodeAt(0)
                // if (visited[j] === true) {
                //     continue
                // }

                // incoming[j] -= 1
                // if (incoming[j] === 0) {
                //     qu.pushBack(j)
                // }
                incoming.set(edge, incoming.get(edge) - 1)
                if (incoming.get(edge) === 0) {
                    qu.pushBack(edge)
                }
            }
        }
        
        if (order.length !== incoming.size) {
            // there is a loop
            return ''
        }

        return order
    }

}
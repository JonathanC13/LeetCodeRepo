// https://leetcode.com/problems/longest-happy-string/

/*
create a Array for the [char, freq]
create a MaxPriorityQueue and enqueue each Map item, sort by freq

let strRes = ''

while (MaxQ.size() > 0) {
    const currChar = MaxQ.dequeue()
    if (currChar[1] <= 0) {
        continue
    }

    // if will result in triplet same char
    if (strRes.length >= 2 && strRes.slice(strRes.length - 2) === currChar[0] + currChar[0]) {
        if (MaxQ.size() > 0) {
            const nextChar = MaxQ.dequeue()
            nextChar[1] -= 1
            strRes += nextChar[0]

            if (nextChar[1] > 0) {
                MaxQ.enqueue(nextChar)
            }

            // enqueue original dequeue
            maxQ.enqueue(currChar)
        } else {
            // could not continue since cannot find replacement, return the current str that was made
            return strRes
        }
    } else {
        currChar[1] -= 1
        strRes += currChar[0]

        if (currChar[1] > 0) {
            MaxQ.enqueue(currChar)
        }
    } 
}
return totalLen === strRes.length ? strRes : ''

- Time: O(n log k). k = 3, n is the total number of chars
- Space: O(1). a, b, c. 
*/

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const totalLen = a + b + c
    const charArr = []
    if (a > 0) {charArr.push(['a', a])}
    if (b > 0) {charArr.push(['b', b])}
    if (c > 0) {charArr.push(['c', c])}

    const maxQ = MaxPriorityQueue.fromArray(charArr, (char) => char[1])
    // console.log(maxQ._heap._nodes)
    let strRes = ''

    while (maxQ.size() > 0) {
        console.log(maxQ._heap._nodes)
        const currChar = maxQ.dequeue()

        // if will result in triplet same char
        if (strRes.length >= 2 && strRes.slice(strRes.length - 2) === currChar[0] + currChar[0]) {
            if (maxQ.size() > 0) {
                const nextChar = maxQ.dequeue()
                nextChar[1] -= 1
                strRes += nextChar[0]

                if (nextChar[1] > 0) {
                    maxQ.enqueue(nextChar)
                }

                maxQ.enqueue(currChar)
            } else {
                console.log(currChar)
                // could not continue since cannot find replacement, return the current str that was made
                return strRes
            }
        } else {
            currChar[1] -= 1
            strRes += currChar[0]

            if (currChar[1] > 0) {
                maxQ.enqueue(currChar)
            }
        }
    }
    // return totalLen === strRes.length ? strRes : ''
    return strRes
};

// https://leetcode.com/problems/reorganize-string/

/*
create a Map and insert the character and the frequency of the characters
insert each [character, freq] into a MaxPriorityQueue so that we want to use the highest frequency character first because it has the best chance to reorg.

let strReOrg = ''
while (charMaxQ.size() > 0) {
    const currChar = charMaxQ.dequeue()

    if (strReOrg.length > 0 && currChar[0] === strReOrg[strReOrg.length - 1]) {
        // compare if the most recently added char is the same, if true, need to get the next character
        if (charMaxQ.size() > 0) {
            const nextChar = charMaxQ.dequeue()
            nextChar[1] -= 1
            strReOrg += nextChar[0]

            // only enqueue back if freq > 0
            if (nextChar[1] > 0) {
                charMaxQ.enqueue(nextChar)
            }

            // enqueue the first dequeued currChar after
            charMaxQ.enqueue(currChar)
        } else {
            // if no more characters, then return '' since it would result in 2 same adjacent chars
            return ''
        }
    } else {
        currChar[1] -= 1
        strReOrg += currChar[0]

        // only enqueue back if freq > 0
        if (currChar[1] > 0) {
            charMaxQ.enqueue(currChar)
        }
    }
}

return strReOrg.length === s.length ? strReOrg : ''

- Time: O(n log n)
- Space: O(n)
*/

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    if (s.length < 2) {
        return s
    }

    const charFreq = new Map()
    for (let i = 0; i < s.length; i ++) {
        if (!charFreq.get(s[i])) {
            charFreq.set(s[i], 0)
        }
        charFreq.set(s[i], charFreq.get(s[i]) + 1)
    }
    const charFreqArray = []
    for (let [k, v] of charFreq.entries()) {
        charFreqArray.push([k, v])
    }

    const charMaxQ = MaxPriorityQueue.fromArray(charFreqArray, (a) => a[1])
    // console.log(charMaxQ._heap)

    let strReOrg = ''

    while (charMaxQ.size() > 0) {
        const currChar = charMaxQ.dequeue()

        if (strReOrg.length > 0 && currChar[0] === strReOrg[strReOrg.length - 1]) {
            if (charMaxQ.size() > 0) {
                const nextChar = charMaxQ.dequeue()
                strReOrg += nextChar[0]
                nextChar[1] -= 1

                if (nextChar[1] > 0) {
                    charMaxQ.enqueue(nextChar)
                }

                charMaxQ.enqueue(currChar)
            } else {
                return ''
            }
        } else {
            strReOrg += currChar[0]
            currChar[1] -= 1
            if (currChar[1] > 0) {
                charMaxQ.enqueue(currChar)
            }
        }
    }
    console.log(strReOrg)

    return strReOrg.length === s.length ? strReOrg : ''
};
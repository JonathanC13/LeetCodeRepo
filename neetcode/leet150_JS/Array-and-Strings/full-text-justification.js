// https://leetcode.com/problems/text-justification/description/?envType=study-plan-v2&envId=top-interview-150

/*
create Array that will store 2D Array of [words, numChars]

determine which words on each line
line = 0
i < words.length
    arr = new Array()
    chars = words[i].length
    while (i < words.length && chars < maxWidth)
        arr[0].push(words[i])
        i += 1
        chars += words[i].length + 1    // for prefix space

    Arr.push(arr)

// inject spaces
res = []
for each row
    spaces = maxWidth - arr[1]
    iterate word 1 to end over and over and while spaces > 0
        preprend space to word
        
    res[r] = arr[0].join('')

- Time: O(n * m)    // n = length of words, m = maxWidth
- Space: O(n * m)
*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const lines = new Array()
    let i = 0
    while (i < words.length) {
        const arr = new Array()
        arr.push(new Array())
        arr.push(0)

        arr[0].push(words[i])
        let numChars = words[i].length
        i += 1
        while (i < words.length && numChars + words[i].length + 1 <= maxWidth) {
            arr[0].push(' ' + words[i])
            numChars += words[i].length + 1
            i += 1
        }

        arr[1] = numChars
        lines.push(arr)
    }
    // console.log(lines)

    const res = new Array()
    for (let i = 0; i < lines.length; i ++) {
        let spaces = maxWidth - lines[i][1]
        // console.log(spaces)
        if (lines[i][0].length === 1 || i === lines.length - 1) {
            lines[i][0].push(new Array(maxWidth - lines[i][1]).fill(' ').join(''))
        } else {
            while (spaces > 0 && lines[i][0].length > 1) {
                for (let j = 1; j < lines[i][0].length; j ++) {
                    if (spaces > 0) {
                        lines[i][0][j] = ' ' + lines[i][0][j]
                        spaces -= 1
                    } else {
                        break
                    }
                }
            }
        }

        res.push(lines[i][0].join(''))
    }

    return res

};
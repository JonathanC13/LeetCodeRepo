// https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/?envType=study-plan-v2&envId=top-interview-150

/*
wordSize = words[0].length
permSize = words.length * wordSize
1. if (s.length < permSize): return []

iterate words and store into a Map its frequencies. wordMap

create a Map for the window's frequencies. winMap

let need = wordMap.size

iterate i < s.length    // must check start at every index
    create new empty Map, windMap
    have = 0

    l = i
    let r = l + wordSize
    while (l < l + permSize) {
        const char = s.slice(l, r)
        if (!wordMap.has(char)) {
            break
        }

        if (!windMap.has(char))
            windMap.set(char, 0)

        windMap.set(char, windMap.get(char) + 1)

        if (wordMap.get(char) === windMap.get(char)) {  // jsut right
            have += 1
        } else if (wordMap.get(char) < windMap.get(char))   // too many
            break

        l += wordSize
        r += wordSize
    }
    if (have === need)
        res.push(i)



- Time: O(n*w).   // n = s.length, words.length
- Space: O(w)




*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const wordSize = words[0].length
    const permSize = words.length * wordSize
    
    if (s.length < permSize) {
        return []
    }

    const wordMap = new Map()
    for (let i = 0; i < words.length; i ++) {
        if (!wordMap.has(words[i])) {
            wordMap.set(words[i], 0)
        }
        wordMap.set(words[i], wordMap.get(words[i]) + 1)
    }
    let need = wordMap.size

    const res = new Array()

    for (let i = 0; i <= s.length - permSize; i ++) {
        const windMap = new Map()
        let have = 0
        let l = i
        let r = i + wordSize
        while (l < i + permSize) {
            const str = s.slice(l, r)
            if (!wordMap.has(str)) {
                break
            }

            if (!windMap.has(str)) {
                windMap.set(str, 0)
            }

            windMap.set(str, windMap.get(str) + 1)

            if (windMap.get(str) === wordMap.get(str)) {
                have += 1
            } else if (windMap.get(str) > wordMap.get(str)) {
                break
            }

            l = r
            r += wordSize
        }

        if (have === need) {
            res.push(i)
        }
    }

    return res
};

/*
    const wordSize = words[0].length
    const permSize = words.length * wordSize
    
    if (s.length < permSize) {
        return []
    }

    const wordMap = new Map()
    for (let i = 0; i < words.length; i ++) {
        if (!wordMap.has(words[i])) {
            wordMap.set(words[i], 0)
        }
        wordMap.set(words[i], wordMap.get(words[i]) + 1)
    }
    let need = wordMap.size

    const winMap = new Map()
    let have = 0

    const res = new Array()
    let i = 0
    let l = 0
    let r = wordSize
    while (r <= s.length) {
        const tar = s.slice(l, r)
        if (wordMap.has(tar)) {
            if (!winMap.has(tar)) {
                winMap.set(tar, 0)
            }

            winMap.set(tar, winMap.get(tar) + 1)

            if (wordMap.get(tar) === winMap.get(tar)) {
                have += 1
                console.log(have)
                if (have === need) {
                    res.push(i)
                }
            }

            // move if too many or have === need
            while (i < r && (winMap.get(tar) > wordMap.get(tar) || have === need)) {
                const curr = s.slice(i, i + wordSize)
                i += wordSize
                winMap.set(curr, winMap.get(curr) - 1)
                if (winMap.get(curr) < wordMap.get(curr)) {
                    have -= 1
                }
            }
            

            l = r
            r += wordSize
        } else {
            winMap.clear()
            have = 0
            l += 1
            r += 1
            i = l
        }
    }
    

    return res
*/
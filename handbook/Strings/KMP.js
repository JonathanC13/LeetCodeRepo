/*
Time Complexity: O(n), each character in the pattern is processed at most twice — once when moving forward (i++) and possibly again when falling back using the len = lps[len - 1] step.
Auxiliary Space: O(n), an extra array lps[] of size equal to the pattern is used.
*/
const computeLPSArray = (pattern) => {
    if (pattern.length === 0) {
        return []
    }
    const n = pattern.length
    const lps = new Array(n).fill(0)
    lps[0] = 0

    let i = 1
    let len = 0
    while (i < n) {
        if (pattern[len] === pattern[i]) {
            // case 1: if current character continues the existing prefix-suffix match
            len += 1
            lps[i] = len
            i += 1
        } else {
            // pattern[len] !== pattern[i]
            if (len === 0) {
                // case 2: cannot continue prefix-suffix and len === 0 means cannot go to a shorter substring to match
                lps[i] = 0
                i += 1
            } else {
                // case 3: cannot continue prefix-suffix and can go to a shorter substring to match
                len = lps[len-1]
            }
        }
    }
    return lps
}

/*
Time: O(n + m)   n = iterate s.length. Since pattern is only searched when; 1. char matches, 2. When mismatch occurs it does not start the pattern from 0. m = pattern.length when build LPS.
Space: O(m)     m = pattern.length for the LPS
*/
const search = (s, pat) => {
    if (pat.length > s.length) {
        return []
    }

    const lps = computeLPSArray(pat)
    if (lps.length === 0) {
        return []
    }
    console.log('LPS: ', lps)
    
    const res = new Array()
    const p = pat.length
    const n = s.length
    let i = 0   // index in search String
    let j = 0   // index for pattern
    while (i < n) {
        if (s[i] === pat[j]) {
            // match, move both pointers forward
            i += 1
            j += 1
            if (j >= p) {
                // entire pattern found, push the start index in String s into res
                res.push(i-j)
                // jump to the longest prefix that is also a suffix.
                j = lps[j - 1]
            }
        } else {
            // not match
            if (j === 0) {
                // first char does not match, increment i
                i += 1
            } else {
                // mismatch, go back to the last index where prefix-suffix match so that the chars before it do not have to be evaluated since they will match due to the same prefix-suffix.
                j = lps[j - 1]
            }
        }
    }

    return res
}

// driver
let txt = "aabaacaadaabaaba";
let pat = "aaba";

let res = search(txt, pat);
console.log('res: ', res);

txt = "abababcababc";
pat = "ababc";

res = search(txt, pat);
console.log('res: ', res);

/*
why LPS works

const txt = "abababcababc";
const pat = "ababc";

const lps = computeLPSArray(pat) produces [0, 0, 1, 2, 0]

consider current state:
    i = 4, txt[4] = a
    j = 4, pat[4] = c

    The prepopulated LPS array, where each index is the substring's [0, i] longest prefix-suffix (lps), provides the fall back indexes so that if a match occurs the previous characters of the pattern do not need to be re-evaluated.
        1. The patterned matched the txt until i = 4 and j = 4
        txt = abababcababc
        pat = ababc

        2. there is a mismatch and since j !== 0 there may be a position in the pattern to fall back to so that the characters before it do not need to be re-evaluated.
        j = lps[j - 1] = lps[3] = index 2

        3. 
        txt = abababcababc
        pat =   aba

        txt[4] = a
        pat[2] = a

        A match indicates that the prefix also matches since; 
            1. got to j = 4 in the first place
            2. fall back to j = 2, since lps[3] = 2, which means pat[2] to pat[3] has proper prefix from pat[0] to pat[1]
            3. if pat[2] matches then pat[0] would match too, thefore continue to evaluate pat[3] next

        A mismatch would either require:
            1. if j === 0, cannot fall back any further. i += 1 to try new character in txt
            2. fall back to another previous prefix-suffix. j = lps[j - 1]

        since it is a match so i += 1 and j += 1 to evaluate the next character


*/
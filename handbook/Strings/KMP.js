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
    // console.log(lps)
    
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
const txt = "aabaacaadaabaaba";
const pat = "aaba";

const res = search(txt, pat);
console.log(res);
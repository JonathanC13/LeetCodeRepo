/*
Hash the String to be searched.

Time Complexity: O(n), the prefix hashes and powers are precomputed in a single pass over the string, which takes linear time. Once built, any substring hash can be retrieved in O(1) time.
Auxiliary Space: O(n), two arrays of size n are used to store the prefix hashes and powers of the base, resulting in linear extra space usage.
*/
class RabinKarpHash {
    constructor(s) {
        const n = s.length;
        this.mod = 1e9 + 7;
        this.base = 31;
        this.hash = new Array(n); // store the hash from 0 to i
        this.power = new Array(n);    // while computing the hash from 0 to i, can compute the power from 0 to i so it is available when removing the left pointer's hash when window slides up. hash(L, R) = (prefix[R] - prefix[L-1] * power(R - L + 1) + mod) % mod

        // convert character to int 
        // ('a' = 1, ..., 'z' = 26)
        const charToInt = (c) => {
            return c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        };

        // modular addition
        const add = (a, b) => {
            a += b;
            if (a >= this.mod) a -= this.mod;   // maintain consistent hashing by ensuring 'a' value always < this.mod
            return a;
        };

        // modular multiplication
        const mul = (a, b) => {
            return Math.floor((a * b) % this.mod);
        };

        this.hash[0] = charToInt(s[0]); // first is the charToInt(s[0]) since there is no left value. hash(s) = (s[0] * p(n-1) + s[1] * p(n-2) + ... + s[n-1] * p0 ) %mod, since n = 1 for first char (s[1-1] * p^0) % mod = s[0] 
        this.power[0] = 1;  // base^0 = 1

        for (let i = 1; i < n; i++) {
            // get the hash from 0 to i
            // hash(s) = (s[0] * p(n-1) + s[1] * p(n-2) + ... + s[n-1] * p0 ) %mod
            this.hash[i] = add(mul(this.hash[i - 1], this.base),charToInt(s[i]));   
            /*  ex. i = 0 and n = 1, hash[0] = (s[1-1] * p^0) % mod
                    i = 1 and now n = 2. 
                        Therefore hash[1] = (s[0] * p^n-1 + s[n-1] * p^0)
                            - s[0] * p^n-1 = hash[0] * base, because get the previous hash then multiply by base once to bring the power up by 1.
                            - then add s[2-1] * 1 = s[1] = s[1]         
            */

            this.power[i] = mul(this.power[i - 1], this.base);
        }
        // console.log(this.hash)

        // store inner functions for access in getSubHash
        this._add = add;
        this._sub = (a, b) => {
            a -= b;
            if (a < 0) a += this.mod;
            return a;
        };
        this._mul = mul;
    }

    // get hash of substring s[l...r] in O(1)
    // hash(L, R) = (prefix[R] - prefix[L-1] * power(R - L + 1) + mod) % mod
    getSubHash(l, r) {
        let h = this.hash[r];
        if (l > 0) {
            h = this._sub(h, this._mul(this.hash[l - 1],
                                        this.power[r - l + 1]));
        }
        return h;
    }
}

// Rabin-Karp search using hash class
/*
Time Complexity: O(n + m), we compute prefix hashes and powers for both text and pattern in O(n + m). Then, we slide a window over the text, and each substring hash is compared in O(1).
Auxiliary Space: O(n + m), we store prefix hashes and power arrays for both text and pattern, taking O(n + m) space. 
*/
function searchPattern(text, pattern) {
    if (text.length < pattern.length) {
        return []
    }

    const textHashObj = new RabinKarpHash(text)
    const patternHashObj = new RabinKarpHash(pattern)
    const res = new Array()

    const patternHash = patternHashObj.getSubHash(0, pattern.length - 1)    // only need to get once

    for (let l = 0; l < text.length - pattern.length; l ++) {
        if (patternHash === textHashObj.getSubHash(l, l + pattern.length - 1)) {
            // check if actual match
            let i = 0
            for (let j = l; j < l + pattern.length; j ++) {
                if (pattern[i] !== text[j]) {
                    break
                }
                i += 1
            }
            if (i === pattern.length) {
                res.push(l)
            }
        }
    }

    return res
}

// driver code
let txt = "geeksforgeeks";
let pat = "geek";
let positions = searchPattern(txt, pat);
console.log(positions);
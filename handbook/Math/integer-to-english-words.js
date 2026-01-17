// https://leetcode.com/problems/integer-to-english-words/

/**
1. Assumptions
    1. Positive Number
    2. no leading zeroes

2. input validation
    1. num
        - num instanceof Number
        - num >= 0

3. time and space constraint
    BTTC: O(n)
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. if num === 0: return zero

    test cases
    1. number of digits divisible by 3
        input
            num = 123
        expected output
            One Hundred Twenty Three
    
    2. number of digits not divisible by 3
        input
            num = 12345
        expected output
            Twelve Thousand Three Hundred Forty Five

5. visualize by drawing and manually solve
6. break into subproblems
    extract right 3 digits and convert to English
    when converting the 3 digits, it have internal words like twenty, hundred

7. algos
    - Math

8. data structures
    - Number

9. complexity
    BTTC: O(n)
    Space: O(1)


 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) {
        return "Zero"
    }

    let i = 0
    let res = new Array()
    let prevLen = 0
    while (num !== 0) {
        if (i === 1) {
            res.push("Thousand")
        } else if (i === 2) {
            res.push("Million")
        } else if (i === 3) {
            res.push("Billion")
        }
        const out = convert(num % 1000)
        res.push(...out)
        num = Math.floor(num / 1000)

        if (out.length === 0) {
            res.pop()   // remove previous suffix
        }

        i += 1
    }
    // console.log(res)
    return res.reverse().join(" ")
};

const convert = (num) => {
    const map = new Map([
        [1, "One"],
        [2, "Two"],
        [3, "Three"],
        [4, "Four"],
        [5, "Five"],
        [6, "Six"],
        [7, "Seven"],
        [8, "Eight"],
        [9, "Nine"],
        [10, "Ten"],
        [11, "Eleven"],
        [12, "Twelve"],
        [13, "Thirteen"],
        [14, "Fourteen"],
        [15, "Fifteen"],
        [16, "Sixteen"],
        [17, "Seventeen"],
        [18, "Eighteen"],
        [19, "Nineteen"],
        [20, "Twenty"],
        [30, "Thirty"],
        [40, "Forty"],
        [50, "Fifty"],
        [60, "Sixty"],
        [70, "Seventy"],
        [80, "Eighty"],
        [90, "Ninety"]
    ])

    let eng = new Array

    if (Math.floor(num / 100) !== 0) {
        eng.push(map.get(Math.floor(num / 100)))
        eng.push("Hundred")
    }

    num = num % 100
    if (num === 0) {
        // nothing
    } else if (num <= 20) {
        eng.push(map.get(num))
    } else {
        eng.push(map.get(Math.floor(num / 10) * 10))

        num = num % 10
        if (num !== 0) {
            eng.push(map.get(num))
        }
    }

    return eng.reverse()
}
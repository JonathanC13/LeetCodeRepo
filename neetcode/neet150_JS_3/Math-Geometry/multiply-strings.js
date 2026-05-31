// https://neetcode.io/problems/multiply-strings/question

/**
 * 1. Assumptions
 *  1. no leading zeros
 * 
 * 2. input validation
 *  1. nums1
 *      - typeof num1 === 'string'
 *      - regex = '/^[0-9]*$/'
 * 
 * 3. time and space constraints
 *  BTTC: O(min(m,n) + m * n)   // min(m, n) for adding
 *  Space: O(m + n) // max is double len
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if num1 === '0' || num2 === '0': return '0'
 * 
 *  test cases
 *  1. 
 *      inputs
 *          num1 = "123", num2 = "23"
 *      expected output
 *          "2829"
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Cannot convert source inputs into Number, but can convert individual strings.
 * 
 *  func mult(a, b)
 *      reverse a
 *      carry = 0
 *      b is single digit, mutliply b with every digit in a
 *      return res reverse
 * 
 *  func add(a, b)
 *      reverse a, b
 *      return return sum reverse
 * 
 *  main
 *      stack = []
 *      displ = 0
 * 
 *      reverse b
 *      for i in b.length
 *          stack.push(a, b[i]) + "0" * displ
 *          displ += 1
 * 
 *          if stack.length === 2
 *              stack.push(add(pop1,pop2))
 * 
 *      while stack.length >= 2
 *          stack.push(add(pop1,pop2))
 * 
 *      return stack.pop
 * 
 * 7. algos
 *  - Math
 * 
 * 8. complexity
 *  - Array
 * 
 * 9. complexity
 *  Time: O(min(m,n) + m * n)   // min(m, n) for adding
 *  Space: O(m + n) // max is double len
 */

class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === '0' || num2 === '0') {
            return '0'
        }
        
        if (num1.length < num2.length) {
            return this.multiply(num2, num1)
        }

        let zeros = 0
        let res = ''
        for (let i = num2.length - 1; i >= 0; i --) {
            const curr = this.mult(num1, num2[i], zeros)
            res = this.add(res, curr)
            zeros += 1
        }

        return res
    }

    mult(a, b, zeros) {
        let res = ''

        let carry = 0
        let bDig = Number(b)
        let i = a.length - 1
        while (i >= 0 || carry > 0) {
            const n = i >= 0 ? Number(a[i]) : 0
            let dig = bDig * n + carry
            res = (dig % 10) + res
            carry = Math.floor(dig / 10)
            i -= 1
        }

        return res + "0".repeat(zeros)
    }

    add(a, b) {
        let res = ''
        let carry = 0
        let i = a.length - 1
        let j = b.length - 1
        while (i >= 0 || j >= 0 || carry) {
            const aDig = i >= 0 ? Number(a[i]) : 0
            const bDig = j >= 0 ? Number(b[j]) : 0
            let dig = aDig + bDig + carry
            res = (dig % 10) + res
            carry = Math.floor(dig / 10)
            i -= 1
            j -= 1
        }

        return res
    }
}

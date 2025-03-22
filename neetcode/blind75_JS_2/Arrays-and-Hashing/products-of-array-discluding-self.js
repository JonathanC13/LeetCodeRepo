// https://neetcode.io/problems/products-of-array-discluding-self

/*
- edge case 1: is nums.length === 0: return []

Method with use the division operator:
calculate the total product of all the values in nums
for each index in output the value at output[i] would be total product / nums[i]
- Time: O(n)    // 2 * n
- Space: O(n)   // n for output

Method without division:
create Arr for the prefix products to, but not including, the ith element.
create Arr for the postfix products to, but not including, the ith element.
    e.x. 1, 2, 3
    prefix product for index 1 = prefix product of index 0 * nums[0] to include into the product. 

The output would be the ith value = prefix[i] * postfix[i]
- Time: O(n) // 2 * n
- Space: O(n)   // n for prefix, n for postfix, n for output. 3 * n
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length

        if (n === 0) {
            return []
        }
        
        const prefix = new Array(n).fill(1)
        const postfix = new Array(n).fill(1)
        for (let i = 1; i < n; i ++) {
            prefix[i] = prefix[i - 1] * nums[i - 1]
            postfix[n - i - 1] = postfix[n - i] * nums[n - i]
        }

        const out = new Array(n).fill(1)
        for (let i = 0; i < n; i ++) {
            out[i] = prefix[i] * postfix[i]
        }

        return out
    }
}

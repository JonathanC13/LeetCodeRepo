// https://neetcode.io/problems/products-of-array-discluding-self

/*
Without O(n) time and using division op. The solution would be get the total product of all the nums and then for each index = total / nums[i]


With Time O(n) and do not use division op.
create an Array.fill(1) for the pre-product of the current index
create an Array.fill(1) for the post-product of the current index

iterate 1 to < nums.length
    // get the index's pre-product
    pre[i] = pre[i - 1] * nums[i - 1] // pre[i] holds the product of all the nums before i - 1. Include i - 1 into the product by multiplying it in.    
    post[nums.length - i - 1] = post[nums.length - i] * nums[nums.length - i]

const res = []
for i to < nums.length
    res.push(pre[i] * post[i])

return res

Time: O(n)
Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = new Array(nums.length).fill(1)
        const post = new Array(nums.length).fill(1)

        for (let i = 1; i < nums.length; i ++) {
            pre[i] = pre[i - 1] * nums[i - 1]
            post[nums.length - i - 1] = post[nums.length - i] * nums[nums.length - i]
        }

        const res = []
        for (let i = 0; i < nums.length; i ++) {
            res.push(pre[i] * post[i])
        }

        return res
    }
}

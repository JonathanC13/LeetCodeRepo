// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

/*
while i < flowerbed.length
    if ith === 0
        if left and right empty, 
            n -= 1
            i += 2  // if place at i, then cannot place another at i + 1
        else
            i += 1
    else
        i += 2  // since if 1 cannot place at i + 1

return n === 0

- Time: O(n)
- Space; O(1)
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0
    const ln = flowerbed.length
    while (i < ln) {
        if (flowerbed[i] === 1) {
            i += 2
        } else {
            const leftZero = (i - 1 < 0 || flowerbed[i - 1] === 0) ? true : false
            const rightZero = (i + 1 >= ln || flowerbed[i + 1] === 0) ? true : false
            if (leftZero && rightZero) {
                n -= 1
                i += 2
            } else {
                i += 1
            }

            if (n <= 0) {
                return true
            }
        }
    }
    return n <= 0
};
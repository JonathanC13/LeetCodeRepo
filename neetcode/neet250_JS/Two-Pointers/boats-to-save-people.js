// https://leetcode.com/problems/boats-to-save-people/

/*
Match the heaviest with the lighest person

- Time: O(n log n). compare each pair, the larger the data the worse the it will get.
- Space: O(1)
*/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    const boats = []

    people.sort((a, b) => {return a - b})

    let left = 0
    let right = people.length - 1

    while (left <= right) {
        if (people[right] > limit) {
            return 0
        }

        if (left !== right && people[left] + people[right] <= limit) {
            boats.push([left, right])
            left += 1
        } else {
            boats.push([right])  
        }
        right -= 1
    }

    console.log(boats)
    return boats.length
    
};
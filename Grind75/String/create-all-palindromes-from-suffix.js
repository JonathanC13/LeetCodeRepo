const create = function(suffix) {
    const res = new Set()
    // iterate from left to right since the String is a suffix and to create a palindrome the String is extended left.
    for (let i = 0; i <= suffix.length; i ++) {
        const left = suffix.slice(0, i)
        const leftRev = left.split('').reverse().join('')

        // if the left portion it is a palindrome, to create palindrome, reverse the right portion and concat to the left.
        if (left === leftRev) {
            const rightRev = suffix.slice(i).split('').reverse().join('')
            res.add(rightRev + suffix)
        }
    }

    return Array.from(res)
}

console.log(create('bat'))
console.log(create('aba'))
console.log(create('sssll'))
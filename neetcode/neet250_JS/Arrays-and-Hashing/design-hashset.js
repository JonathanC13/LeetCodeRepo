// https://leetcode.com/problems/design-hashset/

/*
Use a 2D Array for the hash table. Each index is a bucket and holds a linked list.
The index of the key is determined by a hashing function, I just used someone elses:
https://en.wikipedia.org/wiki/Hash_function#Multiplicative_hashing.

Here we use the following notations:

    1. K is our number (key), we want to hash.
    2. a is some big odd number (sometimes good idea to use prime number) I choose a = 1031237 without any special reason, it is just random odd number.
    3. m is length in bits of output we wan to have. We are given, that we have no more than 10000 operations overall, so we can choose such m, so that 2^m > 10000. I chose m = 15, so in this case we have less collistions.
    4. if you go to wikipedia, you can read that w is size of machine word. Here we do not really matter, what is this size, we can choose any w > m. I chose m = 20.
    So, everything is ready for function eval_hash(key): ((key*1031237) & (1<<20) - 1)>>5. Here I also used trick for fast bit operation modulo 2^t: for any s: s % (2^t) = s & (1<<t) - 1.

Time limit exceed. I'm fried.

Time: 
    add/remove/contains: O(m). m is the max number of nodes in a bucket

Space: O(2^15 * m). 2^15 is the number of buckets 
*/



var MyHashSet = function() {
    this.hashSet = new Array(1<<15).fill(null)
};

MyHashSet.prototype.generateHashIdx = function(key) {
    return ((key*1031237) & (1<<20) - 1)>>5
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    // since Set, must iterate to see if key already exists
    let hashKey = this.generateHashIdx(key)
    const node = {key: key, next: null}
    if (this.hashSet[hashKey] === null) {
        this.hashSet[hashKey] = node
    } else {
        let itr = this.hashSet[hashKey]
        while (itr !== null) {
            if (itr.key === key) {
                return
            }
        }

        // no dup, add
        const tmp = this.hashSet[hashKey]
        this.hashSet[hashKey] = node
        node.next = tmp
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const hashKey = this.generateHashIdx(key)
    let prev = null
    let itr = this.hashSet[hashKey]
    while (itr !== null) {
        if (itr.key === key) {
            if (prev === null) {
                this.hashSet[hashKey] = itr.next
            } else {
                prev.next = itr.next
            }
            break
        }

        prev = itr
        itr = itr.next
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const hashKey = this.generateHashIdx(key)
    let itr = this.hashSet[hashKey]
    while (itr !== null) {
        if (itr.key === key) {
            return true
        }

        itr = itr.next
    }
    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
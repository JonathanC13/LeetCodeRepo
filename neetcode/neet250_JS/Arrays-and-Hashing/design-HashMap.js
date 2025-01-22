// https://leetcode.com/problems/design-hashmap/

/*
    1. K is our number (key), we want to hash.
    2. a is some big odd number (sometimes good idea to use prime number) I choose a = 1031237 without any special reason, it is just random odd number.
    3. m is length in bits of output we want to have. We are given, that we have no more than 10000 operations overall, so we can choose such m, so that 2^m > 10000. I chose m = 15, so in this case we have less collistions.
    4. if you go to wikipedia, you can read that w is size of machine word. Here we do not really matter, what is this size, we can choose any w > m. I chose m = 20.
    So, everything is ready for function eval_hash(key): ((key*1031237) & (1<<20) - 1)>>5. Here I also used trick for fast bit operation modulo 2^t: for any s: s % (2^t) = s & (1<<t) - 1.

Create 2D array of size 2^15. The 2nd dimension of the array is to place the element and append any collisions. (linear probing.)

The key value pair will be an Object of {key, value}

- Time: O(1) - no collisions
- Space: O(2^15)
*/


var MyHashMap = function() {
    this.hashMap = new Array(1<<15).fill().map((e) => {return Array()})
};

MyHashMap.prototype.generateKey = function(key) {
    return ((key*1031237) & (1<<20) - 1)>>5
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    // generate the hash key.
    // if the array at the hash key is length 0, just push
    // else check if any elements have the same key, if yes then replace the value
    const hashkey = this.generateKey(key)

    for (let i = 0; i < this.hashMap[hashkey].length; i ++) {
        if (this.hashMap[hashkey][i]['key'] === key) {
            this.hashMap[hashkey][i]['value'] = value
            return
        }
    }
    // if not returned then just push
    this.hashMap[hashkey].push({key, value})

};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    // generate the hash key
    // within the array at the hash key, find the object with the same key
    
    const hashkey = this.generateKey(key)

    for (let i = 0; i < this.hashMap[hashkey].length; i ++) {
        if (this.hashMap[hashkey][i]['key'] === key) {
            return this.hashMap[hashkey][i]['value']
        }
    }

    return -1

};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    // generate the hash key
    // find the key at the hash key and remove

    const hashkey = this.generateKey(key)

    for (let i = 0; i < this.hashMap[hashkey].length; i ++) {
        if (this.hashMap[hashkey][i]['key'] === key) {
            this.hashMap[hashkey] = [...this.hashMap[hashkey].slice(0, [i]), ...this.hashMap[hashkey].slice(i + 1)] 
            return
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
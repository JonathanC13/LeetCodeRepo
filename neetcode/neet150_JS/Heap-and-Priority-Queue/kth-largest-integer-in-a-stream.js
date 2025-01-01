// https://neetcode.io/problems/kth-largest-integer-in-a-stream

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.minHeap = Array()

        for (let i = 0; i < nums.length; i ++) {
            this.add(nums[i])
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val)
        let i = this.minHeap.length - 1

        while (this.minHeap[i] < this.minHeap[this.parent(i)]) {
            this.swap(i, this.parent(i))
            i = this.parent(i)
        }

        let size = this.minHeap.length
        while (size > this.k) {
            console.log(size)
            this.deleteMin()
            size = this.minHeap.length
        }
        console.log('abc ', this.minHeap)
        return this.minHeap[0]
    }

    deleteMin() {
        this.minHeap[0] = this.minHeap.pop()
        console.log('heap ', this.minHeap)
        this.heapify(0)
        console.log('heap aft ', this.minHeap)
    }

    heapify(idx) {
        if (this.isLeaf(idx)) {
            return
        }

        let smallest = idx
        const l = this.leftChild(idx)
        const r = this.rightChild(idx)

        // If left child is smaller than root
        if (l < this.minHeap.length && this.minHeap[l] < this.minHeap[smallest])
            smallest = l;

        // If right child is smaller than smallest so far
        if (r < this.minHeap.length && this.minHeap[r] < this.minHeap[smallest])
            smallest = r;

        if (smallest !== idx) {
            this.swap(idx, smallest)
            this.heapify(smallest)
        } 
    }

    parent(idx) {
        return Math.floor((idx - 1) / 2)
    }

    leftChild(idx) {
        return (idx * 2) + 1
    }

    rightChild(idx) {
        return (idx * 2) + 2
    }

    isLeaf(idx) {
        if (idx > (this.minHeap / 2) && idx <= this.minHeap) {
            return true;
        }
        return false;
    }

    swap(a, b) {
        const tmp = this.minHeap[a]
        this.minHeap[a] = this.minHeap[b]
        this.minHeap[b] = tmp
    }
}

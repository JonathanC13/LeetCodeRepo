// https://neetcode.io/problems/last-stone-weight

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if (stones.length === 0) {
            return 0
        } else if (stones.length === 1) {
            return stones[0]
        }

        const maxHeap = Array()

        for (let i = 0; i < stones.length; i ++) {
            this.insert(maxHeap, stones[i])
        }
        
        // run the simulation
        while (maxHeap.length > 1) {
            const first = this.getFront(maxHeap)
            const second = this.getFront(maxHeap)
            if (second < first) {
                const newStone = first - second
                this.insert(maxHeap, newStone)
            }
        }

        return maxHeap.length === 0 ? 0 : this.getFront(maxHeap)
    }

    insert(maxHeap, val) {
        maxHeap.push(val)

        let i = maxHeap.length - 1
        while (maxHeap[i] > maxHeap[this.getParentIdx(i)]) {
            this.swap(maxHeap, i, this.getParentIdx(i))
            i = this.getParentIdx(i)
        }
    }

    getFront(maxHeap) {
        const front = maxHeap[0]

        maxHeap[0] = maxHeap[maxHeap.length - 1]
        maxHeap.pop()
        this.heapify(maxHeap, 0)

        return front
    }

    heapify(maxHeap, idx) {
        if (this.isLeaf(maxHeap, idx)) {
            return
        }

        let largest = idx
        const left = this.getLeftChild(idx)
        const right = this.getRightChild(idx)

        if (idx < maxHeap.length && maxHeap[largest] < maxHeap[left]) {
            largest = left
        }

        if (idx < maxHeap.length && maxHeap[largest] < maxHeap[right]) {
            largest = right
        }

        if (idx !== largest) {
            this.swap(maxHeap, idx, largest)
            this.heapify(maxHeap, largest)
        }
    }

    getParentIdx(idx) {
        return Math.floor((idx - 1) / 2)
    }

    getLeftChild(idx) {
        return (idx * 2) + 1
    }

    getRightChild(idx) {
        return (idx * 2) + 2
    }

    isLeaf(maxHeap, idx) {
        if (idx > (maxHeap.length / 2) && idx <= maxHeap.length) {
            return true;
        }
        return false;
    }

    swap(arr, a, b) {
        const tmp = arr[a]
        arr[a] = arr[b]
        arr[b] = tmp
    }
}

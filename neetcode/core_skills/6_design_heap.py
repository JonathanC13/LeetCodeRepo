class MaxHeap:
    def __init__(self):
        self.max_heap = []

    def get_left_child(self, idx):
        return (idx * 2) + 1
    
    def get_right_child(self, idx):
        return (idx * 2) + 2

    def get_parent(self, idx):
        return (idx - 1) // 2
    
    def swap(self, i, j):
        self.max_heap[i], self.max_heap[j] = self.max_heap[j], self.max_heap[i]

    def heapify_downwards(self, idx):

        left_child = self.get_left_child(idx)
        right_child = self.get_right_child(idx)
        largest = idx

        if (left_child < len(self.max_heap) and self.max_heap[left_child] > self.max_heap[largest]):
            largest = left_child

        if (right_child < len(self.max_heap) and self.max_heap[right_child] > self.max_heap[largest]):
            largest = right_child

        if (largest != idx):
            self.swap(largest, idx)
            self.heapify_downwards(largest)

    def heapify_upwards(self, idx):
        while idx > 0 and (self.max_heap[idx] > self.max_heap[self.get_parent(idx)]):
            parent = self.get_parent(idx)
            self.swap(idx, parent)
            idx = parent
    
    def insert(self, data):
        # append to the end
        self.max_heap.append(data)

        # compare with it's parent and if it is greater, swap
        self.heapify_upwards(len(self.max_heap) - 1)

    def delete_max(self):
        # for heaps, deletion always occurs at the root.
        # move the last element to the root and then heapify to it's proper location
        if (len(self.max_heap) == 0):
            return None
        else:
            temp = self.max_heap[0]
            self.max_heap[0] = self.max_heap[len(self.max_heap) - 1]
            self.max_heap.pop()

            self.heapify_downwards(0)

            return temp

    def print(self):
        for i in self.max_heap:
            print(f'{i}', end=', ')

        print()

if __name__ == '__main__':
    max_heap = MaxHeap()

    max_heap.insert(5)
    max_heap.print()

    max_heap.insert(10)
    max_heap.print()
    
    max_heap.insert(7)
    max_heap.print()
    
    max_heap.insert(15)
    max_heap.print()
    
    max_heap.insert(6)
    max_heap.print()

    max_heap.insert(8)
    max_heap.print()

    print('-----')
    max_heap.delete_max()
    max_heap.print()

    max_heap.delete_max()
    max_heap.print()
    
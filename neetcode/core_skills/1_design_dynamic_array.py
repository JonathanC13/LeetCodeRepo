class DynamicArray:
    
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.arr = [0 for _ in range(self.capacity)]

    def get(self, i: int) -> int:
        if (i < self.capacity):
            return self.arr[i]

    def set(self, i: int, n: int) -> None:
        if (i < self.capacity):
            self.arr[i] = n

    def pushback(self, n: int) -> None:
        if (self.size >= self.capacity):
            self.resize()

        self.arr[self.size] = n
        self.size += 1
        
    def popback(self) -> int:
        val = 0
        if (self.size > 0):
            self.size -= 1
            val = self.arr[self.size]
            self.arr[self.size] = 0
            
        return val

    def resize(self) -> None:
        self.capacity *= 2
        self.new_arr = [0 for _ in range(self.capacity)]

        for i in range(self.size):
            self.new_arr[i] = self.arr[i]

        self.arr = self.new_arr

    def getSize(self) -> int:
        return self.size
    
    def getCapacity(self) -> int:
        return self.capacity

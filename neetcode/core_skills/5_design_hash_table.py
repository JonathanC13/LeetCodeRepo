class DataItem:
    def __init__(self, key, data):
        self.key = key  # hashed key
        self.data = data

class HashTable:
    def __init__(self, size):
        self.size = size
        self.hash_table = [None] * size

    def hash_func(self, data):
        return data % self.size
    
    def insert(self, data):
        key = self.hash_func(data)
        data_item = DataItem(key, data)

        i = key
        while self.hash_table[i] is not None:
            # linear probe in case of collision

            i = (i + 1) % self.size # wrap around
            if (i == key):
                # returned to original index
                return False
            
        self.hash_table[i] = data_item
        return True

    def search(self, data):
        key = self.hash_func(data)

        i = key
        while self.hash_table[i] is not None:
            if (self.hash_table[i].data == data):
                return True, i
            
            i = (i + 1) % self.size

            if (i == key):
                break
        return False, None
    
    def delete(self, data):
        ret = self.search(data)

        if ret[0]:
            self.hash_table[ret[1]] = None
            return True
        else:
            return False

    def print_hash_table(self):
        for i in range(len(self.hash_table)):
            print(f'[{i}]:', end='')
            if self.hash_table[i] is not None:
                print(f'{self.hash_table[i].key}:{self.hash_table[i].data}', end = ', ')
            else:
                print('None', end= ', ')
        print()

if __name__ == "__main__":
    hash_table = HashTable(10)

    success = hash_table.insert(5)    # 5
    success = hash_table.insert(10)   # 0
    success = hash_table.insert(8)    # 8
    success = hash_table.insert(6)    # 6
    success = hash_table.insert(9)    # 9
    success = hash_table.insert(19)   # 9, collision 1
    success = hash_table.insert(29)   # 9, collision 2
    success = hash_table.insert(39)
    success = hash_table.insert(49)
    success = hash_table.insert(59)
    print(success)
    success = hash_table.insert(69)     # wrapped around, no room
    print(success)

    hash_table.print_hash_table()

    ret = hash_table.search(49)
    print(f'{ret[0]}, {ret[1]}')

    ret = hash_table.search(5)
    print(f'{ret[0]}, {ret[1]}')

    ret = hash_table.search(69)
    print(f'{ret[0]}, {ret[1]}')
    print('----')
    ret = hash_table.delete(39)
    print(ret)
    ret = hash_table.delete(20)
    print(ret)

    hash_table.print_hash_table()
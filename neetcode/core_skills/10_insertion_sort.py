# https://neetcode.io/problems/insertionSort

# Definition for a pair.
# class Pair:
#     def __init__(self, key: int, value: str):
#         self.key = key
#         self.value = value
class Solution:
    def insertionSort(self, pairs: List[Pair]) -> List[List[Pair]]:
        result_list = []
        
        if (not len(pairs)):
            return result_list

        result_list.append(pairs.copy())
        for i in range(1, len(pairs)):
            pair = pairs[i]
            j = i - 1
            while(pair.key < pairs[j].key and (j) >= 0):
                pairs[j + 1] = pairs[j]
                j -= 1

            pairs[j + 1] = pair

            result_list.append(pairs.copy())

        return result_list
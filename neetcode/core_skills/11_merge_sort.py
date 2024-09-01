# https://leetcode.com/problems/sort-an-array/

class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        
        def merge_sort(nums, start, end):
            if (start < end):
            
                mid = (start + end) // 2

                merge_sort(nums, start, mid)
                merge_sort(nums, mid + 1, end)
                merge(nums, start, mid, end)

        def merge(nums, start, mid, end):
            len_left = mid - start + 1  # since mid is floor division, + 1 for the left length
            len_right = end - mid

            arr_left = [None] * len_left
            arr_right = [None] * len_right

            # copy,
            for i in range(len_left):
                arr_left[i] = nums[start + i]
            for j in range(len_right):
                arr_right[j] = nums[mid + j + 1]

            # merge
            i, j = 0, 0
            k = start
            while (i < len_left and j < len_right):
                if (arr_left[i] <= arr_right[j]):
                    nums[k] = arr_left[i]
                    i += 1
                else:
                    nums[k] = arr_right[j]
                    j += 1
                
                k += 1

            # remainders
            while (i < len_left):
                nums[k] = arr_left[i]
                i += 1
                k += 1

            while (j < len_right):
                nums[k] = arr_right[j]
                j += 1
                k += 1

        merge_sort(nums, 0, len(nums) - 1)

        return nums
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:

        def quick_sort(lo, hi):
            nonlocal nums

            if (lo < hi):
                mid = partition(lo, hi)
                quick_sort(0, mid - 1)
                quick_sort(mid + 1, hi)
        
        def partition(lo, hi):
            nonlocal nums

            curr = lo - 1

            for walk in range(lo, hi):
                if nums[walk] <= nums[hi]:
                    curr += 1
                    nums[curr], nums[walk] = nums[walk], nums[curr]

            # place pivot
            curr += 1
            nums[curr], nums[hi] = nums[hi], nums[curr]
            return curr

        quick_sort(0, len(nums) - 1)
        return nums
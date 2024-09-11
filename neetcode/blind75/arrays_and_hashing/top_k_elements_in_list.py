# https://neetcode.io/problems/top-k-elements-in-list

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        if len(nums) == 0 or k == 0:
            return []

        res = []

        count = {}
        freq_buckets = [[] for _ in range(len(nums) + 1)]   # a freq of a num cannot exceed len. 2D array since multiple num may have the same freq

        # get counts
        for n in nums:
            count[n] = count.get(n, 0) + 1

        # put counts in bucket, where the count is the key and num is the value
        for n, cnt in count.items():
            freq_buckets[cnt].append(n)

        for i in range(len(freq_buckets) - 1, 0, -1):
            if (len(freq_buckets[i]) > 0):
                for n in freq_buckets[i]:
                    res.append(n)

                    if len(res) == k:
                        return res

        # arr_counts = []
        # res = []

        # count = 0
        # curr = nums[0]
        # for i in sorted(nums):
        #     if i == curr:
        #         count += 1
        #     else:
        #         arr_counts.append((curr, count))
        #         print(arr_counts)
        #         count = 1
        #         curr = i

        # # last value
        # arr_counts.append((curr, count))
        # print(arr_counts)
        # arr_counts.sort(reverse=True, key=lambda x:x[1])
        # for i in range(k):
        #     res.append(arr_counts[i][0])

        # return res
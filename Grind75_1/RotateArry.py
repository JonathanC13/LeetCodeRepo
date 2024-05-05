"""
https://leetcode.com/problems/rotate-array/
"""

class Solution:

    def gcdCalc(self, a, b):
        if (b == 0):
            return a
        else:
            return gcd(b, a % b)
    

    def rotateTempArrRight(self, arr: List[int], d: int) -> None:
        lenArr = len(arr)
        temp = [0] * lenArr

        # ensure rotation idx within range
        d = d % lenArr

        tempIdx = 0

        # section that overflows right to front of temp arr
        for i in range(lenArr - d, lenArr):
            temp[tempIdx] = arr[i]
            tempIdx = tempIdx + 1

        # place the rest in temp arr in its shifted position
        for i in range(0, lenArr - d):
            temp[tempIdx] = arr[i]
            tempIdx = tempIdx + 1

        # copy temp arr back to orignal arr
        for i in range(lenArr):
            arr[i] = temp[i]


    def rotateReverseRight(self, arr:List[int], d: int) -> None:
        lenArr = len(arr)
        d = d % lenArr

        def reverse(arr: List[int], start: int, end: int) -> None:
            while (start < end):
                temp = arr[start]
                arr[start] = arr[end]
                arr[end] = temp

                start = start + 1
                end = end - 1


        # initial reverse of the array so that values are in ball park section
        reverse(arr, 0, lenArr - 1)

        # reverse first section
        reverse(arr, 0, d - 1)

        # reverse remaining
        reverse(arr, d, lenArr - 1)


    def rotateJugglingRight(self, arr: List[int], d: int) -> None:

        lenArr = len(arr)
        rightRotate = d % lenArr

        # left rotations = len of arr - right rotations
        leftRot = lenArr - rightRotate

        # get number of sets
        gcd = self.gcdCalc(leftRot, lenArr)

        for i in range(gcd):
            # save first value to place at last index of the set when all other values rotated
            temp = arr[i]
            j = i

            while True:
                # rotate the values
                # using Juggling Algo for right rotation essentially jumps to index in the set that right before j
                k = (j + leftRot) % lenArr

                if (k == i):
                    # if target is back to the initial index, break
                    break

                # take the value of the index in the set that is before j
                arr[j] = arr[k]
                j = k

            # assign the last index's value
            arr[j] = temp

    
    def rotate(self, arr: List[int], d: int) -> None:
        #return self.rotateTempArrRight(arr, d)
        #return self.rotateReverseRight(arr, d)
        return self.rotateJugglingRight(arr, d)

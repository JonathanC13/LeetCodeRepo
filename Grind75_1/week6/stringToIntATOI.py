"""
https://leetcode.com/problems/string-to-integer-atoi/
"""

class Solution:
    def myAtoi(self, s: str) -> int:

        if (len(s) == 0):
            return 0

        # remove leading whitespace or 0s
        idx = 0
        for i in range(len(s)):
            if (s[i] == " "):
                idx = idx + 1
            else:
                break

        s = s[idx:]
        if (len(s) == 0):
            return 0

        # signedness
        sign = 1
        idx = 0
        if (s[0] == "-"):
            sign = -1
            idx = idx + 1
        elif (s[0] == "+"):
            idx = idx + 1
        
        s = s[idx:]
        if (len(s) == 0):
            return 0

        # conversion
        idx = 0
        for i in range(len(s)):
            if (ord("0") == ord(s[i])):
                idx = idx + 1
            else:
                break

        s = s[idx:]
        if (len(s) == 0):
            return 0

        strList = []

        for i in range(len(s)):
            if (ord("0") <= ord(s[i]) and ord(s[i]) <= ord("9")):
                strList.append(s[i])
            else:
                break

        lenStrList = len(strList)
        if (lenStrList == 0):
            return 0

        # rounding
        upper = "2147483647"
        lower = "2147483648"
        print (strList)
        if (lenStrList > 10):
            if (sign == 1):
                return int(upper)
            else:
                return int(lower) * -1

        iRet = 0
        order = lenStrList - 1
        canOverFlow = True
        
        for i in range(0, lenStrList):
            if (lenStrList == 10 and canOverFlow):
                if (sign == 1):
                    if (int(strList[i]) > int(upper[i]) and canOverFlow):
                        return int(upper)
                    elif (int(strList[i]) < int(upper[i])):
                        canOverFlow = False
                elif (sign == -1):
                    if (int(strList[i]) > int(lower[i]) and canOverFlow):
                        return int(lower) * -1
                    elif (int(strList[i]) < int(lower[i])):
                        canOverFlow = False

            curr = int(strList[i]) * (pow(10, order))
            order = order - 1
            iRet = iRet + curr

        return iRet * sign
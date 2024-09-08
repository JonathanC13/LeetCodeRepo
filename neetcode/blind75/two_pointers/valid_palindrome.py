# https://neetcode.io/problems/is-palindrome

class Solution:
    def is_alpha(self, c):
        return ((ord('a') <= ord(c) and ord(c) <= ord('z'))
                or (ord('0') <= ord(c) and ord(c) <= ord('9'))
        )

    def alphaNum(self, c):
        return (
                ord('a') <= ord(c) <= ord('z') or 
                ord('0') <= ord(c) <= ord('9'))

    def isPalindrome(self, s: str) -> bool:
        if not s:
            return True

        s = s.lower()
        left = 0
        right = len(s) - 1

        while left < right:
            # must skip non alpha characters
            while (left < right) and not self.is_alpha(s[left]):
                left += 1

            while (right > left) and not self.is_alpha(s[right]):
                right -= 1
            
            if s[left] != s[right]:
                return False
            else:
                left += 1
                right -= 1

        return True
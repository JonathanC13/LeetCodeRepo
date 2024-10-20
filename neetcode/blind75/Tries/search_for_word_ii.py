# https://neetcode.io/problems/search-for-word-ii

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:




        # forgot to use Trie lol, do again above
        # directions = [(0, -1), (1, 0), (0, 1), (-1, 0)]
        # rows = len(board)
        # cols = len(board[0])
        # res = []
        # visited = set()

        # def search(coord, word, idx, res, visited):
        #     if (coord[0] < 0 or coord[0] >= rows or coord[1] < 0 or coord[1] >= cols or idx >= len(word)):
        #         return False
        #     elif (word[idx] == board[coord[0]][coord[1]] and idx == len(word) - 1):
        #         res.append(word)
        #         return True
        #     elif (word[idx] != board[coord[0]][coord[1]]):
        #         return False
            
        #     # reserve for this recursive call forward
        #     visited.add(coord)
        #     found = False
        #     for d in directions:
        #         new_coord = (coord[0] + d[0], coord[1] + d[1])

        #         if (new_coord not in visited):
        #             if search(new_coord, word, idx + 1, res, visited):
        #                 # if true, it means this word was found, save result for later return to propagrate up
        #                 found = True

        #     # remove so it can be used in prev recursive call
        #     visited.remove(coord)

        #     return found

        # for r in range(rows):
        #     for c in range(cols):
        #         to_remove = -1
        #         for i in range(len(words)):
        #             if (words[i][0] == board[r][c]):
        #                 if search((r,c), words[i], 0, res, visited):
        #                     to_remove = i

        #         if (to_remove != -1):
        #             words.pop(to_remove)

        # return res
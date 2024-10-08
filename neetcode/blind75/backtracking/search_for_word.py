# https://neetcode.io/problems/search-for-word

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        if not board:
            return False;

        directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

        def dfs(word_idx, coord):
            if (word_idx >= len(word)):
                return True
            elif (coord[0] < 0 or coord[0] >= len(board) or
                coord[1] < 0 or coord[1] >= len(board[0]) or
                board[coord[0]][coord[1]] != word[word_idx]):
                return False
            # elif (board[coord[0]][coord[1]] == word[word_idx]):
            #     word_idx += 1

            # mark used tiles for the current search so that it will not be reused.
            board[coord[0]][coord[1]] = '1'

            for direct in directions:
                if (dfs(word_idx + 1, (coord[0] + direct[0], coord[1] + direct[1]))):
                    return True

            # unmark used tiles for the next search
            board[coord[0]][coord[1]] = word[word_idx]

            return False

        for r in range(len(board)):
            for c in range(len(board[0])):
                if word[0] == board[r][c]:
                    if dfs(0, (r, c)):
                        return True
        
        return False
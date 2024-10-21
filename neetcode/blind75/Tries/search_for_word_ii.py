# https://neetcode.io/problems/search-for-word-ii

class TrieNode:
    def __init__(self):
        self.children = dict()
        self.isEnd = False

        # replaces the need to actually delete nodes and just keep a counter
        self.num_words_use = 0  # for each word that contains this TrieNode, in the case where 2 or more words uses this TrieNode to ensure the result only has unique words

    def add_word(self, word):
        curr_node = self
        curr_node.num_words_use += 1
        for c in word:
            if (c not in curr_node.children):
                curr_node.children[c] = TrieNode()

            curr_node = curr_node.children[c]
            curr_node.num_words_use += 1

        curr_node.isEnd = True

    def isEmpty(self, node):
        if len(node.children) == 0:
            return True
        else:
            return False

    # soln's remove_word. Since it uses num_words_use, don't actually have to del nodes
    def remove_word(self, word):
        cur = self
        cur.num_words_use -= 1
        for c in word:
            if c in cur.children:
                cur = cur.children[c]
                cur.num_words_use -= 1

    # def remove_word(self, word):
    #     # 3 cases
    #     #   1. the word did not contain another word. Remove all TrieNodes
    #     #   2. the word is part of another word. Just change curr_node.isEnd = False
    #     #   3. the word contains another word. Remove all TrieNodes until the contained word

    #     def dfs(node, word, idx):
    #         if (node is None):
    #             return None
    #         elif (idx > len(word)):
    #             return None

    #         node.num_words_use -= 1

    #         # last child
    #         if (idx == len(word)):
    #             # if part of another word, all that is triggered is set isEnd to False (case 2)
    #             if (node.isEnd):
    #                 node.isEnd = False
                
    #             # if it is empty, it means that this word is not part of another word, but could contain another word (case 1 and 3), safe to del
    #             if (self.isEmpty(node)):
    #                 del node
    #                 node = None

    #             return node
            
    #         # if not the last char
    #         node.children[word[idx]] = dfs(node.children[word[idx]], word, idx + 1)
            
    #         # if node does not have any children and isEnd = False. Delete since this word is not part of another word, (case 1 and 3)
    #         if (self.isEmpty(node) and not node.isEnd):
    #             del node
    #             node = None
            
    #         return node

    #     node = self
    #     dfs(node, word, 0)

    def search_word(self, word):
        node = self

        for c in word:
            if (node is None or c not in node.children):
                return False

            node = node.children[c]

        return node.isEnd

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        rows = len(board)
        cols = len(board[0])
        directions = [(0, -1), (1, 0), (0, 1), (-1, 0)]
        visited = set()
        res = []

        root = TrieNode()
        for w in words:
            root.add_word(w)

        # for w in words:
        #     print(root.search_word(w))

        def search(coord, visited, trieNode, res, word):
            if (coord[0] < 0 or coord[0] >= rows or
                coord[1] < 0 or coord[1] >= cols or
                board[coord[0]][coord[1]] not in trieNode.children or
                # trieNode.children[board[coord[0]][coord[1]]] is None or   # since using num_words_use, don't actually need to del nodes
                trieNode.children[board[coord[0]][coord[1]]].num_words_use < 1 or
                coord in visited):
                return;

            visited.add(coord)
            trieNode = trieNode.children[board[coord[0]][coord[1]]]
            word += board[coord[0]][coord[1]]
            if (trieNode.isEnd):
                res.append(word)
                trieNode.isEnd = False  # need this here if not actually deleting node
                root.remove_word(word)

            for d in directions:
                search((d[0] + coord[0], d[1] + coord[1]), visited, trieNode, res, word)

            visited.remove(coord)
            return

        
        for r in range(rows):
            for c in range(cols):
                search((r, c), visited, root, res, '')

        return res

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
# https://neetcode.io/problems/foreign-dictionary

class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        # get the unique nodes for the adjacency list
        adj = dict()
        for word in words:
            for char in word:
                adj[char] = set()

        # since 'the words are sorted lexicographically based on the rules of this new language'
        # iterate through and compare the current word with it's next neighbor
        for i in range(len(words) - 1):
            word1 = words[i]
            word2 = words[i + 1]

            iter_len = min(len(word1), len(word2))

            # Rules, True if
            # The first letter where they differ is smaller in a than in b. (because when ordering words lexicographically, we compare letter by letter from left to right.)
            # There is no index i where a[i] != b[i] ( different) and a.length < b.length. (essentially a is a prefix of b)
            # so check if false, if len a > len b and b is a prefix of a (wrong order)
            if (len(word1) > len(word2) and word1[:iter_len] == word2[:iter_len]):
                return ''

            # to derive the order of the letters, get the letters that do not match and add to the adj list
            # word1[j] as the key since it is lexicographically smaller
            for j in range(iter_len):
                if (word1[j] != word2[j]):
                    adj[word1[j]].add(word2[j])
                    break   # only need the first different letter because when ordering words lexicographically, we compare letter by letter from left to right.

        # topological sort but getting the potential order of letters (path)
        visited = dict() # False = visited previously, True = Current path in the DFS, If not present, not yet visited.
        result = []

        # Post order adding
        def dfs(c):
            if c in visited:
                # if True, cycle in current path
                # if False, added already to result
                return visited[c]

            # add to visited so not re-visited on current path
            visited[c] = True

            for neigh in adj[c]:
                # if cycle, propagate true
                if dfs(neigh):
                    return True

            # remove so that it can be used for another path
            visited[c] = False
            result.append(c)
            return False
        
        # if disconnected graphs, multiple solutions
        for c in adj:
            # true if cycle, invalid
            if (dfs(c)):
                return ''

        # result is a stack, reverse for the answer and convert to string
        result.reverse()
        return "".join(result)
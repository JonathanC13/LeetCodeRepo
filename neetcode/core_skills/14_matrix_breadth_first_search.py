def BFS(matrix, targ, visited, r, c):
    queue = []

    # e, s, w, n
    directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    queue.append((r, c))
    visited[r][c] == True

    while len(queue) > 0:
        r, c = queue.pop(0)
        #print(f'{matrix[r][c]}')
        if matrix[r][c] == targ:
            return r, c
        else:
            for direction in directions:
                r1 = r + direction[0]
                c1 = c + direction[1]
                if r1 < 0 or r1 >= len(matrix) or c1 < 0 or c1 >= len(matrix[0]) or visited[r1][c1] == True:
                    continue
                visited[r1][c1] = True
                queue.append((r1, c1))

    return None

if __name__ == "__main__":
    matrix = [[1,4,7,11,15],
              [2,5,8,12,19],
              [3,6,9,16,22],
              [10,13,14,17,24],
              [18,21,23,26,30]]
    r = len(matrix)
    c = len(matrix[0])
    visited = [[False for _ in range(c)] for _ in range(r)]
    targ = 0
    ret = BFS(matrix, targ, visited, 0, 0)
    if ret is None:
        print('Not found')
    else:
        print(f'Found at {ret[0]}, {ret[1]}')


"""


It's a question of what you're optimizing for.

If you're optimizing to find the shortest possible route (by number of hops), then you need to do a breadth-first search. Why? Because if you're always expanding the shortest routes you have, then as soon as you find any route you know that it must be the shortest, because if any shorter route existed you would have already found it.

Essentially what you're doing it asking "Can I go from start to end in 0 hops? No. Can I do it in 1 hop? No. Can I do it in 2 hops? No. Can I do it in 3 hops? YES, and so now I'm done".

But other times, we don't care if we find the shortest route--we just want to know if a route exists at all. For example, if you're playing some sort of game, then as soon as you find a guaranteed winning sequence of moves, you know you're going to win. It doesn't matter if there were a shorter sequence of moves or not; we just wanted a winning play pattern and we found one.

In some cases, though, if we need to flood-fill all nodes, it doesn't really matter which you use; you end up visiting every node exactly once either way. In that case you can use whichever is easier and faster; and often the DFS can be expressed recursively in a much cleaner fashion.

I would also point out that there's a third option--Djikstra's algorithm, where you use a heap and some kind of heuristic to order your search (rather than a queue for BFS or a stack for DFS). With a heap you are paying for the overhead of push/pop operations (which are O(log N) rather than O(1) for a stack/queue) but it lets you prioritize your search by some other metric. Sometimes that's useful.

So to summarize:

    When in doubt, use BFS. It performs the same as DFS in the worst case and is significantly faster at finding the shortest route.

    When you only need to find one route and don't care how long it is, use DFS particularly if you can express it recursively.

    When you need to find the "best" route, and "best" isn't just "shortest", then consider using Djikstra's and a heap.


"""
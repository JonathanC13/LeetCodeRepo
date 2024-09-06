def DFS(matrix, targ, visited, r, c):
    if (r < 0 or r >= len(matrix) or c < 0 or c >= len(matrix[0]) or visited[r][c] == True):
        return None
    elif (matrix[r][c] == targ):  
        return r, c
    
    visited[r][c] = True
    #print(f'{matrix[r][c]}')
    # e, s, w, n
    directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    for direction in directions:
        ret = DFS(matrix, targ, visited, r + direction[0], c + direction[1])
        if ret is not None:
            return ret
        
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
    targ = 14
    ret = DFS(matrix, targ, visited, 0, 0)
    if ret is None:
        print('Not found')
    else:
        print(f'Found at {ret[0]}, {ret[1]}')
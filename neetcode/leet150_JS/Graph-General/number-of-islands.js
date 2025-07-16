// https://leetcode.com/problems/number-of-islands/?envType=study-plan-v2&envId=top-interview-150

/*
recursive dfs
    if r or c out of bounds or coordinate is '0'
        return

    grid[r][c] = '0'
    iterate directions to explore n, e, s, w

    return

main
    islands = 0
    iterate rows
        iterate cols
            if grid[r][c] === 1
                dfs(grid, r, c, rows, cols, directions)   // to mark all the connected land to '0', essentially visited.

    return islands
            
- Time: O(r * c)    // O(r * c * 4^(r + c))for each coordinate check if '1'. if true, for each connected '1' check 4 directions, r + c since moving row wise and col wise. But reduced to r * c since on visit it marks it, it will not be visited again
- Space: O(r * c)
*/

const dfs = (grid, r, c, rows, cols, directions) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
        return
    }

    grid[r][c] = '0'
    for (let [dr, dc] of directions) {
        dfs(grid, r + dr, c + dc, rows, cols, directions)
    }

    return
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islands = 0
  const rows = grid.length
  const cols = grid[0].length

  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  for (let r = 0; r < rows; r ++) {
    for (let c = 0; c < cols; c ++) {
        if (grid[r][c] === '1') {
            islands += 1
            dfs(grid, r, c, rows, cols, directions)
        }
    }
  }  

  return islands
};
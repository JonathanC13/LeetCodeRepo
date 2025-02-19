// http://leetcode.com/problems/construct-quad-tree/description/

/*
- edge case 1: if grid.length === 0: return null

DFS

    if (x2 < x1 || y2 < y1) {
        // no more elements
        return null
    }

    const node = new _Node(0)

    gridVal = getGridVal(grid, x1, x2, y1, y2)
    if (gridValCheck === 0 || gridValCheck === 1) {
        node.val = gridVal
        node.isLeaf = true
        return node
    }

    const midX = x1 + floor((x2 - x1) / 2)
    const midY = y1 + floor((y2 - y1) / 2)
    node.topLeft = this.dfs(grid, x1, midX + 1, y1, midY)
    node.topRight = this.dfs(grid, midX + 1, x2, y1, midY)
    node.bottomLeft = this.dfs(grid, x1, midX + 1, midY + 1, y2)
    node.bottomRight = this.dfs(grid, midX + 1, x2, midY + 1, y2)

    return node

- Time: O(4^(n) * (m * n)). (4^(n)) each node can have 4 children to create. * (m * n) check grid for value
- Space: O(m * n)
*/

/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    if (grid.length === 0) {
        return null
    }

    return dfs(grid, 0, grid.length, 0, grid[0].length)

};

var dfs = function(grid, r1, r2, c1, c2) {
    if (r2 <= r1 || c2 <= c1) {
        return null
    }

    const node = new _Node(true, false)

    const gridVal = getGridVal(grid, r1, r2, c1, c2)
    // console.log(gridVal, x1, x2, y1, y2)
    if (gridVal === 0 || gridVal === 1) {
        node.val = gridVal === 1 ? true : false
        node.isLeaf = true
        return node
    }

    const midR = r1 + Math.floor((r2 - r1) / 2)
    const midC = c1 + Math.floor((c2 - c1) / 2)
    node.topLeft = dfs(grid, r1, midR, c1, midC)
    node.topRight = dfs(grid, r1, midR, midC, c2)
    node.bottomLeft = dfs(grid, midR, r2, c1, midC)
    node.bottomRight = dfs(grid, midR, r2, midC, c2)
    // console.log(r1, midR, c1, midC)
    // console.log(r1, midR, midC, c2)
    // console.log(midR, r2, c1, midC)
    // console.log(midR, r2, midC, c2)

    return node
}

var getGridVal = function(grid, r1, r2, c1, c2) {
    if (r2 <= r1 || c2 <= c1) {
        return -1
    }
    
    let val = grid[r1][c1]
    for (let r = r1; r < r2; r ++) {
        for (let c = c1; c < c2; c ++) {
            if (grid[r][c] !== val) {
                return -1
            }
        }
    }

    return val

}
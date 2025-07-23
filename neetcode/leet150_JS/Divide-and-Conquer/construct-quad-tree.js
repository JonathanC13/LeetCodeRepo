// https://leetcode.com/problems/construct-quad-tree/description/?envType=study-plan-v2&envId=top-interview-150

/*
recursive
    base case 1: if r2 < r1 && c2 < c2:
        return null

    gridVal = getGridValue(grid, r1, r2, c1, c2)
    if (gridVal !== -1) {
        // leaf
        return new _Node(gridVal === 1 ? true : false, true, null, null, null, null)
    }

    get mid row = r1 + Math.floor((r2 - r1) / 2)
    get mid col = c1 + Math.floor((c2 - c1) / 2)

    newNode = new _Node(true, false, null, null, null, null)
    newNode.topLeft = split(grid, r1, midR, c1, midC)
    newNode.topRight = split(grid, r1, midR, midC, c2)
    newNode.bottomLeft = split(grid, midR, r2, c1, midC)
    newNode.bottomRight = split(grid, midR, r2, midC, c2)

    return newNode

get gridValue
    // return -1 if not the same value else returns the value
    val = grid[r1][c1]
    for (let r = r1; r < r2; r ++) {
        for (let c = c1; c < c2; c ++) {
            if (grid[r][c] !== val) {
                return -1
            }
        }
    }
    return val


- Time: O((r + c) log(r + c))
- Space: O(r + c)
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
const getGridValue = (grid, r1, r2, c1, c2) => {
    // return -1 if not the same value else returns the value
    val = grid[r1][c1]
    for (let r = r1; r < r2; r ++) {
        for (let c = c1; c < c2; c ++) {
            if (grid[r][c] !== val) {
                return -1
            }
        }
    }
    return val
}

const split = function(grid, r1, r2, c1, c2) {
    if (r2 < r1 && c2 < c2) {
        return null
    }

    const gridVal = getGridValue(grid, r1, r2, c1, c2)
    if (gridVal !== -1) {
        // leaf
        return new _Node(gridVal === 1 ? true : false, true, null, null, null, null)
    }

    const midR = r1 + Math.floor((r2 - r1) / 2)
    const midC = c1 + Math.floor((c2 - c1) / 2)

    const newNode = new _Node(true, false, null, null, null, null)
    newNode.topLeft = split(grid, r1, midR, c1, midC)
    newNode.topRight = split(grid, r1, midR, midC, c2)
    newNode.bottomLeft = split(grid, midR, r2, c1, midC)
    newNode.bottomRight = split(grid, midR, r2, midC, c2)

    return newNode
}

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    return split(grid, 0, grid.length, 0, grid[0].length)
};
// https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75

/*
create Map for the rows strings and freq
create Map for the cols strings and freq

build the row values into strings
iterate the rows
    iterate the cols

build the col values into string
iterate the cols
    iterate the rows

    increment in mapRows

iterate the Map
    if freq > 1
        pairs += freq

    increment in mapCols

iterate mapRows
    if mapCols has key
        pairs = mapRows v * mapCols v

- Time: O(n^2)
- Space: O(n + n)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length
    const mapRows = new Map()
    const mapCols = new Map()
    for (let r = 0; r < n; r ++) {
        let str = ''
        for (let c = 0; c < n; c ++) {
            str += grid[r][c] + ','
        }

        if (!mapRows.has(str)) {
            mapRows.set(str, 0)
        }
        mapRows.set(str, mapRows.get(str) + 1)
    }

    for (let c = 0; c < n; c ++) {
        let str = ''
        for (let r = 0; r < n; r ++) {
            str += grid[r][c] + ','
        }

        if (!mapCols.has(str)) {
            mapCols.set(str, 0)
        }
        mapCols.set(str, mapCols.get(str) + 1)
    }
    
    let pairs = 0
    for (let [k, v] of mapRows.entries()) {
        if (mapCols.has(k)) {
            pairs += v * mapCols.get(k)
        }
    }

    return pairs
};
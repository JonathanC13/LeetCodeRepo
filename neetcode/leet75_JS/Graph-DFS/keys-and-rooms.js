// https://leetcode.com/problems/keys-and-rooms/?envType=study-plan-v2&envId=leetcode-75

/*
Already an adjacency list
    index: room
    val: Array of rooms it can access

create a Set to save the rooms already visited

*func recursive dfs
    base case 1: if room in visited:
        return

    add room to visited

    for each neigh
        go to the room

    return

return Set.size === rooms.length

- Time: O(V + E)
- Space: O(V + E)
*/

const dfs = (rooms, rm, visited) => {
    if (visited.has(rm)) {
        return
    }

    visited.add(rm)

    for (let i = 0; i < rooms[rm].length; i ++) {
        dfs(rooms, rooms[rm][i], visited)
    }

    return
}

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    if (rooms.length <= 1) {
        return true
    }
    const n = rooms.length
    const visited = new Set()
    dfs(rooms, 0, visited)

    return visited.size === n
};
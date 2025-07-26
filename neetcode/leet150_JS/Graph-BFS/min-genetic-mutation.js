// https://leetcode.com/problems/minimum-genetic-mutation/description/?envType=study-plan-v2&envId=top-interview-150

/*
if startGene === endGene: return 0

create an undirected adjacency list for the bank gene strings
add the startGene as directed
- Time: O(n*n*8)
- Space: O(n + e)

create visited Set to avoid loops
changes = 0
create a queue with Deque
enqueue the startGene
while q is not emtpy
    changes += 1
    quSize = q.size()
    iterate the quSize
        pop = dequeue
        
        for neighbors in adjList
            if adjList.get(pop)[i] === endGene
                return changes
            
            if neigh not in visited set
                qu.enqueue(neigh)

return -1

- Time: O(n^2 + n + E)
- Space: O(n + E)

*/

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    if (startGene === endGene) {
        return 0
    }

    bank.push(startGene)

    const adjMap = new Map()
    for (let i = 0; i < bank.length; i ++) {
        if (adjMap.has(bank[i]) === false) {
            adjMap.set(bank[i], new Array())
        }
        
        for (let j = i + 1; j < bank.length; j ++) {
            if (bank[i] === bank[j]) {
                continue
            }

            if (adjMap.has(bank[j]) === false) {
                adjMap.set(bank[j], new Array())
            }
            let diff = 0
            for (let k = 0; k < bank[j].length; k ++) {
                if (bank[i][k] !== bank[j][k]) {
                    diff += 1
                }
                if (diff > 1) {
                    break
                }
            }
            if (diff === 1) {
                adjMap.get(bank[i]).push(bank[j])
                adjMap.get(bank[j]).push(bank[i])
            }
        }
    }

    //console.log(adjMap)
    const visited = new Set()
    let changes = 0
    const qu = new Deque()
    qu.pushBack(startGene)
    while (qu.size() > 0) {
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const pop = qu.popFront()

            for (let j = 0; j < adjMap.get(pop).length; j ++) {
                const neigh = adjMap.get(pop)[j]
                if (neigh === endGene) {
                    return changes + 1
                }

                if (visited.has(neigh) === false) {
                    visited.add(neigh)
                    qu.pushBack(neigh)
                }
            }
        }
        changes += 1
    }
    
    return -1
};
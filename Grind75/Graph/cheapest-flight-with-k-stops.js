// https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

/**
main
    create adjList
        index: airport
        value: Array of edges; [dest, price]

    //recursively determine path to dst and it will return the cheapest within k stops.

    // need to employ Dijkstra-like algo since weighted edges.
    distances = new Array(n).fill(Number.POSITIVE_INFINITY)
    distances[src] = 0

    BFS
    create Queue for the next node to evaluate    // element [price, port, stops]. Queue instead of priority queue since the restraint is k stops, by processing all the children first on the same stops number, it will save the min to that distances for the node at the stop number. If a port was visited in a prev stop number and a flight goes to that port after it is safe to overwrite if have lower cost since the path for the previous has moved on.
    qu.enqueue([0, src, 0])

    while (qu.size > 0) {
        const [frmSrc, port, stops] = qu.popFront()

        // update all neighbors
        for (let [neigh, cost] of adjList[port]) {
            if (stops > k) {   // > k since dst does not count as a stop. if stops === k, the next flight could be the dst
                continue
            }

            dist = frmSrc + cost
            if (dist < distances[neigh]){
                distances[neigh] = dist

                qu.pushBack([distance[neigh], neigh, stops + 1])
            }
            
        }
    }

    return distances[dst] === Number.POSITIVE_INFINITY ? -1 : distances[dst]    // must check at end since at most k stops, need to let queue go until no more nodes can be queued.

- Time: O(Edges * log(N))
- Space: O(N + E)


// TLE
* {number[]} adjList
* {number} i; curr airport
* {number} dst
* {number[]} visited
* {number} k
* {number} currCost
rec
    base case 1:
    if (i === dst)
        // since reached destination
        return currCost

    base case 2:
    if k < 0 or visited[i] === true:    // k < 0 since DST does not count as a stop. If at 0, the next could be the dst
        // cannot choose any more airports
        return Number.POS infin

    cost = Number.Pos infin
    visited[i] = true

    // explore connected airports
    for (let [to, price] of adjList[i]) {
        cost = Math.min(cost, rec(...)) // maintain the cheapest cost of the paths that reach the destination
    }

    visited[i] = false

    return cost

- Time: O(n + e)
- Space: O(n + e)

 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const adjList = new Array(n).fill().map((e) => {
        return new Array()
    })
    const visited = new Array(n).fill(false)

    for (let [from, to, price] of flights) {
        adjList[from].push([to, price])
    }

    const distances = new Array(n).fill(Number.POSITIVE_INFINITY)
    distances[src] = 0
    const qu = new Deque()
    qu.pushBack([0, src, 0])

    while (qu.size() > 0) {
        const [fromSrc, port, stops] = qu.popFront()

        for (let [to, cost] of adjList[port]) {
            if (stops > k) {
                continue
            }

            const dist = fromSrc + cost
            if (dist < distances[to]) {
                distances[to] = dist

                qu.pushBack([distances[to], to, stops + 1])
            }
        }
    }

    return distances[dst] === Number.POSITIVE_INFINITY ? -1 : distances[dst]

    // const res = rec(adjList, src, dst, visited, k, 0)
    // return res === Number.POSITIVE_INFINITY ? -1 : res
};

const rec = function(adjList, i, dst, visited, k, currCost) {
    if (i === dst) {
        return currCost
    }
    if (k < 0 || visited[i] === true) {
        return Number.POSITIVE_INFINITY
    }

    visited[i] = true
    let cost = Number.POSITIVE_INFINITY

    for (let [to, price] of adjList[i]) {
        cost = Math.min(cost, rec(adjList, to, dst, visited, k - 1, currCost + price))
    }

    visited[i] = false

    return cost
}
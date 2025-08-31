// https://leetcode.com/problems/bus-routes/

/*
edge case 1:
if (source === target) {
    return 0
}

create Map for all the stops and associated buses
    key: stop Number
    value: Array of buses that contain the stop number

create adjList for the buses and other buses that share common stops. Undirected graph
    index: bus number
    value: Array of buses that share stops

for "routes", convert each sub Array into Set so it is faster to check if the curr bus has the source and target stop

create a queue
iterate routes
    enqueue all buses that contain the source stop

create visited Array so that already checked buses are not re-boarded

busesNeeded = 0

while (qu is not empty)
    busesNeeded += 1    // get on a bus for the current route

    quSize = qu.size()  // need to process all the connected other buses that can transfer to that may contain the target stop

    iterate quSize
        const currBus = qu.popFront()

        if (routes[currBus].has(target)) {
            // the bus boarded has the target stop
            return busesNeeded
        }

        // explore all buses that the current bus can trasfer to
        for (let transferBus of adjMap.get(currBus)) {
            if (visited[transferBus] === true) {
                continue
            }

            visited[transferBus] = true
            qu.pushBack(transferBus)
        }


return -1

- Time: O(n + e)    // + since visited Array stops traversal of every edge
- Space: O(n + e)   // adjMap holds the n buses and edges are the connected buses


//////
// fail
create adjMap
    index: bus stop
    value: Array of stops it can go to
        each element will be: [stop, route number]

iterate the routes and populate the edges for the bus routes

created visited Set so that once a cycle has been detected do not need to continue since it will just loop
create a Queue for the nodes to process at the current stop to next stop
    element will be: [stop, route Number, buses]   // if the route number changes then it means +1 to the buses taken
enqueue [source, -1, 0]

while queue is not empty
    res = POS infin
    quSize = qu.size()

    // need to iterate all nodes on this level because it is possible that more than 1 bus route goes to the target. In that case, get the lowest number of buses to get to target
    for (0 to quSize)
        const [currStop, currRoute, busesTaken] = qu.popFront()

        if (currStop === target) {
            // if multiple ways to target, save the lowest number of buses
            res = Math.min(res, numOfBuses)
            continue    // don't need to continue
        }

        // explore the connected stops
        for (let [conn, routeNum] of adjMap.get(currStop)) {
            key = `${conn},${routeNum}`
            if (visited.has(key)) {
                continue
            }

            let numOfBuses = busesTaken
            if (routeNum !== currRoute) {
                // if to get to next stop requires bus change
                numOfBuses += 1
            }

            visited.add(key)
            queue.pushBack(conn, routeNum, numOfBuses)
        }
    }

    if (res !== Pos infin) {
        // target was reached
        return res
    }

return -1

- Time: O(n + e)
- Space: O(n + e)
*/

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {

    if (source === target) {
        return 0
    }

    // buses as the nodes and edges

    // group the buses that have common stops
    const stopsMap = new Map()
    for (let i = 0; i < routes.length; i ++) {
        for (let j = 0; j < routes[i].length; j ++) {
            if (!stopsMap.has(routes[i][j])) {
                stopsMap.set(routes[i][j], new Array())
            }
            stopsMap.get(routes[i][j]).push(i)
        }
    }

    // create adjList of the buses and the buses it can transfer to
    const adjList = new Array(routes.length).fill().map((e) => new Set())   // use a Set so that duplicates do not get added, but don't need to since later the Visited Array will skip over duplicates
    for (let [key, val] of stopsMap.entries()) {
        for (let i = 0; i < val.length -1; i ++) {
            const bus1 = val[i]
            for (let j = 1; j < val.length; j ++) {
                const bus2 = val[j]

                adjList[bus1].add(bus2)
                adjList[bus2].add(bus1)
            }
        }
    }

    // converting the routes to Sets so it is easier to find the buses that have the source and target stops
    for (let i = 0; i < routes.length; i ++) {
        routes[i] = new Set(routes[i])
    }

    // enqueue all buses that contain the source stop
    const qu = new Deque()
    for (let i = 0; i < routes.length; i ++) {
        if (routes[i].has(source)) {
            qu.pushBack(i)
        }
    }

    const visited = new Array(routes.length).fill(false)
    let busesTaken = 0

    while (qu.size() > 0) {
        const quSize = qu.size()
        busesTaken += 1

        for (let i = 0; i < quSize; i ++) {
            const currBus = qu.popFront()
            if (routes[currBus].has(target)) {
                return busesTaken
            }

            // target not found yet, board connected buses
            for (let transferBus of adjList[currBus]) {
                if (visited[transferBus] === true) {
                    continue
                }

                visited[transferBus] = true
                qu.pushBack(transferBus)
            }
        }
    }

    return -1
};

/*
fail

//console.log(routes.length)
    // [18,20,24,34,47,52,56,68,77,82,89,91,97,101,105,106,107,109,118,123,139,141,143,152,153,162,174,180,184,187,188,192,198,202,206,216,224]]
    const adjMap = new Map()
    for (let i = 0; i < routes.length; i ++) {
        for (let j = 0; j < routes[i].length; j ++) {
            if (!adjMap.has(routes[i][j])) {
                adjMap.set(routes[i][j], new Array())
            }

            // connect to next stop
            if (j + 1 < routes[i].length) {
                adjMap.get(routes[i][j]).push([routes[i][j + 1], i])
            } else {
                // wrap around
                adjMap.get(routes[i][j]).push([routes[i][0], i])
            }
        }
    }

    const visited = new Set()
    const qu = new Deque()
    qu.pushBack([source, -1, 0])
    let minBuses = Number.POSITIVE_INFINITY
    while (qu.size() > 0) {
        const quSize = qu.size()
        let res = Number.POSITIVE_INFINITY

        for (let i = 0; i < quSize; i ++) {
            const [currStop, currRoute, currBusesTaken] = qu.popFront()
            
            if (currStop === target) {
                minBuses = Math.min(minBuses, currBusesTaken)
                continue
            }

            for (let [conn, routeNum] of adjMap.get(currStop)) {
                const key = `${conn},${routeNum}`
                if (visited.has(key)) {
                    continue
                }

                let numOfBuses = currBusesTaken
                if (routeNum !== currRoute) {
                    numOfBuses += 1
                }

                visited.add(key)
                qu.pushBack([conn, routeNum, numOfBuses])
            }
        }

        // if (res !== Number.POSITIVE_INFINITY) {
        //     return res
        // }
    }

    console.log(minBuses)

    return -1
*/
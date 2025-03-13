// https://leetcode.com/problems/car-pooling/

/*
Example 1:
    Input: trips = [[2,1,5],[3,3,7]], capacity = 4
    Output: false
    My explaination:
        1. Pick up 2 from location 1. therefore capacity = 4 - 2 = 2
        2. trip[0] not finished yet and encounters trip[1] and it has 3 passengers. 3 > 2. false

Example 2:
    Input: trips = [[2,1,5],[3,3,7]], capacity = 5
    Output: true
    My explaination:
        Same as ex1 except when trip[1] encountered, it can take on the 3 passengers

create a PriorityQueue. sort by location in non-descending and if equal, sort by passengers so that the if same location the passengers get off first then on.
    enqueue
        1. starting location. elem = [numPassengers, trip[i][1]]    // getting on
        2. destination. elem = [-numPassengers, trip[i][2]]         // getting off

    This is so the events are processed in order and any time the remainingSeats < 0. return false

- Time: O(n log n). n trips * 2 ~= n
- Space: O(n).
*/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let remainingSeats = capacity
    const priQ = new PriorityQueue((a, b) => {
        const ord = a.location - b.location
        if (ord === 0) {
            return b.passengers > a.passengers ? 1 : -1
        }
        return ord
    })
    for (let i = 0; i < trips.length; i ++) {
        priQ.enqueue({'passengers': -1 * trips[i][0], 'location': trips[i][1]})    // getting on
        priQ.enqueue({'passengers': trips[i][0], 'location': trips[i][2]})    // getting off
    }

    while (priQ.size() > 0) {
        const currEvent = priQ.dequeue()
        console.log(currEvent, remainingSeats)
        remainingSeats += currEvent.passengers
        if (remainingSeats < 0) {
            return false
        }
    }

    return true
};
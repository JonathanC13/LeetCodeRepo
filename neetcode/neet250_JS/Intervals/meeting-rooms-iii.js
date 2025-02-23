// https://leetcode.com/problems/meeting-rooms-iii/

/*
- edge case 1: if meetings.length === 0: return 0
- edge case 2: if n === 1: return 0

sort the meetings' start time in non-descending order.

create a min Heap for the available rooms. Since the smallest numbered room is used first, in event of tie of availability it will have the smallest at the top.
create a min Heap for the [endtimes, room] so that the meeting that will end the soonest is at the top
create Array for the number of times a room has been used.

iterate the meetings
    let endTime = 0
    let room = 0
    if the rooms isEmpty  && !endTimes.isEmpty()
        meetingEnded = EndTimes heap.dequeue()
        rooms.enqueue(meetingEnded[1])
        // while there is an equal ending time OR the end time of the meeting in the heap is < meetings[i] start, keep popping to enqueue into rooms availability
        while(!endTimes.isEmpty() && (meetingEnded[0] === EndTimes.front()[0] || EndTimes.front()[0] < meetings[i][0])) {
            rooms.enqueue(EndTimes.dequeue()[1])
        }
        room = rooms.dequeue()
        endTime = meetingEnded[0] + (meetings[i].end - meetings[i].start)
        // now can choose the lowest numbered room from the rooms heap and enqueue
        EndTimes.enqueue([meetingEnded[0] + (meetings[i].end - meetings[i].start), room])
    else // just take the available room
        endTime = meetings[i].end

    room = rooms.dequeue()
    EndTimes.enqueue([endTime, room])
    roomsUsed[room] += 1

iterate roomsUsed for max

- Time: O(n log n). n log n for sort. + n * log n (meetings * access to heaps). + n to iterate roomsUsed
- Space: O(n). 3 * n for heaps and roomsUsed




n = 2
meetings = 
[[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10]]
*/

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    if (meetings.length === 0) {
        return 0
    }
    if (n === 1) {
        return 0
    }

    meetings.sort((a, b) => {return a[0] - b[0]})

    const r = []
    for (let i = 0; i < n; i ++) {
        r.push(i)
    }
    const rooms = MinPriorityQueue.fromArray(r);

    const endTimes = new PriorityQueue((a, b) => 
        {
            const ord = a[0] - b[0]
            if (ord === 0) {
                return a[1] - b[1]
            }
            return ord
        }
    )  // [endTime, room]. MIN PRIO QUEUE if endTime equal, order by room in non descending so when room meeting closed it chooses the room with lowest room number
    const roomUsed = new Array(n).fill(0)

    for (let i = 0; i < meetings.length; i ++) {
        // while the top of endTimes is less than the meetings[i] start time, remove because this meeting cannot start until previous are complete and THEN it chooses the lowest numbered room
        while (!endTimes.isEmpty() && endTimes.front()[0] <= meetings[i][0]) {
            rooms.enqueue(endTimes.dequeue()[1])
        }

        let endTime = 0
        // if available rooms, no adjustment needed.
        if (!rooms.isEmpty()) {
            endTime = meetings[i][1]
        } else {
            // there are no rooms available and the start time of meetings[i] is less than the ends in endTimes
            // remove soonest to end meeting AND any that have equal end time
            const meetingEnded = endTimes.dequeue()
            rooms.enqueue(meetingEnded[1])

            // while there is an equal ending time, keep popping to enqueue into rooms availability
            // while(!endTimes.isEmpty() && (meetingEnded[0] === endTimes.front()[0])) { // DONT NEED TO PRIO QUEUE SORTED PROPERLY
            //     rooms.enqueue(endTimes.dequeue()[1])
            // }

            // adjust end time of meetings[i] to enqueue
            endTime = meetingEnded[0] + (meetings[i][1] - meetings[i][0])
        }

        const room = rooms.dequeue()
        roomUsed[room] += 1
        endTimes.enqueue([endTime, room])
    }
    
    let room = 0
    for (let i = 1; i < roomUsed.length; i ++) {
        if (roomUsed[i] > roomUsed[room]) {
            room = i
        }
    }
    return room
};
// https://leetcode.com/problems/dota2-senate/

/*
Time: O(n)
Space: O(n)

create a queue for Radiant and Dire
iterate the senate
    if 'R' enqueue index to Radiant
    else enqueue index to Dire

while !Radiant.empty && !Dire.empty
    pop Radiant front
    pop Dire front

    if (radIdx < direIdx) {
        // only enqueue the one that does veto
        Radiant.enqueue(radIdx + n)
    } else {
        Dire.enqueue(direIdx + n)
    }

return (Radiant.size() > Dire.size() ? 'Radiant' : 'Dire')
*/

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    if (senate.length === 1) {
        if (senate[0] === 'R') {
            return 'Radiant'
        } else {
            return 'Dire'
        }
    }

    const RadQ = new Array()
    const DireQ = new Array()

    for (let i = 0; i < senate.length; i ++) {
        if (senate[i] === 'R') {
            RadQ.push(i)
        } else {
            DireQ.push(i)
        }
    }

    while (RadQ.length && DireQ.length) {
        const radIdx = RadQ.shift()
        const direIdx = DireQ.shift()
        
        if (radIdx < direIdx) {
            RadQ.push(radIdx + senate.length)
        } else {
            DireQ.push(direIdx + senate.length)
        }
    }
    
    return RadQ.length > DireQ.length ? 'Radiant' : 'Dire'
};
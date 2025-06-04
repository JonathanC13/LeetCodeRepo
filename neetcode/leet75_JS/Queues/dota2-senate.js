// https://leetcode.com/problems/dota2-senate/?envType=study-plan-v2&envId=leetcode-75

/*
create a Queue with an Array to hold the Radiant senator and it's index (turn). Front will be index 0, back will be length - 1
create a Queue with an Array to hold the Dire senator and it's index (turn)

while both Queues are not empty
    pop radiant
    pop dire

    if radiant senator index < dire, it means the radiant will veto the Dire
        radiant turn + senate.length    // update when their next turn occurs
        enqueue radiant to end
    else 
        dire turn + senate.length
        enqueue dire

return if radQu.length > 0 ? 'Radiant' : 'Dire'

- Time: O

*/

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radQu = new Array()
    let direQu = new Array()

    for (let i = 0; i < senate.length; i ++) {
        if (senate[i] === 'R') {
            radQu.push([senate[i], i])
        } else {
            direQu.push([senate[i], i])
        }
        
    }

    while (radQu.length > 0 && direQu.length > 0) {
        const rad = radQu.shift()
        const dire = direQu.shift()

        if (rad[1] < dire[1]) {
            rad[1] += senate.length
            radQu.push(rad)
        } else {
            dire[1] += senate.length
            direQu.push(dire)
        }
    }
    
    return radQu.length > 0 ? 'Radiant' : 'Dire'
};
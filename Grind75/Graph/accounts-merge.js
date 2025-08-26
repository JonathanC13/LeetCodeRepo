// https://leetcode.com/problems/accounts-merge/

/**
create a Map for the adjacency Map
    key: email
    value: Set of the emails that link to other emails
    * Represents undirected graph

res = []
create processed Set, so emails are not processed again
iterate the accounts
    let name = accounts[i][0]
    iterate from accounts[i][1] to end
        if !processed.has(accounts[i][j])
            emails = new Array
            rec(adjMap, key, processed, emails)

            emails.sort(in ascending)
            res.push([name, ...emails])

return res

- Time: O(n + n + e)    // n = all emails
- Space: O(n + e)
 */

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const adjMap = new Map()
    for (let i = 0; i < accounts.length; i ++) {
        for (let j = 1; j < accounts[i].length; j ++) {
            if (!adjMap.has(accounts[i][j])) {
                adjMap.set(accounts[i][j], new Set())
            }

            // check for pair to link to
            if (j + 1 < accounts[i].length) {
                if (!adjMap.has(accounts[i][j + 1])) {
                    adjMap.set(accounts[i][j + 1], new Set())
                }
                // undirected
                adjMap.get(accounts[i][j]).add(accounts[i][j + 1])
                adjMap.get(accounts[i][j + 1]).add(accounts[i][j])
            }
            
        }
    }

    const res = new Array()
    const processed = new Set()
    for (let i = 0; i < accounts.length; i ++) {
        const name = accounts[i][0]
        for (let j = 1; j < accounts[i].length; j ++) {
            if (!processed.has(accounts[i][j])) {
                const emails = new Array()
                rec(adjMap, accounts[i][j], processed, emails)
                emails.sort()   // exclude parameters for string compare, by default ascending
                res.push([name, ...emails])
            }
        }
    }

    return res
};

const rec = function(adjMap, eml, processed, emails) {
    if (processed.has(eml)) {
        return
    }

    emails.push(eml)
    processed.add(eml)

    for (let nxt of adjMap.get(eml)) {
        rec(adjMap, nxt, processed, emails)
    }
    return
}
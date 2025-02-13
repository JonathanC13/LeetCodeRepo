// https://leetcode.com/problems/accounts-merge/

/*
Array parents = len(accounts.length)
rank = array
create a Set for the key: emails and value: account idx, i
iterate the accounts, i
    iterate the emails
        if (Set has email) {
            union(parent, rank, i, Set.get(email))    // union the new account with the shared email with the current owner of the same email that exists.
        }

        Set.set(email, i)   // add email: acc to Set. Ok if override the previous acc since unioned, it will union with the same parent

res = new Map
iterate parent
    if (i === parent[i])
        // parent of itself.
        res.set(i, push(new Set(accounts[i].slice(1))))
    else {
        const par = unionFind(parent, i)
        res.set(par, new Set([...res.get(par), ...accounts[i].slice(1)]))
    }

const final = []
iterate key, val res
    final.push(accounts[key], Array.from(val).sort((a, b) => {return a - b}))

return final

- Time: O(n * m). n accounts * m emails + n for result * log n sort
- Space: O(n * m). n * m + n for parent

*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const n = accounts.length
    
    const rank = new Array(n).fill(0)
    const parent = new Array(n)

    for (let i = 0; i < n; i ++) {
        parent[i] = i
    }

    const emails = new Map()    // map key: email, value: account idx
    
    for (let i = 0; i < n; i ++) {
        for (let j = 1; j < accounts[i].length; j ++) {
            if (emails.has(accounts[i][j])) {
                unionAcc(parent, rank, i, emails.get(accounts[i][j]))
            }

            emails.set(accounts[i][j], i)
        }
    }
    
    const groups = new Map()
    for (let i = 0; i < parent.length; i ++) {
        const par = unionFind(parent, i)
        if (groups.has(par)) {
            groups.set(par, new Set([...groups.get(par), ...accounts[i].slice(1)]))
        } else {
            groups.set(par, new Set(accounts[i].slice(1)))
        }
    }

    const final = []
    for (let [accIdx, emails] of groups) {
        final.push([accounts[accIdx][0], ...Array.from(emails).sort()]) // f'ing sort
    }

    return final
    
};

var unionFind = function(parent, i) {
    const node = parent[i]
    if (node !== parent[node]) {
        return parent[i] = unionFind(parent, node)
    }

    return node
}

var unionAcc = function(parent, rank, x, y) {
    const xJt = unionFind(parent, x)
    const yJt = unionFind(parent, y)

    if (rank[xJt] < rank[xJt]) {
        parent[xJt] = yJt
    } else if (rank[yJt] > rank[yJt]) {
        parent[yJt] = xJt
    } else {
        parent[yJt] = xJt
        rank[xJt] +=1
    }

    return
}


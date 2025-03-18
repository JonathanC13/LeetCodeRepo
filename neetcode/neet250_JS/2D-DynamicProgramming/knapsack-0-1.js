const knapSack01 = (weights, profits, maxWeight) => {
    // method 1: dfs recursive/ 2 options; 1. include item in knapsack, 2. exclude. return the maxProfit seen
    // Time: O(2^n), Space: O(n)
    // return [initdfs(weights, profits, maxWeight, 0, 0, 0), altdfs(weights, profits, maxWeight, 0)]

    // method 2: dfs with memo
    /* 2D array 
        rows of length weights.length
        cols of maxWeight + 1 fill with -1

        recursive: if reach index [i][maxWeight] then it will have a value that represents the max profit from that item and weight forward

        -Time: O(n * maxWeight)
        -Space: O(n * maxWeight)
    */
//    return topDown(weights, profits, maxWeight)

    /*
    method 3: bottom up with tabulation
        create 2D Array 
            rows of length weights.length + 1
            cols of length maxWeight + 1
                fill with 0
            final result will be in dp[n][maxWeight] since building bottom up

            as iterating items and weights, propagate the max profit from the previous item and add to the current item

        -Time: O(n * maxWeight)
        -Space: O(n * maxWeight)
    */
   return bottomUp(weights, profits, maxWeight)
}

const bottomUp = (weights, profits, maxWeight) => {
    const dp = Array.from(new Array(weights.length + 1), (e) => {return new Array(maxWeight + 1).fill(0)})

    for (let r = 0; r <= weights.length; r ++) {
        for (let w = 0; w <= maxWeight; w ++) {
            // no item or 0 maxWeight
            if (r === 0 || w === 0) {
                dp[r][w] = 0
            } else {
                // propagate the previous max Profit
                const exclude = dp[r-1][w]

                let include = 0
                // if item can fit, add the profit of the item + the max profit of the other items that could fit
                if (weights[r - 1] <= w) {
                    include = profits[r - 1] + dp[r-1][w - weights[r-1]]
                }
                console.log(exclude, include)
                dp[r][w] = Math.max(exclude, include)
            }
        }
    }
    console.log(dp)
    return dp[weights.length][maxWeight]
}

const topDown = (weights, profits, maxWeight) => {
    const memo = Array.from(new Array(weights.length), (e) => new Array(maxWeight + 1).fill(-1))

    return topDownDFS(weights, profits, maxWeight, 0, memo) 
}

const topDownDFS = (weights, profits, maxWeight, i, memo) => {
    if (i === weights.length || maxWeight <= 0) {
        return 0
    }
    if (memo[i][maxWeight] !== -1) {
        return memo[i][maxWeight]
    }

    const exclude = topDownDFS(weights, profits, maxWeight, i + 1, memo)

    let include = 0
    if (maxWeight - weights[i] >= 0) {
        include = topDownDFS(weights, profits, maxWeight - weights[i], i + 1, memo) + profits[i]
    }

    memo[i][maxWeight] = Math.max(exclude, include)
    return memo[i][maxWeight]
}

const initdfs = (weights, profits, maxWeight, i, currWeight, currProfit) => {
    if (currWeight > maxWeight) {
        return 0
    }
    if (i === weights.length) {
        return currProfit
    }

    // 2 options
    // 1. exclude
    const excluded = initdfs(weights, profits, maxWeight, i + 1, currWeight, currProfit)
    // 2. include
    const included = initdfs(weights, profits, maxWeight, i + 1, currWeight + weights[i], currProfit + profits[i])
    
    return Math.max(excluded, included)
}

const altdfs = (weights, profits, maxWeight, i) => {
    if (i === weights.length || maxWeight <= 0) {
        return 0
    }

    // exclude
    let exclude = altdfs(weights, profits, maxWeight, i + 1)

    let include = 0
    if (maxWeight - weights[i] >= 0) {
        include = altdfs(weights, profits, maxWeight - weights[i], i + 1) + profits[i]
    }

    return Math.max(exclude, include)
}

// Driver
let val = [1, 2, 3];
let wt = [4, 5, 1];
let W = 4;

console.log(knapSack01(wt, val, W));

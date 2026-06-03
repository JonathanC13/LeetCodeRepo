// https://neetcode.io/problems/design-twitter-feed/question

/**
 * NOTE: this exercise inputs include calls to follow and unfollow when either may not exist, therefore always check if need to create.
 * NOTE: Also handle user follow and unfollow themselves. In newsFeed ignore its userId if appears in following
 * NOTE: TweetId is not strictly increasing from inputs. Must track time/order yourself. 
 * 
 * 1. Assumptions
 *  1. Above
 * 
 * 2. input validation
 *  1. postTweet
 *      1. userId
 *          - typeof userId === 'number'
 *          - userId >= 0
 *      2. tweetId
 *          - typeof tweetId === 'number'
 *          - tweetId >= 0
 * 
 *  2. getNewsFeed
 *      1. userId
 *          - typeof userId === 'number'
 *          - userId >= 0
 * 
 *  3. follow / unfollow
 *      1. userId
 *          - typeof userId === 'number'
 *          - userId >= 0
 * 
 * 3. time and space constraints
 *  postTweet
 *      BTTC: O(1)
 *      Space: O(1) // create tweet
 * 
 *  getNewsFeed
 *      BTTC: O(m * n * log(10))  // m = # of following, n = average number of tweets of all following
 *      Space: O(1)
 * 
 *  follow / unfollow
 *      BTTC: O(1)
 *      Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. ...
 * 
 *  test cases
 *  1. follow 2, get Feed, unfollow 1, get Feed
 *      input: 
 *          operations = ["Twitter", "postTweet", [1, 10], "postTweet", [2, 20], "getNewsFeed", [1], "getNewsFeed", [2], "follow", [1, 2], "getNewsFeed", [1], "getNewsFeed", [2], "unfollow", [1, 2], "getNewsFeed", [1]]
 *      expected output
 *          [null, null, null, [10], [20], null, [20, 10], [20], null, [10]]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Data structure:
 *      users = {
 *          1: {
 *              following: new Set() // for Time O(1)
 *              Tweets: [[tweetTime, tweetId], ...] // tweetTime internally tracked to ensure a attribute is always increasing.
 *          }
 *          ,...
 *          
 *      }
 * 
 *  follow
 *      check if followerId not exists: create
 *      check if followeeId not exists: create
 *      users.get(followerId).get(following).add(followeeId)
 * 
 *  unfollow
 *      check if followerId not exists: create
 *      check if followeeId not exists: create
 *      users.get(followerId).get(following).delete(followeeId)
 * 
 *  postTweet
 *      check if userId not exists: create
 *      users.get(userId).get(tweets).push([this.time, tweetId])
 *      this.time += 1
 * 
 *  getNewsFeed
 *      const minPriQueue where capacity is 10, sort by tweetTime asc
 *          smallest at top(front). (a, b) => a - b
 *      iterate own tweets into minPriQ
 * 
 *      iterate following's tweets
 *          if at max 10 and tweetTime < minPriQ top: early break to next following
 * 
 * 7. algos
 *  - Priority Queue operations
 * 
 * 8. data structures
 *  - Heap with priority queue
 *  - hash map
 * 
 * 9. complexity
 *  getNewsFeed
 *      Time: O(m * n * log(10))    // m = # of following, n = average number of tweets of all following
 *      Space: O(10)
 * 
 *  Object
 *      Space: O(users * total tweets)
 */

class Twitter {
    constructor() {
        this.users = new Map()
        this.feedCap = 10
        this.time = 0
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, new Map([["following", new Set()],["tweets", new Array()]]))
        }

        this.users.get(userId).get("tweets").push([this.time, tweetId])
        this.time += 1
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const minPriQ = new PriorityQueue((a, b) => {
            return a[0] - b[0]
        })

        const myTweets = this.users.get(userId).get("tweets")
        let i = myTweets.length - 1
        while (minPriQ.size() < this.feedCap && i >= 0) {
            minPriQ.enqueue(myTweets[i])
            i -= 1
        }

        for (let f of this.users.get(userId).get("following")) {
            if (f === userId) {
                continue
            }
            const fTweets = this.users.get(f).get("tweets")
            for (let j = fTweets.length - 1; j >= 0; j --) {
                if (minPriQ.size() === this.feedCap && fTweets[j][0] <= minPriQ) {
                    break
                }

                minPriQ.enqueue(fTweets[j])
                if (minPriQ.size() > this.feedCap) {
                    minPriQ.dequeue()
                }
            }
        }
        
        const feed = new Array()
        while (minPriQ.size() > 0) {
            feed.push(minPriQ.dequeue()[1])
        }

        return feed.reverse()

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.users.has(followerId)) {
            this.users.set(followerId, new Map([["following", new Set()],["tweets", new Array()]]))
        }
        if (!this.users.has(followeeId)) {
            this.users.set(followeeId, new Map([["following", new Set()],["tweets", new Array()]]))
        }

        this.users.get(followerId).get("following").add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (!this.users.has(followerId)) {
            this.users.set(followerId, new Map([["following", new Set()],["tweets", new Array()]]))
        }
        if (!this.users.has(followeeId)) {
            this.users.set(followeeId, new Map([["following", new Set()],["tweets", new Array()]]))
        }

        this.users.get(followerId).get("following").delete(followeeId)
    }
}

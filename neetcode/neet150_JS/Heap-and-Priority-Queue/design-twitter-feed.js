// https://neetcode.io/problems/design-twitter-feed

class Twitter {
    constructor() {
        this.usersMap = new Map()
        this.feedSize = 10
        this.timestamp = 0
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.createUser(userId)

        // Cannot use Data.now() as timestamp, the operation runs so fast that the timestamps end up all the same
        // use object tracked timestamp manually. this.timestamp
        this.usersMap.get(userId)['tweets'].push({timestamp: this.timestamp += 1, tweetId: tweetId})

    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const following = this.usersMap.get(userId)['following']
        const tweets = this.usersMap.get(userId)['tweets']
        const minHeap = new MinPriorityQueue((tweet) => {return tweet['timestamp']})

        // CAN ALSO FOLLOW THEMSELVES. need a seen set to not re-add the same tweet. 1st from checking own tweets, 2nd from checking following tweets which where one is itself.
        const seen = new Set()

        // the user's tweets
        this.addTweetToHeap(minHeap, tweets, seen)

        // following tweets
        for (let followee of following) {
            const followeeTweets = this.usersMap.get(followee)['tweets']
            this.addTweetToHeap(minHeap, followeeTweets, seen)
        }

        const newsFeed = []
        while(minHeap.size() > 0) {
            newsFeed.push(minHeap.dequeue()['tweetId'])
        }

        // since used min heap, reverse so that the most recent are first
        return newsFeed.reverse()

    }

    addTweetToHeap(heap, tweets, seen) {
        for (let i = tweets.length - 1; i >= 0; i --) {
            if (heap.size() === this.feedSize && tweets[i]['timestamp'] < heap.front()) {
                // the remaining tweets will be too old to continue adding because they will just be remove right after
                return
            }

            if (seen.has(tweets[i]['tweetId'])) {
                continue
            } else {
                seen.add(tweets[i]['tweetId'])
                heap.enqueue(tweets[i])

                while (heap.size() > this.feedSize) {
                    heap.dequeue()
                }
            } 
        }
        
    }

    createUser(id) {
        if (!this.usersMap.has(id)) {
            this.usersMap.set(id, {following: new Set(), tweets: []})
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        // In the description, it did not specify that the followerId should be created if it does not exists and also able to follow a followeeId that does not exist
        // if (!this.usersMap.get(followerId) || !this.usersMap.get(followeeId)) {
        //     // cannot complete operation
        //     return
        // } else {
        //     this.usersMap.get(followerId)['following'].add(followeeId)
        // }

        this.createUser(followerId)

        this.usersMap.get(followerId)['following'].add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        // if (!this.usersMap.get(followerId) || !this.usersMap.get(followeeId)) {
        //     // cannot complete operation
        //     return
        // } else {
        //     this.usersMap.get(followerId)['following'].delete(followeeId)
        // }

        this.usersMap.get(followerId)['following'].delete(followeeId)
    }
}

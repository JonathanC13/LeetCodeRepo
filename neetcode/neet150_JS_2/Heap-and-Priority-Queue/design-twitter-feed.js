// https://neetcode.io/problems/design-twitter-feed

/*
**NOTE: this exercise inputs include calls to follow and unfollow when either may not exist, therefore always check if need to create.
**NOTE: Also handle user follow and unfollow themselves. In newsFeed ignore its userId if appears in following
**NOTE: TweetId is not strictly increasing from inputs. Must track time/order yourself. 

constructor
    map:
        key = userID
        value = {
            tweets: []  // newer tweets at end
            following: new Set  // easier access to unfollow incase infinity grows and handles dup
            newsfeed: minPriQ   // will remove tweets that are too old (lower time) when size > 10. 
        }

    - Space: O(U * F + U * t)   U = total number of users, F = max number of following of all users, t = max number of tweets of all users

createUser
    - Time: O(1)

postTweet
    if user does not exist
        create

    append to user's tweets

    - Time: O(1)

getNewsFeed
    iterate own tweets from end since newer tweets pushed at end
        if newsfeed.size() === 10 && tweetId < newsfeed.front()
            break, since no need to continue because the rest will be older

        newsfeed.enqueue(tweet)

        while (newsfeed.size() > 10) {
            newsfeed.dequeue()
        }

    iterate following
        iterate following's tweets
            if newsfeed.size() === 10 && tweetId < newsfeed.front()
                break, since no need to continue because the rest will be older

            newsfeed.enqueue(tweet)

            while (newsfeed.size() > 10) {
                newsfeed.dequeue()
            }

    - Time: O(Following * total tweets log 10)

follow
    create follower if does not exist
    create followeeId if does not exist
    - Time: O(1)

unfollow
    - Time: O(1)

*/

class Twitter {
    constructor() {
        this.users = new Map()
        this.newsFeedSize = 10
        this.time = 0
    }

    createUser(userId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, {tweets: new Array(), following: new Set()})
        }
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.createUser(userId)

        this.users.get(userId).tweets.push([this.time, tweetId])
        this.time += 1
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const newsFeed = new MinPriorityQueue((elem) => elem[0])

        // tweet = [time, tweetId]
        const userTweets = this.users.get(userId).tweets
        for (let i = userTweets.length - 1; i >= 0; i --) {
            if (newsFeed.size() === this.newsFeedSize && userTweets[i][0] < newsFeed.front()[0]) {
                break
            }

            newsFeed.enqueue(userTweets[i])

            while (newsFeed.size() > this.newsFeedSize) {
                newsFeed.dequeue()
            }
        }

        // following
        const following = this.users.get(userId).following
        for (let [key, _] of following.entries()) {
            if (userId === key) {
                continue
            }
            const followingTweets = this.users.get(key).tweets

            for (let i = followingTweets.length - 1; i >= 0; i --) {
                if (newsFeed.size() === this.newsFeedSize && followingTweets[i][0] < newsFeed.front()[0]) {
                    break
                }

                newsFeed.enqueue(followingTweets[i])

                while (newsFeed.size() > this.newsFeedSize) {
                    newsFeed.dequeue()
                }
            }
        }

        const res = new Array()
        while (newsFeed.size() > 0) {
            res.push(newsFeed.dequeue()[1])
        }

        return res.reverse()
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {

        this.createUser(followerId)
        this.createUser(followeeId)

        this.users.get(followerId).following.add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this.createUser(followerId)
        this.createUser(followeeId)

        this.users.get(followerId).following.delete(followeeId)
    }
}

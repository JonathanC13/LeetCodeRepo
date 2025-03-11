// https://neetcode.io/problems/design-twitter-feed

/*
users Map will hold the elements in form of:
    key: userId
    value:
        {
            posts: []   // each element is: [time, tweetId]
            following: new Set
        }

func postTweet
    - Time O(1)
    - Space O(1)

func getNewsFeed
    recent10 = minPriQ // priority by time

    iterate their own posts from the end
        if (recent10.size() > 10 && posts[i] < recent10.front()) {
            can break early since the posts < i will not contribute to a new most recent 10
        }
        enqueue

    iterate each followers posts and do the same

    - Time O(f * fp * log k) - initial, k = 10, f = following, fp = max following user's posts
    - Space: O(1)
*/

class User {
    constructor() {
        this.following = new Set()
        this.posts = new Array()
    }
}

class Twitter {
    constructor() {
        this.time = 0
        this.users = new Map()
    }

    /**
     * Create user if does not exist else do nothing, in this problem each function needs to create a user if does not exist.
     * @param {number} userId
     * @return {void}
     */
    createUser(userId) {
        if (!this.users.get(userId)) {
            this.users.set(userId, new User())
        }
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.createUser(userId)
        this.users.get(userId).posts.push([this.time, tweetId])
        this.time += 1
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const recent10 = new MinPriorityQueue((post) => post[0])    // priority by index 0, which is time
        const recentNum = 10

        const user = this.users.get(userId)
        
        for (let i = user.posts.length - 1; i >= 0; i --) {
            if (recent10.size() >= recentNum && user.posts[i][0] < recent10.front()[0]) {
                break
            }
            recent10.enqueue(user.posts[i])
            while (recent10.size() > recentNum) {
                recent10.dequeue()
            }
        }
        
        for (const f of user.following) {
            if (f === userId) {
                // ignore itself
                continue
            }
            const following = this.users.get(f)
            for (let fp = following.posts.length - 1; fp >= 0; fp --) {
                if (recent10.size() >= recentNum && following.posts[fp][0] < recent10.front()[0]) {
                    break
                }
                recent10.enqueue(following.posts[fp])
                while (recent10.size() > recentNum) {
                    recent10.dequeue()
                }
            }
        }

        const postsExtracted = []
        while (recent10.size() > 0) {
            postsExtracted.push(recent10.dequeue()[1])
        }

        return postsExtracted.reverse()
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this.createUser(followerId)
        this.createUser(followeeId)

        const user = this.users.get(followerId)
        user.following.add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this.createUser(followerId)
        this.createUser(followeeId)

        const user = this.users.get(followerId)
        user.following.delete(followeeId)
    }
}

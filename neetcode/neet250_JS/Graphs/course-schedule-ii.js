// https://neetcode.io/problems/course-schedule-ii

/*
construct adjacency list
create visited array
create stack fro topological sort
create inDegree array

conduct topological sort
iterate the adj list and conduct the topological sort with 0 inDegree
    *DFS
    - base case 1: if visited: return
    add to visited
    
    dfs the neighbors

    push onto stack

    return

pop from the stack into the res list

if res.length !== numCourses ? return [] else res


- Time: O(n + e).
- Space: O(n + e). adjlist 

*/

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjList = new Array(numCourses).fill().map((e) => {return new Array()})
        const inDegree = new Array(numCourses).fill(0)
        const res = new Array()

        for (let i = 0; i < prerequisites.length; i ++) {
            inDegree[prerequisites[i][0]] += 1
            adjList[prerequisites[i][1]].push(prerequisites[i][0])
        }
        console.log(inDegree)
        console.log(adjList)
        for (let i = 0; i < adjList.length; i ++) {
            if (inDegree[i] === 0) {
                this.dfs(adjList, i, res, inDegree)
            }
        }
        console.log(res)
        return res.length !== numCourses ? [] : res
    }

    dfs(adjList, i, res, inDegree) {
        res.push(i)
        inDegree[i] -= 1

        for (let j = 0; j < adjList[i].length; j ++) {
            const nxt = adjList[i][j]
            inDegree[nxt] -= 1
            if (inDegree[nxt] === 0) {
                this.dfs(adjList, nxt, res, inDegree)
            }
        }

        

        return
    }
}

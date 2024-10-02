# https://neetcode.io/problems/course-schedule

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # numCourses != len(prerequisites)
        preMap = {i: [] for i in range(numCourses)}

        for crs, pre in prerequisites:
            preMap[crs].append(pre)

        visited = set()

        def dfs(course):
            if course in visited:
                return False
            if preMap[course] == []:
                # no preReq
                return True

            visited.add(course)

            # eval for loop within this course's prereqs
            for pre in preMap[course]:
                if not dfs(pre):
                    return False

            # clear visited so next course can use
            visited.remove(course)
            # clear prereq for this course so if another course prereq uses this course, it does not repeat checking this course's prereq.
            preMap[course] = []
            return True
            
        for course in range(numCourses):
            if not dfs(course):
                return False

        return True
"""
https://leetcode.com/problems/minimum-height-trees/description/
"""

class Solution:
    #TLE
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        
        if (n == 0):
            return []

        # the minimum height found so far
        # arbitrary default value to n
        minH = n

        # save height of each tree with n as the root
        lst_MHT = [0] * n
        
        # edge used so no re-use since undirected edges
        visited_edge = [False] * len(edges) 
        
        def buildTree(root: int) -> int:
            """ build tree from the root
            Params:
                root: int ~ starting node
            Return:
                int ~ the height of this tree
            """

            # queue to process each node
            q = deque()
            q.append(root)

            children = len(q)
            height = 1

            while(len(q) != 0):
                # process nodes in queue
                currNode = q.popleft()
                children -= 1

                for i in range(len(edges)):
                    # check if edge not used and connects to current node
                    if (visited_edge[i] or (edges[i][0] != currNode and edges[i][1] != currNode)):
                        continue
                    else:
                        visited_edge[i] = True
                        if (edges[i][0] == currNode):
                            q.append(edges[i][1])
                        else:
                            q.append(edges[i][0])

                if (children == 0):
                    # after level children complete, get the number of children for next level
                    children = len(q)

                    if (len(q) != 0):
                        # if next level also not empty, increase height
                        height += 1

            # return the height of this tree
            return height


        for i in range(n):
            # for each root [0, n - 1] build the tree and note the height and keep track of the minimum height found

            visited_edge = [False] * len(edges) 

            retHeight = buildTree(i)

            lst_MHT[i] = retHeight
            minH = min(minH, retHeight)

        #print(lst_MHT)

        retList = []

        for i in range(len(lst_MHT)):
            # since we have the minimum height accross all trees
            #   iterate lst_MHT to get all the roots
            if (lst_MHT[i] == minH):
                retList.append(i)

        return retList

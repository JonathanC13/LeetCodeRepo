# https://neetcode.io/problems/pacific-atlantic-water-flow

class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:

        res = []
        len_r = len(heights)
        len_c = len(heights[0])
        
        # store tiles that are able to reach their respective ocean
        reach_pac = set()
        reach_atl = set()

        directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        def dfs(coord, reachList, prevHeight):

            if (coord in reachList or 
                coord[0] < 0 or coord[0] >= len_r or 
                coord[1] < 0 or coord[1] >= len_c or
                heights[coord[0]][coord[1]] < prevHeight):
                return

            # if here, it is possible to reach the specified ocean
            reachList.add(coord)

            for direction in directions:
                dfs((coord[0] + direction[0], coord[1] + direction[1]), reachList, heights[coord[0]][coord[1]])

        # start at the shores. Must do each edge as originate point because it needs to be the lowest
        for c in range(len_c):
            dfs((0, c), reach_pac, heights[0][c])
            dfs((len_r - 1, c), reach_atl, heights[len_r - 1][c])

        for r in range(len_r):
            dfs((r, 0), reach_pac, heights[r][0])
            dfs((r, len_c - 1), reach_atl, heights[r][len_c - 1])

        # if the coordinate is in both sets, it means that tile can reach both oceans.
        for coord in reach_pac:
            if coord in reach_atl:
                res.append([coord[0], coord[1]])

        return res


        # pacific = [(-1,0), (0, -1)]
        # atlantic = [(0, 1), (1, 0)]

        # res = []
        
        # # DFS
        # def dfs(coord, directions):
        #     if (coord[0] < 0 or coord[0] >= len(heights) or coord[1] < 0 or coord[1] >= len(heights[0])):
        #         return True
            
        #     flow = False
        #     for direction in directions:
        #         check = (coord[0] + direction[0], coord[1] + direction[1])

        #         if (check[0] >= 0 and check[0] < len(heights) and check[1] >= 0 and check[1] < len(heights[0]) and heights[check[0]][check[1]] > heights[coord[0]][coord[1]]):
        #             flow = flow or False
        #         else:
        #             flow = flow or dfs(check, directions)

        #     return flow

        # for r in range(len(heights)):
        #     for c in range(len(heights[0])):
        #         both = (dfs((r, c), pacific)) and (dfs((r, c), atlantic))
        #         if both:
        #             res.append([r, c])

        # return res
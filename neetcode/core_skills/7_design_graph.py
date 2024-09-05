"""
2 methods to represent the links in the graph
1. Adjacency matrix: n x n matrix where 1 indicates a link between the row and col index vertices and 0 indicates no link.
2. Adjacency list: Each vertex is represented in the array and is populated with a linked list of the indexes it links to.
"""

class AdjListNode:
    def __init__(self, vertex):
        self.vertex = vertex
        self.next = None

class Edge:
    def __init__(self, start, end):
        self.start = start
        self.end = end

class GraphAdjList:
    def __init__(self, num_of_vertices):
        self.num_of_vertices = num_of_vertices
        self.adj_list = [None] * num_of_vertices

    def populate_graph_directed(self, edges_list):
        # clearing previous data
        for i in range(self.num_of_vertices):
            self.adj_list[i] = None

        for edge in edges_list:
            start = edge.start
            end = edge.end

            node = AdjListNode(end)
            node.next = self.adj_list[start]    # next to the current node at the vertex in the adj list
            self.adj_list[start] = node         # place new adj node at vertex index

    def populate_graph_undirected(self, edges_list):
        # clearing previous data
        for i in range(self.num_of_vertices):
            self.adj_list[i] = None

        for edge in edges_list:
            start = edge.start
            end = edge.end

            node = AdjListNode(end)
            node.next = self.adj_list[start]    # next to the current node at the vertex in the adj list
            self.adj_list[start] = node         # place new adj node at vertex index

            # for undirected, must also add the edge to the 'end' vertex. Also, new node object with 'end' = start
            node = AdjListNode(start)
            node.next = self.adj_list[end]
            self.adj_list[end] = node

    def print_graph_links(self):
        print('-----')
        for i in range(self.num_of_vertices):
            if self.adj_list[i] is None:
                continue
            else:
                ptr = self.adj_list[i]
                while ptr is not None:
                    print(f'({i} -> {ptr.vertex})', end=', ')
                    ptr = ptr.next

            print()
        print('-----')

class GraphAdjMatrix:
    def __init__(self, num_of_vertices):
        self.num_of_vertices = num_of_vertices
        # col then row
        self.adj_matrix = [[0 for _ in range(num_of_vertices)] for _ in range(num_of_vertices)]

    def populate_graph_undirected(self, edge_list):
        # clear previous edges
        for row in range(self.num_of_vertices):
            for col in range(self.num_of_vertices):
                self.adj_matrix[row][col] = 0

        for edge in edge_list:
            start = edge.start
            end = edge.end

            self.adj_matrix[start][end] = 1

            # for undirected, also need from end to start
            self.adj_matrix[end][start] = 1

    def print_graph_links(self):
        print('-----')
        for r in range(self.num_of_vertices):
            for c in range(self.num_of_vertices):
                if (self.adj_matrix[r][c] == 1):
                    print(f'({r} -> {c})', end=', ')

            print()
        print('-----')

if __name__ == "__main__":
    num_of_vertices = 5
    edges_list = [Edge(0, 1), Edge(0, 2), Edge(0, 3), Edge(1, 2), Edge(1, 4), Edge(2, 4), Edge(2, 3), Edge(3, 1)]

    g1 = GraphAdjList(num_of_vertices)
    g1.populate_graph_directed(edges_list)
    g1.print_graph_links()

    g1.populate_graph_undirected(edges_list)
    g1.print_graph_links()

    print('-----')
    g2 = GraphAdjMatrix(num_of_vertices)
    g2.populate_graph_undirected(edges_list)
    g2.print_graph_links()
    
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, node, val):
        if (node is None):
            return Node(val)

        if val < node.val:
            node.left = self.insert(node.left, val)
        elif val > node.val:
            node.right = self.insert(node.right, val)

        return node

    def search(self, node, val):
        if node is None:
            return None
        
        if val < node.val:
            return self.search(node.left, val)
        elif val > node.val:
            return self.search(node.right, val)
        elif val == node.val:
            return node
        else:
            return None
    
    def get_successor(self, node):
            node = node.right
            while node is not None and node.left is not None:
                node = node.left
            return node
    
    def delete(self, node, val):
        if node is None:
            return None
        
        if val < node.val:
            node.left = self.delete(node.left, val)
        elif val > node.val:
            node.right = self.delete(node.right, val)
        else:
            if node.right is None:
                return node.left
            elif node.left is None:
                return node.right
            
            succ = self.get_successor(node)
            node.val = succ.val
            node.right = self.delete(node.right, succ.val)

        return node
    
    def print_inorder_iter(self, node):
        # DFS uses a stack
        stack = []

        while len(stack) != 0 or node is not None:
            while node:
                stack.append(node)
                node = node.left

            node = stack.pop()
            print(f'{node.val}', end = ', ')
            node = node.right

    def print_inorder(self, node):
        if node is None:
            return
        
        self.print_inorder(node.left)
        print(f'{node.val}', end = ', ')
        self.print_inorder(node.right)

    def print_preorder(self, node):
        if node is None:
            return
        
        print(f'{node.val}', end = ', ')
        self.print_preorder(node.left)
        self.print_preorder(node.right)

    def print_postorder(self, node):
        if node is None:
            return
        
        self.print_postorder(node.left)
        self.print_postorder(node.right)
        print(f'{node.val}', end = ', ')

    def print_BFS(self, node):
        queue = []
        queue.append(node)

        while len(queue) != 0:
            node = queue.pop(0)
            print(f'{node.val}', end = ', ')
            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)

if __name__ == '__main__':
    bst = BinarySearchTree()

    bst.root = bst.insert(None, 5)
    bst.insert(bst.root, 3)
    bst.insert(bst.root, 1)
    bst.insert(bst.root, 4)
    bst.insert(bst.root, 7)
    bst.insert(bst.root, 6)
    bst.insert(bst.root, 25)
    bst.insert(bst.root, 22)
    bst.insert(bst.root, 20)

    bst.print_inorder(bst.root)
    print()
    bst.print_inorder_iter(bst.root)
    print()
    
    bst.print_preorder(bst.root)
    print()
    bst.print_postorder(bst.root)
    print()

    bst.print_BFS(bst.root)
    print()

    node = bst.search(bst.root, 7)
    print(node.val)

    bst.delete(bst.root, 4)
    bst.print_inorder(bst.root)
    print()

    bst.delete(bst.root, 3)
    bst.print_inorder(bst.root)
    print()

    bst.delete(bst.root, 7)
    bst.print_inorder(bst.root)
    print()
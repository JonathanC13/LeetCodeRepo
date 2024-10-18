# https://neetcode.io/problems/serialize-and-deserialize-binary-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Codec:
    
    # Encodes a tree to a single string.
    def serialize(self, root: Optional[TreeNode]) -> str:
        # convert the tree into an array then into a comma seperated string following DFS
        # Cannot do BFS and the left = (i*2) + 1 and right = (i*2) + 2 because it would require complete binary tree with the 'None'
        if not root:
            return '';

        arr = []
        def dfs(root, arr):
            if not root:
                arr.append(str(None))
                return

            arr.append(str(root.val))
            dfs(root.left, arr)
            dfs(root.right, arr)

        dfs(root, arr) 
        serialized = ','.join([v for v in arr])
        # print(serialized)
        return serialized
        
    # Decodes your encoded data to tree.
    def deserialize(self, data: str) -> Optional[TreeNode]:
        if data == '':
            return None

        arr = data.split(',')
        # print('prep for deserialize:', ' ', arr)
        # actually don't need this
        # node_dict = dict() # for nodes that have already been created so we store the val as the 'key' and mem reference as the 'val'
        
        i = [0]
        def dfs(i, arr):
            if (i[0] >= len(arr) or arr[i[0]] == 'None'):
                return None

            node = None
            val = int(arr[i[0]])
            # if val in node_dict:
            #     node = node_dict[val]
            # else:
            node = TreeNode(val)
                # node_dict[val] = node
            i[0] += 1
            node.left = dfs(i, arr)
            i[0] +=1
            node.right = dfs(i, arr)

            return node
        
        return dfs(i, arr)
// https://algo.monster/liteproblems/588

/**
This problem asks you to design an in-memory file system data structure that supports basic file and directory operations.

The file system should support four main operations:

ls(path): List the contents at a given path
    If the path points to a file, return a list containing only that file's name
    If the path points to a directory, return all files and subdirectories within it in lexicographic (alphabetical) order

mkdir(path): Create a new directory
    The path given will not already exist
    If intermediate directories in the path don't exist, create them automatically (similar to mkdir -p in Unix)
    
addContentToFile(filePath, content): Add content to a file
    If the file doesn't exist, create it with the given content
    If the file already exists, append the new content to the existing content

readContentFromFile(filePath): Read and return all content from a file

Note:
    You can assume all file or directory paths are absolute paths which begin with / and do not end with / except that the path is just "/".
    You can assume that all operations will be passed valid parameters and users will not attempt to retrieve file content or list a directory or file that does not exist.
    You can assume that all directory names and file names only contain lower-case letters, and same names won't exist in the same directory.
 
e.g. 1
Input:
    ["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
    [[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]

Output:
    [null,[],null,null,["a"],"hello"]


Soln
    Create a Class for the fileSysItem
        this.name = ""
        this.file = false   // true if file, false if directory
        this.subItems = new Map()    // key: the item's name, val: object
        this.content = ""

    class FileSystem {
        constructor() {
            this.root = new fileSysItem()
        }

        ls(path) {
            let itr = this.root
            split the path by '/' into an Array

            iterate the pathArr and move the itr to the corresponding nodes

            the last node is the final location
            if item is a file return [filename]
            else directory, iterate the subItems and push them into an Array. sort lexicographically and return

            - Time: O(n)    // n = directories
        }

        mkdir(path) {
            let itr = this.root
            split the path by '/' into an Array

            iterate pathArr and move the itr
                if a directory does not exist, create.

            - Time: O(n)    // n = directories
            - Space: O(m)   // m = new nodes
        }

        addContentToFile(filePath, content) {
            iterate to file

            - Time: O(n)    // n = directories
        }

        readContentFromFile(filePath) {
            iterate to file

            - Time: O(n)    // n = directories
        }
    }
 */

class FileSysItem {
    constructor(name="", isFile=false, content="") {
        this.name = name
        this.isFile = isFile
        this.content = content
        this.subItems = new Map()
    }
}

class FileSystem {
    constructor() {
        this.root = new FileSysItem()
    }

    /**
     * Get the items in the path
     * @param {String} path 
     * @returns {Array} Array in lexicographically order of the items in the path.
     */
    ls(path) {
        let itr = this.root
        const pathArr = path.split('/')
        // since path is abs and starts with /, ignore first item which will be ""
        for (let i = 1; i < pathArr.length; i ++) {
            if (pathArr[i] === '') {
                continue
            }
            if (!itr.subItems.has(pathArr[i])) {
                // path invalid
                return ['invalid']
            }

            itr = itr.subItems.get(pathArr[i])
        }

        if (itr.isFile === true) {
            return [itr.name]
        } else {
            const res = new Array()
            for (let [k, v] of itr.subItems) {
                res.push(k)
            }

            res.sort((a, b) => a.localeCompare(b))

            return res
        }
    }

    mkdir(path) {
        let itr = this.root
        const pathArr = path.split('/')

        for (let i = 1; i < pathArr.length; i ++) {
            if (!itr.subItems.has(pathArr[i])) {
                itr.subItems.set(pathArr[i], new FileSysItem(pathArr[i], false, ""))
            }

            itr = itr.subItems.get(pathArr[i])
        }

        return null
    }

    addContentToFile(filePath, content) {
        let itr = this.root
        const pathArr = filePath.split('/')

        // iterate to the directory of the file, which is < length - 1
        for (let i = 1; i < pathArr.length - 1; i ++) {
            if (!itr.subItems.has(pathArr[i])) {
                // create dir if not exists on current path.
                itr.subItems.set(pathArr[i], new FileSysItem(pathArr[i], false, ""))
            }
            itr = itr.subItems.get(pathArr[i])
        }

        const file = pathArr[pathArr.length - 1]
        if (itr.subItems.has(file)) {
            itr = itr.subItems.get(file)
            itr.content += content
        } else {
            itr.subItems.set(file, new FileSysItem(file, true, content))
        }

        return null
    }

    readContentFromFile(filePath) {
        let itr = this.root
        const pathArr = filePath.split('/')

        for (let i = 1; i < pathArr.length; i ++) {
            if (!itr.subItems.has(pathArr[i])) {
                return 'err'
            }
            itr = itr.subItems.get(pathArr[i])
        }

        return itr.content
    }   
}



const testDriver = function(commands, params, expected) {

    if (commands.length !== params.length) {
        return false
    }

    const fsysObj = new FileSystem()
    const res = new Array()

    for (let i = 0; i < commands.length; i ++) {
        switch (commands[i]) {
            case 'ls':
                res.push(fsysObj.ls(params[i][0]))
                break
            case 'mkdir':
                res.push(fsysObj.mkdir(params[i][0]))
                break
            case 'addContentToFile':
                res.push(fsysObj.addContentToFile(params[i][0], params[i][1]))
                break
            case 'readContentFromFile':
                res.push(fsysObj.readContentFromFile(params[i][0]))
                break
            default:
                res.push(null)
                break
        }
    }

    console.log(res)
}

// test case 1
//    ["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
//    [[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]

testDriver(["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"], [[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]])


// test case 2
/*
# Input
    ["FileSystem",
    "mkdir","mkdir","addContentToFile","addContentToFile","ls",
    "readContentFromFile","addContentToFile","readContentFromFile",
    "ls","ls","addContentToFile","ls","readContentFromFile"]
    
    [[],
    ["/a"],["/a/b"],
    ["/a/b/file1","hello"],
    ["/a/b/file2","world"],
    ["/"],
    ["/a/b/file1"],
    ["/a/b/file1","_again"],
    ["/a/b/file1"],
    ["/a/b"],
    ["/a/b/file2"],
    ["/x/y/file3","new"],
    ["/x"],
    ["/x/y/file3"]]

# Expected Output
    [None,
    None,None,None,None,
    ["a"],            # ls("/") shows only "a"
    "hello",          # read file1
    None,             # append "_again" to file1
    "hello_again",    # now file1 contains appended content
    ["file1","file2"],# ls("/a/b") shows both files
    ["file2"],        # ls("/a/b/file2") returns ["file2"] since it's a file
    None,             # creating file3 in a new path (mkdir on the fly)
    ["y"],            # ls("/x") shows directory "y"
    "new"]            # read file3 content
 */

testDriver(["FileSystem",
 "mkdir","mkdir","addContentToFile","addContentToFile","ls",
 "readContentFromFile","addContentToFile","readContentFromFile",
 "ls","ls","addContentToFile","ls","readContentFromFile"], [[],
    ["/a"],["/a/b"],
    ["/a/b/file1","hello"],
    ["/a/b/file2","world"],
    ["/"],
    ["/a/b/file1"],
    ["/a/b/file1","_again"],
    ["/a/b/file1"],
    ["/a/b"],
    ["/a/b/file2"],
    ["/x/y/file3","new"],
    ["/x"],
    ["/x/y/file3"]])
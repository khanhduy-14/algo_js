class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    length() {
        return this.backIndex - this.frontIndex
    }
    traversal(callback) {
        for (let i = this.frontIndex; i < this.backIndex; i++) {
            callback(this.items[i])
        }
    }
    getQueue() {
        return this.items
    }
}

class BinarySearchTree {
    constructor(val, left, right) {
        this.val = val
        this.left = left ? left : null
        this.right = right ? right : null
    }

    static search(tree, val) {
        if (tree === null) {
            return false
        }
        if (val > tree.val) {
            return this.search(tree.right, val)
        }
        else if (val < tree.val) {
            return this.search(tree.left, val)
        }
        return true
    }

    static insert(root, val) {
        if (root === null) {
            return new BinarySearchTree(val)
        }

        if (val > root.val) {
            root.right = this.insert(root.right, val)
        }
        else if (val < root.val) {
            root.left = this.insert(root.left, val)
        }
        return root
    }

    static minValueNode(root) {
        let cur = root
        while (cur.left !== null) {
            cur = cur.left
        }
        return cur
    }

    static remove(root, val) {
        if (root === null) {
            return root
        }
        if (val > root.val) {
            root.right = this.remove(root.right, val)
        }
        else if (val < root.val) {
            root.left = this.remove(root.left, val)
        }
        else {
            if (root.left === null) {
                return root.right
            }
            else if (root.right === null) {
                return root.left
            }
            else {
                const minValueNode = this.minValueNode(root.right)
                root.val = minValueNode.val
                root.right = this.remove(root.right, minValueNode.val)
            }

        }
        return root

    }

    static inOrder(tree) {
        if (tree === null) {
            return
        }
        this.inOrder(tree.left)
        console.log(tree.val)
        this.inOrder(tree.right)
    }

    static preOrder(tree) {
        if (tree === null) {
            return
        }
        console.log(tree.val)
        this.inOrder(tree.left)
        this.inOrder(tree.right)
    }

    static postOrder(tree) {
        if (tree === null) {
            return
        }
        this.inOrder(tree.left)
        this.inOrder(tree.right)
        console.log(tree.val)
    }

    static bfs(tree) {
        const queue = new Queue()
        if (tree) {
            queue.enqueue(tree)
        }
        let level = 0
        while (queue.length() > 0) {
            console.log('Level: ', level)
            const start = queue.frontIndex
            const end = queue.backIndex
            for (let i = start; i < end; i++) {
                const cur = queue.dequeue()
                console.log(cur.val)
                if (cur.left) {
                    queue.enqueue(cur.left)
                }
                if (cur.right) {
                    queue.enqueue(cur.right)
                }
            }
            level++
        }
    }
}

const tree = new BinarySearchTree(4, null, null)
BinarySearchTree.insert(tree, 3)
BinarySearchTree.insert(tree, 2)
BinarySearchTree.insert(tree, 6)
BinarySearchTree.insert(tree, 5)
BinarySearchTree.insert(tree, 7)
// BinarySearchTree.postOrder(tree);
BinarySearchTree.bfs(tree);



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
}

const tree = new BinarySearchTree(4, null, null)
BinarySearchTree.insert(tree, 3)
BinarySearchTree.insert(tree, 2)
BinarySearchTree.insert(tree, 6)
BinarySearchTree.insert(tree, 5)
BinarySearchTree.insert(tree, 7)

BinarySearchTree.remove(tree, 7)

console.log(tree);



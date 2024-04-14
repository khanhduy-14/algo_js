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
}

const tree = new BinarySearchTree(2, new BinarySearchTree(1, null, null), new BinarySearchTree(3, null, new BinarySearchTree(4, null, null)))

console.log(BinarySearchTree.search(tree, 5))
console.log(BinarySearchTree.search(tree, 1))
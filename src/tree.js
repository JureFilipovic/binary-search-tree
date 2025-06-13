import Node from "./node.js";
import mergeSort from "./merge-sort.js";

export default function Tree(array) {
    let root = null;
    
    const buildTree = (array) => {
        const sortedArray = mergeSort(array);
        const start = 0;
        const end = sortedArray.length - 1;
        const root = arrayToBST(sortedArray, start, end);
        
        return root;
    };
    
    const arrayToBST = (array, start, end) => {
        if (start > end) return null;
        
        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(array[mid]);
        root.left = arrayToBST(array, start, mid - 1);
        root.right = arrayToBST(array, mid + 1, end);
        return root;
    };
    
    root = buildTree(array);
    
    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };

    const insert = (root, value) => {
        if (root === null) return Node(value, null, null);

        if (root.data === value) return root;

        if (value < root.data) {
            root.left = insert(root.left, value);
        } else if (value > root.data) {
            root.right = insert(root.right, value);
        }

        return root;
    };

    const getSuccessor = (current) => {
        current = current.right;
        while (current !== null && current.left !== null) {
            current = current.left;
        }
        return current;
    }

    const deleteItem = (root, value) => {
        if (root === null) return root;

        if (root.data > value) {
            root.left = deleteItem(root.left, value);
        } else if (root.data < value) {
            root.right = deleteItem(root.right, value);
        } else {
            if (root.left === null) return root.right;

            if (root.right === null) return root.left;

            let successor = getSuccessor(root);
            root.data = successor.data;
            root.right = deleteItem(root.right, successor.data);
        }

        return root;
    };

    const find = (value) => {
        let current = root;

        while (current !== null) {
            if (value === current.data) {
                return current;
            } else if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null;
    };

    const levelOrder = (callback) => {
        const queue = [];
        let current = root;

        if (typeof callback !== "function") {
            throw new Error("Need to pass callback function as an argument!");            
        }

        if (current === null) return;

        queue.push(current);

        while (queue.length > 0) {
            current = queue.shift();
            callback(current);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    };

    return {
        root,
        prettyPrint,
        insert,
        deleteItem,
        find,
        levelOrder,
    }
}
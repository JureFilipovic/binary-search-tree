import Tree from "./tree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = Tree(array);

tree.prettyPrint(tree.root);

// const arr2 = [2, 4, 1, 3];
// const tree2 = Tree(arr2);
// tree2.prettyPrint(tree2.root);
// console.log("----------------------------------------");
// tree.insert(tree.root, 19);
// tree.prettyPrint(tree.root);

// console.log("----------------------------------------");
// tree.insert(tree.root, 2);
// tree.prettyPrint(tree.root);

// tree.deleteItem(tree.root, 2);
// tree.prettyPrint(tree.root);

// tree.deleteItem(tree.root, 67);
// tree.prettyPrint(tree.root);

// tree.deleteItem(tree.root, 67);
// tree.prettyPrint(tree.root);


// console.log(tree.find(19));
// console.log(tree.find(324));

tree.levelOrder((node) => {
    console.log(node.data);
});


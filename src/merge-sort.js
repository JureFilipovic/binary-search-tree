export default function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, middle));
    const rightHalf = mergeSort(array.slice(middle));
    const sortedArray = merge(leftHalf, rightHalf);
    return sortedArray;

}

function merge(leftHalf, rightHalf) {
    let sortedArray = [];
    let i = 0;
    let j = 0;

    //check for duplicates
    const pushUnique = (val) => {
        if (sortedArray.length === 0 || sortedArray[sortedArray.length - 1] !== val) {
            sortedArray.push(val);
        }
    }

    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] <= rightHalf[j]) {
            pushUnique(leftHalf[i]);
            i++;
        } else {
            pushUnique(rightHalf[j]);
            j++;
        }
    }
 
    while (i < leftHalf.length) {
        pushUnique(leftHalf[i]);
        i++;
    }

    while (j < rightHalf.length) {
        pushUnique(rightHalf[j]);
        j++;
    }

    return sortedArray;
}
function mergeSort (arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const res = [];
    var leftI = 0;
    var rightI = 0;

    while (leftI < left.length && rightI < right.length) {
        if (left[leftI] < right[rightI]) {
            res.push(left[leftI]);
            leftI++;
        } else {
            res.push(right[rightI]);
            rightI++;
        }
    }

    return res.concat(left.slice(leftI)).concat(right.slice(rightI))
}

test('should return sorted array', function () {
    expect(mergeSort([8,3,6,1,9])).toEqual([1,3,6,8,9])
});
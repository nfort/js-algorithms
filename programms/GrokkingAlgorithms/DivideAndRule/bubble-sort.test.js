function bubbleSort(arr) {
    if (arr.length === 1) return arr;
    let sort = arr;
    for (let i = 0, len = sort.length - 1; i < len; i++) {
        if (sort[i] > sort[i + 1]) {
            sort[i] = sort[i + 1] + sort[i];
            sort[i + 1] = sort[i] - sort[i + 1];
            sort[i] = sort[i] - sort[i + 1];
        }
    }
    return bubbleSort(sort.slice(0, -1)).concat(sort[sort.length - 1]);
}

test('should return sorted an array', function () {
    expect(bubbleSort([5, 3, 2, 8, 4])).toEqual([2, 3, 4, 5, 8]);
})
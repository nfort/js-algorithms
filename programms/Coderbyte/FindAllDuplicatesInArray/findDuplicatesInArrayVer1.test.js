function findDuplicates(arr) {
    const dup = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let item = arr[Math.abs(arr[i])];

        if (item > 0) {
            arr[Math.abs(arr[i])] = 0 - item;
        } else {
            dup.push(Math.abs(arr[i]))
        }
    }
    return dup;
}

test('should return duplicates', function () {
   expect(findDuplicates([1,2,3,1,2,0,0])).toEqual([1,2,0]);
});
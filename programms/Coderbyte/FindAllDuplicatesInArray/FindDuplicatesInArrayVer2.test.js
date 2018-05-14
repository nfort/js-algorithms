function findDuplicates(arr) {
    const hashMap = [];
    const dup = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (hashMap.includes(arr[i])) {
            dup.push(arr[i]);
        } else {
            hashMap.push(arr[i]);
        }
    }
    return dup;
}

test('should return duplicates', function () {
    expect(findDuplicates([1,-4,244,78,2,8,0,10,244,11,2])).toEqual([244,2])
})
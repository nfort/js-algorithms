function sum(arr) {
    if (!arr.length) return 0;
    return arr[0] + sum(arr.slice(1));
}

test('sum for [1,2,3] should return 6', function () {
    expect(sum([1,2,3])).toBe(6)
});
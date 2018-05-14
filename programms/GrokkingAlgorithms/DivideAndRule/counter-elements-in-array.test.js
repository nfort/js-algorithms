function counter(arr) {
    if (!arr.length) return 0;
    return 1 + counter(arr.slice(1));
}

test('for array len 6 should return 6', function () {
    expect(counter([1,2,3,4,5,6])).toBe(6);
})
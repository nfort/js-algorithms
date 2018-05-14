function theBiggerNumber(head, arr) {
    if (!arr.length) return head;
    if (arr[0] > head) return theBiggerNumber(arr[0], arr.slice(1));
    return theBiggerNumber(head, arr.slice(1));
}

test('[1,4,8,3,6] should return 8', function () {
    expect(theBiggerNumber(1, [1,4,8,3,6])).toBe(8);
})
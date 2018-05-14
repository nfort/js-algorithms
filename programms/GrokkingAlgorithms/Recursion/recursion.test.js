function counter(i) {
    if (i === 10) return i;
    return counter(++i);
}

test('Counter should return 10', function () {
    expect(counter(1)).toBe(10);
});
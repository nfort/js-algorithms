function factorial(i) {
    if (i === 1) return 1;
    return i * factorial(i - 1);
}

test('Factorial 5 should be 120', function () {
    expect(factorial(5)).toBe(120)
});
var dec2bin = require('./dec2bin');

test('Dec 0 should be 0', function () {
    expect(dec2bin(0)).toBe('0');
});

test('Dec 1 should be 1', function () {
    expect(dec2bin(1)).toBe('1')
});

test('Dec 10 should be 1010', function () {
    expect(dec2bin(10)).toBe('1010');
});

test('Dec 57 should be 111001', function () {
    expect(dec2bin(57)).toBe('111001')
});

test('Dec 1000 should be 1111101000', function () {
    expect(dec2bin(1000)).toBe('1111101000')
});
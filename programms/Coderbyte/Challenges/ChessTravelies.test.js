/*
Have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space
on a standard 8x8 chess board with no pieces on the board along with another space on the chess board.
The structure of str will be the following: "(x y)(a b)" where (x y) represents the position you are currently
on with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also
ranging from 1 to 8 where a > x and b > y. Your program should determine how many ways there are of traveling from (x y)
on the board to (a b) moving only up and to the right. For example: if str is (1 1)(2 2)
then your program should output 2 because there are only two possible ways to travel from space (1 1)
on a chessboard to space (2 2) while making only moves up and to the right.
 */

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

function ChessboardTraveling(str) {
    str = str.match(/\d/g);
    const ab = str.slice(0,2);
    const cd = str.slice(2);
    const hor = parseInt(cd[1], 10) - parseInt(ab[1], 10)       ;
    const ver = parseInt(cd[0], 10) - parseInt(ab[0], 10);
    return factorial(hor + ver) / (factorial(hor) * factorial(ver));

}

test('should true (1 1)(2 2)', function () {
    expect(ChessboardTraveling('(1 1)(2 2)')).toBe(2)
});

test('should true (1 1)(3 3)', function () {
    expect(ChessboardTraveling('(1 1)(3 3)')).toBe(6)
});

test('should true (2 2)(4 3)', function () {
    expect(ChessboardTraveling('(2 2)(4 3)')).toBe(3)
});

test('should true (2 2)(3 4)', function () {
    expect(ChessboardTraveling('(2 2)(3 4)')).toBe(3)
});

test('should true (2 2)(3 3)', function () {
    expect(ChessboardTraveling('(2 2)(3 3)')).toBe(2)
});

test('should true (1 1)(4 4)', function () {
    expect(ChessboardTraveling('(1 1)(4 4)')).toBe(20)
});

test('should true (1 1)(5 5)', function () {
    expect(ChessboardTraveling('(1 1)(5 5)')).toBe(70)
});

test('should true (7 7)(8 8)', function () {
    expect(ChessboardTraveling('(7 7)(8 8)')).toBe(2)
});

test('should true (1 1)(8 8)', function () {
    expect(ChessboardTraveling('(1 1)(8 8)')).toBe(3432)
});

test('should true (1 1)(4 6)', function () {
    expect(ChessboardTraveling('(1 1)(4 6)')).toBe(56)
});


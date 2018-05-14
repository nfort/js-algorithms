/*
Find all string combinations consisting only of 0, 1 and ?

For this popular algorithm interview question, the input will be a string consisting only of the characters 0, 1 and ?, 
where the ? acts as a wildcard that can be either a 0 or 1, and your goal is to print all possible combinations of the string. 
For example, if the string is "011?0" then your program should output a set of all strings, which are: ["01100", "01110"].
*/

function allCombination(str) {
    let res = [''];

    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] === '?') {
            const p = [];
            for (let j = 0, lenJ = res.length; j < lenJ; j++) {
                p.push(res[j] + '1');
            }
            for (let j = 0, lenJ = res.length; j < lenJ; j++) {
                p.push(res[j] + '0');
            }
            res = p;
            continue;
        }
        res = res.map(item => item + str[i]);
    }

    return res;
}

test('1. Should return res', function () {
    expect(allCombination('011?0')).toEqual(['01110', '01100'])
});

test('2. Should return res', function () {
    expect(allCombination('10??')).toEqual(['1011', '1001', '1010', '1000'])
});
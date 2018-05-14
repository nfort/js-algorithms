/*
Using the JavaScript language, have the function ScaleBalancing(strArr) read strArr which will contain two elements,
the first being the two positive integer weights on a balance scale (left and right sides)
and the second element being a list of available weights as positive integers.
Your goal is to determine if you can balance the scale by using the least amount of weights from the list,
but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"]
then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side.
It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side.
Both scales will now equal 11 and they are perfectly balanced.
Your program should return a common separated string of the weights that were used from the list in ascending order,
so for this example your program should return the string 2,6

There will only ever be one unique solution and the list of available weights will not be empty.
It is also possible to add two weights to only one side of the scale to balance it.
If it is not possible to balance the scale then your program should return the string not possible.
*/

function ScaleBalancing(strArr) {
    const sides = strArr[0].replace(/[\[\]]/g, '').split(',').map(item => +item);
    const weights = strArr[1].replace(/[\[\]]/g, '').split(',').map(item => +item);
    console.log(sides, weights);
    let res;

    for (let i = 0, lenS = sides.length; i < lenS; i++) {
        if (res) {
            break;
        }

        const otherSide = i === 0 ? sides[1] : sides[0];

        for (let j = 0, lenW = weights.length; j < lenW; j++) {
            const ws = sides[i] + weights[j];

            if (ws > otherSide) {
                continue;
            }

            if (otherSide - ws === 0) {
                res = weights[j];
                break;
            }

            if (weights.indexOf(otherSide - ws) !== -1) {
                if ((otherSide - ws) !== weights[j]) {
                    res =  (otherSide - ws) + ',' + weights[j];
                }
            }
        }
    }

    return res ? res.toString() : 'not possible';
}

test('1. Should return true', function () {
    expect(ScaleBalancing(['[3, 4]', '[1, 2, 7, 7]'])).toBe('1');
});

test('2. Should return true', function () {
    expect(ScaleBalancing(['[13, 4]', '[1, 2, 3, 6, 14]'])).toBe('3,6');
});

test('3. Should return true', function () {
    expect(ScaleBalancing(['[5, 9]', '[1, 2, 6, 7]'])).toBe('2,6');
});

test('4. Should return true', function () {
    expect(ScaleBalancing(['[3, 7]', '[1, 2, 7]'])).toBe('not possible');
});

test('5. Should return true', function () {
    expect(ScaleBalancing(['[6, 2]', '[1, 10, 6, 5]'])).toBe('1,5');
});
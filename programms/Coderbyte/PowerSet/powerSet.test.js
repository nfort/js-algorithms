function powerSet(arr) {
    const len = 2 ** arr.length;
    const res = []

    for (let i = 0; i < len; i++) {
        let num = i.toString(2);
        let tempNum = [];

        while (num.length < arr.length) num = '0' + num;

        for (let b = 0; b < num.length; b++) {
            if (num[b] === '1') tempNum.push(arr[b])
        }

        res.push(tempNum);
    }

    return res;
}

test('should return power set for subset', function () {
   expect(powerSet([1,2,3])).toEqual([[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]])
});
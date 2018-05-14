// O(n^2)

function twoSum(arr, sum) {
    const res = [];

    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                res.push([arr[i], arr[j]]);
            }
        }
    }

    return res;
}

test('should return pair sum', function () {
    expect(twoSum([3, 5, 2, -4, 8, 11], 7)).toEqual([[5, 2], [-4, 11]])
});

// O(n)

function towSumHash(arr, S) {
    const res = [];
    const hash = {};

    hash[arr[0].toString()] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let item = (S - arr[i]).toString();

        if (hash[item]) {
            res.push([arr[i], hash[item]])
        } else {
            hash[arr[i].toString()] = arr[i];
        }
    }

    return res;
}

test('O(n) should return pair sum', function () {
    expect(towSumHash([3, 5, 2, -4, 8, 11], 7)).toEqual([[2, 5], [11, -4]])
});

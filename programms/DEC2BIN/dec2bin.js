function dec2bin(int) {
    if (int === 0) {
        return '0';
    }

    var i = int;
    var res = '';

    while (i !== 0) {
        res += i % 2;
        i = Math.floor(i / 2);
    }

    return res.split('').reverse().join('');
}

module.exports = dec2bin;
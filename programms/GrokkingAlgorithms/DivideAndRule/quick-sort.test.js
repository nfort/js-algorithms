function qsort(arr) {
 if (arr.length < 2) return arr;
 const less = [];
 const more = [];
 arr.forEach(item => {
     if (arr[0] > item) {
         less.push(item);
     } else if (arr[0] < item)  {
         more.push(item);
     }
 });

 return Array.prototype.concat(qsort(less), arr[0], qsort(more));
}

test('qsort should return sorted array', function () {
    expect(qsort([4,3,9,8])).toEqual([3,4,8,9]);
});
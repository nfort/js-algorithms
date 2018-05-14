function Node(data, next) {
    this.data = data;
    this.next = next;
}

test('Should get middle node(6) from linked list size 11', function () {
    var n1 = new Node('H', null);
    var n2 = new Node('E', n1);
    var n3 = new Node('L', n2);
    var n4 = new Node('L', n3);
    var n5 = new Node('O', n4);
    var n6 = new Node('-', n5);
    var n7 = new Node('W', n6);
    var n8 = new Node('O', n7);
    var n9 = new Node('R', n8);
    var n10 = new Node('L', n9);

    var i = n10;
    var j = n10;

    while (j.next !== null && j.next.next !== null) {
        i = i.next;
        j = j.next.next;
    }

    expect(i.data).toBe('-');
});
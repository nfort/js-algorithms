// LILO (Last In Last Out)
// C -> B -> A
// pop();
// C -> B

const Stack = { top: null };

function Node(data) {
    this.data = data;
    this.next = null;
}

function pop() {
    if (Stack.pop) {
        return 'Stack is empty';
    }

    Stack.top = Stack.top.next;
}

function push(data) {
    var node = new Node(data);
    node.next = Stack.top;
    Stack.top = node;
}

test('Should return', function () {
    push('C');
    push('B');
    push('A');
    pop();
    expect(Stack.top.data).toBe('B');
})

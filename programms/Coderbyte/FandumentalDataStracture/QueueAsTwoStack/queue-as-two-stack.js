const Stack1 = { head: null, tail: null };
const Stack2 = { head: null, tail: null };

function Node(data) {
    this.data = data;
    this.next = null;
}

function enqueue(data) {
    const N = new Node(data);
    if (this.head === null) {
        this.head = N;
        this.tail = N;
    } else {
        N.next = this.head;
        this.head = N;
    }
}

function dequeue() {
    const n = this.head;
    this.head = this.head.next;
    return n;
}

function pop() {
    while (Stack1.head.next !== null) {
        const n = dequeue.call(Stack1);
        enqueue.call(Stack2, n.data);
    }
    const n = dequeue.call(Stack1);
    enqueue.call(Stack2, n.data);
}

function displayOrderQueue() {
    let res = '';
    let node = this.head;

    if (node === null) {
        return 'Queue is empty!';
    }

    while (node.next !== null) {
        res += node.data + ' -> ';
        node = node.next;
    }
    res += node.data;
    return res;
}

enqueue.call(Stack1, 'A');
enqueue.call(Stack1, 'B');
enqueue.call(Stack1, 'C');
pop();
console.log(displayOrderQueue.call(Stack1));
console.log(displayOrderQueue.call(Stack2));
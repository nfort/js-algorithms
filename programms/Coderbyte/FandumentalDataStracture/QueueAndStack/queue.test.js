// FIFO (First In First Out)
// A -> B -> C
// dequeue()
// B -> C

const Queue = {
    front: null,
    back: null,
};

function Node(data) {
    this.data = data;
    this.next = null;
}

function unqueue(data) {
    const node = new Node(data);

    if (Queue.back == null) {
        Queue.back = node;
        Queue.front = node;
    } else {
        Queue.back.next = node;
        Queue.back = Node;
    }
}

function dequeue() {
    if (Queue.front === null) {
        return 'Empty queue!';
    }

    Queue.front = Queue.front.next;
}

test('Should return b -> c', function () {
    unqueue('A');
    unqueue('B');
    unqueue('C');
    dequeue();
    expect(Queue.front.data).toBe('B');
});
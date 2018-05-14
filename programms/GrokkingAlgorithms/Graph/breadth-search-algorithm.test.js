// STRUCTURE DATA ISN'T CORRECT!
// Queue (First In First Out)

const graph = {};

graph.Jane = ['Sam', 'Kate', 'Brad'];
graph.Kate = ['Tommy', 'John'];
graph.Sam = ['Clare'];
graph.Brad = [];
graph.Tommy = [];
graph.John = ['Tommy'];
graph.Clare = [];

function Queue() {
    this.q = [];
    return {
        list: () => this.q,
        enqueue: (n) => this.q.push(n),
        dequeue: () => this.q.shift(),
    }
}

const q = new Queue();
q.enqueue(graph.Jane);
q.enqueue(graph.Kate);
q.enqueue(graph.Sam);
q.enqueue(graph.Brad);
q.enqueue(graph.Tommy);
q.enqueue(graph.John);
q.enqueue(graph.Clare);

function breadFirstSearch(str) {
    let res;
    while (q.list().length) {
        const node = q.dequeue();
        if (node.includes(str)) {
            res = str;
            break;
        }
    }
    return res;
}

test('should return Tommy', function () {
    expect(breadFirstSearch('Tommy')).toBe('Tommy');
});


function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');

root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;


function preOrder(root, nodes) {
    nodes.push(root.data);
    if (root && root.left) {
        preOrder(root.left, nodes);
    }
    if (root && root.right) {
        preOrder(root.right, nodes);
    }
    return nodes;
}

function inOrder(root, nodes) {
    if (root && root.left) {
        inOrder(root.left, nodes);
    }
    nodes.push(root.data);
    if (root && root.right) {
        inOrder(root.right, nodes);
    }
    return nodes;
}

function postOrder(root, nodes) {
    if (root && root.left) {
        postOrder(root.left, nodes);
    }
    if (root && root.right) {
        postOrder(root.right, nodes);
    }
    nodes.push(root.data);
    return nodes;
}

test('Pre-order traverse: Should return [A, B, D, E, C]', function () {
    expect(preOrder(root, [])).toEqual(['A', 'B', 'D', 'E', 'C'])
});

test('In-order traverse: Should return [D, B, E, A, C]', function () {
    expect(inOrder(root, [])).toEqual(['D', 'B', 'E', 'A', 'C'])
});

test('Post-order traverse: Should return [D, E, B, C, A]', function () {
    expect(postOrder(root, [])).toEqual(['D', 'E', 'B', 'C', 'A'])
});
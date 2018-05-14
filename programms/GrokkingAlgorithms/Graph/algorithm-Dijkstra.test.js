const isInfinity = (num) => num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY;

function algorithmDijkstra() {
    const graph = {};
    const costs = {};
    const parents = {};
    const processed = [];

    function findLowestCostNode(costs) {
        const keys = Object.keys(costs);
        let lowestNode = Infinity;
        let lowestNodeCost = 'None';
        for (let i = 1, len = keys.length; i < len; i++) {
            const cost = costs[keys[i]];
            if (cost < lowestNode && !processed.includes(keys[i])) {
                lowestNode = costs;
                lowestNodeCost = keys[i];
            }
        }
        return lowestNodeCost;
    }

    graph.start = {};
    graph.start['a'] = 6;
    graph.start['b'] = 2;

    graph['a'] = {};
    graph['a']['fin'] = 1;

    graph['b'] = {};
    graph['b']['a'] = 3;
    graph['b']['fin'] = 5;

    graph['fin'] = {};

    // Costs

    costs['a'] = 6;
    costs['b'] = 2;
    costs['fin'] = Infinity;

    parents['a'] = 'start';
    parents['b'] = 'start';
    parents['in'] = null;

    let node = findLowestCostNode(costs);

    while (node !== 'None') {
        let cost = costs[node];
        let neighbors = graph[node];

        Object.keys(neighbors).forEach(function(n) {
            let newCost = cost + neighbors[n];
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        });
        processed.push(node);
        node = findLowestCostNode(costs);
    }

    return processed;
}

console.log(algorithmDijkstra());
console.log(algorithmDijkstra());
console.log(algorithmDijkstra());
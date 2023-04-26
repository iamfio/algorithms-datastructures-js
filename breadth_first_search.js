const graph = {
  a: ["b", "c"],
  b: ["f"],
  c: ["d", "e"],
  d: ["f"],
  e: ["f"],
  f: ["g"],
};

let count = 0;

function breadthFirstSearch(graph, start, end) {
  let queue = [];

  queue.push(start);

  while (queue.length > 0) {
    count += 1;
    const current = queue.shift();

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }

  return false;
}

console.log(breadthFirstSearch(graph, "a", "a"));
console.log("Count:", count);

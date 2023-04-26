const map = new Map();

map.set("name", "Fiodor");
map.set("handle", "CasusArts");

console.log(map);

const mapWithObjKey = new Map();
const key = { id: 11 };
mapWithObjKey.set(key, "Teleport");

console.log(mapWithObjKey);
console.log(mapWithObjKey.get(key));

const set = new Set();
set.add(5);
set.add(5);
set.add(2);
set.add(5);
set.add(4);
set.add(12);

console.log(set);
console.log(set.values());

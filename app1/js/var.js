/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/12/1
 * @description
 *
 */
function f1() {

  //let a = 2;
  console.log(b);
}
f1();

let {
  length: len
} = 'hello';
console.log(len); // 5

var data = [
  [1, 2],
  [3, 4]
].map(([a, b]) => {
  return a + b
});
console.log(data);

var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
}

let {
  id, status, data: number
} = jsonData;

console.log(id, status, number)

var map = new Map();
map.set('a', 'a');
map.set('b', 'b');

for (let [key, value] of map) {
  console.log(key, value);
}

function logSomething(x, y = 'world') {
  console.log(x, y);
}

logSomething('123', 'aaaa');

function foo({
  x, y = 5
}) {
  console.log(x, y);
}

foo({
  x: 1,
  y: 9
})
foo([10, 20])

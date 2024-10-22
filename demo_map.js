const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);

fruits.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

let myMap = new Map();
// Thêm cặp khóa-giá trị
myMap.set("name", "Alice");
myMap.set("age", 25);
console.log(myMap);
console.log(myMap);

// Lấy giá trị
console.log(myMap.get("name")); // Alice

// Kiểm tra tồn tại
console.log(myMap.has("age")); // true

// Xóa khóa
myMap.delete("name");
console.log(myMap); // Map { 'age' => 25 }

// Duyệt Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output: age: 25

let map = new Map();
map.set("name", "Alice");
map.set(1, "Number Key");
map.set({ id: 1 }, "Object Key");

console.log(map.get("name")); // Alice
console.log(map.has(1)); // true
console.log(map.size); // 3

map.forEach((value, key) => {
  console.log(`${key} -> ${value}`);
});

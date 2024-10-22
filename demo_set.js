let mySet = new Set([1, 2, 2, 3]);
console.log(mySet); // Set { 1, 2, 3 }

// Thêm phần tử
mySet.add(4);
console.log(mySet); // Set { 1, 2, 3, 4 }

// Kiểm tra tồn tại
console.log(mySet.has(3)); // true
console.log(mySet.has(5)); // false

// Xóa phần tử
mySet.delete(2);
console.log(mySet); // Set { 1, 3, 4 }

// Duyệt Set
mySet.forEach((value) => console.log(value));
// Output: 1, 3, 4

// Dùng Set để loại bỏ phần tử trùng lặp trong mảng
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Dùng Spread (...) để chuyển Set thành Array
let set = new Set([1, 2, 3]);
let array = [...set];

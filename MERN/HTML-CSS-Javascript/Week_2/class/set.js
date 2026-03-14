// const letters = new Set();
// letters.add(10);
// let value = 2;
// letters.add(value);


let mySet = new WeakSet();
let myObj = { fname: "Pramod", lname: "Pandit" }
mySet.add(myObj);
// mySet.delete(myObj)
console.log(mySet);

